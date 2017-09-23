package blog

import (
	"libertyblog/models"
	"strconv"
)

type TimelineController struct {
	baseController
}

type Asset struct {
	Media   string `json:"media"`
	Credit  string `json:"credit"`
	Caption string `json:"caption"`
}

type TimePoints struct {
	Headline  string `json:"headline"`
	StartDate string `json:"startDate"`
	Text      string `json:"text"`
	Asset     Asset  `json:"asset"`
}

type JStimeline struct {
	Headline  string       `json:"headline"`
	Type      string       `json:"type"`
	StartDate string       `json:"startDate"`
	Text      string       `json:"text"`
	Asset     Asset        `json:"asset"`
	Date      []TimePoints `json:"date"`
}

// @router /blog/timeline/:timelineid:int [get]
func (this *TimelineController) Index() {
	timelineid, _ := strconv.Atoi(this.Ctx.Input.Param(":timelineid"))
	this.pagesize = 1000
	list, _ := new(models.TimePoint).GetList(this.page, this.pagesize, int64(timelineid))

	// 查询操作
	if this.IsAjax() {
		data := map[string]interface{}{}
		var timeline models.Timeline
		timeline.Id = int64(timelineid)
		if err := timeline.Read(); nil != err {
			err.Error()
		} else {

			jstimeline := JStimeline{Headline: timeline.Name}
			jstimeline.StartDate = timeline.Createtime.Format("2006,01,02") // "2009,1"
			jstimeline.Text = "<i><span class='c1'>" + timeline.Content + "</span> <hr/>& <span class='c2'>" + models.CacheGetUser(timeline.Userid).Username + "</span></i>"
			jstimeline.Type = "default"
			jstimeline.Asset = Asset{}
			jstimeline.Asset.Media = timeline.Coverurl // "/img/notes.png"
			jstimeline.Asset.Credit = "<a href='http://dribbble.com/shots/221641-iOS-Icon'>iOS Icon by Asher</a>"

			for _, v := range list {
				var tdate TimePoints
				tdate.Headline = v.Title
				tdate.Text = v.Content
				tdate.StartDate = v.Createtime.Format("2006,01,02")
				tdate.Asset = Asset{}
				tdate.Asset.Media = v.Url
				tdate.Asset.Credit = "liberalman.cn"
				tdate.Asset.Caption = "LIBERALMAN"
				jstimeline.Date = append(jstimeline.Date, tdate)
			}
			//if nil == jstimeline.Date {
			//	var tdate TimePoints
			//	jstimeline.Date = append(jstimeline.Date, tdate)
			//}

			data["timeline"] = jstimeline
		}
		this.Data["json"] = data
		this.ServeJSON()
	} else {
		this.Data["list"] = list
		//this.display_no_layout("timeline")
		this.display("timeline", NO_RIGHT)
	}
}

// @router /blog/timeline/list [get]
func (this *TimelineController) List() {
	list, count := new(models.Timeline).GetList(this.page, this.pagesize)
	if this.IsAjax() {
		ret := models.Ret{Code: 0, Message: "success"}
		data := map[string]interface{}{}
		data["total"] = count
		data["page"] = this.page
		data["pagesize"] = this.pagesize
		data["list"] = list
		ret.Data = data
		this.Data["json"] = ret
		this.ServeJSON()
	} else {
		this.setHeadFootMetas("时光旅行")
		this.Data["total"] = count
		this.Data["page"] = this.page
		this.Data["pagesize"] = this.pagesize
		this.display("timeline_list", NO_RIGHT)
	}
}

// /blog/timeline:userid:int/:page:int.html
