package blog

import (
	"libertyblog/models"
	"strconv"
	//"strings"
	//"time"

	"github.com/astaxie/beego"
	//	"github.com/astaxie/beego/orm"
)

type ObjectController struct {
	beego.Controller
}

// @Title Get
// @Description find object by objectid
// @Param	objectId		path 	string	true		"the objectid you want to get"
// @Success 200 {object} models.User
// @Failure 403 :objectId is empty
// @router /get_user:objectId [get]
func (o *ObjectController) Get() {
	objectId := o.Ctx.Input.Param(":objectId")
	var m models.User
	if objectId != "" {
		id, _ := strconv.Atoi(objectId)
		m = models.GetUser(int64(id))
	}
	o.Data["json"] = m
	o.ServeJSON()
}
