package routers

import (
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/context/param"
)

func init() {

	beego.GlobalControllerRouter["libertyblog/controllers/blog:MainController"] = append(beego.GlobalControllerRouter["libertyblog/controllers/blog:MainController"],
		beego.ControllerComments{
			Method: "Index",
			Router: `/`,
			AllowHTTPMethods: []string{"get"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["libertyblog/controllers/blog:MainController"] = append(beego.GlobalControllerRouter["libertyblog/controllers/blog:MainController"],
		beego.ControllerComments{
			Method: "About",
			Router: `/about`,
			AllowHTTPMethods: []string{"get"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["libertyblog/controllers/blog:MainController"] = append(beego.GlobalControllerRouter["libertyblog/controllers/blog:MainController"],
		beego.ControllerComments{
			Method: "Search",
			Router: `/search`,
			AllowHTTPMethods: []string{"get"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["libertyblog/controllers/blog:MainController"] = append(beego.GlobalControllerRouter["libertyblog/controllers/blog:MainController"],
		beego.ControllerComments{
			Method: "Webscan_360",
			Router: `/webscan_360_cn.html`,
			AllowHTTPMethods: []string{"get"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["libertyblog/controllers/blog:ObjectController"] = append(beego.GlobalControllerRouter["libertyblog/controllers/blog:ObjectController"],
		beego.ControllerComments{
			Method: "Get",
			Router: `/get_user:objectId`,
			AllowHTTPMethods: []string{"get"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["libertyblog/controllers/blog:PhotoController"] = append(beego.GlobalControllerRouter["libertyblog/controllers/blog:PhotoController"],
		beego.ControllerComments{
			Method: "All",
			Router: `/blog/photo/all`,
			AllowHTTPMethods: []string{"get"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["libertyblog/controllers/blog:PhotoController"] = append(beego.GlobalControllerRouter["libertyblog/controllers/blog:PhotoController"],
		beego.ControllerComments{
			Method: "Recomend",
			Router: `/blog/photo/recommend`,
			AllowHTTPMethods: []string{"get"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["libertyblog/controllers/blog:QiniuController"] = append(beego.GlobalControllerRouter["libertyblog/controllers/blog:QiniuController"],
		beego.ControllerComments{
			Method: "UpToken",
			Router: `/qiniu/uptoken`,
			AllowHTTPMethods: []string{"get"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["libertyblog/controllers/blog:TimelineController"] = append(beego.GlobalControllerRouter["libertyblog/controllers/blog:TimelineController"],
		beego.ControllerComments{
			Method: "Index",
			Router: `/blog/timeline/:userid:int`,
			AllowHTTPMethods: []string{"get"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["libertyblog/controllers/blog:UpyunController"] = append(beego.GlobalControllerRouter["libertyblog/controllers/blog:UpyunController"],
		beego.ControllerComments{
			Method: "SignaturPolicy",
			Router: `/upyun/upload_photo_signature`,
			AllowHTTPMethods: []string{"get"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["libertyblog/controllers/blog:UserController"] = append(beego.GlobalControllerRouter["libertyblog/controllers/blog:UserController"],
		beego.ControllerComments{
			Method: "Login",
			Router: `/login`,
			AllowHTTPMethods: []string{"get","post"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["libertyblog/controllers/blog:UserController"] = append(beego.GlobalControllerRouter["libertyblog/controllers/blog:UserController"],
		beego.ControllerComments{
			Method: "Register",
			Router: `/register`,
			AllowHTTPMethods: []string{"post"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["libertyblog/controllers/blog:UserController"] = append(beego.GlobalControllerRouter["libertyblog/controllers/blog:UserController"],
		beego.ControllerComments{
			Method: "User",
			Router: `/user/:userid:int`,
			AllowHTTPMethods: []string{"get"},
			MethodParams: param.Make(),
			Params: nil})

}
