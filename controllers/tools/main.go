package tools

import (
	"github.com/astaxie/beego"
)

type MainController struct {
	beego.Controller
}

func (this *MainController) Prepare() {
	this.Layout = "tools/layout.html"
}

// @Title compare
// @Description Search article or user
// @Param	key		query 	int64	true		"article id or user id"
// @Success 200 {int} models.User.Id
// @Failure 403 body is empty
// @router /tools/compare [get]
func (this *MainController) Compare() {
	this.TplName = "tools/compare.html"
}

// @Title html to markdown
// @Description html to markdown
// @Param	key		query 	int64	true		"article id or user id"
// @Success 200 {int} models.User.Id
// @Failure 403 body is empty
// @router /tools/html2markdown [get]
func (this *MainController) Html2Markdwon() {
	this.TplName = "tools/html2markdown.html"
}

// @router /tools/jsformat [get]
func (this *MainController) JsFormat() {
	this.TplName = "tools/jsformat.html"
}

// @router /tools/url [get]
func (this *MainController) Url() {
	this.TplName = "tools/url.html"
}

// @router /tools/time [get]
func (this *MainController) Time() {
	this.TplName = "tools/time.html"
}

// @router /tools/vim [get]
func (this *MainController) Vim() {
	this.TplName = "tools/vim.html"
}

// @router /tools/ascii [get,post]
func (this *MainController) Ascii() {
	this.TplName = "tools/ascii.html"
}
