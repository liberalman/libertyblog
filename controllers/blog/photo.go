package blog

import (
	"libertyblog/models"
	"strings"
)

type PhotoController struct {
	baseController
}

// get photos of all over the site
// @router /blog/photo/all [get]
func (this *PhotoController) All() {
	list, count := models.QueryAllPhotoList(this.page, this.pagesize)
	this.Data["pagebar"] = models.NewPager(int64(this.page), int64(count), int64(this.pagesize), "/index%d.html").ToString()
	i := 0
	for i < len(list) {
		list[i].Small = strings.Replace(list[i].Url, "bigpic", "smallpic", 1)
		i++
	}
	this.Data["list"] = list
	this.display("photos", NO_RIGHT)
}
