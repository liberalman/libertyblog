package models

import (
	"fmt"

	"github.com/astaxie/beego"
	"github.com/yunge/sphinx"
)

func SearchArticle(key string, index string, page int, pagesize int) (string, int) {
	SphinxClient = sphinx.NewClient().SetServer(Sphinx_host, Sphinx_port).SetConnectTimeout(5000)
	if err := SphinxClient.Error(); err != nil {
		beego.Error("sphinx err 1", err)
		return "", -1
	}
	// 查询
	res, err := SphinxClient.Query(key, index, "search article!")
	if err != nil {
		beego.Error("sphinx err 2", err)
		return "", -2
	}
	total := len(res.Matches)
	var article_ids string
	begin := (page - 1) * pagesize
	var end int
	if begin+pagesize < total {
		end = begin + pagesize
	} else {
		end = total - 1
	}
	for i := begin; i < end; i++ {
		article_ids += fmt.Sprintf("%d,", res.Matches[i].DocId)
	}
	SphinxClient.Close()
	return article_ids, total
}
