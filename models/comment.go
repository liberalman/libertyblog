package models

import (
	//"bytes"
	//"fmt"
	//"strings"
	"time"

	//"github.com/astaxie/beego"
	"github.com/astaxie/beego/orm"
)

// 对应数据库中的不是表，而是视图tb_article
type Comment struct {
	Id          int64
	User_id     int64
	Ref_comm_id int64
	Article_id  int64
	Create_time time.Time
	Content     string
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
