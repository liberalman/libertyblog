package blog

import (
	"libertyblog/models"
	"strconv"
	"strings"
)

type PhotoController struct {
	baseController
}

// get photos of all over the site
// @router /blog/photo/all [get]
func (this *PhotoController) All() {
	list, count := models.QueryAllPhotoList(this.page, this.pagesize)
	this.Data["pagebar"] = models.NewPager(int64(this.page), int64(count), int64(this.pagesize), "/index%d.html").ToString()
	i := 0
	for i < len(list) {
		list[i].Small = strings.Replace(list[i].Url, "bigpic", "smallpic", 1)
		i++
	}
	this.Data["list"] = list
	if this.IsAjax() {
		ret := models.Ret{Code: 0, Message: "success"}
		var obj map[string]interface{} = map[string]interface{}{"page": this.page, "pagesize": this.pagesize}
		obj["list"] = list
		obj["count"] = count
		ret.Data = obj
		this.Data["json"] = ret
		this.ServeJSON()
		return
	} else {
		this.display("photos", NO_RIGHT)
	}
}

//相册列表展示
func (this *PhotoController) Albums() {
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
	this.display("album", NO_RIGHT)
}

//单个相册中的照片展示
func (this *PhotoController) PhotosInAlbum() {
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
	this.Data["album"] = album
	this.Data["list"] = list
	this.display("photo", NO_RIGHT)
}

// @Title Get
// @Description find object by objectid
// @Param	objectId		path 	string	true		"the objectid you want to get"
// @Success 200 {object} models.User
// @Failure 403 :objectId is empty
// @router /blog/photo/recommend [get]
func (this *PhotoController) Recomend() {
	var page int
	var pagesize int
	var err error
	if page, err = this.GetInt("page"); err != nil || page < 1 {
		page = 1
	}
	if pagesize, err = this.GetInt("pagesize"); err != nil || pagesize < 1 {
		pagesize = 10
	}
	list, count := models.QueryAllPhotoList(page, pagesize)
	i := 0
	for i < len(list) {
		list[i].Small = strings.Replace(list[i].Url, "bigpic", "smallpic", 1)
		user := models.CacheGetUser(list[i].Userid)
		list[i].Username = user.Username
		list[i].Avatarurl = user.Avatarurl
		i++
	}
	if this.IsAjax() {
		ret := models.Ret{Code: 0, Message: "success"}
		var obj map[string]interface{} = map[string]interface{}{"page": this.page, "pagesize": this.pagesize}
		obj["list"] = list
		obj["count"] = count
		ret.Data = obj
		this.Data["json"] = ret
		this.ServeJSON()
		return
	} else {
		this.Data["list"] = list
		this.Data["pagebar"] = models.NewPager(int64(page), int64(count), int64(pagesize), "/index%d.html").ToString()
		this.display("photos", NO_RIGHT)
	}
}
