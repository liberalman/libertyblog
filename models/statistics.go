package models

import (
	"time"

	"github.com/astaxie/beego/orm"
)

type Statistics struct {
	Id          int64
	User_count  int
	Post_count  int
	Tag_count   int
	Dau         int
	Tags        string
	Create_time time.Time
}

func (m *Statistics) TableName() string {
	return TableName("statistics")
}

func (m *Statistics) Query() orm.QuerySeter {
	return orm.NewOrm().QueryTable(m)
}
