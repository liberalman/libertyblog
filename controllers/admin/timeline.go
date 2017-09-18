package admin

import (
	"fmt"
	"libertyblog/models"
	"os"
	"strconv"
	"strings"
	"time"

	"github.com/astaxie/beego"
	"github.com/astaxie/beego/orm"
)

type TimelineController struct {
	baseController
}

// @router /admin/timeline/list [get]
func (this *TimelineController) List() {
	list, count := new(models.Timeline).GetListByUserid(this.page, this.pagesize, this.userid)
	this.Data["list"] = list
	this.Data["pagebar"] = models.NewPager(int64(this.page), int64(count), int64(this.pagesize), "/admin/timeline/list?page=%d").ToString()
	this.display()
}

// @router /admin/timeline/add [get,post]
func (this *TimelineController) Add() {
	if this.Ctx.Request.Method == "POST" {
		rank, _ := this.GetInt("rank")
		var timeline models.Timeline
		timeline.Name = strings.TrimSpace(this.GetString("name"))
		//timeline.Cover = strings.TrimSpace(this.GetString("cover"))
		timeline.Coverurl = "/static/upload/defaultcover.png"
		timeline.Content = strings.TrimSpace(this.GetString("content"))
		timeline.Rank = int8(rank)
		timeline.Userid = this.userid
		timeline.Createtime = time.Now()
		if err := timeline.Insert(); err != nil {
			this.showmsg(err.Error())
		}
		this.Redirect("/admin/timeline/list", 302)
	}
	this.display()
}

// @Title Delete timeline
// @Description Delete timeline
// @Param	timelineid		query 	int64	true		"timelineid"
// @Success 200 body timeline list page
// @Failure 403 :timelineid is empty
// @router /admin/timeline/delete [delete]
func (this *TimelineController) Delete() {
	// 判断是否是自己的
	ret := models.Ret{Code: 0, Message: "success"}
	timelineid, _ := this.GetInt64("timelineid")
	photo := models.Photo{Id: 0}
	timeline := models.Timeline{Id: timelineid}
	if err := timeline.Read(); err != nil {
		ret.Code = -5
		ret.Message = fmt.Sprintf("no this timelineid=%d.", timelineid)
		goto end
	} else {
		photos := models.QueryPhotoListOfAlbum(timeline.Id)
		for _, v := range photos {
			// 删除硬盘上的图片
			if err := os.Remove("." + v.Url); nil != err {
				//ret.Code = -3
				//ret.Message = err.Error()
				//goto end
				beego.Error("could not delete ", "."+v.Url, err.Error())
			}
			v.Small = strings.Replace(v.Url, "bigpic", "smallpic", 1)
			if err := os.Remove("." + v.Small); nil != err {
				//ret.Code = -2
				//ret.Message = err.Error()
				//goto end
				beego.Error("could not delete ", "."+v.Small, err.Error())
			}
			// 删除数据库记录
			photo.Id = v.Id
			if err := photo.Delete(); err != nil {
				//ret.Code = -4
				//ret.Message += err.Error()
				//goto end
				beego.Error(err.Error())
			}
		}
		// 删除相册
		if err := timeline.Delete(); err != nil {
			ret.Code = -1
			ret.Message += err.Error()
			goto end
		}
	}
end:
	this.Data["json"] = ret
	this.ServeJSON()
}

// @Title Hide timeline
// @Description Hide timeline, just you can see it.
// @Param	timelineid		query 	int64	true		"timelineid"
// @Param	timelineid		query 	int8	true		"ishide"
// @Success 200 body timeline list page
// @Failure 403 :userid is empty
// @router /admin/timeline/hide [get]
func (this *TimelineController) Hide() {
	id, _ := this.GetInt64("timelineid")
	timeline := models.Timeline{Id: id}
	timeline.Ishide, _ = this.GetInt8("ishide")
	if err := timeline.Update("ishide"); err != nil {
		this.showmsg(err.Error())
		return
	}
	this.Redirect("/admin/timeline/list", 302)
}

