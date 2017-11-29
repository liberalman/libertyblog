libertyblog
====

使用 Golang 开发的个人博客，基于 BeeGo 框架。

使用 sphinx 做全文检索引擎。

Author: liberalman

# 安装

请确保以下软件已经安装并配置好，安装过程不赘述，自行百度

|依赖环境|是否必须|Version|说明|
|---|---|---|---|
|golang|Yes|1.8.3|我们的代码是go写的，确保安装正确，GOPATH环境没问题|
|git|Yes|1.8.3.1|下载代码，以及更新beego运行环境所需依赖|
|mysql|Yes|5.7.18-log|数据库必须要配置，并且将初始化的sql脚本导入才能用|
|docker|No|1.12.6|我把项目用到的所有组件都装进docker了，如果想要部署方便可以尝试使用docker来运行|
|coreseek|No||搜索组件，不安装的话搜索没法用，不过不影响网站运行。coreseek，是中文分词版的sphinx，所以这个软件实际上是sphinx|

>注意：如果觉得安装mysql和sphinx麻烦，尤其是sphinx的中文分词方式安装配置很繁琐，那最好选用docker方式来运行，因为docker我已经为大家配置好了mysql和sphinx，只需要拉取下来使用就可以了。

#### 1.下载代码
```
git clone -depth=1 https://github.com/liberalman/libertyblog.git
```
我将源码下载到了 /data/gocode/src/libertyblog ，后续所有的操作也都在该路径下。

#### 2.更新依赖库
该项目依赖一些golang的第三方库，执行以下命令安装
```
go get -u github.com/astaxie/beego
go get -u github.com/go-sql-driver/mysql
go get -u github.com/nfnt/resize
go get -u github.com/yunge/sphinx
go get -u golang.org/x/net/context
go get -u github.com/upyun/go-sdk/upyun
go get -u github.com/qiniu/api.v7/auth/qbox
go get -u github.com/qiniu/api.v7/storage
```

#### 3.编译
```
cd libertyblog
go build
```
无意外的话，会在当前目录下生成一个libertyblog的可执行文件。

#### 安装mysql
登录mysql服务器，创建数据库，名称叫libertyblog，导入libertyblog.sql脚本文件。

#### 修改配置
启动载入的配置文件是 conf/app.conf ，打开这个文件，改为你的配置
```
dbhost= #数据库主机地址
dbuser= #用户名
dbport= #端口
sphinx_host= #sphinx主机地址
sphinx_port= #sphinx端口
```
#### 4.运行
```
./libertyblog
```
然后去 http://localhost 查看效果，OK！

另外一种执行方式，需要安装bee工具
```
go get -u github.com/beego/bee
``
然后
```
bee run -downdoc=true -gendoc=true
```
其中-gendoc=true是指生成/swagger下的api文档，-downdoc=true是当文档目录/swagger下内容有改动的时候热更新。








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

