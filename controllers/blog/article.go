package blog

/*
"image/jpeg"
"io"
"os"
"strconv"
"github.com/nfnt/resize"*/
import (
	"libertyblog/models"
	"strconv"
	"strings"
	"time"

	"github.com/astaxie/beego"
	//	"github.com/astaxie/beego/orm"
)

type ArticleController struct {
	baseController
}

func (this *ArticleController) Add() {
	//this.Data["posttime"] = this.getTime().Format("2006-01-02 15:04:05")
	this.right = "" // 去掉右侧边栏
	this.display("article_add", 0)
}

func (this *ArticleController) Add1() {
	this.auth()
	this.display_no_layout("article_add_markdown")
}

/* 通过用户id获取某人的文章列表 */
func (this *ArticleController) SomeoneList() {
	var count int = 0
	s_userid := this.Ctx.Input.Param(":userid")
	userid, _ := strconv.Atoi(s_userid)
	this.Data["list"], count = models.GetSomeoneArticleList(userid, this.page, this.pagesize)
	this.Data["pagebar"] = models.NewPager(int64(this.page), int64(count), int64(this.pagesize), "/articles/"+s_userid+"/index%d.html").ToString()
	this.setHeadFootMetas()
	this.display("article_list", 0)
}

func (this *ArticleController) EditMarkdown() {
	id, _ := this.GetInt64("id")
	post := models.Post{Id: id}
	if post.Read() != nil {
		this.Abort("404")
	}
	post.Tags = strings.Trim(post.Tags, ",")
	this.Data["post"] = post
	this.Data["posttime"] = post.Posttime.Format("2006-01-02 15:04:05")
	this.display_no_layout("article_edit_markdown")
}

func (this *ArticleController) Index() {
	var article *models.Article = new(models.Article) //这里必须new，如果用直接声明的方式，而不new的话，网页端在使用ColorTitle、TagsLink等函数的时候会报找不到该函数。真的很奇怪，难道new之后没有自动释放？传说中的引用计数呢？
	urlname := this.Ctx.Input.Param(":urlname")
	if urlname != "" {
		article.Urlname = urlname

	} else {
		id, _ := strconv.Atoi(this.Ctx.Input.Param(":id"))
		article.Id = int64(id)
		article.GetOneArticle()
	}
	if article.Status != 0 {
		this.Redirect("/404.html", 302)
	}
	models.Cache.Delete("hotblog")
	article.Content = strings.Replace(article.Content, "_ueditor_page_break_tag_", "", -1)
	pre, next := article.GetPreAndNext(article.Id)
	this.Data["post"] = article
	this.Data["pre"] = pre
	this.Data["next"] = next
	this.Data["smalltitle"] = "文章内容"
	if urlname == "about.html" {
		this.Data["smalltitle"] = "关于我"
	}

	this.right = "" // 去掉右侧边栏
	this.setHeadFootMetas(article.Title, strings.Trim(article.Tags, ","), article.Title)

	//this.display_no_right("article")
	this.display("article", 1)
}

// 评论 http://www.liberalman.cn/article/comment
// 插入 curl -d "flag=1&article_id=76&content=test" "http://localhost/article/comment"
// 更新 curl -d "flag=2&article_id=76&content=test1&id=1" "http://localhost/article/comment"
// 删除 curl -d "flag=3&id=1" "http://localhost/article/comment"
func (this *ArticleController) Comment() {
	beego.Info("action:" + this.GetString("action") + " signature:" + this.GetString("signature"))
	/*if this.userid <= 0 {
		this.Ctx.WriteString("{\"code\":-1,\"errorMessage\":\"please login\"}")
		return
	}*/
	if this.Ctx.Input.IsPost() {
		flag, _ := this.GetInt("flag")
		var comment models.Comment
		switch flag {
		case 1: // 新增
			comment.User_id = this.userid
			comment.Article_id, _ = this.GetInt64("article_id")
			comment.Ref_comm_id, _ = this.GetInt64("ref_comm_id")
			comment.Content = this.GetString("content")
			comment.Create_time = time.Now()
			if err := comment.Insert(); nil != err {
				this.Ctx.WriteString(err.Error())
				return
			}
			break
		case 2: // 修改
			comment.Id, _ = this.GetInt64("id") // 评论id
			if err := comment.Read("id"); nil != err {
				this.Ctx.WriteString(err.Error())
				return
			}
			if comment.User_id != this.userid {
				this.Ctx.WriteString("this is not your comment,you can not update!")
				return
			}
			comment.User_id = this.userid
			comment.Article_id, _ = this.GetInt64("article_id")
			comment.Ref_comm_id, _ = this.GetInt64("ref_comm_id")
			comment.Content = this.GetString("content")
			comment.Create_time = time.Now()
			if err := comment.Update(); nil != err {
				this.Ctx.WriteString(err.Error())
				return
			}
			break
		case 3:
			comment.Id, _ = this.GetInt64("id") // 评论id
			if err := comment.Read("id"); nil != err {
				this.Ctx.WriteString(err.Error())
				return
			}
			if comment.User_id != this.userid {
				this.Ctx.WriteString("this is not your comment,you can not delete!")
				return
			}
			if err := comment.Delete(); nil != err {
				this.Ctx.WriteString(err.Error())
				return
			}
			break
		default:
			this.Ctx.WriteString("no this flag")
			return
		}
		this.Ctx.WriteString("{\"code\":0}")
	} else {
		this.Ctx.WriteString("must be POST")
	}
}
