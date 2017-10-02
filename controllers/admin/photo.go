package admin

import (
	"fmt"
	"io"
	"libertyblog/models"
	"os"
	"regexp"
	"strings"
	"time"

	"github.com/qiniu/api.v7/auth/qbox"
	"github.com/qiniu/api.v7/storage"
	"github.com/upyun/go-sdk/upyun"
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
	//this.display("photo_list_qiniu")
	//this.display("photo_list_upyun")
}

//插入照片
func (this *PhotoController) Insert(albumid int64, desc, url string, source int8) {
	var photo models.Photo
	photo.Albumid = albumid
	photo.Des = desc
	photo.Posttime = time.Now()
	photo.Url = url
	photo.Source = source
	if err := photo.Insert(); err != nil {
		this.showmsg(err.Error())
	}
}

//删除照片
func (this *PhotoController) Delete() {
	var cleanup models.Cleanup

	id, _ := this.GetInt64("id")
	albumid := this.GetString("albumid")
	photo := models.Photo{Id: id}
	if photo.Read() == nil { // no error
		cleanup.Url = photo.Url
		if 1 == photo.Source { // qiniu
			cleanup.Event = models.CANNOT_DELETE_QINIU
			//reg := regexp.MustCompile(`[^/]*$`) // 匹配最后一个'/'之后的内容
			reg := regexp.MustCompile(`photo\/([\S\.]*)`) // 匹配'photo'之后的内容
			matchs := reg.FindStringSubmatch(photo.Url)
			if len(matchs) > 0 {
				key := reg.FindStringSubmatch(photo.Url)[0]
				mac := qbox.NewMac(accessKey, secretKey)
				cfg := storage.Config{
					// 是否使用https域名进行资源管理
					UseHTTPS: false,
				}
				// 指定空间所在的区域，如果不指定将自动探测
				// 如果没有特殊需求，默认不需要指定
				//cfg.Zone = &storage.ZoneHuabei
				bucketManager := storage.NewBucketManager(mac, &cfg)
				err := bucketManager.Delete(bucket, key) // 好奇怪，发现windows上执行ok，到linux就报failed to load system roots and no roots provided错误
				if err != nil {
					// 删除失败的情况下，将资源移入待清理表中
					cleanup.Error = err.Error()
					cleanup.Insert()
				}
			} else {
				cleanup.Error = "url not match"
				cleanup.Insert()
			}

		} else if 2 == photo.Source { // 又拍云
			cleanup.Event = models.CANNOT_DELETE_UPYUN
			reg := regexp.MustCompile(`static/(.*/){0,}([^.]+).*`) // 匹配'.com'之后的内容 //.com\/([\S\.]*)
			matchs := reg.FindStringSubmatch(photo.Url)
			if len(matchs) > 0 {
				key := reg.FindStringSubmatch(photo.Url)[0]
				key = key[4:]
				err := up.Delete(&upyun.DeleteObjectConfig{
					Path:  key,
					Async: false, // 是否使用异步删除
				})
				if nil != err {
					// 删除失败的情况下，将资源移入待清理表中
					cleanup.Error = err.Error()
					cleanup.Insert()
				}
			} else {
				cleanup.Error = "url not match"
				cleanup.Insert()
			}

		} else if 0 == photo.Source { // local
			cleanup.Event = models.CANNOT_DELETE_LOCAL
			if err := os.Remove("." + photo.Url); nil != err {
				cleanup.Error = err.Error()
				cleanup.Insert()
			}
			photo.Small = strings.Replace(photo.Url, "bigpic", "smallpic", 1)
			if err := os.Remove("." + photo.Small); nil != err {
				cleanup.Error = err.Error()
				cleanup.Url = photo.Small
				cleanup.Insert()
			}
		}

		photo.Delete()
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

// @Title edit photo
// @Description edit photo
// @Param	photoid		path 	int64	true		"photoid"
// @Success 200 int 0
// @Failure 403 :userid is empty
// @router /admin/photo/edit [post]
func (this *PhotoController) Edit() {
	ret := models.Ret{Code: 0, Message: "修改照片描述成功"}
	id, _ := this.GetInt64("photoid")
	des := this.GetString("des")
	photo := models.Photo{Id: id, Des: des}
	if err := photo.Update("des"); err != nil {
		ret.Code = -1
		ret.Message = err.Error()
	}
	this.Data["json"] = ret
	this.ServeJSON()
}

//上传照片 用于在写markdown文档的时候上传照片用
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
	this.Insert(albumid, header.Filename, out["url"], 0)
	fmt.Println(out)
	this.Data["json"] = out
	this.ServeJSONP()
}

// @Title upload photos
// @Description upload photos to album
// @Param	userid		path 	int64	true		"userid"
// @Success 200 {object} models.User
// @Failure 403 :userid is empty
// @router /admin/photo/upload [post]
func (this *PhotoController) UploadPhotos() {
	var albumid int64
	albumid, _ = this.GetInt64("albumid")
	//file, header, err := this.GetFile("file")
	_, header, err := this.GetFile("file")
	ext := strings.ToLower(header.Filename[strings.LastIndex(header.Filename, "."):])
	out := make(map[string]string)
	out["url"] = ""
	out["fileType"] = ext
	out["original"] = header.Filename
	out["success"] = "1"
	var source int8 = PHOTO_LOCAL
	filename := ""
	if err != nil {
		out["success"] = "2"
		out["message"] = err.Error()
		goto end
	} else {
		t := time.Now().UnixNano()
		day := time.Now().Format("20060102")

		//小图,转储ypyun后不用生成小图了，直接用又拍云的小图
		var savepath string
		/*savepath = pathArr[2] + day
		if err = os.MkdirAll(savepath, os.ModePerm); err != nil {
			out["success"] = "3"
			out["message"] = err.Error()
			goto end
		}
		filename = fmt.Sprintf("%s/%d%s", savepath, t, ext)
		err = createSmallPic(file, filename, 220, 150)
		if err != nil {
			out["success"] = "4"
			out["message"] = err.Error()
			goto end
		}*/

		//大图
		savepath = pathArr[1] + day
		savepath = fmt.Sprintf("./static/album/%d", albumid)
		if err = os.MkdirAll(savepath, os.ModePerm); err != nil {
			out["success"] = "5"
			out["message"] = err.Error()
			goto end
		}
		//filename = fmt.Sprintf("%s/%d%s", savepath, t, ext)
		filename = fmt.Sprintf("./static/album/%d/%d%s", albumid, t, ext)
		if err = this.SaveToFile("file", filename); err != nil {
			out["success"] = "6"
			out["message"] = err.Error()
			goto end
		}
		out["url"] = filename[1:]

		// 转储又拍云，上传文件
		upyun_filepath := fmt.Sprintf("/static/album/%d/%d%s", albumid, t, ext)
		err := up.Put(&upyun.PutObjectConfig{
			Path:      upyun_filepath,
			LocalPath: filename,
		})
		if nil != err {
			// 转储又拍云失败，需要记录到待处理列表中
			var cleanup models.Cleanup
			cleanup.Event = models.CANNOT_UPLOAD_UPYUN
			cleanup.Error = err.Error()
			cleanup.Url = out["url"]
			cleanup.Insert()
		} else {
			out["url"] = upyun_domain + upyun_filepath
			source = PHOTO_UPYUN
			// 转储成功，删除本地文件
			if err := os.Remove(filename); nil != err {
				var cleanup models.Cleanup
				cleanup.Event = models.CANNOT_DELETE_LOCAL
				cleanup.Url = filename
				cleanup.Error = err.Error()
				cleanup.Insert()
			}
		}
	}
	albumid, _ = this.GetInt64("albumid")
	this.Insert(albumid, header.Filename, out["url"], source)
end:
	this.Data["json"] = out
	//this.ServeJSONP() // 这个函数还要模板文件，好麻烦
	this.ServeJSON()
}

// @Title qiniu photo
// @Description Insert photo info when upload by qiniu
// @Param	userid		path 	int64	true		"userid"
// @Success 200 {object} models.Photo
// @Failure 403 :userid is empty
// @router /admin/photo/qiniuphoto [post]
func (this *PhotoController) QiniuPhoto() {
	var ret models.Ret = models.Ret{Code: 0, Message: "success"}
	var albumid int64
	albumid, _ = this.GetInt64("albumid")
	description := this.GetString("description")
	url := this.GetString("url")
	source, _ := this.GetInt8("source")
	var photo models.Photo
	photo.Albumid = albumid
	photo.Des = description
	photo.Posttime = time.Now()
	photo.Url = url
	photo.Source = source
	if err := photo.Insert(); err != nil {
		ret.Code = -1
		ret.Message = err.Error()
		goto end
	}
	ret.Code = 0
	ret.Message = "上传图片到 " + url + " 成功"
end:
	this.Data["json"] = ret
	this.ServeJSON()
}

// @Title upyun photo
// @Description Insert photo info when upload by qiniu
// @Param	userid		path 	int64	true		"userid"
// @Success 200 {object} models.Photo
// @Failure 403 :userid is empty
// @router /admin/photo/upyunphoto [post]
func (this *PhotoController) UpyunPhoto() {
	var ret models.Ret = models.Ret{Code: 0, Message: "success"}
	var albumid int64
	albumid, _ = this.GetInt64("albumid")
	description := this.GetString("description")
	url := this.GetString("url")
	source, _ := this.GetInt8("source")
	var photo models.Photo
	photo.Albumid = albumid
	photo.Des = description
	photo.Posttime = time.Now()
	photo.Url = url
	photo.Source = source
	if err := photo.Insert(); err != nil {
		ret.Code = -1
		ret.Message = err.Error()
		goto end
	}
	ret.Code = 0
	ret.Message = "上传图片到 " + url + " 成功"
end:
	this.Data["json"] = ret
	this.ServeJSON()
}

// @router /admin/ueditor/upload [get,post]
func (this *PhotoController) Ueditor() {
	action := this.GetString("action")
	if "config" == action {
		this.TplName = this.theme + "/config.json.tpl"
		this.ServeJSONP()
	} else if "uploadimage" == action {
		var albumid int64
		size, _ := this.GetInt("size")
		file, header, err := this.GetFile("upfile")
		//_, header, err := this.GetFile("upfile")
		ext := strings.ToLower(header.Filename[strings.LastIndex(header.Filename, "."):])
		out := make(map[string]string)
		out["url"] = ""
		out["original"] = header.Filename
		out["state"] = "SUCCESS"
		out["title"] = ""

		var source int8 = PHOTO_LOCAL
		filename := ""
		if err != nil {
			out["state"] = "2"
			out["title"] = err.Error()
			goto end
		} else {
			t := time.Now().UnixNano()
			day := time.Now().Format("20060102")

			//小图,转储ypyun后不用生成小图了，直接用又拍云的小图
			var savepath string

			//大图
			savepath = pathArr[1] + day
			savepath = fmt.Sprintf("./static/upload/article")
			if err = os.MkdirAll(savepath, os.ModePerm); err != nil {
				out["state"] = "5"
				out["title"] = err.Error()
				goto end
			}

			filename = fmt.Sprintf("./static/upload/article/%d%s", t, ext)
			err = createPicture(file, filename, size)
			if err != nil {
				out["state"] = "6"
				out["title"] = err.Error()
				goto end
			}
			out["url"] = filename[1:]

			// 转储又拍云，上传文件
			upyun_filepath := fmt.Sprintf("/static/upload/article/%d%s", t, ext)
			err := up.Put(&upyun.PutObjectConfig{
				Path:      upyun_filepath,
				LocalPath: filename,
			})
			if nil != err {
				// 转储又拍云失败，需要记录到待处理列表中
				var cleanup models.Cleanup
				cleanup.Event = models.CANNOT_UPLOAD_UPYUN
				cleanup.Error = err.Error()
				cleanup.Url = out["url"]
				cleanup.Insert()
			} else {
				out["url"] = upyun_domain + upyun_filepath
				source = PHOTO_UPYUN
				// 转储成功，删除本地文件
				if err := os.Remove(filename); nil != err {
					var cleanup models.Cleanup
					cleanup.Event = models.CANNOT_DELETE_LOCAL
					cleanup.Url = filename
					cleanup.Error = err.Error()
					cleanup.Insert()
				}
			}
		}
		albumid = -1
		this.Insert(albumid, header.Filename, out["url"], source)
	end:
		/*{
		    "state": "SUCCESS",
		    "url": "upload/demo.jpg",
		    "title": "demo.jpg",
		    "original": "demo.jpg"
		}*/
		this.Data["json"] = out
		this.ServeJSON()
	}
}

func createPicture(file io.Reader, filename string, size int) error {
	out, err := os.Create(filename)
	if err != nil {
		return err
	}
	defer out.Close()

	p := make([]byte, size)
	n, err := file.Read(p)
	if n > 0 {
		n, err := out.Write(p)
		fmt.Println(n, err)
		return nil
	}

	return err
}
