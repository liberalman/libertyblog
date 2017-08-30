package models

import (
	"time"

	"github.com/astaxie/beego/orm"
)

// 对应数据库中的不是表，而是视图tb_article
type Comment struct {
	Id          int64
	User_id     int64
	To_user_id  int64
	Ref_comm_id int64
	Article_id  int64
	Create_time time.Time
	Content     string
	Like        int
	Dislike     int
}

type CommentDetail struct {
	Id          int64
	User_id     int64
	To_user_id  int64
	Ref_comm_id int64
	Article_id  int64
	Create_time time.Time
	Content     string
	Like        int
	Dislike     int
	Avatarurl   string
	Username    string
	Tousername  string
}

func (m *Comment) TableName() string {
	return TableName("comments")
}

func (m *Comment) Query() orm.QuerySeter {
	return orm.NewOrm().QueryTable(m)
}

func (m *Comment) Insert() error {
	if _, err := orm.NewOrm().Insert(m); err != nil {
		return err
	}
	return nil
}

func (m *Comment) Read(fields ...string) error {
	if err := orm.NewOrm().Read(m, fields...); err != nil {
		return err
	}
	return nil
}

func (m *Comment) Update(fields ...string) error {
	if _, err := orm.NewOrm().Update(m, fields...); err != nil {
		return err
	}
	return nil
}

func (m *Comment) Delete() error {
	if _, err := orm.NewOrm().Delete(m); err != nil {
		return err
	}
	return nil
}

func QueryComments(article_id int64, page int, pagesize int) ([]CommentDetail, int) {
	var count int = 0
	var list []CommentDetail
	o := orm.NewOrm()
	o.Raw("select p.id,p.user_id,p.to_user_id,p.ref_comm_id,p.article_id,p.create_time,p.like,p.dislike,p.content,u.avatarurl,u.username,(select username from tb_user where id=p.to_user_id) tousername from tb_comments p,tb_user u where p.article_id=? and p.user_id=u.id order by p.create_time desc limit ?,?",
		article_id, (page-1)*pagesize, pagesize).QueryRows(&list)
	o.Raw("select count(id) from tb_comments where article_id=?", article_id).QueryRow(&count)
	return list, count
}
