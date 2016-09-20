package models

import (
	//"fmt"
	"time"

	"github.com/astaxie/beego/orm"
)

type History struct {
	Id      int64
	Userid  int64
	Title   string    `orm:"size(128)"`
	Content string    `orm:"type(text)"`
	Dotime  time.Time `orm:"type(datetime)"`
	Pos     int
	Icosty  int
}

func (m *History) TableName() string {
	return TableName("history")
}

func (m *History) Read(fields ...string) error {
	if err := orm.NewOrm().Read(m, fields...); err != nil {
		return err
	}
	return nil
}

func (m *History) Query() orm.QuerySeter {
	return orm.NewOrm().QueryTable(m)
}

func (m *History) Update(fields ...string) error {
	if _, err := orm.NewOrm().Update(m, fields...); err != nil {
		return err
	}
	return nil
}

func (m *History) Delete() error {
	if _, err := orm.NewOrm().Delete(m); err != nil {
		return err
	}
	return nil
}

func (m *History) Insert() error {
	if _, err := orm.NewOrm().Insert(m); err != nil {
		return err
	}
	return nil
}
