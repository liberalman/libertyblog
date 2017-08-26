package admin

import (
	"fmt"
	"libertyblog/models"
	"os"
	"strings"
	"time"

	"github.com/astaxie/beego"
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
		//album.Cover = strings.TrimSpace(this.GetString("cover"))
		album.Cover = "/static/upload/defaultcover.png"
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

// @Title Delete album
// @Description Delete album
// @Param	albumid		query 	int64	true		"albumid"
// @Success 200 body album list page
// @Failure 403 :albumid is empty
// @router /admin/album/delete [delete]
func (this *AlbumController) Delete() {
	// 判断是否是自己的相册
	ret := models.Ret{Code: 0, Message: "success"}
	albumid, _ := this.GetInt64("albumid")
	photo := models.Photo{Id: 0}
	album := models.Album{Id: albumid}
	if err := album.Read(); err != nil {
		ret.Code = -5
		ret.Message = fmt.Sprintf("no this albumid=%d.", albumid)
		goto end
	} else {
		photos := models.QueryPhotoListOfAlbum(album.Id)
		for _, v := range photos {
			// 删除硬盘上的图片
			if err := os.Remove("." + v.Url); nil != err {
				//ret.Code = -3
				//ret.Message = err.Error()
				//goto end
				beego.Error("could not delete ", "."+v.Url, err.Error())
			}
			v.Small = strings.Replace(v.Url, "bigpic", "smallpic", 1)
			if err := os.Remove("." + v.Small); nil != err {
				//ret.Code = -2
				//ret.Message = err.Error()
				//goto end
				beego.Error("could not delete ", "."+v.Small, err.Error())
			}
			// 删除数据库记录
			photo.Id = v.Id
			if err := photo.Delete(); err != nil {
				//ret.Code = -4
				//ret.Message += err.Error()
				//goto end
				beego.Error(err.Error())
			}
		}
		// 删除相册
		if err := album.Delete(); err != nil {
			ret.Code = -1
			ret.Message += err.Error()
			goto end
		}
	}
end:
	this.Data["json"] = ret
	this.ServeJSON()
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
		//album.Cover = strings.TrimSpace(this.GetString("cover"))
		album.Name = strings.TrimSpace(this.GetString("albumname"))
		album.Content = strings.TrimSpace(this.GetString("content"))
		album.Rank = int8(rank)
		album.Update()
		this.Redirect("/admin/album/list", 302)
	}
	this.Data["album"] = album
	this.display()
}
