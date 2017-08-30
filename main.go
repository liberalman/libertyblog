package main

import (
	"fmt"
	"libertyblog/controllers"
	_ "libertyblog/models"
	_ "libertyblog/routers"
	"net/http"
	"strings"

	"github.com/astaxie/beego"
	"github.com/astaxie/beego/context"
	"github.com/astaxie/beego/logs"
)

var (
	defHomes []string = []string{"/"}
)

func TransparentStatic(ctx *context.Context) {
	// 拦截 assets/* 、 images/* 这两个路径，修改路径值到views/future下。别的路径都放过
	if strings.Index(ctx.Request.URL.Path, "assets/") >= 0 || strings.Index(ctx.Request.URL.Path, "images/") >= 0 {
		http.ServeFile(ctx.ResponseWriter, ctx.Request, "views/future/"+ctx.Request.URL.Path)
		return
	}
}

func main() {
	//	beego.SetStaticPath("/css", "static/css")
	//	beego.SetStaticPath("/js", "static/js")
	//	beego.SetStaticPath("/img", "static/img")
	//	beego.SetStaticPath("/fonts", "static/fonts")
	//	beego.SetStaticPath("/editor.md", "static/editor.md")
	//	beego.SetStaticPath("/xiaojing", "static/xiaojing")
	if beego.BConfig.RunMode == "dev" {
		beego.BConfig.WebConfig.DirectoryIndex = true
		beego.BConfig.WebConfig.StaticDir["/swagger"] = "swagger"
	}
	logLevel, _ := beego.AppConfig.Int("LogLevel")
	logcfg := fmt.Sprintf(`{"filename":"%s", "level":%d}`, beego.AppConfig.String("LogPath"), logLevel)
	beego.SetLogger(logs.AdapterFile, logcfg)
	beego.ErrorController(&controllers.ErrorController{})

	//透明static。beego对静态路径的支持不好，我把路径拦截，自己处理。
	//beego.InsertFilter("/", beego.BeforeRouter, TransparentStatic) //must has this for default page
	//beego.InsertFilter("/*", beego.BeforeRouter, TransparentStatic)

	beego.Run()
}
