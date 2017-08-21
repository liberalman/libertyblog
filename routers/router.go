package routers

import (
	"libertyblog/controllers/admin"
	"libertyblog/controllers/blog"
	"libertyblog/controllers/test"

	"github.com/astaxie/beego"
)

func init() {

	beego.Include(&blog.MainController{})
	beego.Include(&admin.AccountController{})

	//前台路由
	//beego.Router("/", &blog.MainController{}, "*:Index")
	beego.Router("/404.html", &blog.MainController{}, "*:Go404")
	beego.Router("/index:page:int.html", &blog.MainController{}, "*:Index")

	beego.Router("/article/:id:int", &blog.ArticleController{}, "*:Index")            //ID访问
	beego.Router("/article/:urlname(.+)", &blog.ArticleController{}, "*:Index")       //别名访问文章
	beego.Router("/article/comment", &blog.ArticleController{}, "*:Comment")          // 评论文章
	beego.Router("/articles/:userid:int", &blog.ArticleController{}, "*:SomeoneList") //访问某个用户的文章列表
	beego.Router("/articles/:userid:int/index:page:int.html", &blog.ArticleController{}, "*:SomeoneList")

	beego.Router("/category/:name(.+?)", &blog.MainController{}, "*:Category")
	beego.Router("/category/:name(.+?)/page/:page:int", &blog.MainController{}, "*:Category")

	beego.Router("/mood.html", &blog.MainController{}, "*:Mood")
	beego.Router("/mood:page:int.html", &blog.MainController{}, "*:Mood")

	//照片展示
	beego.Router("/photo.html", &blog.MainController{}, "*:Photo")
	beego.Router("/photo:page:int.html", &blog.MainController{}, "*:Photo")

	//相册展示
	beego.Router("/album.html", &blog.MainController{}, "*:Album")
	beego.Router("/album1.html", &blog.MainController{}, "*:Album1")
	beego.Router("/album:page:int.html", &blog.MainController{}, "*:Album")

	beego.Router("/:urlname(.+)", &blog.ArticleController{}, "*:Index") //别名访问

	beego.Router("/register", &blog.UserController{}, "*:Register")
	beego.Router("/login", &blog.UserController{}, "*:Login")
	beego.Router("/login/callback", &blog.UserController{}, "*:Callback")
	beego.Router("/login/qqlogin", &blog.UserController{}, "*:Ajax_qqLogin")
	beego.Router("/user/logout", &blog.UserController{}, "*:Logout")

	// 搜索
	beego.Router("/user/search", &blog.MainController{}, "*:Search")

	//后台路由
	beego.Router("/admin", &admin.IndexController{}, "*:Index")
	beego.Router("/admin/account/profile", &admin.AccountController{}, "*:Profile")
	beego.Router("/admin/account/updateprofile", &admin.AccountController{}, "*:UpdateProfile")
	//系统管理
	beego.Router("/admin/system/setting", &admin.SystemController{}, "*:Setting")

	//内容管理
	beego.Router("/admin/article/list", &admin.ArticleController{}, "*:List")
	beego.Router("/admin/article/add", &admin.ArticleController{}, "*:Add")
	beego.Router("/article/addmarkdown", &blog.ArticleController{}, "*:AddMarkdown")
	beego.Router("/article/editmarkdown", &blog.ArticleController{}, "*:EditMarkdown")
	beego.Router("/admin/article/save", &admin.ArticleController{}, "post:Save")
	beego.Router("/admin/article/delete", &admin.ArticleController{}, "*:Delete")
	beego.Router("/admin/article/batch", &admin.ArticleController{}, "*:Batch")
	beego.Router("/admin/article/upload", &admin.ArticleController{}, "*:Upload")
	beego.Router("/admin/tag", &admin.TagController{}, "*:Index")
	beego.Router("/admin/flot", &admin.ArticleController{}, "*:Flot")
	beego.Router("/admin/history", &admin.ArticleController{}, "*:History")

	//说说管理
	beego.Router("/admin/mood/add", &admin.MoodController{}, "*:Add")
	beego.Router("/admin/mood/list", &admin.MoodController{}, "*:List")
	beego.Router("/admin/mood/delete", &admin.MoodController{}, "*:Delete")

	//相册管理
	beego.Router("/admin/album/add", &admin.AlbumController{}, "*:Add")
	beego.Router("/admin/album/list", &admin.AlbumController{}, "*:List")
	beego.Router("/admin/album/edit", &admin.AlbumController{}, "*:Edit")
	beego.Router("/admin/album/delete", &admin.AlbumController{}, "*:Delete")

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
	beego.Router("/login.html", &test.MainController{}, "*:Login")
	beego.Router("/box.html", &test.MainController{}, "*:Box")
	beego.Router("/slicebox3d.html", &test.MainController{}, "*:Slicebox3d")
}
