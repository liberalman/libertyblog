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

	/*t, _ := this.GetInt64("date")
	now := time.Unix(t, 0)*/

	now := time.Now()
	var date string = now.Format("Mon, 02 Jan 2006 15:04:05 GMT") // 必须的这个格式，要和又拍云的时间格式完全一致
	var content_md5 string = this.GetString("content_md5")        // "7ac66c0f148de9519b8bd264312c4d64"
	expiration := now.Unix() + 300                                // 授权过期时间，设为当前时间往后延5分钟.自定义签名有效期，建议为 30 分钟。如果签名超过有效期，需要重新生成签名。

	var tosignature string
	var policy string
	if len(content_md5) > 0 {
		tmp := fmt.Sprintf("{\"bucket\": \"%s\", \"save-key\": \"%s\", \"expiration\": \"%d\", \"date\": \"%s\", \"content-md5\": \"%s\"}",
			upyun_bucket, uri, expiration, date, content_md5)
		policy = base64.StdEncoding.EncodeToString([]byte(tmp))
		tosignature = method + "&" + uri + "&" + date + "&" + policy + "&" + content_md5
	} else {

		tmp := fmt.Sprintf("{\"bucket\": \"%s\", \"save-key\": \"%s\", \"expiration\": \"%d\", \"date\": \"%s\"}",
			upyun_bucket, uri, expiration, date)
		policy = base64.StdEncoding.EncodeToString([]byte(tmp))
		tosignature = method + "&" + uri + "&" + date + "&" + policy
	}

	//hmac ,use sha1
	key := []byte(upyun_passwd_md5)
	mac := hmac.New(sha1.New, key)
	mac.Write([]byte(tosignature))
	//Go 同时支持标准的和 URL 兼容的 base64 格式。编码需要使用 []byte 类型的参数，所以要将字符串转成此类型。
	signature := base64.StdEncoding.EncodeToString(mac.Sum(nil))
	authorization := fmt.Sprintf("UPYUN %s:%s", upyun_operator, signature)

	ret := models.Ret{Code: 0, Message: "get signature success"}
	var data map[string]string = map[string]string{}
	data["signature"] = signature
	data["policy"] = policy
	data["date"] = date
	data["authorization"] = authorization
	ret.Data = data
	this.Data["json"] = ret
	this.ServeJSON()
}
