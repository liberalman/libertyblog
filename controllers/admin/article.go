package admin

import (
	"fmt"
	"image/jpeg"
	"io"
	"libertyblog/models"
	"os"
	"strconv"
	"strings"
	"time"

	"github.com/astaxie/beego/orm"
	"github.com/nfnt/resize"
)

type ArticleController struct {
	baseController
}

//添加
func (this *ArticleController) Add() {
	this.Data["posttime"] = this.getTime().Format("2006-01-02 15:04:05")
	this.display()
}

//管理文章列表
func (this *ArticleController) List() {
	var (
		page       int64
		pagesize   int64 = 15
		status     int64
		offset     int64
		list       []*models.Article
		article    models.Article
		searchtype string
		keyword    string
	)
	searchtype = this.GetString("searchtype")
	keyword = this.GetString("keyword")
	status, _ = this.GetInt64("status")
	if page, _ = this.GetInt64("page"); page < 1 {
		page = 1
	}
	offset = (page - 1) * pagesize

	var query orm.QuerySeter
	if 1 == this.userid { // 如果是管理员用户id，则是查看所有的帖子
		query = article.Query().Filter("status", status)
	} else {
		query = article.Query().Filter("status", status).Filter("userid", this.userid)
	}

	if keyword != "" {
		switch searchtype {
		case "title":
			query = query.Filter("title__icontains", keyword)
		case "author":
			query = query.Filter("author__icontains", keyword)
		case "tag":
			query = query.Filter("tags__icontains", keyword)
		}
	}
	count, _ := query.Count()
	if count > 0 {
		query.OrderBy("-istop", "-posttime").Limit(pagesize, offset).All(&list)
	}

	this.Data["searchtype"] = searchtype
	this.Data["keyword"] = keyword
	this.Data["count_1"], _ = article.Query().Filter("status", 1).Count()
	this.Data["count_2"], _ = article.Query().Filter("status", 2).Count()
	this.Data["status"] = status
	this.Data["list"] = list
	this.Data["pagebar"] = models.NewPager(page, count, pagesize, fmt.Sprintf("/admin/article/list?status=%d&searchtype=%s&keyword=%s&page=%s", status, searchtype, keyword, "%d")).ToString()
	//this.display()
	this.display1("article_list")
}

func (this *ArticleController) set_args(history *models.History) {
	history.Content = strings.TrimSpace(this.GetString("content"))
	history.Title = strings.TrimSpace(this.GetString("title"))
	timestr := strings.TrimSpace(this.GetString("dotime"))
	if posttime, err := time.Parse("2006-01-02 15:04:05", timestr); err == nil {
		history.Dotime = posttime
	} else {
		history.Dotime, _ = time.Parse("2006-01-02 15:04:05", history.Dotime.Format("2006-01-02 15:04:05"))
	}
	history.Icosty, _ = this.GetInt("icosty")
	history.Pos, _ = this.GetInt("pos")
}

func (this *ArticleController) History() {
	var (
		history  models.History
		list     []*models.History
		pagesize int64 = 15
		offset   int64
	)
	if "POST" == this.Ctx.Request.Method { // Post 说明是增删改操作,AJAX方式提交
		var post models.History
		action, _ := this.GetInt("action")
		if 1 == action { // 新增
			post.Userid = this.userid
			this.set_args(&post)
			if err := post.Insert(); nil != err {
				this.Ctx.WriteString(err.Error())
				return
			}
		} else if 2 == action { // 修改
			post.Id, _ = this.GetInt64("id")
			if err := post.Read("id"); nil != err {
				this.Ctx.WriteString(err.Error())
				return
			} else {
				if post.Userid != this.userid { // 该文章不是此用户的，无权修改
					this.Ctx.WriteString("该文章不是此用户的，无权修改")
					return
				} else {
					this.set_args(&post)
					if err := post.Update("title", "content", "pos", "icosty", "dotime"); nil != err {
						this.Ctx.WriteString(err.Error())
						return
					}
				}
			}
		} else if 3 == action { // 删除
			post.Id, _ = this.GetInt64("id")
			if err := post.Delete(); nil != err {
				this.Ctx.WriteString(err.Error())
				return
			}
		}
		this.Ctx.WriteString("0")
	} else {
		// 查询操作
		var query orm.QuerySeter
		if 1 == this.userid { // 如果是管理员用户id，则是查看所有的帖子
			query = history.Query()
		} else {
			query = history.Query().Filter("userid", this.userid)
		}
		count, _ := query.Count()
		if count > 0 {
			query.OrderBy("-dotime").Limit(pagesize, offset).All(&list)
		}
		this.Data["list"] = list
		this.display1("history")
	}
}

