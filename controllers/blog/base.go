package blog

import (
	"libertyblog/models"
	"regexp"
	"strconv"
	"strings"
	"time"

	"github.com/astaxie/beego"
)

type baseController struct {
	beego.Controller
	options        map[string]string
	right          string
	page           int
	pagesize       int
	userid         int64
	username       string
	theme          string //对应数据表tb_option中的theme字段
	controllerName string
	actionName     string
}

func (this *baseController) Prepare() {
	var (
		pagesize int
		err      error
		page     int
	)

	this.options = models.GetOptions()
	this.Data["options"] = this.options
	this.Data["links"] = models.GetLinks()
	this.Data["hidejs"] = `<!--[if lt IE 9]>
  <script src="/views/double/js/modernizr.js"></script>
  <![endif]-->`

	if page, err = strconv.Atoi(this.Ctx.Input.Param(":page")); err != nil || page < 1 {
		page = 1
	}

	if pagesize, err = strconv.Atoi(this.getOption("pagesize")); err != nil || pagesize < 1 {
		pagesize = 10
	}
	this.page = page
	this.pagesize = pagesize

	controllerName, actionName := this.GetControllerAndAction()
	this.controllerName = strings.ToLower(controllerName[0 : len(controllerName)-10])
	this.actionName = strings.ToLower(actionName)

	// 检查是手机还是pc端
	// pc chrome [Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36]
	// iphone 微信浏览器 [Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_3 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G34 MicroMessenger/6.3.23 NetType/WIFI Language/zh_CN]
	reg := regexp.MustCompile(`iPhone|Android`)                     // 检查是否是从Android和ios上访问的
	if reg.MatchString(this.Ctx.Request.Header.Get("User-Agent")) { // 是手机访问
		this.theme = "mobile"
	} else {
		this.theme = "default"
		if v, ok := this.options["theme"]; ok && v != "" {
			this.theme = v
		}
	}

	this.Data["root"] = "/" + beego.BConfig.WebConfig.ViewsPath + "/" + this.theme + "/"
	//this.Data["staticPath"] = "https://o9gqjr7iy.bkt.clouddn.com/libertyblog/"
	this.Data["staticPath"] = "https://www.liberalman.cn/"
	//this.Data["staticPath"] = "http://localhost/static"
}

//渲染模版
func (this *baseController) display(tpl string, no_right int) {
	this.Layout = this.theme + "/layout.html"
	this.LayoutSections = make(map[string]string)
	this.LayoutSections["header"] = this.theme + "/header.html" // 头
	this.TplName = this.theme + "/" + tpl + ".html"             // 中间
	this.LayoutSections["footer"] = this.theme + "/footer.html" // 尾

	if 1 == no_right { // 1代表无右侧边栏
		this.Data["no_right"] = true
	} else {
		// 右侧内容
		this.ResetUser()
		this.Data["latestblog"] = models.GetLatestBlog()
		this.Data["hotblog"] = models.GetHotBlog() // 阅读排行
		this.LayoutSections["right"] = this.theme + "/right.html"
	}
}

func (this *baseController) display_no_layout(tpl string) {
	this.TplName = this.theme + "/" + tpl + ".html"
}

func (this *baseController) display_reg_login(tpl string) {
	this.LayoutSections = make(map[string]string)
	this.Layout = this.theme + "/layout_reg_login.html"
	this.LayoutSections["header"] = this.theme + "/head_reg_login.html"
	this.LayoutSections["footer"] = this.theme + "/foot_reg_login.html"
	this.TplName = this.theme + "/" + tpl + ".html"
}

/*
func (this *baseController) display_no_right(tpl string) {
	this.Layout = this.theme + "/layout_no_right.html"
	this.LayoutSections = make(map[string]string)
	this.LayoutSections["header"] = this.theme + "/header.html" // 头
	this.TplName = this.theme + "/" + tpl + ".html"             // 中间
	this.LayoutSections["footer"] = this.theme + "/footer.html" // 尾
}
*/
func (this *baseController) getOption(name string) string {
	if v, ok := this.options[name]; ok {
		return v
	} else {
		return ""
	}
}

func (this *baseController) setHeadFootMetas(params ...string) {
	title_buf := make([]string, 0, 3)
	if len(params) == 0 && this.getOption("subtitle") != "" {
		title_buf = append(title_buf, this.getOption("subtitle"))
	}
	if len(params) > 0 {
		title_buf = append(title_buf, params[0])
	}
	title_buf = append(title_buf, this.getOption("sitename"))
	this.Data["title"] = strings.Join(title_buf, " - ")

	if len(params) > 1 {
		this.Data["keywords"] = params[1]
	} else {
		this.Data["keywords"] = this.getOption("keywords")
	}

	if len(params) > 2 {
		this.Data["description"] = params[2]
	} else {
		this.Data["description"] = this.getOption("description")
	}
	this.Data["icp"] = this.getOption("icp")
}

func (this *baseController) ResetUser() {
	auth := this.Ctx.GetCookie("auth")
	result := regexp.MustCompile("[0-9]+").FindAllString(auth, -1)
	if nil != result {
		userid, _ := strconv.Atoi(result[0])
		user := models.GetUser(int64(userid)) // 获取用户信息
		this.Data["username"] = user.Username
		this.Data["email"] = user.Email
		this.Data["avatarurl"] = user.Avatarurl
		this.Data["userid"] = user.Id
		this.Data["post_count"] = user.Post_count     //发帖数量
		this.Data["follow_count"] = user.Follow_count //粉丝数量
	}
	/*var user *models.User = new(models.User)
	auth := this.Ctx.GetCookie("auth")
	result := regexp.MustCompile("[0-9]+").FindAllString(auth, -1)
	if nil != result {
		sid := result[0]
		key_username := "user_" + sid + "_username"
		key_email := "user_" + sid + "_email"
		key_avatarurl := "user_" + sid + "_avatarurl"
		this.Data["username"] = models.Cache.Get(key_username).(string)
		this.Data["email"] = models.Cache.Get(key_email).(string)
		this.Data["avatarurl"] = models.Cache.Get(key_avatarurl).(string)
		this.Data["userid"] = sid
		if "" == this.Data["email"] {
			id, _ := strconv.Atoi(sid)
			user.Id = int64(id)
			user.Read()
			models.Cache.Put(key_username, user.Username)
			models.Cache.Put(key_email, user.Email)
			models.Cache.Put(key_avatarurl, user.Avatarurl)
			this.Data["username"] = user.Username
			this.Data["email"] = user.Email
			this.Data["avatarurl"] = user.Avatarurl
		}
	}*/
}

//显示错误提示
func (this *baseController) showmsg(msg ...string) {
	if len(msg) == 1 {
		msg = append(msg, this.Ctx.Request.Referer())
	}
	this.Data["msg"] = msg[0]
	this.Data["redirect"] = msg[1]

	theme := "default"
	if v, ok := this.options["theme"]; ok && v != "" {
		theme = v
	}
	this.Layout = theme + "/layout_reg_login.html"
	this.LayoutSections = make(map[string]string)
	this.LayoutSections["head"] = theme + "/head_reg_login.html"
	this.LayoutSections["foot"] = theme + "/foot_reg_login.html"
	this.TplName = theme + "/" + "showmsg.html"
	this.Render()
	this.StopRun()
}

//是否post提交
func (this *baseController) isPost() bool {
	return this.Ctx.Request.Method == "POST"
}

//获取用户IP地址
func (this *baseController) getClientIp() string {
	s := strings.Split(this.Ctx.Request.RemoteAddr, ":")
	return s[0]
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
			this.Redirect("/login", 302)
		}
	}
}
