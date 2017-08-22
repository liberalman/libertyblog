package models

import (
	"bytes"
	"fmt"
	"strings"
	"time"

	"github.com/astaxie/beego"
	"github.com/astaxie/beego/orm"
)

// 对应数据库中的不是表，而是视图tb_article
type Article struct {
	Id         int64
	Userid     int64
	Username   string
	Title      string
	Digest     string
	Color      string
	Urlname    string
	Urltype    int8
	Content    string
	Tags       string
	Posttime   time.Time
	Views      int64
	Status     int8
	Updated    time.Time
	Istop      int8
	Coverurl   string
	Avatarurl  string
	Pubtype    int8
	Reprinturl string
}

func (m *Article) TableName() string {
	return TableName("article")
}

func (m *Article) Query() orm.QuerySeter {
	return orm.NewOrm().QueryTable(m)
}

//model下的这些函数会在view的页面中，以字段一样的方法调用就可以了

func (m *Article) Link() string {
	if m.Urlname != "" {
		if m.Urltype == 1 {
			return fmt.Sprintf("/%s", Rawurlencode(m.Urlname))
		}
		return fmt.Sprintf("/article/%s", Rawurlencode(m.Urlname))
	}
	return fmt.Sprintf("/article/%d", m.Id)
}

func (m *Article) Excerpt() string {
	if i := strings.Index(m.Content, "_ueditor_page_break_tag_"); i != -1 {
		return m.Content[:i]
	}
	return m.Content
}

func (m *Article) TagsLink() string {
	if m.Tags == "" {
		return ""
	}
	var buf bytes.Buffer
	arr := strings.Split(strings.Trim(m.Tags, ","), ",")
	for k, v := range arr {
		if k > 0 {
			buf.WriteString(", ")
		}
		tag := Tag{Name: v}
		buf.WriteString(tag.Link())
	}
	return buf.String()
}

func (this *Article) GetOneArticle() {
	o := orm.NewOrm()
	err := o.Raw("select p.id,p.userid,u.username,p.title,p.color,p.urlname,p.urltype,p.content,p.posttime,p.updated,p.views,p.status,p.tags,p.pubtype,p.reprinturl,u.avatarurl from tb_user u,tb_post p where u.id=p.userid and p.id=?", this.Id).QueryRow(this)
	if err != nil {
		beego.Error(err)
	}
	this.Views++

	//执行更新
	sql := "update tb_post set views=? where id=?"
	_, err = o.Raw(sql, this.Views, this.Id).Exec()
	if err != nil {
		beego.Error(err)
	}
	return
}

func (post *Article) GetPreAndNext(postid int64) (pre, next *Article) {
	pre = new(Article)
	next = new(Article)
	o := orm.NewOrm()
	err := o.Raw("select p.id,p.userid,u.username,p.title,p.color,p.urlname,p.urltype,p.content,p.status,p.views,p.posttime,p.updated,u.avatarurl from tb_user u,tb_post p where u.id=p.userid and p.id<? and p.status=0 and p.urltype=0 order by p.id desc limit 1", postid).QueryRow(pre)
	if err != nil {
		beego.Error(err)
	}
	err = o.Raw("select p.id,p.userid,u.username,p.title,p.color,p.urlname,p.urltype,p.content,p.status,p.views,p.posttime,p.updated,u.avatarurl from tb_user u,tb_post p where u.id=p.userid and p.id>? and p.status=0 and p.urltype=0 limit 1", postid).QueryRow(next)
	if err != nil {
		beego.Error(err)
	}
	return
}

func GetArticlesByIds(article_ids string) []Article {
	var list []Article
	o := orm.NewOrm()
	o.Raw(fmt.Sprintf("select p.id,p.userid,u.username,p.title,p.color,p.urlname,p.urltype,p.content,p.tags,p.posttime,p.updated,p.views,p.status,p.updated,p.istop,p.coverurl,p.pubtype,u.avatarurl from tb_user u,tb_post p where u.id=p.userid and p.id in (%s) order by p.istop desc,p.id desc", article_ids)).QueryRows(&list)
	return list
}
