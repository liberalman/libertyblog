package blog

import (
	"libertyblog/models"
)

type MainController struct {
	baseController
}

//首页, 只显示前N条
/*func (this *MainController) Index() {
	var list []*models.Post
	query := new(models.Post).Query().Filter("status", 0).Filter("urltype", 0)
	count, _ := query.Count()
	if count > 0 {
		query.OrderBy("-istop", "-id").Limit(this.pagesize, (this.page-1)*this.pagesize).All(&list)
	}
	this.Data["list"] = list
	this.Data["pagebar"] = models.NewPager(int64(this.page), int64(count), int64(this.pagesize), "/index%d.html").ToString()
	this.setHeadMetas()
	this.display("index")
}*/

// @router / [get]
func (this *MainController) Index() {
	list, count := models.PostIndex(this.page, this.pagesize)
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
		this.Data["list"] = list
		this.Data["total"] = count
		this.Data["page"] = this.page
		this.Data["pagesize"] = this.pagesize
		this.setHeadFootMetas()
		this.display("index", HAS_RIGHT)
	}
}

// @router /webscan_360_cn.html [get]
func (this *MainController) Webscan_360() {
	this.display_no_layout("webscan_360_cn")
}

//留404页面
func (this *MainController) Go404() {
	this.setHeadFootMetas("Sorry 404页面没找到")
	this.display("404", HAS_RIGHT)
}

//分类查看
func (this *MainController) Category() {
	var articles []*models.Article
	tagpost := new(models.TagPost)
	tag := new(models.Tag)
	tag.Name = this.Ctx.Input.Param(":name")

	if tag.Read("Name") != nil {
		this.Abort("404")
	}
	query := tagpost.Query().Filter("tagid", tag.Id).Filter("poststatus", 0)
	count, _ := query.Count()
	if count > 0 {
		var tp []*models.TagPost
		var pids []int64 = make([]int64, 0)
		query.OrderBy("-posttime").Limit(this.pagesize, (this.page-1)*this.pagesize).All(&tp)
		for _, v := range tp {
			pids = append(pids, v.Postid)
		}
		new(models.Article).Query().Filter("id__in", pids).All(&articles)
	}
	this.Data["tag"] = tag
	this.Data["list"] = articles
	this.Data["pagebar"] = models.NewPager(int64(this.page), int64(count), int64(this.pagesize), "/category/"+tag.Name+"/page/%d").ToString()
	this.setHeadFootMetas(tag.Name, tag.Name, tag.Name)
	this.display("category", HAS_RIGHT)
}

// @Title Search
// @Description Search article or user
// @Param	key		query 	int64	true		"article id or user id"
// @Success 200 {int} models.User.Id
// @Failure 403 body is empty
// @router /search [get]
func (this *MainController) Search() {
	article_ids := models.SearchArticle(this.GetString("key"), "test1")
	ids_len := len(article_ids)
	if ids_len > 0 {
		this.Data["list"] = models.GetArticlesByIds(article_ids[:ids_len-1])
	}
	this.Data["pagebar"] = models.NewPager(int64(this.page), int64(0), int64(this.pagesize), "/index%d.html").ToString()
	this.setHeadFootMetas()
	this.display("index", HAS_RIGHT)
}

// @router /about [get]
func (this *MainController) About() {
	this.display("about", NO_RIGHT)
}
