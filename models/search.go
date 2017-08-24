package models

import (
	"fmt"

	"github.com/astaxie/beego"
	"github.com/yunge/sphinx"
)

func SearchArticle(key string, index string) string {
	SphinxClient = sphinx.NewClient().SetServer(Sphinx_host, Sphinx_port).SetConnectTimeout(5000)
	if err := SphinxClient.Error(); err != nil {
		beego.Error("sphinx err 1", err)
		return ""
	}
	// 查询
	res, err := SphinxClient.Query(key, index, "search article!")
	if err != nil {
		beego.Error("sphinx err 2", err)
		return ""
	}
	var article_ids string
	for _, match := range res.Matches {
		article_ids += fmt.Sprintf("%d,", match.DocId)
	}
	SphinxClient.Close()
	return article_ids
}
