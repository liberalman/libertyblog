package admin

import (
	"libertyblog/models"
	"os"
	"runtime"
)

type IndexController struct {
	baseController
}

func (this *IndexController) Index1() {

	this.Data["hostname"], _ = os.Hostname()
	this.Data["gover"] = runtime.Version()
	this.Data["os"] = runtime.GOOS
	this.Data["cpunum"] = runtime.NumCPU()
	this.Data["arch"] = runtime.GOARCH

	this.Data["postnum"], _ = new(models.Post).Query().Count()
	this.Data["tagnum"], _ = new(models.Tag).Query().Count()
	this.Data["usernum"], _ = new(models.User).Query().Count()

	this.display()
}

func (this *IndexController) Index() {
	if 1 == this.userid { // admin
		this.Data["hostname"], _ = os.Hostname()
		this.Data["gover"] = runtime.Version()
		this.Data["os"] = runtime.GOOS
		this.Data["cpunum"] = runtime.NumCPU()
		this.Data["arch"] = runtime.GOARCH

		this.Data["postnum"], _ = new(models.Post).Query().Count()
		this.Data["tagnum"], _ = new(models.Tag).Query().Count()
		this.Data["usernum"], _ = new(models.User).Query().Count()
		var statistics []*models.Statistics
		new(models.Statistics).Query().OrderBy("-create_time").Limit(10, 0).All(&statistics)
		this.Data["statistics"] = statistics

		// 标签信息
		var tag models.Tag
		var list []*models.Tag
		count, _ := tag.Query().Count()
		if count > 0 {
			tag.Query().OrderBy("-count").Limit(4, 0).All(&list)
		}
		this.Data["tag_list"] = list

		this.display1("index")
		return
	} else { // 普通用户
		this.Redirect("/admin/account/profile", 302)
	}

}
