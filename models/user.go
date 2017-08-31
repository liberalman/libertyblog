package models

import (
	"time"

	"github.com/astaxie/beego/orm"
)

//用户表模型
type User struct {
	Id             int64
	Username       string    `orm:"unique;size(15)"`
	Password       string    `orm:"size(32)"`
	Email          string    `orm:"size(50)"`
	Lastlogin      time.Time `orm:"auto_now_add;type(datetime)"`
	Logincount     int64
	Lastip         string `orm:"size(32)"`
	Authkey        string `orm:"size(10)"`
	Active         int8
	Avatarurl      string
	Follow_count   int
	Post_count     int
	Qq_openid      string `orm:"size(64)"`
	Qq_accesstoken string `orm:"size(64)"`
	Information    string `orm:"size(1024)"`
}

func (m *User) TableName() string {
	return TableName("user")
}

func (m *User) Insert() error {
	if _, err := orm.NewOrm().Insert(m); err != nil {
		return err
	}
	return nil
}

func (m *User) Read(fields ...string) error {
	if err := orm.NewOrm().Read(m, fields...); err != nil {
		return err
	}
	return nil
}

func (m *User) Update(fields ...string) error {
	if _, err := orm.NewOrm().Update(m, fields...); err != nil {
		return err
	}
	GetUser(m.Id, true) // reset cache of 'User'
	return nil
}

func (m *User) Delete() error {
	if _, err := orm.NewOrm().Delete(m); err != nil {
		return err
	}
	return nil
}

func (m *User) Query() orm.QuerySeter {
	return orm.NewOrm().QueryTable(m)
}