// @router /admin/timeline/edit [get,post]
func (this *TimelineController) Edit() {
	id, _ := this.GetInt64("timelineid")
	timeline := models.Timeline{Id: id}
	if timeline.Read() != nil {
		this.Abort("404")
	}
	if this.Ctx.Request.Method == "POST" {
		rank, _ := this.GetInt("rank")
		//timeline.Cover = strings.TrimSpace(this.GetString("cover"))
		timeline.Name = strings.TrimSpace(this.GetString("name"))
		timeline.Content = strings.TrimSpace(this.GetString("content"))
		timeline.Rank = int8(rank)
		timeline.Update()
		this.Redirect("/admin/timeline/list", 302)
	}
	this.Data["timeline"] = timeline
	this.display()
}

// @router /admin/timeline/:timelineid:int [get]
func (this *TimelineController) Timeline() {
	var (
		timepoint models.TimePoint
		list      []*models.TimePoint
		pagesize  int64 = 15
		offset    int64
	)

	// 查询操作
	timelineid, _ := strconv.Atoi(this.Ctx.Input.Param(":timelineid"))
	var query orm.QuerySeter
	if 1 == this.userid { // 如果是管理员用户id，则是查看所有
		query = timepoint.Query()
	} else {
		query = timepoint.Query().Filter("timelineid", timelineid)
	}
	query = timepoint.Query().Filter("timelineid", timelineid)
	count, _ := query.Count()
	if count > 0 {
		query.OrderBy("-createtime").Limit(pagesize, offset).All(&list)
	}
	this.Data["list"] = list
	this.Data["timelineid"] = timelineid
	this.display("timeline")

}

// @router /admin/timeline/timepoint [post]
func (this *TimelineController) TimePoint() {
	var (
		timepoint models.TimePoint
	)

	action, _ := this.GetInt("action")
	if 1 == action { // 新增
		timepoint.Userid = this.userid
		timepoint.Timelineid, _ = this.GetInt64("timelineid")
		this.setArgs(&timepoint)
		if err := timepoint.Insert(); nil != err {
			this.Ctx.WriteString(err.Error())
			return
		}
	} else if 2 == action { // 修改
		timepoint.Id, _ = this.GetInt64("id")
		if err := timepoint.Read("id"); nil != err {
			this.Ctx.WriteString(err.Error())
			return
		} else {
			if timepoint.Userid != this.userid { // 该文章不是此用户的，无权修改
				this.Ctx.WriteString("该文章不是此用户的，无权修改")
				return
			} else {
				this.setArgs(&timepoint)
				if err := timepoint.Update("title", "content", "pos", "icosty", "createtime"); nil != err {
					this.Ctx.WriteString(err.Error())
					return
				}
			}
		}
	} else if 3 == action { // 删除
		timepoint.Id, _ = this.GetInt64("id")
		if err := timepoint.Delete(); nil != err {
			this.Ctx.WriteString(err.Error())
			return
		}
	}
	this.Ctx.WriteString("0")
}

func (this *TimelineController) setArgs(timepoint *models.TimePoint) {
	timepoint.Content = strings.TrimSpace(this.GetString("content"))
	timepoint.Title = strings.TrimSpace(this.GetString("title"))
	timepoint.Url = strings.TrimSpace(this.GetString("url"))
	timestr := strings.TrimSpace(this.GetString("createtime"))
	if posttime, err := time.Parse("2006-01-02 15:04:05", timestr); err == nil {
		timepoint.Createtime = posttime
	} else {
		timepoint.Createtime, _ = time.Parse("2006-01-02 15:04:05", timepoint.Createtime.Format("2006-01-02 15:04:05"))
	}
	timepoint.Icosty, _ = this.GetInt("icosty")
	timepoint.Pos, _ = this.GetInt("pos")
}
