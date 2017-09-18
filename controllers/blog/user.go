package blog

import (
	"fmt"
	"libertyblog/models"
	"strconv"
	"strings"

	"github.com/astaxie/beego/validation"
)

type UserController struct {
	baseController
}

// @Title Register
// @Description register
// @Param	username		path 	string	true		"username"
// @Param	password		path 	string	true		"password"
// @Param	password_confirmation		path 	string	true		"password confirmation, must be equal to password"
// @Param	email		path 	string	true		"email"
// @Success 200 {object} models.User
// @Failure 403 :objectId is empty
// @router /register [post]
func (this *UserController) Register() {
	ret := models.Ret{Code: 0, Message: "success", Data: ""}

	var user models.User
	var authkey string

	username := strings.TrimSpace(this.GetString("username"))
	password := strings.TrimSpace(this.GetString("password"))
	password_confirmation := strings.TrimSpace(this.GetString("password_confirmation"))
	email := strings.TrimSpace(this.GetString("email"))
	//active, _ := this.GetInt64("active")

	valid := validation.Validation{}

	if v := valid.Required(username, "username"); !v.Ok {
		ret.Code = -1
		ret.Message = "请输入用户名"
		goto end
	} else if v := valid.MaxSize(username, 15, "username"); !v.Ok {
		ret.Code = -2
		ret.Message = "用户名长度不能大于15个字符"
		goto end
	}

	if v := valid.Required(password, "password"); !v.Ok {
		ret.Code = -3
		ret.Message = "请输入密码"
		goto end
	}

	if v := valid.Required(password_confirmation, "password_confirmation"); !v.Ok {
		ret.Code = -4
		ret.Message = "请再次输入密码"
		goto end
	} else if password != password_confirmation {
		ret.Code = -5
		ret.Message = "两次输入的密码不一致"
		goto end
	}

	if v := valid.Required(email, "email"); !v.Ok {
		ret.Code = -6
		ret.Message = "请输入email地址"
		goto end
	} else if v := valid.Email(email, "email"); !v.Ok {
		ret.Code = -7
		ret.Message = "Email无效"
		goto end
	}

	/*if active > 0 {
		active = 1
	} else {
		active = 0
	}*/

	user.Username = username
	user.Password = models.Md5([]byte(password))
	user.Email = email
	//user.Active = int8(active)
	user.Active = 1
	if err := user.Insert(); err != nil {
		ret.Code = -8
		ret.Message = err.Error()
		goto end
	}

	// set login status
	user.Logincount += 1
	user.Lastip = this.getClientIp()
	user.Lastlogin = this.getTime()
	user.Update()
	authkey = models.Md5([]byte(this.getClientIp() + "|" + user.Password))
	this.Ctx.SetCookie("auth", strconv.FormatInt(user.Id, 10)+"|"+authkey)

	ret.Code = 0

end:
	this.Data["json"] = ret
	this.ServeJSON()
}

// @Title Login
// @Description Login
// @Param	username		path 	string	true		"username or email"
// @Param	password		path 	string	true		"password"
// @Success 200 {object} models.User
// @Failure 403 :objectId is empty
// @router /login [get,post]
func (this *UserController) Login() {
	if "POST" == this.Ctx.Request.Method { // 如果是post,表明提交登录信息
		username := strings.TrimSpace(this.GetString("username"))
		password := strings.TrimSpace(this.GetString("password"))
		remember := this.GetString("remember") // 是否需要记住登录状态7天
		if username != "" && password != "" {
			var user models.User
			// 先检查用户名
			user.Username = username
			fmt.Println("a1", user.Read("username"))
			if nil != user.Read("username") { // Read 返回nil说明成功
				// 无此用户名，接下来检查邮箱
				user.Email = username
				if nil != user.Read("email") {
					this.Ctx.WriteString("无此邮箱/帐号")
					return
				}
			}

			//账户和邮箱任填一个就行，会分别去查询是否存在
			if user.Password != models.Md5([]byte(password)) {
				this.Ctx.WriteString("密码错误")
				return
			} else if user.Active == 0 {
				this.Ctx.WriteString("该帐号未激活")
				return
			} else {
				user.Logincount += 1
				user.Lastip = this.getClientRealIp()
				user.Lastlogin = this.getTime()
				user.Update()
				authkey := models.Md5([]byte(this.getClientIp() + "|" + user.Password))
				if remember == "yes" {
					// 记住我一周 按钮被勾选
					this.Ctx.SetCookie("auth", strconv.FormatInt(user.Id, 10)+"|"+authkey, 7*86400)
				} else {
					this.Ctx.SetCookie("auth", strconv.FormatInt(user.Id, 10)+"|"+authkey)
				}
				this.Ctx.WriteString("0")
				return
			}
		}
	} else {
		this.display_reg_login1("login") // 显示登录页面
	}
}

//退出登录
func (this *UserController) Logout() {
	this.Ctx.SetCookie("auth", "")
	this.Redirect("/", 302)
}

//第三方QQ登录
func (this *UserController) Ajax_qqLogin() {
	var user models.User
	user.Qq_openid = strings.TrimSpace(this.GetString("openid"))
	if err := user.Read("qq_openid"); nil != err { // 无此openid，是新增用户，需要注册
		user.Username = strings.TrimSpace(this.GetString("nickname"))
		user.Qq_accesstoken = strings.TrimSpace(this.GetString("accesstoken"))
		user.Avatarurl = strings.TrimSpace(this.GetString("avatarUrl"))
		user.Active = 1                       // 激活状态
		if err := user.Insert(); nil != err { // 插入
			this.Ctx.WriteString(err.Error())
			return
		} else {
			user.Read("qq_openid") // 插入成功后，重新读取
		}
	}
	// 查到有消息，或者新插入后，更新下信息
	this.updateLoginStatus(&user)
}

// 第三方登录回调地址
func (this *UserController) Callback() {
	//qq第三方登录回调 https://www.liberalman.cn/login/callback?#access_token=7CECDDE66B653E9B715356050F1E4748&expires_in=7776000
	this.Ctx.WriteString("<script type=\"text/javascript\" src=\"https://qzonestyle.gtimg.cn/qzone/openapi/qc_loader.js\" charset=\"utf-8\" data-callback=\"true\"></script>")
}

func (this *UserController) updateLoginStatus(user *models.User) {
	user.Logincount += 1
	user.Lastip = this.getClientIp()
	user.Lastlogin = this.getTime()
	user.Update()
	authkey := models.Md5([]byte(this.getClientIp() + "|" + user.Password))
	this.Ctx.SetCookie("auth", strconv.FormatInt(user.Id, 10)+"|"+authkey)
	this.Ctx.WriteString("0") // 登录成功
}

// @Title get user Details
// @Description get user Details
// @Param	userid		path 	int64	true		"userid"
// @Success 200 {object} models.User
// @Failure 403 :userid is empty
// @router /user/:userid:int [get]
func (this *UserController) User() {
	userid, _ := strconv.Atoi(this.Ctx.Input.Param(":userid"))
	user := models.CacheGetUser(int64(userid))
	list, count := models.QueryMyPhotoList(int64(userid), this.page, this.pagesize)
	if this.IsAjax() {
		data := map[string]interface{}{}
		ret := models.NewRet(0, "", user)
		data["user"] = user
		data["list"] = list
		data["count"] = count
		ret.Data = data
		this.Data["json"] = ret
		this.ServeJSON()
	} else {
		this.Data["user"] = user
		this.Data["list"] = list
		this.display_no_layout("user")
	}
}
