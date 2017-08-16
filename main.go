package main

import (
	_ "libertyblog/models"
	_ "libertyblog/routers"

	"github.com/astaxie/beego"
	"github.com/astaxie/beego/logs"
)

func main() {
	//	beego.SetStaticPath("/css", "static/css")
	//	beego.SetStaticPath("/js", "static/js")
	//	beego.SetStaticPath("/img", "static/img")
	//	beego.SetStaticPath("/fonts", "static/fonts")
	//	beego.SetStaticPath("/editor.md", "static/editor.md")
	//	beego.SetStaticPath("/xiaojing", "static/xiaojing")
	beego.SetLogger(logs.AdapterFile, `{"filename":"libertyblog.log", "level":6}`)
	beego.Run()
}
