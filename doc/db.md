# 数据库表说明

##### tb_user
用户表，存储用户名称、密码、第三方登录等信息

#### 定时备份mysql数据库
在操作系统crontab中添加一个定时任务
```
0 4 * * *  sh /data/gocode/src/libertyblog/backup_mysql.sh >/dev/null &
```
每天凌晨4点会调用此脚本备份数据库为一个sql文件，然后将此文件上传到我的leancloud上。

要上传到leancloud，首先需要安装lean工具，详情去leancloud官网查看云引擎下的命令行CLI工具。

连接：https://releases.leanapp.cn/leancloud/lean-cli/releases/download/v0.7.5/lean-linux-amd64


