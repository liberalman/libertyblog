package models

import (
	"time"

	"github.com/astaxie/beego/orm"
)

//相册表
type Timeline struct {
	Id         int64
	Userid     int64
	Name       string    `orm:"size(100)"`
	Coverurl   string    `orm:"size(255)"`
	Createtime time.Time `orm:"type(datetime);index"`
	Ishide     int8
	Rank       int8
	Linenum    int64
	Content    string `orm:"size(1024)"`
}

func (m *Timeline) TableName() string {
	return TableName("timeline")
}

func (m *Timeline) Insert() error {
	if _, err := orm.NewOrm().Insert(m); err != nil {
		return err
	}
	return nil
}

func (m *Timeline) Read(fields ...string) error {
	if err := orm.NewOrm().Read(m, fields...); err != nil {
		return err
	}
	return nil
}

func (m *Timeline) Update(fields ...string) error {
	if _, err := orm.NewOrm().Update(m, fields...); err != nil {
		return err
	}
	return nil
}

func (m *Timeline) Delete() error {
	if _, err := orm.NewOrm().Delete(m); err != nil {
		return err
	}
	return nil
}

func (m *Timeline) Query() orm.QuerySeter {
	return orm.NewOrm().QueryTable(m)
}

func (m *Timeline) GetList(page int, pagesize int) ([]*Timeline, int64) {
	var list []*Timeline
	query := new(Timeline).Query().Filter("ishide", 0)
	count, _ := query.Count()
	if count > 0 {
		query.OrderBy("-rank", "-createtime").Limit(pagesize, (page-1)*pagesize).All(&list)
	}
	return list, count
}

func (m *Timeline) GetListByUserid(page int, pagesize int, userid int64) ([]*Timeline, int64) {
	var list []*Timeline
	query := new(Timeline).Query().Filter("userid", userid)
	count, _ := query.Count()
	if count > 0 {
		query.OrderBy("-rank", "-createtime").Limit(pagesize, (page-1)*pagesize).All(&list)
	}
	return list, count
}
