package models

import (
	"bytes"
	"fmt"
	"strconv"
	"strings"
	"time"

	"github.com/astaxie/beego"
	"github.com/astaxie/beego/orm"
)

type Post struct {
	Id         int64
	Userid     int64  `orm:"index"`
	Title      string `orm:"size(100)"`
	Digest     string `orm:"size(255)"`
	Urlname    string `orm:"size(100);index"`
	Urltype    int8
	Content    string    `orm:"type(text)"`
	Tags       string    `orm:"size(100)"`
	Posttime   time.Time `orm:"type(datetime);index"`
	Views      int64
	Status     int8
	Updated    time.Time `orm:"type(datetime)"`
	Istop      int8
	Coverurl   string `orm:"size(70)"`
	Pubtype    int8
	Reprinturl string `orm:"size(128);"`
}

type Post1 struct {
	Id         int64
	Userid     int64
	Title      string
	Digest     string
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

func (m *Post) TableName() string {
	return TableName("post")
}

func (m *Post) Insert() error {
	if _, err := orm.NewOrm().Insert(m); err != nil {
		return err
	}
	return nil
}

func (m *Post) Read(fields ...string) error {
	if err := orm.NewOrm().Read(m, fields...); err != nil {
		return err
	}
	return nil
}

func (m *Post) Update(fields ...string) error {
	if _, err := orm.NewOrm().Update(m, fields...); err != nil {
		return err
	}
	return nil
}

func (m *Post) Delete() error {
	if m.Tags != "" {
		o := orm.NewOrm()
		oldtags := strings.Split(strings.Trim(m.Tags, ","), ",")
		//标签统计-1
		o.QueryTable(&Tag{}).Filter("name__in", oldtags).Update(orm.Params{"count": orm.ColValue(orm.ColMinus, 1)})
		//删掉tag_post表的记录
		o.QueryTable(&TagPost{}).Filter("postid", m.Id).Delete()
	}
	if _, err := orm.NewOrm().Delete(m); err != nil {
		return err
	}
	return nil
}

func (m *Post) Query() orm.QuerySeter {
	return orm.NewOrm().QueryTable(m)
}

//内容URL
func (m *Post) Link() string {
	if m.Urlname != "" {
		if m.Urltype == 1 {
			return fmt.Sprintf("/%s", Rawurlencode(m.Urlname))
		}
		return fmt.Sprintf("/article/%s", Rawurlencode(m.Urlname))
	}
	return fmt.Sprintf("/article/%d", m.Id)
}

func (m *Post1) Link() string {
	if m.Urlname != "" {
		if m.Urltype == 1 {
			return fmt.Sprintf("/%s", Rawurlencode(m.Urlname))
		}
		return fmt.Sprintf("/article/%s", Rawurlencode(m.Urlname))
	}
	return fmt.Sprintf("/article/%d", m.Id)
}

//带链接的标签
func (m *Post) TagsLink() string {
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
func (m *Post1) TagsLink() string {
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

//摘要,截取文章内容，不过现在用不上了，用Digest字段代替了
func (m *Post) Excerpt() string {
	if i := strings.Index(m.Content, "_ueditor_page_break_tag_"); i != -1 {
		return m.Content[:i]
	}
	return m.Content
}
func (m *Post1) Excerpt() string {
	if i := strings.Index(m.Content, "_ueditor_page_break_tag_"); i != -1 {
		return m.Content[:i]
	}
	return m.Content
}

/*
func (post *Post) GetPreAndNext() (pre, next *Post) {
	pre = new(Post)
	next = new(Post)
	err := new(Post).Query().Filter("id__lt", post.Id).Filter("status", 0).Filter("urltype", 0).Limit(1).One(pre)
	if err == orm.ErrNoRows {
		pre = nil
	}
	err = new(Post).Query().Filter("id__gt", post.Id).Filter("status", 0).Filter("urltype", 0).Limit(1).One(next)
	if err == orm.ErrNoRows {
		next = nil
	}
	return
}
*/
// 获取首页文章列表
func PostIndex(page int, pagesize int) ([]Article, int) {
	var count int = 0
	var list []Article
	o := orm.NewOrm()

	var ids []string
	o.Raw("select p.id from tb_user u,tb_post p where u.id=p.userid order by p.istop desc,p.updated desc limit ?,?", (page-1)*pagesize, pagesize).QueryRows(&ids)
	for _, id := range ids {
		key := CACHE_KEY_TB_USER + id
		tmp := Cache.Get(key)
		if nil == tmp {
			/*var article Article
			err := o.Raw("select p.id,p.userid,u.username,p.title,p.digest,p.urlname,p.urltype,p.content,p.tags,p.posttime,p.updated,p.views,p.status,p.updated,p.istop,p.coverurl,p.pubtype,u.avatarurl from tb_user u,tb_post p where u.id=p.userid and p.id=?", id).QueryRow(&article)
			if nil != err {
				beego.Error(err.Error()) // 查不到数据的时候，也会报"<QuerySeter> no row found"的错误
			} else {
				Cache.Put(key, article, CACHE_TIME_OUT*time.Second)
				list = append(list, article)
			}*/
			articleid, _ := strconv.Atoi(id)
			article := GetArticle(int64(articleid), false)
			if article.Id > 0 {
				list = append(list, article)
			}
		} else {
			list = append(list, tmp.(Article))
		}
	}

	total := Cache.Get(CACHE_KEY_TB_USER_TOTAL)
	if nil == total {
		o.Raw("select count(id) from tb_post").QueryRow(&count)
		Cache.Put(CACHE_KEY_TB_USER_TOTAL, count, CACHE_TIME_OUT*time.Second)
	} else {
		count = total.(int)
	}
	return list, count
}

// 获取某人的所有文章列表
func GetSomeoneArticleList(userid int, page int, pagesize int) ([]Article, int) {
	var count int = 0
	var list []Article
	o := orm.NewOrm()
	o.Raw("select p.id,p.userid,u.username,p.title,p.digest,p.urlname,p.urltype,p.content,p.tags,p.posttime,p.updated,p.views,p.status,p.updated,p.istop,p.coverurl,p.pubtype,u.avatarurl from tb_user u,tb_post p where u.id=p.userid and p.userid=? order by p.istop desc,p.updated desc limit ?,?", userid, (page-1)*pagesize, pagesize).QueryRows(&list)
	o.Raw("select count(id) from tb_post").QueryRow(&count)
	return list, count
}

// 获取某一篇文章内容
func (this *Post1) GetOneArticle() {
	o := orm.NewOrm()
	err := o.Raw("select p.id,p.userid,u.username,p.title,p.urlname,p.urltype,p.content,p.posttime,p.updated,p.views,p.status,p.tags,p.pubtype,p.reprinturl,u.avatarurl from tb_user u,tb_post p where u.id=p.userid and p.id=?", this.Id).QueryRow(this)
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

func (post *Post1) GetPreAndNext(postid int64) (pre, next *Post1) {
	pre = new(Post1)
	next = new(Post1)
	o := orm.NewOrm()
	err := o.Raw("select p.id,p.userid,u.username,p.title,p.urlname,p.urltype,p.content,p.status,p.views,p.posttime,p.updated,u.avatarurl from tb_user u,tb_post p where u.id=p.userid and p.id<? and p.status=0 and p.urltype=0 order by p.id desc limit 1", postid).QueryRow(pre)
	if err != nil {
		beego.Error(err)
	}
	err = o.Raw("select p.id,p.userid,u.username,p.title,p.urlname,p.urltype,p.content,p.status,p.views,p.posttime,p.updated,u.avatarurl from tb_user u,tb_post p where u.id=p.userid and p.id>? and p.status=0 and p.urltype=0 limit 1", postid).QueryRow(next)
	if err != nil {
		beego.Error(err)
	}
	return
}
