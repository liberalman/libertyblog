package models

import (
	"crypto/md5"
	"fmt"
	"net/url"
	"strconv"
	"strings"
	"time"

	"github.com/astaxie/beego"
	"github.com/astaxie/beego/cache"
	"github.com/astaxie/beego/orm"
	_ "github.com/go-sql-driver/mysql"
	"github.com/yunge/sphinx"
)

var SphinxClient *sphinx.Client
var Sphinx_port int
var Sphinx_host string
var Cache cache.Cache

const (
	CACHE_TIME_OUT          time.Duration = 86400 // seconds
	CACHE_KEY_TB_USER       string        = "tb_user:"
	CACHE_KEY_TB_USER_TOTAL string        = "tb_user:total:"
	CACHE_KEY_TB_ARTICLE    string        = "tb_article:"

	CANNOT_DELETE_LOCAL int16 = 1
	CANNOT_DELETE_QINIU int16 = 2
	CANNOT_UPLOAD_UPYUN int16 = 3
	CANNOT_DELETE_UPYUN int16 = 4
)

func init() {
	// mysql
	dbhost := beego.AppConfig.String("dbhost")
	dbport := beego.AppConfig.String("dbport")
	dbuser := beego.AppConfig.String("dbuser")
	dbpassword := beego.AppConfig.String("dbpassword")
	dbname := beego.AppConfig.String("dbname")
	if dbport == "" {
		dbport = "3306"
	}
	dburl := dbuser + ":" + dbpassword + "@tcp(" + dbhost + ":" + dbport + ")/" + dbname + "?charset=utf8&loc=Local"
	orm.RegisterDataBase("default", "mysql", dburl)
	orm.RegisterModel(new(User), new(Post), new(Tag), new(Option), new(TagPost), new(Photo), new(Album), new(Link),
		new(Article), new(Timeline), new(TimePoint), new(Statistics), new(Comment), new(Cleanup))
	if beego.AppConfig.String("runmode") == "dev" {
		orm.Debug = true
	}

	var err error
	Cache, err = cache.NewCache("memory", `{"interval":60}`) // memory 在内存中做缓存，每 60s 会进行一次过期清理
	if nil != err {
		beego.Error(err.Error())
	}

	// sphinx
	/*sphinx_port, _ := strconv.Atoi(beego.AppConfig.String("sphinx_port"))
	sphinx_host := beego.AppConfig.String("sphinx_host")
	SphinxClient = sphinx.NewClient().SetServer(sphinx_host, sphinx_port).SetConnectTimeout(5000)
	if err := SphinxClient.Error(); err != nil {
		beego.Error("sphinx err 1", err)
		return
	}*/
	Sphinx_port, _ = strconv.Atoi(beego.AppConfig.String("sphinx_port"))
	Sphinx_host = beego.AppConfig.String("sphinx_host")
}

func clean() {
	SphinxClient.Close()
}

func Md5(buf []byte) string {
	hash := md5.New()
	hash.Write(buf)
	return fmt.Sprintf("%x", hash.Sum(nil))
}

func Rawurlencode(str string) string {
	return strings.Replace(url.QueryEscape(str), "+", "%20", -1)
}

func GetOptions() map[string]string {
	if !Cache.IsExist("options") {
		var result []*Option
		o := orm.NewOrm()
		o.QueryTable(&Option{}).All(&result)
		options := make(map[string]string)
		for _, v := range result {
			options[v.Name] = v.Value
		}
		Cache.Put("options", options, CACHE_TIME_OUT*time.Second)
	}
	v := Cache.Get("options")
	return v.(map[string]string)
}

func GetLatestBlog() []*Article {
	if !Cache.IsExist("latestblog") {
		var result []*Article
		query := new(Article).Query().Filter("status", 0).Filter("urltype", 0)
		count, _ := query.Count()
		if count > 0 {
			query.OrderBy("-posttime").Limit(8).All(&result)
		}
		Cache.Put("latestblog", result, CACHE_TIME_OUT*time.Second)
	}
	v := Cache.Get("latestblog")
	return v.([]*Article)
}

func GetHotBlog() []*Article {
	if !Cache.IsExist("hotblog") {
		var result []*Article
		new(Article).Query().Filter("status", 0).Filter("urltype", 0).OrderBy("-views").Limit(5).All(&result)
		Cache.Put("hotblog", result, CACHE_TIME_OUT*time.Second)
	}
	v := Cache.Get("hotblog")
	return v.([]*Article)
}

// reset: if to reset new cache
func CacheGetUser(userid int64) User {
	key := fmt.Sprintf("tb_user:%d", userid)
	if !Cache.IsExist(key) {
		var user User
		new(User).Query().Filter("id", userid).One(&user)
		Cache.Put(key, user, CACHE_TIME_OUT*time.Second)
	}
	v := Cache.Get(key)
	return v.(User)
}

func CacheResetUser(userid int64) {
	key := fmt.Sprintf("tb_user:%d", userid)
	Cache.Delete(key)
	var user User
	new(User).Query().Filter("id", userid).One(&user)
	Cache.Put(key, user, CACHE_TIME_OUT*time.Second)
}

func Delete(userid int64) {
	key := fmt.Sprintf("tb_user:%d", userid)
	Cache.Delete(key)
}

func GetLinks() []*Link {
	if !Cache.IsExist("links") {
		var result []*Link
		new(Link).Query().OrderBy("-rank").All(&result)
		Cache.Put("links", result, CACHE_TIME_OUT*time.Second)
	}
	v := Cache.Get("links")
	return v.([]*Link)
}

//返回带前缀的表名
func TableName(str string) string {
	return fmt.Sprintf("%s%s", beego.AppConfig.String("dbprefix"), str)
}
