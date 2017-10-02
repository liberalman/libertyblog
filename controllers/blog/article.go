package blog

import (
	"libertyblog/models"
	"strconv"
	"strings"
)

type ArticleController struct {
	baseController
}

func (this *ArticleController) AddMarkdown() {
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
	this.display("article_list", HAS_RIGHT)
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
	this.Data["showEditBtn"] = 0
	arr := strings.Split(this.Ctx.GetCookie("auth"), "|")
	if len(arr) == 2 {
		idstr, _ := arr[0], arr[1]
		userid, _ := strconv.ParseInt(idstr, 10, 0)
		if article.Userid == userid {
			this.Data["showEditBtn"] = 1
		}
	}

	this.setHeadFootMetas(article.Title, strings.Trim(article.Tags, ","), article.Title)

	var count int = 0
	this.Data["comments"], count = models.QueryComments(article.Id, this.page, this.pagesize)
	this.Data["pagebar"] = models.NewPager(int64(this.page), int64(count), int64(this.pagesize), "/index%d.html").ToString()

	//this.display("article", NO_RIGHT) // 去掉右侧边栏
	this.display("article", HAS_RIGHT)
}

// @router /article/addueditor [get]
func (this *ArticleController) AddUeditor() {
	this.auth()
	//this.display_no_layout("article_add_ueditor")
	this.display("article_add_ueditor", HAS_RIGHT)
}
