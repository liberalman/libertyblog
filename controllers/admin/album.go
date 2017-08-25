package admin

import (
	"libertyblog/models"
	"strconv"
	"strings"
	"time"
)

type AlbumController struct {
	baseController
}

//相册列表
func (this *AlbumController) List() {
	var page int64
	var pagesize int64 = 6
	var list []*models.Album
	var album models.Album

	if page, _ = this.GetInt64("page"); page < 1 {
		page = 1
	}
	offset := (page - 1) * pagesize

	query := album.Query()
	count, _ := query.Count()
	if count > 0 {
		query.OrderBy("-rank", "-posttime").Limit(pagesize, offset).All(&list)
	}

	this.Data["list"] = list
	this.Data["pagebar"] = models.NewPager(page, count, pagesize, "/admin/album/list?page=%d").ToString()
	this.display()
}

//创建相册
func (this *AlbumController) Add() {
	if this.Ctx.Request.Method == "POST" {
		rank, _ := this.GetInt("rank")
		var album models.Album
		album.Name = strings.TrimSpace(this.GetString("albumname"))
		album.Cover = strings.TrimSpace(this.GetString("cover"))
		album.Content = strings.TrimSpace(this.GetString("content"))
		album.Rank = int8(rank)
		album.Posttime = time.Now()
		if err := album.Insert(); err != nil {
			this.showmsg(err.Error())
		}
		this.Redirect("/admin/album/list", 302)

	}
	this.display()
}

//删除相册
func (this *AlbumController) Delete() {
	id, _ := this.GetInt64("albumid")
	album := models.Album{Id: id}
	h, _ := strconv.Atoi(this.GetString("ishide"))
	album.Ishide = int8(h)
	if err := album.Update("ishide"); err != nil {
		this.showmsg(err.Error())
		return
	}
	this.Redirect("/admin/album/list", 302)
}

// @Title Hide album
// @Description Hide album, just you can see it.
// @Param	albumid		query 	int64	true		"albumid"
// @Param	albumid		query 	int8	true		"ishide"
// @Success 200 body album list page
// @Failure 403 :userid is empty
// @router /admin/album/hide [get]
func (this *AlbumController) Hide() {
	id, _ := this.GetInt64("albumid")
	album := models.Album{Id: id}
	album.Ishide, _ = this.GetInt8("ishide")
	if err := album.Update("ishide"); err != nil {
		this.showmsg(err.Error())
		return
	}
	this.Redirect("/admin/album/list", 302)
}

//修改
func (this *AlbumController) Edit() {
	id, _ := this.GetInt64("albumid")
	album := models.Album{Id: id}
	if album.Read() != nil {
		this.Abort("404")
	}
	if this.Ctx.Request.Method == "POST" {
		rank, _ := this.GetInt("rank")
		album.Cover = strings.TrimSpace(this.GetString("cover"))
		album.Name = strings.TrimSpace(this.GetString("albumname"))
		album.Content = strings.TrimSpace(this.GetString("content"))
		album.Rank = int8(rank)
		album.Update()
		this.Redirect("/admin/album/list", 302)
	}
	this.Data["album"] = album
	this.display()
}
