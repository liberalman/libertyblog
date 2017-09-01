package routers

import (
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/context/param"
)

func init() {

	beego.GlobalControllerRouter["libertyblog/controllers/test:MainController"] = append(beego.GlobalControllerRouter["libertyblog/controllers/test:MainController"],
		beego.ControllerComments{
			Method: "Jstools",
			Router: `/jstools`,
			AllowHTTPMethods: []string{"get"},
			MethodParams: param.Make(),
			Params: nil})

}
