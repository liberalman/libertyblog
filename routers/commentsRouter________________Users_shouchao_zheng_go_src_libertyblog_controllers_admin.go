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

}
