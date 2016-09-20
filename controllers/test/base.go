package test

import (
	"github.com/astaxie/beego"
)

type baseController struct {
	beego.Controller
}

func (this *baseController) Prepare() {
}

func (this *baseController) display(tpl string) {
	
}


func (this *baseController) setHeadMetas(params ...string) {
	
}
