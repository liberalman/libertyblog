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
		query.OrderBy("-istop", "-updated").Limit(pagesize, offset).All(&list)
	}

	this.Data["searchtype"] = searchtype
	this.Data["keyword"] = keyword
	this.Data["count_1"], _ = article.Query().Filter("status", 1).Count()
	this.Data["count_2"], _ = article.Query().Filter("status", 2).Count()
	this.Data["status"] = status
	this.Data["list"] = list
	this.Data["pagebar"] = models.NewPager(page, count, pagesize, fmt.Sprintf("/admin/article/list?status=%d&searchtype=%s&keyword=%s&page=%s", status, searchtype, keyword, "%d")).ToString()
	this.display("article_list")
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
		/*if 1 == this.userid { // 如果是管理员用户id，则是查看所有的帖子
			query = history.Query()
		} else {
			query = history.Query().Filter("userid", this.userid)
		}*/
		query = history.Query().Filter("userid", this.userid)
		count, _ := query.Count()
		if count > 0 {
			query.OrderBy("-dotime").Limit(pagesize, offset).All(&list)
		}
		this.Data["list"] = list
		this.display("history")
	}
}

func (this *ArticleController) Flot() {
	this.display("flot")
}

//保存
func (this *ArticleController) Save() {
	var (
		id       int64  = 0
		title    string = strings.TrimSpace(this.GetString("title"))
		digest   string = strings.TrimSpace(this.GetString("digest"))
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
	post.Digest = digest
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
		post.Update("tags", "status", "title", "digest", "color", "coverurl", "istop", "content", "urlname", "urltype", "updated", "posttime", "pubtype", "reprinturl")
	} else {
		post.Update("tags", "status", "title", "digest", "color", "coverurl", "istop", "content", "urlname", "urltype", "updated", "posttime", "pubtype")
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
	var success int = 1
	var url string
	var message string

	file, header, err := this.GetFile("editormd-image-file")
	utype := this.GetString("type")
	if utype == "" {
		utype = "1"
	}
	index, _ := strconv.Atoi(utype)

	fileType := strings.ToLower(header.Filename[strings.LastIndex(header.Filename, "."):])
	//image_original = header.Filename

	if err != nil {
		success = -1
		message = err.Error()
	} else {
		savepath := pathArr[index] + time.Now().Format("20060102")
		if err = os.MkdirAll(savepath, os.ModePerm); err != nil {
			success = -2
			message = err.Error()
		} else {
			filename := fmt.Sprintf("%s/%d%s", savepath, time.Now().UnixNano(), fileType)
			if this.GetString("type") == "2" {
				w, _ := strconv.Atoi(this.GetString("w"))
				h, _ := strconv.Atoi(this.GetString("h"))
				err = createSmallPic(file, filename, w, h)
				if err != nil {
					success = -3
					message = err.Error()
				}
			} else {
				if err = this.SaveToFile("editormd-image-file", filename); err != nil {
					success = -4
					message = err.Error()
				}
			}
			url = filename[1:]
		}
	}

	this.Ctx.WriteString(fmt.Sprintf("{\"success\":%d,\"url\":\"%s\",\"message\":\"%s\"}", success, url, message))
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

// @Title 评论
// @Description 插入,更新,删除 评论
// 插入 curl -d "flag=1&article_id=76&to_user_id=1&content=test" "http://localhost/admin/article/comment"
// 更新 curl -d "flag=2&content=test1&id=1" "http://localhost/admin/article/comment"
// 删除 curl -d "flag=3&id=1" "http://localhost/admin/article/comment"
// @Param	flag		path 	string	true		"the objectid you want to get"
// @Success 200 {object} models.User
// @Failure 403 :flag is empty
// @router /admin/article/comment [post]
func (this *ArticleController) Comment() {
	ret := models.Ret{Code: -1, Message: "success", Data: ""}
	if this.Ctx.Input.IsPost() {
		flag, _ := this.GetInt("flag")
		var comment models.Comment
		switch flag {
		case 1: // 新增
			comment.User_id = this.userid
			comment.Article_id, _ = this.GetInt64("article_id")
			comment.Ref_comm_id, _ = this.GetInt64("ref_comm_id")
			comment.Content = this.GetString("content")
			comment.To_user_id, _ = this.GetInt64("to_user_id")
			comment.Dislike, _ = this.GetInt("dislike")
			comment.Like, _ = this.GetInt("like")
			comment.Create_time = time.Now()
			if err := comment.Insert(); nil != err {
				ret.Code = -9
				ret.Message = err.Error()
				return
			}
			break
		case 2: // 修改
			comment.Id, _ = this.GetInt64("id") // 评论id
			if err := comment.Read("id"); nil != err {
				ret.Code = -8
				ret.Message = err.Error()
				return
			}
			if comment.User_id != this.userid {
				ret.Code = -7
				ret.Message = "this is not your comment,you can not update!"
				return
			}
			comment.Content = this.GetString("content")
			comment.Create_time = time.Now()
			if err := comment.Update(); nil != err {
				ret.Code = -6
				ret.Message = err.Error()
				return
			}
			break
		case 3:
			comment.Id, _ = this.GetInt64("id") // 评论id
			if err := comment.Read("id"); nil != err {
				ret.Code = -5
				ret.Message = err.Error()
				return
			}
			if comment.User_id != this.userid {
				//this.Ctx.WriteString("{\"code\":-1,\"errorMessage\":\"this is not your comment,you can not delete!\"}")
				ret.Code = -4
				ret.Message = "this is not your comment,you can not delete!"
				return
			}
			if err := comment.Delete(); nil != err {
				ret.Code = -3
				ret.Message = err.Error()
				return
			}
			break
		default:
			ret.Code = -2
			ret.Message = "no this flag"
			return
		}
		ret.Code = 0
	} else {
		ret.Code = -1
		ret.Message = "must be POST"
	}
	this.Data["json"] = ret
	this.ServeJSON()
}
