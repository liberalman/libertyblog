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

	beego.GlobalControllerRouter["libertyblog/controllers/admin:AlbumController"] = append(beego.GlobalControllerRouter["libertyblog/controllers/admin:AlbumController"],
		beego.ControllerComments{
			Method: "Delete",
			Router: `/admin/album/delete`,
			AllowHTTPMethods: []string{"delete"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["libertyblog/controllers/admin:AlbumController"] = append(beego.GlobalControllerRouter["libertyblog/controllers/admin:AlbumController"],
		beego.ControllerComments{
			Method: "Hide",
			Router: `/admin/album/hide`,
			AllowHTTPMethods: []string{"get"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["libertyblog/controllers/admin:ArticleController"] = append(beego.GlobalControllerRouter["libertyblog/controllers/admin:ArticleController"],
		beego.ControllerComments{
			Method: "Comment",
			Router: `/admin/article/comment`,
			AllowHTTPMethods: []string{"post"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["libertyblog/controllers/admin:ArticleController"] = append(beego.GlobalControllerRouter["libertyblog/controllers/admin:ArticleController"],
		beego.ControllerComments{
			Method: "Save",
			Router: `/admin/article/save`,
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

	beego.GlobalControllerRouter["libertyblog/controllers/admin:PhotoController"] = append(beego.GlobalControllerRouter["libertyblog/controllers/admin:PhotoController"],
		beego.ControllerComments{
			Method: "Edit",
			Router: `/admin/photo/edit`,
			AllowHTTPMethods: []string{"post"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["libertyblog/controllers/admin:PhotoController"] = append(beego.GlobalControllerRouter["libertyblog/controllers/admin:PhotoController"],
		beego.ControllerComments{
			Method: "QiniuPhoto",
			Router: `/admin/photo/qiniuphoto`,
			AllowHTTPMethods: []string{"post"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["libertyblog/controllers/admin:PhotoController"] = append(beego.GlobalControllerRouter["libertyblog/controllers/admin:PhotoController"],
		beego.ControllerComments{
			Method: "UploadPhotos",
			Router: `/admin/photo/upload`,
			AllowHTTPMethods: []string{"post"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["libertyblog/controllers/admin:PhotoController"] = append(beego.GlobalControllerRouter["libertyblog/controllers/admin:PhotoController"],
		beego.ControllerComments{
			Method: "UpyunPhoto",
			Router: `/admin/photo/upyunphoto`,
			AllowHTTPMethods: []string{"post"},
			MethodParams: param.Make(),
			Params: nil})

}