func (this *ArticleController) Flot() {
	this.display1("flot")
}

//编辑
func (this *ArticleController) Edit() {
	id, _ := this.GetInt64("id")
	post := models.Post{Id: id}
	if post.Read() != nil {
		this.Abort("404")
	}
	post.Tags = strings.Trim(post.Tags, ",")
	this.Data["post"] = post
	this.Data["posttime"] = post.Posttime.Format("2006-01-02 15:04:05")
	this.display()
}

//保存
func (this *ArticleController) Save() {
	var (
		id       int64  = 0
		title    string = strings.TrimSpace(this.GetString("title"))
		content  string = this.GetString("content")
		tags     string = strings.TrimSpace(this.GetString("tags"))
		urlname  string = strings.TrimSpace(this.GetString("urlname"))
		color    string = strings.TrimSpace(this.GetString("color"))
		coverurl string = strings.TrimSpace(this.GetString("coverurl"))
		timestr  string = strings.TrimSpace(this.GetString("posttime"))
		status   int64  = 0
		istop    int8   = 0
		urltype  int8   = 0
		post     models.Post
		pubtype  int8 = 0 //发布类型，0原创，1转载
	)

	if title == "" {
		this.showmsg("标题不能为空！")
	}

	id, _ = this.GetInt64("id")
	status, _ = this.GetInt64("status")

	if this.GetString("istop") == "1" {
		istop = 1
	}
	if this.GetString("urltype") == "1" {
		urltype = 1
	}
	if status != 1 && status != 2 {
		status = 0
	}
	if coverurl == "" {
		//coverurl = "/static/upload/defaultcover.png"
	}
	if this.GetString("pubtype") == "1" {
		pubtype = 1
	}
	addtags := make([]string, 0)
	//标签过滤
	if tags != "" {
		tagarr := strings.Split(tags, ",")
		for _, v := range tagarr {
			if tag := strings.TrimSpace(v); tag != "" {
				exists := false
				for _, vv := range addtags {
					if vv == tag {
						exists = true
						break
					}
				}
				if !exists {
					addtags = append(addtags, tag)
				}
			}
		}
	}

	if id < 1 {
		post.Userid = this.userid
		//post.Author = this.username
		post.Posttime = this.getTime()
		post.Updated = this.getTime()
		post.Insert()
		models.Cache.Delete("latestblog")
	} else {
		post.Id = id
		if post.Read() != nil {
			goto RD
		}
		if post.Tags != "" {
			var tagobj models.Tag
			var tagpostobj models.TagPost
			oldtags := strings.Split(strings.Trim(post.Tags, ","), ",")
			//标签统计-1
			tagobj.Query().Filter("name__in", oldtags).Update(orm.Params{"count": orm.ColValue(orm.ColMinus, 1)})
			//删掉tag_post表的记录
			tagpostobj.Query().Filter("postid", post.Id).Delete()
		}
	}

	if len(addtags) > 0 {
		for _, v := range addtags {
			tag := models.Tag{Name: v}
			if tag.Read("Name") == orm.ErrNoRows {
				tag.Count = 1
				tag.Insert()
			} else {
				tag.Count += 1
				tag.Update("Count")
			}
			tp := models.TagPost{Tagid: tag.Id, Postid: post.Id, Poststatus: int8(status), Posttime: this.getTime()}
			tp.Insert()
		}
		post.Tags = "," + strings.Join(addtags, ",") + ","
	}
	if posttime, err := time.Parse("2006-01-02 15:04:05", timestr); err == nil {
		post.Posttime = posttime
	} else {
		post.Posttime, _ = time.Parse("2006-01-02 15:04:05", post.Posttime.Format("2006-01-02 15:04:05"))
	}
	post.Status = int8(status)
	post.Title = title
	post.Color = color
	post.Istop = istop
	post.Coverurl = coverurl
	post.Content = content
	post.Urlname = urlname
	post.Urltype = urltype
	post.Updated = this.getTime()
	post.Pubtype = pubtype
	if 1 == post.Pubtype {
		post.Reprinturl = strings.TrimSpace(this.GetString("reprinturl"))
		post.Update("tags", "status", "title", "color", "coverurl", "istop", "content", "urlname", "urltype", "updated", "posttime", "pubtype", "reprinturl")
	} else {
		post.Update("tags", "status", "title", "color", "coverurl", "istop", "content", "urlname", "urltype", "updated", "posttime", "pubtype")
	}
	// 更新用户信息缓存，主要是为了更新文章数量
	models.GetUser(this.userid)

RD:
	this.Redirect("/admin/article/list", 302)
}

