package models

import (
	"github.com/astaxie/beego/orm"
)

type Cleanup struct {
	Id    int64
	Url   string `orm:"size(255)"`
	Error string `orm:"size(255)"`
	Event int16
}

func (m *Cleanup) TableName() string {
	return TableName("cleanup")
}

func (m *Cleanup) Insert() error {
	if _, err := orm.NewOrm().Insert(m); err != nil {
		return err
	}
	return nil
}

func (m *Cleanup) Read(fields ...string) error {
	if err := orm.NewOrm().Read(m, fields...); err != nil {
		return err
	}
	return nil
}

func (m *Cleanup) Update(fields ...string) error {
	if _, err := orm.NewOrm().Update(m, fields...); err != nil {
		return err
	}
	return nil
}

func (m *Cleanup) Delete() error {
	if _, err := orm.NewOrm().Delete(m); err != nil {
		return err
	}
	return nil
}

func (m *Cleanup) Query() orm.QuerySeter {
	return orm.NewOrm().QueryTable(m)
}
