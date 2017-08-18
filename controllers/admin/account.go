package admin

import (
	"fmt"
	"libertyblog/models"
	"os"
	"strconv"
	"strings"
	"time"
)

type AccountController struct {
	baseController
}

//资料修改
func (this *AccountController) Profile() {
	user := models.User{Id: this.userid}
	if err := user.Read(); err != nil {
		this.showmsg(err.Error())
	}
	if this.Ctx.Request.Method == "POST" {
		var errmsg string
		//errmsg := make(map[string]string)
		password := strings.TrimSpace(this.GetString("password"))
		newpassword := strings.TrimSpace(this.GetString("newpassword"))
		newpassword2 := strings.TrimSpace(this.GetString("newpassword2"))
		//updated := false
		if newpassword != "" {
			if password == "" || models.Md5([]byte(password)) != user.Password {
				//errmsg["password"] = "当前密码错误"
				errmsg = "当前密码错误"
			} else if len(newpassword) < 6 {
				//errmsg["newpassword"] = "密码长度不能少于6个字符"
				errmsg = "密码长度不能少于6个字符"
			} else if newpassword != newpassword2 {
				//errmsg["newpassword2"] = "两次输入的密码不一致"
				errmsg = "两次输入的密码不一致"
			}
			if len(errmsg) == 0 { // 无错误
				user.Password = models.Md5([]byte(newpassword))
				user.Update("password")
				//updated = true
				errmsg = "0" // 成功返回0
			}
		}
		//this.Data["updated"] = updated
		//this.Data["errmsg"] = errmsg
		this.Ctx.WriteString(errmsg)
		return
	}
	this.Data["user"] = user // 获取个人信息页面
	this.display1("account_profile")
}

func (this *AccountController) UpdateProfile() {
	// 验证身份
	user := models.User{Id: this.userid}
	if err := user.Read(); err != nil {
		this.Ctx.WriteString(err.Error())
		return
	}
	user.Username = strings.TrimSpace(this.GetString("username"))
	user.Email = strings.TrimSpace(this.GetString("email"))
	if err := user.Update("username", "email"); err != nil {
		this.Ctx.WriteString(err.Error())
	} else {
		this.Ctx.WriteString("0") // 成功返回0
	}
}

// @router /admin/acccount/put_avatar [post]
func (this *AccountController) PutAvatar() {
	var success int = 1
	var url string
	var message string
	var savepath string

	// 验证身份
	user := models.User{Id: this.userid}
	if err := user.Read(); err != nil {
		this.Ctx.WriteString(err.Error())
		return
	}

	utype := this.GetString("type")
	if utype == "" {
		utype = "1"
	}
	index, _ := strconv.Atoi(utype)
	_, header, err := this.GetFile("editormd-image-file")
	if err != nil {
		success = -1
		message = err.Error()
	} else {
		fileType := strings.ToLower(header.Filename[strings.LastIndex(header.Filename, "."):])
		savepath = pathArr[index] + time.Now().Format("20060102")
		if err = os.MkdirAll(savepath, os.ModePerm); err != nil {
			success = -2
			message = err.Error()
		} else {
			filename := fmt.Sprintf("%s/%d%s", savepath, time.Now().UnixNano(), fileType)
			fmt.Println("socho", filename)
			if err = this.SaveToFile("editormd-image-file", filename); err != nil {
				success = -4
				message = err.Error()
			}
			url = filename[1:]
		}
	}

	if 1 == success {
		oldAvatarurl := user.Avatarurl
		user.Avatarurl = url
		if err := user.Update("avatarurl"); err != nil {
			success = -5
			message = err.Error()
		} else {
			// delete old avatar file。 don't forget to add '.' to old avatar
			if err := os.Remove("." + oldAvatarurl); nil != err {
				message = err.Error()
			}
		}
	}

	this.Ctx.WriteString(fmt.Sprintf("{\"success\":%d,\"url\":\"%s\",\"message\":\"%s\"}", success, url, message))
}
