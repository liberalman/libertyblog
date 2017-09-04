package blog

import (
	//"encoding/base64"
	//"fmt"
	//"strings"

	"github.com/astaxie/beego"
	"github.com/qiniu/api.v7/auth/qbox"
	"github.com/qiniu/api.v7/storage"
)

type QiniuController struct {
	baseController
}

var (
	accessKey = beego.AppConfig.String("qiniu_access_key")
	secretKey = beego.AppConfig.String("qiniu_secure_key")
	bucket    = beego.AppConfig.String("qiniu_bucket")
)

// @Title Get Qiniu uptoken
// @Description Get Qiniu uptoken
// @Param	objectId		path 	string	true		"the objectid you want to get"
// @Success 200 string {"uptoken": "0MLvWPnyya1WtPnXFy9KLyGHyFPNdZceomL..."}"
// @Failure 403 :objectId is empty
// @router /qiniu/uptoken [get]
func (this *QiniuController) UpToken() {
	// 简单上传凭证
	putPolicy := storage.PutPolicy{
		Scope: bucket,
	}
	putPolicy.Expires = 7200 //示例2小时有效期
	mac := qbox.NewMac(accessKey, secretKey)
	upToken := putPolicy.UploadToken(mac)
	//beego.Info(upToken)

	/*
		// 设置上传凭证有效期
		putPolicy = storage.PutPolicy{
			Scope: bucket,
		}
		putPolicy.Expires = 7200 //示例2小时有效期

		upToken = putPolicy.UploadToken(mac)
		//fmt.Println(upToken)


			// 覆盖上传凭证
			// 需要覆盖的文件名
			keyToOverwrite := "qiniu.mp4"
			putPolicy = storage.PutPolicy{
				Scope: fmt.Sprintf("%s:%s", bucket, keyToOverwrite),
			}
			upToken = putPolicy.UploadToken(mac)
			fmt.Println(upToken)

			// 自定义上传回复凭证
			putPolicy = storage.PutPolicy{
				Scope:      bucket,
				ReturnBody: `{"key":"$(key)","hash":"$(etag)","fsize":$(fsize),"bucket":"$(bucket)","name":"$(x:name)"}`,
			}
			upToken = putPolicy.UploadToken(mac)
			fmt.Println(upToken)

			// 带回调业务服务器的凭证(JSON方式)
			putPolicy = storage.PutPolicy{
				Scope:            bucket,
				CallbackURL:      "http://api.example.com/qiniu/upload/callback",
				CallbackBody:     `{"key":"$(key)","hash":"$(etag)","fsize":$(fsize),"bucket":"$(bucket)","name":"$(x:name)"}`,
				CallbackBodyType: "application/json",
			}
			upToken = putPolicy.UploadToken(mac)
			fmt.Println(upToken)

			// 带回调业务服务器的凭证（URL方式）
			putPolicy = storage.PutPolicy{
				Scope:        bucket,
				CallbackURL:  "http://api.example.com/qiniu/upload/callback",
				CallbackBody: "key=$(key)&hash=$(etag)&bucket=$(bucket)&fsize=$(fsize)&name=$(x:name)",
			}
			upToken = putPolicy.UploadToken(mac)
			fmt.Println(upToken)

			// 带数据处理的凭证
			saveMp4Entry := base64.URLEncoding.EncodeToString([]byte(bucket + ":avthumb_test_target.mp4"))
			saveJpgEntry := base64.URLEncoding.EncodeToString([]byte(bucket + ":vframe_test_target.jpg"))
			//数据处理指令，支持多个指令
			avthumbMp4Fop := "avthumb/mp4|saveas/" + saveMp4Entry
			vframeJpgFop := "vframe/jpg/offset/1|saveas/" + saveJpgEntry
			//连接多个操作指令
			persistentOps := strings.Join([]string{avthumbMp4Fop, vframeJpgFop}, ";")
			pipeline := "test"
			putPolicy = storage.PutPolicy{
				Scope:               bucket,
				PersistentOps:       persistentOps,
				PersistentPipeline:  pipeline,
				PersistentNotifyURL: "http://api.example.com/qiniu/pfop/notify",
			}
			upToken = putPolicy.UploadToken(mac)
			fmt.Println(upToken)
	*/

	this.Ctx.WriteString("{\"uptoken\": \"" + upToken + "\"}")
}
