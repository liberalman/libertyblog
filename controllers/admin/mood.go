package admin

import (
	"libertyblog/models"
	"strings"
	"time"
)

type MoodController struct {
	baseController
}

//说说列表
func (this *MoodController) List() {
	var page int64
	var pagesize int64 = 10
	var list []*models.Mood
	var mood models.Mood

	if page, _ = this.GetInt64("page"); page < 1 {
		page = 1
	}
	offset := (page - 1) * pagesize

	count, _ := mood.Query().Count()
	if count > 0 {
		mood.Query().OrderBy("-id").Limit(pagesize, offset).All(&list)
	}

	this.Data["list"] = list
	this.Data["pagebar"] = models.NewPager(page, count, pagesize, "/admin/mood/list?page=%d").ToString()
	this.display()
}

//发表说说
func (this *MoodController) Add() {
	if this.Ctx.Request.Method == "POST" {
		content := strings.TrimSpace(this.GetString("content"))
		cover := strings.TrimSpace(this.GetString("cover"))

		var mood models.Mood
		mood.Content = content
		mood.Cover = cover
		mood.Posttime = time.Now()
		if err := mood.Insert(); err != nil {
			this.showmsg(err.Error())
		}
		this.Redirect("/admin/mood/list", 302)

	}
	this.display()
}

//删除说说
func (this *MoodController) Delete() {
	id, _ := this.GetInt64("id")
	mood := models.Mood{Id: id}
	if mood.Read() == nil {
		mood.Delete()
	}
	this.Redirect("/admin/mood/list", 302)
}
