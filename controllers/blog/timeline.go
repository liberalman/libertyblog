package blog

import (
	"libertyblog/models"

	"strconv"

	"github.com/astaxie/beego/orm"
	//"strings"
)

type TimelineController struct {
	baseController
}

type Tasset struct {
	Media   string `json:"media"`
	Credit  string `json:"credit"`
	Caption string `json:"caption"`
}

type Tdate struct {
	Headline  string `json:"headline"`
	StartDate string `json:"startDate"`
	Text      string `json:"text"`
	Asset     Tasset `json:"asset"`
}

type Timeline struct {
	Headline  string  `json:"headline"`
	Type      string  `json:"type"`
	StartDate string  `json:"startDate"`
	Text      string  `json:"text"`
	Asset     Tasset  `json:"asset"`
	Date      []Tdate `json:"date"`
}

// @router /blog/timeline/:userid:int [get]
func (this *TimelineController) Index() {
	var (
		history  models.History
		list     []*models.History
		pagesize int64 = 15
		offset   int64
	)
	userid, _ := strconv.Atoi(this.Ctx.Input.Param(":userid"))
	if "POST" == this.Ctx.Request.Method { // Post 说明是增删改操作,AJAX方式提交
		var post models.History
		action, _ := this.GetInt("action")
		if 1 == action { // 新增
			post.Userid = this.userid
			//this.set_args(&post)
			if err := post.Insert(); nil != err {
				this.Ctx.WriteString(err.Error())
				return
			}
		} else if 2 == action { // 修改
			post.Id, _ = this.GetInt64("id")
			if err := post.Read("id"); nil != err {
				this.Ctx.WriteString(err.Error())
				return
			} else {
				if post.Userid != this.userid { // 该文章不是此用户的，无权修改
					this.Ctx.WriteString("该文章不是此用户的，无权修改")
					return
				} else {
					//this.set_args(&post)
					if err := post.Update("title", "content", "pos", "icosty", "dotime"); nil != err {
						this.Ctx.WriteString(err.Error())
						return
					}
				}
			}
		} else if 3 == action { // 删除
			post.Id, _ = this.GetInt64("id")
			if err := post.Delete(); nil != err {
				this.Ctx.WriteString(err.Error())
				return
			}
		}
		this.Ctx.WriteString("0")
	} else {
		// 查询操作
		if this.IsAjax() {
			data := map[string]interface{}{}
			timeline := Timeline{Headline: "我的memo,我的人生"}
			timeline.StartDate = "2009,1"
			timeline.Text = "<i><span class='c1'>Designer</span> & <span class='c2'>Developer</span></i>"
			timeline.Type = "default"
			timeline.Asset = Tasset{}
			timeline.Asset.Media = "/img/notes.png"
			timeline.Asset.Credit = "<a href='http://dribbble.com/shots/221641-iOS-Icon'>iOS Icon by Asher</a>"

			var query orm.QuerySeter
			/*if 1 == this.userid { // 如果是管理员用户id，则是查看所有的帖子
				query = history.Query()
			} else {
				query = history.Query().Filter("userid", this.userid)
			}*/
			query = history.Query().Filter("userid", int64(userid))
			count, _ := query.Count()
			if count > 0 {
				query.OrderBy("-dotime").Limit(pagesize, offset).All(&list)
			}
			for _, v := range list {
				var tdate Tdate
				tdate.Headline = v.Title
				tdate.Text = v.Content
				t := v.Dotime
				tdate.StartDate = t.Format("2006,01")
				tdate.Asset = Tasset{}
				tdate.Asset.Media = "https://offical.b0.upaiyun.com/static/album/1/1505055884597051991.jpeg"
				tdate.Asset.Credit = "123"
				tdate.Asset.Caption = "234"
				timeline.Date = append(timeline.Date, tdate)
			}

			data["timeline"] = timeline
			this.Data["json"] = data
			this.ServeJSON()
		} else {
			var query orm.QuerySeter
			/*if 1 == this.userid { // 如果是管理员用户id，则是查看所有的帖子
				query = history.Query()
			} else {
				query = history.Query().Filter("userid", this.userid)
			}*/
			query = history.Query().Filter("userid", int64(userid))
			count, _ := query.Count()
			if count > 0 {
				query.OrderBy("-dotime").Limit(pagesize, offset).All(&list)
			}
			this.Data["list"] = list
			this.display_no_layout("timeline")
		}
	}
}
