package routers

import (
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/context/param"
)

func init() {

	beego.GlobalControllerRouter["libertyblog/controllers/admin:AccountController"] = append(beego.GlobalControllerRouter["libertyblog/controllers/admin:AccountController"],
		beego.ControllerComments{
			Method: "PutAvatar",
			Router: `/admin/acccount/put_avatar`,
			AllowHTTPMethods: []string{"post"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["libertyblog/controllers/admin:ArticleController"] = append(beego.GlobalControllerRouter["libertyblog/controllers/admin:ArticleController"],
		beego.ControllerComments{
			Method: "Comment",
			Router: `/admin/article/comment`,
			AllowHTTPMethods: []string{"post"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["libertyblog/controllers/admin:CommentController"] = append(beego.GlobalControllerRouter["libertyblog/controllers/admin:CommentController"],
		beego.ControllerComments{
			Method: "Comment",
			Router: `/comment`,
			AllowHTTPMethods: []string{"post"},
			MethodParams: param.Make(),
			Params: nil})

}
