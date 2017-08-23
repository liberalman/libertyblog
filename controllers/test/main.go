package test

import (
	"github.com/astaxie/beego"
	//"blog/models"
	//"strconv"
	//"strings"
	//"fmt"
)

type MainController struct {
	beego.Controller
}

func (this *MainController) Prepare() {
	this.Data["root"] = "views/test/"
}

func (this *MainController) Index() {
	this.TplName = "test/index.html"
}
func (this *MainController) Box() {
	this.TplName = "test/box/index.html"
}
func (this *MainController) Slicebox3d() {
	this.TplName = "test/slicebox3d/index.html"
}
