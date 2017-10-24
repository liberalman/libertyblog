package admin

import (
	"libertyblog/models"
	"strconv"
	"strings"
	"time"

	"github.com/astaxie/beego/orm"
)

type ArticleController struct {
	baseController
}

//管理文章列表
func (this *ArticleController) List() {
	var (
		status     int64
		list       []*models.Article
		article    models.Article
		searchtype string
		keyword    string
	)
	searchtype = this.GetString("searchtype")
	keyword = this.GetString("keyword")
	status, _ = this.GetInt64("status")

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
		query.OrderBy("-istop", "-updated").Limit(this.pagesize, (this.page-1)*this.pagesize).All(&list)
	}

	for _, a := range list {
		a.Content = "" // no need content
	}

	if this.IsAjax() {
		ret := models.Ret{Code: 0, Message: "success"}
		data := map[string]interface{}{}
		data["total"] = count
		data["page"] = this.page
		data["pagesize"] = this.pagesize
		data["list"] = list
		ret.Data = data
		this.Data["json"] = ret
		this.ServeJSON()
	} else {
		//this.Data["searchtype"] = searchtype
		//this.Data["keyword"] = keyword
		//this.Data["count_1"], _ = article.Query().Filter("status", 1).Count()
		//this.Data["count_2"], _ = article.Query().Filter("status", 2).Count()
		//this.Data["status"] = status
		//this.Data["list"] = list
		this.Data["total"] = count
		this.Data["page"] = this.page
		this.Data["pagesize"] = this.pagesize
		//this.Data["pagebar"] = models.NewPager(page, count, pagesize, fmt.Sprintf("/admin/article/list?status=%d&searchtype=%s&keyword=%s&page=%s", status, searchtype, keyword, "%d")).ToString()
		this.display("article_list")
	}
}

func (this *ArticleController) Flot() {
	this.display("flot")
}

// @Title article 保存
// @Description article 保存
// @Param	title		post 	string	true		"the objectid you want to get"
// @Success 200 {object} models.User
// @Failure 403 :flag is empty
// @router /admin/article/save [post]
func (this *ArticleController) Save() {
	var (
		id       int64  = 0
		title    string = strings.TrimSpace(this.GetString("title"))
		digest   string = strings.TrimSpace(this.GetString("digest"))
		content  string = this.GetString("content")
		tags     string = strings.TrimSpace(this.GetString("tags"))
		urlname  string = strings.TrimSpace(this.GetString("urlname"))
		coverurl string = strings.TrimSpace(this.GetString("coverurl"))
		timestr  string = strings.TrimSpace(this.GetString("posttime"))
		status   int64  = 0
		istop    int8   = 0
		urltype  int8   = 0
		post     models.Post
		pubtype  int8       = 0 //发布类型，0原创，1转载
		ret      models.Ret = models.Ret{Code: 0, Message: "success"}
		err      error      = nil
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
	if this.GetString("show") == "1" {
        post.Show = 1
	} else {
        post.Show = 0
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
		// this is add article
		post.Userid = this.userid
		//post.Author = this.username
		post.Posttime = this.getTime()
		if posttime, err := time.Parse("2006-01-02 15:04:05", timestr); err != nil {
			post.Posttime, _ = time.Parse("2006-01-02 15:04:05", post.Posttime.Format("2006-01-02 15:04:05"))
		} else {
			post.Posttime = posttime
		}
		if err = post.Insert(); nil != err {
			ret.Code = -1
			ret.Message = err.Error()
			goto end
		}
		models.Cache.Delete("latestblog")
	} else {
		// this is update article
		post.Id = id
		if err = post.Read(); err != nil {
			ret.Code = -2
			ret.Message = err.Error()
			goto end

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
	post.Updated = this.getTime()

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

	post.Status = int8(status)
	post.Title = title
	post.Digest = digest
	post.Istop = istop
	post.Coverurl = coverurl
	post.Content = content
	post.Urlname = urlname
	post.Urltype = urltype
	post.Updated = this.getTime()
	post.Pubtype = pubtype
	if id < 1 {
		if 1 == post.Pubtype {
			post.Reprinturl = strings.TrimSpace(this.GetString("reprinturl"))
			if err = post.Update("tags", "status", "title", "digest", "coverurl", "istop", "content", "urlname", "urltype", "updated", "posttime", "pubtype", "show", "reprinturl"); nil != err {
				ret.Code = -3
				ret.Message = err.Error()
				goto end
			}
		} else {
			if err = post.Update("tags", "status", "title", "digest", "coverurl", "istop", "content", "urlname", "urltype", "updated", "posttime", "pubtype", "show"); nil != err {
				ret.Code = -4
				ret.Message = err.Error()
				goto end
			}
		}
	} else {
		if 1 == post.Pubtype {
			post.Reprinturl = strings.TrimSpace(this.GetString("reprinturl"))
			if err = post.Update("tags", "status", "title", "digest", "coverurl", "istop", "content", "urlname", "urltype", "updated", "pubtype", "show", "reprinturl"); nil != err {
				ret.Code = -5
				ret.Message = err.Error()
				goto end
			}
		} else {
			if err = post.Update("tags", "status", "title", "digest", "coverurl", "istop", "content", "urlname", "urltype", "updated", "pubtype", "show"); nil != err {
				ret.Code = -6
				ret.Message = err.Error()
				goto end
			}
		}
	}

	// 重置用户信息缓存，主要是为了更新文章数量
	models.CacheResetUser(this.userid)
	// reset article cache
	models.GetArticle(id, true)

end:
	this.Data["json"] = ret
	this.ServeJSON()

	//RD:
	//this.Redirect("/admin/article/list", 302)
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
	ret := models.Ret{Code: 0, Message: "success", Data: ""}
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
				goto end
			}
			break
		case 2: // 修改
			comment.Id, _ = this.GetInt64("id") // 评论id
			if err := comment.Read("id"); nil != err {
				ret.Code = -8
				ret.Message = err.Error()
				goto end
			}
			if comment.User_id != this.userid {
				ret.Code = -7
				ret.Message = "this is not your comment,you can not update!"
				goto end
			}
			comment.Content = this.GetString("content")
			comment.Create_time = time.Now()
			if err := comment.Update(); nil != err {
				ret.Code = -6
				ret.Message = err.Error()
				goto end
			}
			break
		case 3:
			comment.Id, _ = this.GetInt64("id") // 评论id
			if err := comment.Read("id"); nil != err {
				ret.Code = -5
				ret.Message = err.Error()
				goto end
			}
			if comment.User_id != this.userid {
				//this.Ctx.WriteString("{\"code\":-1,\"errorMessage\":\"this is not your comment,you can not delete!\"}")
				ret.Code = -4
				ret.Message = "this is not your comment,you can not delete!"
				goto end
			}
			if err := comment.Delete(); nil != err {
				ret.Code = -3
				ret.Message = err.Error()
				goto end
			}
			break
		default:
			ret.Code = -2
			ret.Message = "no this flag"
			goto end
		}
		ret.Code = 0
	} else {
		ret.Code = -1
		ret.Message = "must be POST"
	}

end:
	this.Data["json"] = ret
	this.ServeJSON()
}
