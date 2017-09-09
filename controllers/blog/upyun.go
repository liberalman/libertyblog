package blog

import (
	"crypto/hmac"
	"crypto/sha1"
	"encoding/base64"
	"fmt"
	"libertyblog/models"
	"time"

	"github.com/astaxie/beego"
)

type UpyunController struct {
	baseController
}

var (
	upyun_passwd_md5 = beego.AppConfig.String("upyun_passwd_md5")
	upyun_operator   = beego.AppConfig.String("upyun_operator")
	upyun_bucket     = beego.AppConfig.String("upyun_bucket")
)

// @Title Get Upyun uptoken
// @Description Get Upyun uptoken
// @Param	objectId		path 	string	true		"the objectid you want to get"
// @Success 200 string {"uptoken": "0MLvWPnyya1WtPnXFy9KLyGHyFPNdZceomL..."}"
// @Failure 403 :objectId is empty
// @router /upyun/upload_photo_signature [get]
func (this *UpyunController) SignaturPolicy() {
	var method string = "PUT"
	var uri string = "/upyun-temp/demo.jpg"
	//t := time.Now().UnixNano()
	//filetype := "jpg"
	//filename = fmt.Sprintf("%s/%d.%s", savepath, t, filetype)
	now := time.Now()
	format := "Mon, 02 Jan 2006 15:04:05 GMT" // 必须的这个格式，要和又拍云的时间格式完全一致
	var date string = now.Format(format)
	var content_md5 string = this.GetString("content_md5") // "7ac66c0f148de9519b8bd264312c4d64"
	expiration := now.Unix() + 300                         // 授权过期时间，设为当前时间往后延5分钟

	var tosignature string
	var topolicy string
	if len(content_md5) > 0 {
		tosignature = method + "&" + uri + "&" + date + "&" + content_md5
		topolicy = fmt.Sprintf("{\"bucket\": \"%s\", \"save-key\": \"%s\", \"expiration\": \"%d\", \"date\": \"Wed, 09 Nov 2016 14:26:58 GMT\", \"content-md5\": \"%s\"}",
			upyun_bucket, uri, expiration, content_md5) // expiration:1478674618
	} else {
		tosignature = method + "&" + uri + "&" + date
		topolicy = fmt.Sprintf("{\"bucket\": \"%s\", \"save-key\": \"%s\", \"expiration\": \"%d\", \"date\": \"Wed, 09 Nov 2016 14:26:58 GMT\"}",
			upyun_bucket, uri, expiration) // expiration:1478674618
	}

	//hmac ,use sha1
	key := []byte(upyun_passwd_md5)
	mac := hmac.New(sha1.New, key)
	mac.Write([]byte(tosignature))
	//Go 同时支持标准的和 URL 兼容的 base64 格式。编码需要使用 []byte 类型的参数，所以要将字符串转成此类型。
	signature := base64.StdEncoding.EncodeToString(mac.Sum(nil))
	policy := base64.StdEncoding.EncodeToString([]byte(topolicy))
	authorization := fmt.Sprintf("UPYUN %s:%s", upyun_operator, signature)

	ret := models.Ret{Code: 0, Message: "get signature success"}
	var data map[string]string = map[string]string{}
	data["signature"] = signature
	data["policy"] = policy
	data["authorization"] = authorization
	ret.Data = data
	this.Data["json"] = ret
	this.ServeJSON()
}
