package routers

import (
	"libertyblog/controllers/admin"
	"libertyblog/controllers/blog"
	"libertyblog/controllers/test"
	"libertyblog/controllers/tools"

	"github.com/astaxie/beego"
)

func init() {

	ns := beego.NewNamespace("/v1",
		beego.NSNamespace("/object",
			beego.NSInclude(
				&blog.ObjectController{},
			),
		),
		beego.NSInclude(
			&blog.MainController{},
		),
		beego.NSInclude(
			&blog.UserController{},
		),
		beego.NSInclude(
			&blog.PhotoController{},
		),
		beego.NSInclude(
			&admin.CommentController{},
		),
		beego.NSInclude(
			&admin.PhotoController{},
		),
		beego.NSInclude(
			&admin.AlbumController{},
		),
		beego.NSInclude(
			&admin.TimelineController{},
		),
		beego.NSInclude(
			&test.MainController{},
		),
		beego.NSInclude(
			&blog.QiniuController{},
		),
		beego.NSInclude(
			&blog.TimelineController{},
		),
		beego.NSInclude(
			&blog.ArticleController{},
		),
		beego.NSInclude(
			&blog.UpyunController{},
		),
		beego.NSInclude(
			&blog.SearchController{},
		),
		beego.NSInclude(
			&tools.MainController{},
		),
	)
	beego.AddNamespace(ns)

	beego.Include(&blog.MainController{})
	beego.Include(&blog.UserController{})
	beego.Include(&blog.PhotoController{})
	beego.Include(&admin.AccountController{})
	beego.Include(&admin.ArticleController{})
	beego.Include(&admin.CommentController{})
	beego.Include(&admin.PhotoController{})
	beego.Include(&admin.AlbumController{})
	beego.Include(&admin.TimelineController{})
	beego.Include(&test.MainController{})
	beego.Include(&blog.QiniuController{})
	beego.Include(&blog.UpyunController{})
	beego.Include(&blog.TimelineController{})
	beego.Include(&blog.ArticleController{})
	beego.Include(&blog.SearchController{})
	beego.Include(&tools.MainController{})

	//前台路由
	beego.Router("/404.html", &blog.MainController{}, "*:Go404")
	beego.Router("/index:page:int.html", &blog.MainController{}, "*:Index")

	beego.Router("/article/:id:int", &blog.ArticleController{}, "*:Index")            //ID访问
	beego.Router("/article/:urlname(.+)", &blog.ArticleController{}, "*:Index")       //别名访问文章
	beego.Router("/articles/:userid:int", &blog.ArticleController{}, "*:SomeoneList") //访问某个用户的文章列表
	beego.Router("/articles/:userid:int/index:page:int.html", &blog.ArticleController{}, "*:SomeoneList")
	beego.Router("/articles/index:page:int.html", &blog.ArticleController{}, "*:Index1")

	beego.Router("/category/:name(.+?)", &blog.MainController{}, "*:Category")
	beego.Router("/category/:name(.+?)/page/:page:int", &blog.MainController{}, "*:Category")

	//照片展示
	beego.Router("/blog/album.html", &blog.PhotoController{}, "*:PhotosInAlbum")
	beego.Router("/blog/album:page:int.html", &blog.PhotoController{}, "*:PhotosInAlbum")

	//相册展示
	beego.Router("/album.html", &blog.PhotoController{}, "*:Albums")
	beego.Router("/album:page:int.html", &blog.PhotoController{}, "*:Albums")

	beego.Router("/blog/timeline/list:page:int.html", &blog.TimelineController{}, "*:List")
	beego.Router("/search:page:int.html", &blog.SearchController{}, "*:Search")

	beego.Router("/:urlname(.+)", &blog.ArticleController{}, "*:Index") //别名访问

	beego.Router("/login/callback", &blog.UserController{}, "*:Callback")
	beego.Router("/login/qqlogin", &blog.UserController{}, "*:Ajax_qqLogin")
	beego.Router("/user/logout", &blog.UserController{}, "*:Logout")

	//后台路由
	beego.Router("/admin", &admin.IndexController{}, "*:Index")
	beego.Router("/admin/account/profile", &admin.AccountController{}, "*:Profile")
	beego.Router("/admin/account/updateprofile", &admin.AccountController{}, "*:UpdateProfile")
	//系统管理
	beego.Router("/admin/system/setting", &admin.SystemController{}, "*:Setting")

	//内容管理
	beego.Router("/admin/article/list", &admin.ArticleController{}, "*:List")
	beego.Router("/admin/article/list:page:int.html", &admin.ArticleController{}, "*:List")
	beego.Router("/article/addmarkdown", &blog.ArticleController{}, "*:AddMarkdown")
	beego.Router("/article/editmarkdown", &blog.ArticleController{}, "*:EditMarkdown")
	beego.Router("/admin/article/save", &admin.ArticleController{}, "post:Save")
	beego.Router("/admin/article/delete", &admin.ArticleController{}, "*:Delete")
	beego.Router("/admin/article/batch", &admin.ArticleController{}, "*:Batch")
	beego.Router("/admin/tag", &admin.TagController{}, "*:Index")
	beego.Router("/admin/health", &admin.ArticleController{}, "*:Health")

	//相册管理
	beego.Router("/admin/album/add", &admin.AlbumController{}, "*:Add")
	beego.Router("/admin/album/list", &admin.AlbumController{}, "*:List")
	beego.Router("/admin/album/edit", &admin.AlbumController{}, "*:Edit")

	//照片管理
	beego.Router("/admin/photo/list", &admin.PhotoController{}, "*:List")
	beego.Router("/admin/photo/cover", &admin.PhotoController{}, "*:Cover")
	beego.Router("/admin/photo/delete", &admin.PhotoController{}, "*:Delete")
	beego.Router("/admin/photo/uploadphoto", &admin.PhotoController{}, "*:UploadPhoto")

	//用户管理
	beego.Router("/admin/user/list", &admin.UserController{}, "*:List")
	beego.Router("/admin/user/add", &admin.UserController{}, "*:Add")
	beego.Router("/admin/user/edit", &admin.UserController{}, "*:Edit")
	beego.Router("/admin/user/delete", &admin.UserController{}, "*:Delete")

	//友链管理
	beego.Router("/admin/link/list", &admin.LinkController{}, "*:List")
	beego.Router("/admin/link/add", &admin.LinkController{}, "*:Add")
	beego.Router("/admin/link/edit", &admin.LinkController{}, "*:Edit")
	beego.Router("/admin/link/delete", &admin.LinkController{}, "*:Delete")

	//test部分
	beego.Router("/test", &test.MainController{}, "*:Index")
	beego.Router("/box.html", &test.MainController{}, "*:Box")
	beego.Router("/slicebox3d.html", &test.MainController{}, "*:Slicebox3d")
}
