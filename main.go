package main

import (
	"fmt"
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
	logLevel, _ := beego.AppConfig.Int("LogLevel")
	logcfg := fmt.Sprintf(`{"filename":"%s", "level":%d}`, beego.AppConfig.String("LogPath"), logLevel)
	beego.SetLogger(logs.AdapterFile, logcfg)
	beego.Run()
}
