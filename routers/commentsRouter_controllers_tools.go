package routers

import (
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/context/param"
)

func init() {

	beego.GlobalControllerRouter["libertyblog/controllers/tools:MainController"] = append(beego.GlobalControllerRouter["libertyblog/controllers/tools:MainController"],
		beego.ControllerComments{
			Method: "Compare",
			Router: `/tools/compare`,
			AllowHTTPMethods: []string{"get"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["libertyblog/controllers/tools:MainController"] = append(beego.GlobalControllerRouter["libertyblog/controllers/tools:MainController"],
		beego.ControllerComments{
			Method: "Html2Markdwon",
			Router: `/tools/html2markdown`,
			AllowHTTPMethods: []string{"get"},
			MethodParams: param.Make(),
			Params: nil})

}
