#!/bin/sh
#1，每天4点备份mysql数据；
#2，为节省空间，删除超过3个月的所有备份数据；
#3，删除超过7天的备份数据，保留3个月里的 10号 20号 30号的备份数据；

#mysqldump -u*** -p*** --all-databases  > /data/dbdata/mysqlbak/`date +%Y%m%d`.sql
#find /data/dbdata/mysqlbak/ -mtime +7 -name '*[1-9].sql' -exec rm -rf {} \;
#find /data/dbdata/mysqlbak/ -mtime +92 -name '*.sql' -exec rm -rf {} \;

#要手动到操作系统的crontab中创建定时任务
#crontab –e
#0 4 * * *  /data/gocode/src/libertyblog/backup_mysql.sh

pushd /data/gocode/src/libertyblog/
    mysqldump -usocho -pLooks137 libertyblog | gzip > libertyblog.sql.gz

    #先要安装lean工具，可以到leancloud官网上查看云引擎下的命令行CLI工具。这里我直接给链接
    #https://releases.leanapp.cn/leancloud/lean-cli/releases/download/v0.7.5/lean-linux-amd64
    #要先登录leancloud，具体操作看官网，步骤略，这里假设已经安装lean工具并登录初始化成功
    pushd seaofheart
        #seaofheart是我在leancloud上建立的工程，下载到本地来，要进入这个工程目录，然后执行上传
        lean upload ../libertyblog.sql.gz

        if [ $? -eq 0 ];then
            echo "upload libertyblog.sql.gz to leancloud success."
        else
            echo "upload libertyblog.sql.gz to leancloud failed." | mail -s "www.hicool.top Warning" "zscchina@163.com"
        fi
    popd

popd


