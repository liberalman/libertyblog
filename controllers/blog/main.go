package blog

import (
	//"fmt"
	"libertyblog/models"
	"strconv"
	"strings"
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

// @router /:* [get]
func (this *MainController) Index() {
	var count int = 0
	this.Data["list"], count = models.PostIndex(this.page, this.pagesize)
	this.Data["pagebar"] = models.NewPager(int64(this.page), int64(count), int64(this.pagesize), "/index%d.html").ToString()
	this.setHeadFootMetas()
	this.display("index", 0)
}

//留404页面
func (this *MainController) Go404() {
	this.setHeadFootMetas("Sorry 404页面没找到")
	this.display("404", 0)
}

//照片展示
func (this *MainController) Photo() {
	album := new(models.Album)
	album.Id = int64(this.page)
	err := album.Read()
	if err != nil || album.Ishide != 0 {
		this.Redirect("/404.html", 302)
	}
	this.setHeadFootMetas("相册 " + album.Name + " 内的照片")
	var list []*models.Photo
	new(models.Photo).Query().Filter("albumid", this.page).All(&list)
	this.right = ""
	for _, v := range list {
		v.Small = strings.Replace(v.Url, "bigpic", "smallpic", 1)
	}
	this.Data["list"] = list
	this.display("photo", 0)
}

//相册展示
func (this *MainController) Album() {
	pagesize, _ := strconv.Atoi(this.getOption("albumsize"))
	if pagesize < 1 {
		pagesize = 12
	}
	var list []*models.Album
	query := new(models.Album).Query().Filter("ishide", 0)
	count, _ := query.Count()
	if count > 0 {
		query.OrderBy("-rank", "-posttime").Limit(pagesize, (this.page-1)*pagesize).All(&list)
	}
	this.setHeadFootMetas("光影瞬间")
	this.right = ""
	this.Data["list"] = list
	this.Data["pagebar"] = models.NewPager(int64(this.page), int64(count), int64(pagesize), "/album%d.html").ToString()
	//this.display_no_right("album")
	this.display("album", 1)
}

//相册展示1
func (this *MainController) Album1() {
	pagesize, _ := strconv.Atoi(this.getOption("albumsize"))
	if pagesize < 1 {
		pagesize = 12
	}
	var list []*models.Album
	query := new(models.Album).Query().Filter("ishide", 0)
	count, _ := query.Count()
	if count > 0 {
		query.OrderBy("-rank", "-posttime").Limit(pagesize, (this.page-1)*pagesize).All(&list)
	}
	this.setHeadFootMetas("光影瞬间")
	this.right = ""
	this.Data["list"] = list
	this.Data["pagebar"] = models.NewPager(int64(this.page), int64(count), int64(pagesize), "/albumnew%d.html").ToString()
	this.display_no_layout("albumnew")
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
	this.display("category", 0)
}

// 搜索
func (this *MainController) Search() {
	article_ids := models.SearchArticle(this.GetString("key"), "test1")

	ids_len := len(article_ids)
	if ids_len > 0 {
		//fmt.Println(article_ids[:ids_len-1])
		this.Data["list"] = models.GetArticlesByIds(article_ids[:ids_len-1])
	}
	this.Data["pagebar"] = models.NewPager(int64(this.page), int64(0), int64(this.pagesize), "/index%d.html").ToString()
	this.setHeadFootMetas()
	this.display("index", 0)
}
