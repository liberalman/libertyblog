package admin

import (
	"libertyblog/models"
	"strings"
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
