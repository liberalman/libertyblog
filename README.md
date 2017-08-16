libertyblog
====

使用 Golang 开发的个人博客，基于 BeeGo 框架。

使用 sphinx 做全文检索引擎。

Author: liberalman

首先要安装golang，配置GOROOT和GOPATH环境；还有要安装git工具，以便下载代码。

#### 下载代码
```
git clone -depth=1 https://github.com/liberalman/libertyblog.git
```
#### 下载依赖库
该项目依赖一些golang的第三方库，执行以下命令安装
```
go get -u github.com/astaxie/beego
go get github.com/go-sql-driver/mysql
go get github.com/nfnt/resize
go get github.com/yunge/sphinx
```

#### 编译
```
cd libertyblog
go build
```
无意外的话，会生成一个libertyblog的可执行文件
#### 安装mysql
安装mysql服务，配置好访用户名密码后，创建数据库，名称叫libertyblog，导入libertyblog.sql脚本文件。关于mysql安装配置这个过程就不详述了，请自行百度








# 数据库表说明

##### tb_user
用户表，存储用户名称、密码、第三方登录等信息

### 功能

#### 支持QQ第三方登录
QQ第三方登录配置地址https://connect.qq.com/manage.html#/appinfo/web/101345272

controllers/blog/user.go:Callback() 登录回调函数

views/lofter/logincallback.html 登录回调页面

#### 定时备份mysql数据库
在操作系统crontab中添加一个定时任务
```
0 4 * * *  sh /data/gocode/src/libertyblog/backup_mysql.sh >/dev/null &
```
每天凌晨4点会调用此脚本备份数据库为一个sql文件，然后将此文件上传到我的leancloud上。

要上传到leancloud，首先需要安装lean工具，详情去leancloud官网查看云引擎下的命令行CLI工具。

连接：https://releases.leanapp.cn/leancloud/lean-cli/releases/download/v0.7.5/lean-linux-amd64




# docker 方式部署

### 数据库

我的数据库是基于docker建立的mysql镜像，所以需要先安装docker，然后使用docker拉取mysql-server镜像
```
docker pull docker.io/mysql/mysql-server
```
目前默认拉下来的是5.7版本

启动，并且映射宿主机目录作为数据存储的路径，不要忘记指定root密码和访问的数据库名称(敏感信息我都用***号代替了)；还有配置文件部分，也是自己的配置，取自./conf/my.cnf
```
docker run --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=*** -e MYSQL_DATABASE=*** -v /data/mysql/my.cnf:/etc/mysql/my.cnf -v /var/lib/mysql:/var/lib/mysql -d docker.io/mysql/mysql-server
```
启动成功后查看，创建了一个名称为mysql的容器
```
[root@VM_centos src]# docker ps
CONTAINER ID        IMAGE                          COMMAND                  CREATED             STATUS              PORTS                               NAMES
d8953fde4a8f        docker.io/mysql/mysql-server   "/entrypoint.sh mysql"   6 seconds ago       Up 4 seconds        0.0.0.0:3306->3306/tcp, 33060/tcp   mysql
```
想要进入该容器
```
docker exec -it mysql bash
```


my cmd
```
docker run -it -v /data/gocode:/data/gocode -e GOPATH=/data/gocode --rm demo/go-build:latest /bin/bash -c "cd /data/gocode/src/libertyblog && go build"
docker build -t liberalman/libertyblog .

nginx -p `pwd`/ -c conf/nginx.conf
```

