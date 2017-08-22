package admin

import (
	"libertyblog/models"
	"strconv"
	"strings"
	"time"

	"github.com/astaxie/beego"
)

const (
	BIG_PIC_PATH   = "./static/upload/bigpic/"
	SMALL_PIC_PATH = "./static/upload/smallpic/"
	FILE_PATH      = "./static/upload/attachment/"
)

var pathArr []string = []string{"", BIG_PIC_PATH, SMALL_PIC_PATH, FILE_PATH}

type baseController struct {
	beego.Controller
	userid         int64
	username       string
	theme          string // 主题模板
	controllerName string
	actionName     string
}

func (this *baseController) Prepare() {
	controllerName, actionName := this.GetControllerAndAction()
	this.theme = "admin"
	this.controllerName = strings.ToLower(controllerName[0 : len(controllerName)-10])
	this.actionName = strings.ToLower(actionName)
	this.auth()
	this.checkPermission()
}

//登录状态验证
func (this *baseController) auth() {
	if this.controllerName == "account" && (this.actionName == "login" || this.actionName == "logout") {

	} else {
		arr := strings.Split(this.Ctx.GetCookie("auth"), "|")
		if len(arr) == 2 {
			idstr, password := arr[0], arr[1]
			userid, _ := strconv.ParseInt(idstr, 10, 0)
			if userid > 0 {
				var user models.User
				user.Id = userid
				if user.Read() == nil && password == models.Md5([]byte(this.getClientIp()+"|"+user.Password)) {
					this.userid = user.Id
					this.username = user.Username
				}
			}
		}
		if this.userid == 0 {
			if this.IsAjax() {
				ret := models.Ret{Code: -1, Message: "please login!", Data: ""}
				this.Data["json"] = ret
				this.ServeJSON()
			} else {
				this.Redirect("/login", 302)
			}
		}
	}
}

//渲染模版
func (this *baseController) display(tpl ...string) {
	var tplname string
	if len(tpl) == 1 {
		tplname = this.theme + "/" + tpl[0] + ".html"
	} else {
		tplname = this.theme + "/" + this.controllerName + "_" + this.actionName + ".html"
	}
	this.Data["version"] = beego.AppConfig.String("AppVer")
	this.Data["adminid"] = this.userid
	this.Data["adminname"] = this.username
	setLayout(this)
	this.TplName = tplname
}

//显示错误提示
func (this *baseController) showmsg(msg ...string) {
	if len(msg) == 1 {
		msg = append(msg, this.Ctx.Request.Referer())
	}
	this.Data["adminid"] = this.userid
	this.Data["adminname"] = this.username
	this.Data["msg"] = msg[0]
	this.Data["redirect"] = msg[1]
	setLayout(this)

	this.TplName = this.theme + "/" + "showmsg.html"
	this.Render()
	this.StopRun()
}

//获取用户IP地址
func (this *baseController) getClientIp() string {
	s := strings.Split(this.Ctx.Request.RemoteAddr, ":")
	return s[0]
}

//权限验证
func (this *baseController) checkPermission() {
	if this.userid != 1 && (this.controllerName == "user" || this.controllerName == "system") { //添加用户，系统设置选项卡不允许普通用户修改
		this.showmsg("抱歉，只有超级管理员才能进行该操作！")
	}
}

func (this *baseController) getTime() time.Time {
	options := models.GetOptions()
	timezone := float64(0)
	if v, ok := options["timezone"]; ok {
		timezone, _ = strconv.ParseFloat(v, 64)
	}
	add := timezone * float64(time.Hour)
	return time.Now().UTC().Add(time.Duration(add))
}

// 用户id是1的，给展示超级管理员，否则是用个个人的管理页面
func setLayout(this *baseController) {
	if 1 == this.userid {
		this.Layout = this.theme + "/layout_super_admin.html"
	} else {
		this.Layout = this.theme + "/layout_admin.html"
	}
}
