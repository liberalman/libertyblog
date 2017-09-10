package blog

import (
	"crypto/hmac"
	"crypto/sha1"
	"encoding/base64"
	"fmt"
	"libertyblog/models"
	"time"

	"github.com/astaxie/beego"
	//"github.com/upyun/go-sdk/upyun"
)

type UpyunController struct {
	baseController
}

var (
	upyun_passwd_md5 = beego.AppConfig.String("upyun_passwd_md5")
	upyun_operator   = beego.AppConfig.String("upyun_operator")
	upyun_bucket     = beego.AppConfig.String("upyun_bucket")
)

type UpyunAuthConfig struct {
	Bucket     string `"name:bucket"`
	SaveKey    string `"name:save-key"`
	Expiration string `"name:expiration"`
	DateStr    string `"name:date"`
	ContentMD5 string `"name:content-md5"`
}

// @Title Get Upyun uptoken
// @Description Get Upyun uptoken
// @Param	objectId		path 	string	true		"the objectid you want to get"
// @Success 200 string {"uptoken": "0MLvWPnyya1WtPnXFy9KLyGHyFPNdZceomL..."}"
// @Failure 403 :objectId is empty
// @router /upyun/upload_photo_signature [get]
func (this *UpyunController) SignaturPolicy() {
	/*up := upyun.NewUpYun(&upyun.UpYunConfig{
		Bucket:   upyun_bucket,
		Operator: upyun_operator,
		Password: "456RTYfgh",
	})
	// 上传文件
	fmt.Println(up.Put(&upyun.PutObjectConfig{
		Path:      "/demo.jpg",
		LocalPath: "./demo.jpg",
	}))*/

	var method string = "PUT"
	var uri string = "/demo.jpg"
	//t := time.Now().UnixNano()
	//filetype := "jpg"
	//filename = fmt.Sprintf("%s/%d.%s", savepath, t, filetype)

	now := time.Now()
	var datestr string = now.Format("Mon, 02 Jan 2006 15:04:05 GMT") // 必须的这个格式，要和又拍云的时间格式完全一致
	var content_md5 string = this.GetString("content_md5")           // "7ac66c0f148de9519b8bd264312c4d64"
	expiration := now.Unix() + 300                                   // 授权过期时间，设为当前时间往后延5分钟.自定义签名有效期，建议为 30 分钟。如果签名超过有效期，需要重新生成签名。

	var tosignature string
	var policy string
	if len(content_md5) > 0 {
		tmp := fmt.Sprintf("{\"bucket\": \"%s\", \"save-key\": \"%s\", \"expiration\": \"%d\", \"content-md5\": \"%s\"}",
			upyun_bucket, uri, expiration, content_md5)
		policy = base64.StdEncoding.EncodeToString([]byte(tmp))
		tosignature = method + "&" + uri + "&" + datestr + "&" + policy + "&" + content_md5
	} else {

		tmp := fmt.Sprintf("{\"bucket\": \"%s\", \"save-key\": \"%s\", \"expiration\": \"%d\"}",
			upyun_bucket, uri, expiration)
		policy = base64.StdEncoding.EncodeToString([]byte(tmp))
		tosignature = method + "&" + uri + "&" + datestr + "&" + policy
	}

	authorization := "UPYUN " + upyun_operator + ":" + base64.StdEncoding.EncodeToString(hmacSha1(upyun_passwd_md5, []byte(tosignature)))

	ret := models.Ret{Code: 0, Message: "get signature success"}
	var data map[string]string = map[string]string{}
	data["policy"] = policy
	data["date"] = datestr
	data["bucket"] = bucket
	data["save_key"] = uri
	data["expiration"] = fmt.Sprintf("%d", expiration)
	data["content_md5"] = content_md5
	data["authorization"] = authorization
	ret.Data = data
	this.Data["json"] = ret
	this.ServeJSON()
}

func hmacSha1(key string, data []byte) []byte {
	hm := hmac.New(sha1.New, []byte(key))
	hm.Write(data)
	return hm.Sum(nil)
}
