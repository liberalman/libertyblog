package models

import (
	"time"

	"github.com/astaxie/beego/orm"
)

type TimePoint struct {
	Id         int64
	Timelineid int64
	Userid     int64
	Title      string    `orm:"size(128)"`
	Content    string    `orm:"type(text)"`
	Createtime time.Time `orm:"type(datetime)"`
	Pos        int
	Icosty     int
	Url        string
}

func (m *TimePoint) TableName() string {
	return TableName("time_point")
}

func (m *TimePoint) Read(fields ...string) error {
	if err := orm.NewOrm().Read(m, fields...); err != nil {
		return err
	}
	return nil
}

func (m *TimePoint) Query() orm.QuerySeter {
	return orm.NewOrm().QueryTable(m)
}

func (m *TimePoint) Update(fields ...string) error {
	if _, err := orm.NewOrm().Update(m, fields...); err != nil {
		return err
	}
	return nil
}

func (m *TimePoint) Delete() error {
	if _, err := orm.NewOrm().Delete(m); err != nil {
		return err
	}
	return nil
}

func (m *TimePoint) Insert() error {
	if _, err := orm.NewOrm().Insert(m); err != nil {
		return err
	}
	return nil
}

func (m *TimePoint) GetList(page int, pagesize int, timelineid int64) ([]*TimePoint, int64) {
	var list []*TimePoint
	query := new(TimePoint).Query().Filter("timelineid", timelineid)
	count, _ := query.Count()
	if count > 0 {
		query.OrderBy("createtime").Limit(pagesize, (page-1)*pagesize).All(&list)
	}
	return list, count
}