//删除
func (this *ArticleController) Delete() {
	id, _ := this.GetInt64("id")
	post := models.Post{Id: id}
	if post.Read() == nil {
		post.Delete()
	}
	models.Cache.Delete("latestblog")
	this.Redirect("/admin/article/list", 302)
}

//批处理
func (this *ArticleController) Batch() {
	ids := this.GetStrings("ids[]")
	op := this.GetString("op")

	idarr := make([]int64, 0)
	for _, v := range ids {
		if id, _ := strconv.Atoi(v); id > 0 {
			idarr = append(idarr, int64(id))
		}
	}

	var post models.Post

	switch op {
	case "topub": //移到已发布
		post.Query().Filter("id__in", idarr).Update(orm.Params{"status": 0})
	case "todrafts": //移到草稿箱
		post.Query().Filter("id__in", idarr).Update(orm.Params{"status": 1})
	case "totrash": //移到回收站
		post.Query().Filter("id__in", idarr).Update(orm.Params{"status": 2})
	case "delete": //批量删除
		for _, id := range idarr {
			obj := models.Post{Id: id}
			if obj.Read() == nil {
				obj.Delete()
			}
		}
	}

	this.Redirect(this.Ctx.Request.Referer(), 302)
}

//上传文件(用于文章图片上传，文章封面，说说封面)
func (this *ArticleController) Upload() {
	file, header, err := this.GetFile("upfile")
	utype := this.GetString("type")
	if utype == "" {
		utype = "1"
	}
	index, _ := strconv.Atoi(utype)

	ext := strings.ToLower(header.Filename[strings.LastIndex(header.Filename, "."):])
	out := make(map[string]string)
	out["url"] = ""
	out["fileType"] = ext
	out["original"] = header.Filename
	out["state"] = "SUCCESS"
	if err != nil {
		out["state"] = err.Error()
	} else {
		savepath := pathArr[index] + time.Now().Format("20060102")
		if err = os.MkdirAll(savepath, os.ModePerm); err != nil {
			out["state"] = err.Error()
		} else {
			filename := fmt.Sprintf("%s/%d%s", savepath, time.Now().UnixNano(), ext)
			if this.GetString("type") == "2" {
				w, _ := strconv.Atoi(this.GetString("w"))
				h, _ := strconv.Atoi(this.GetString("h"))
				err = createSmallPic(file, filename, w, h)
				if err != nil {
					out["state"] = err.Error()
				}
			} else {
				if err = this.SaveToFile("upfile", filename); err != nil {
					out["state"] = err.Error()
				}
			}
			out["url"] = filename[1:]
		}
	}
	this.Data["json"] = out
	this.ServeJSONP()
}

func createSmallPic(file io.Reader, fileSmall string, w, h int) error {
	// decode jpeg into image.Image
	img, err := jpeg.Decode(file)
	if err != nil {
		return err
	}
	b := img.Bounds()
	if w > b.Dx() {
		w = b.Dx()
	}
	if h > b.Dy() {
		h = b.Dy()
	}
	// resize to width 1000 using Lanczos resampling
	// and preserve aspect ratio
	m := resize.Resize(uint(w), uint(h), img, resize.Lanczos3)

	out, err := os.Create(fileSmall)
	if err != nil {
		return err
	}
	defer out.Close()

	// write new image to file
	return jpeg.Encode(out, m, nil)
}
