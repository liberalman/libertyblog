package models

import (
	"time"

	"github.com/astaxie/beego/orm"
)

//photo table
type Photo struct {
	Id       int64
	Albumid  int64
	Des      string    `orm:"size(100)"`
	Posttime time.Time `orm:"type(datetime);index"`
	Url      string    `orm:"size(70)"`
	Small    string    `orm:"-"`
}

func (m *Photo) TableName() string {
	return TableName("photo")
}

func (m *Photo) Insert() error {
	if _, err := orm.NewOrm().Insert(m); err != nil {
		return err
	}
	return nil
}

func (m *Photo) Read(fields ...string) error {
	if err := orm.NewOrm().Read(m, fields...); err != nil {
		return err
	}
	return nil
}

func (m *Photo) Update(fields ...string) error {
	if _, err := orm.NewOrm().Update(m, fields...); err != nil {
		return err
	}
	return nil
}

func (m *Photo) Delete() error {
	if _, err := orm.NewOrm().Delete(m); err != nil {
		return err
	}
	return nil
}

func (m *Photo) Query() orm.QuerySeter {
	return orm.NewOrm().QueryTable(m)
}

func QueryPhotoListOfAlbum(albumid int64) []Photo {
	var list []Photo
	o := orm.NewOrm()
	o.Raw("select p.id,p.albumid,p.des,p.posttime,p.url from tb_album a left join tb_photo p on a.id=p.albumid where a.id=? order by p.posttime desc", albumid).QueryRows(&list)
	return list
}

// get photos of all over the site
func QueryAllPhotoList(page int, pagesize int) ([]Photo, int) {
	var count int = 0
	var list []Photo
	o := orm.NewOrm()
	o.Raw("select p.id,p.albumid,p.des,p.posttime,p.url from tb_album a left join tb_photo p on a.id=p.albumid where a.ishide<>1 order by p.posttime desc limit ?,?", (page-1)*pagesize, pagesize).QueryRows(&list)
	o.Raw("select count(p.id) from tb_album a left join tb_photo p on a.id=p.albumid where a.ishide<>1").QueryRow(&count)
	return list, count
}

// get photos of all mine
func QueryMyPhotoList(userid int64, page int, pagesize int) ([]Photo, int) {
	var count int = 0
	var list []Photo
	o := orm.NewOrm()
	o.Raw("select p.id,p.albumid,p.des,p.posttime,p.url from tb_album a left join tb_photo p on a.id=p.albumid where a.ishide<>1 and a.userid=? order by p.posttime desc limit ?,?", userid, (page-1)*pagesize, pagesize).QueryRows(&list)
	o.Raw("select count(p.id) from tb_album a left join tb_photo p on a.id=p.albumid where a.ishide<>1 and a.userid=?", userid).QueryRow(&count)
	return list, count
}
