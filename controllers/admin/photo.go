package admin

import (
	"fmt"
	"libertyblog/models"
	"os"
	"strings"
	"time"
)

type PhotoController struct {
	baseController
}

//照片列表
func (this *PhotoController) List() {
	var albumid int64
	var list []*models.Photo
	var photo models.Photo

	if albumid, _ = this.GetInt64("albumid"); albumid < 1 {
		albumid = 1
	}
	photo.Query().Filter("albumid", albumid).OrderBy("-posttime").All(&list)
	for _, v := range list {
		v.Small = strings.Replace(v.Url, "bigpic", "smallpic", 1)
	}
	this.Data["list"] = list
	this.Data["albumid"] = albumid
	this.display()
}

//插入照片
func (this *PhotoController) Insert(albumid int64, desc, url string) {
	var photo models.Photo
	photo.Albumid = albumid
	photo.Des = desc
	photo.Posttime = time.Now()
	photo.Url = url
	if err := photo.Insert(); err != nil {
		this.showmsg(err.Error())
	}
}

//删除照片
func (this *PhotoController) Delete() {
	id, _ := this.GetInt64("id")
	albumid := this.GetString("albumid")
	photo := models.Photo{Id: id}
	if photo.Read() == nil {
		photo.Delete()
		if err := os.Remove("." + photo.Url); nil != err {
			//
		}
		if err := os.Remove("." + photo.Urlthumb); nil != err {
			//
		}
	}
	this.Redirect("/admin/photo/list?albumid="+albumid, 302)
}

//设置封面
func (this *PhotoController) Cover() {
	id, _ := this.GetInt64("albumid")
	cover := this.GetString("cover")
	album := models.Album{Id: id, Cover: cover}
	album.Update("cover")
	this.Redirect("/admin/album/list", 302)
}

//上传照片)
func (this *PhotoController) UploadPhoto() {
	file, header, err := this.GetFile("editormd-image-file") //upfile
	ext := strings.ToLower(header.Filename[strings.LastIndex(header.Filename, "."):])
	out := make(map[string]string)
	out["url"] = ""
	out["fileType"] = ext
	out["original"] = header.Filename
	out["state"] = "SUCCESS"
	out["success"] = "1"
	filename := ""
	if err != nil {
		out["state"] = err.Error()
		out["success"] = "2"
		out["message"] = err.Error()
	} else {
		t := time.Now().UnixNano()
		day := time.Now().Format("20060102")

		//小图
		savepath := pathArr[2] + day
		if err = os.MkdirAll(savepath, os.ModePerm); err != nil {
			out["state"] = err.Error()
			out["success"] = "3"
			out["message"] = err.Error()
		}
		filename = fmt.Sprintf("%s/%d%s", savepath, t, ext)
		err = createSmallPic(file, filename, 220, 150)
		if err != nil {
			out["state"] = err.Error()
			out["success"] = "4"
			out["message"] = err.Error()
		}

		//大图
		savepath = pathArr[1] + day
		if err = os.MkdirAll(savepath, os.ModePerm); err != nil {
			out["state"] = err.Error()
			out["message"] = err.Error()
		}
		filename = fmt.Sprintf("%s/%d%s", savepath, t, ext)
		if err = this.SaveToFile("editormd-image-file", filename); err != nil {
			out["state"] = err.Error()
			out["success"] = "5"
			out["message"] = err.Error()
		}
		out["url"] = filename[1:]

	}
	albumid, _ := this.GetInt64("albumid")
	this.Insert(albumid, header.Filename, out["url"])
	fmt.Println(out)
	this.Data["json"] = out
	this.ServeJSONP()
}

// @Title upload photos
// @Description upload photos
// @Param	userid		path 	int64	true		"userid"
// @Success 200 {object} models.User
// @Failure 403 :userid is empty
// @router /admin/photo/upload [post]
func (this *PhotoController) UploadPhotos() {
	file, header, err := this.GetFile("file")
	ext := strings.ToLower(header.Filename[strings.LastIndex(header.Filename, "."):])
	out := make(map[string]string)
	out["url"] = ""
	out["fileType"] = ext
	out["original"] = header.Filename
	out["state"] = "SUCCESS"
	out["success"] = "1"
	filename := ""
	if err != nil {
		out["state"] = err.Error()
		out["success"] = "2"
		out["message"] = err.Error()
	} else {
		t := time.Now().UnixNano()
		day := time.Now().Format("20060102")

		//小图
		savepath := pathArr[2] + day
		if err = os.MkdirAll(savepath, os.ModePerm); err != nil {
			out["state"] = err.Error()
			out["success"] = "3"
			out["message"] = err.Error()
		}
		filename = fmt.Sprintf("%s/%d%s", savepath, t, ext)
		err = createSmallPic(file, filename, 220, 150)
		if err != nil {
			out["state"] = err.Error()
			out["success"] = "4"
			out["message"] = err.Error()
		}
		out["urlthumb"] = filename[1:]

		//大图
		savepath = pathArr[1] + day
		if err = os.MkdirAll(savepath, os.ModePerm); err != nil {
			out["state"] = err.Error()
			out["message"] = err.Error()
		}
		filename = fmt.Sprintf("%s/%d%s", savepath, t, ext)
		if err = this.SaveToFile("file", filename); err != nil {
			out["state"] = err.Error()
			out["success"] = "5"
			out["message"] = err.Error()
		}
		out["url"] = filename[1:]

	}
	albumid, _ := this.GetInt64("albumid")
	this.Insert(albumid, header.Filename, out["url"])
	fmt.Println(out)
	this.Data["json"] = out
	//this.ServeJSONP() // 这个函数还要模板文件，好麻烦
	this.ServeJSON()
}
