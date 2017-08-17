package routers

import (
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/context/param"
)

func init() {

	beego.GlobalControllerRouter["libertyblog/controllers/blog:MainController"] = append(beego.GlobalControllerRouter["libertyblog/controllers/blog:MainController"],
		beego.ControllerComments{
			Method: "Index",
			Router: `/:*`,
			AllowHTTPMethods: []string{"get"},
			MethodParams: param.Make(),
			Params: nil})

}
