package blog

import (
	"libertyblog/models"
)

type SearchController struct {
	baseController
}

// @Title Search
// @Description Search article or user
// @Param	key		query 	int64	true		"article id or user id"
// @Success 200 {int} models.User.Id
// @Failure 403 body is empty
// @router /search [get]
func (this *SearchController) Search() {
	var list []models.Article
	article_ids, count := models.SearchArticle(this.GetString("key"), "test1", this.page, this.pagesize)
	if count > 0 {
		list = models.GetArticlesByIds(article_ids[:len(article_ids)-1])
	}
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
		this.Data["list"] = list
		this.Data["total"] = count
		this.Data["page"] = this.page
		this.Data["pagesize"] = this.pagesize
		this.setHeadFootMetas()
		this.display("search", HAS_RIGHT)
	}
}
