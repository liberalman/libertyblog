package blog

import (
	"libertyblog/models"
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
	this.display("photos", NO_RIGHT)
}

//照片展示
func (this *PhotoController) Album() {
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
