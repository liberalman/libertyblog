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
		end = total
	}
	for i := begin; i < end; i++ {
		article_ids += fmt.Sprintf("%d,", res.Matches[i].DocId)
	}
	/*
		list := GetArticlesByIds(article_ids[:len(article_ids)-1])
		var opts sphinx.ExcerptsOpts
		opts.BeforeMatch = "<span style='font-weight:bold;color:red'>"
		opts.AfterMatch = "</span>"
		opts.ChunkSeparator = " ... "
		opts.Limit = 60
		opts.Around = 3
		var docs []string
		for _, v := range list {
			docs = append(docs, v.Title)
		}
		var resDocs []string
		resDocs, err = SphinxClient.BuildExcerpts(docs, index, key, opts)
		if err != nil {
			fmt.Println(err)
		} else {
			fmt.Println(docs, resDocs)
		}
	*/

	/*for i := 0; i < total; i++ {
		list[i].Content = resDocs[i]
	}*/

	SphinxClient.Close()
	return article_ids, total
}
