#!/bin/sh
#1，每天4点备份mysql数据；
#2，为节省空间，删除超过3个月的所有备份数据；
#3，删除超过7天的备份数据，保留3个月里的 10号 20号 30号的备份数据；

#mysqldump -uroot -p123456 --all-databases  > /data/dbdata/mysqlbak/`date +%Y%m%d`.sql
#find /data/dbdata/mysqlbak/ -mtime +7 -name '*[1-9].sql' -exec rm -rf {} \;
#find /data/dbdata/mysqlbak/ -mtime +92 -name '*.sql' -exec rm -rf {} \;

#创建定时任务
#crontab –e
#0 4 * * *  /data/dbdata/backup_mysql.sh

cd /data/gocode/src/libertyblog/
mysqldump libertyblog > libertyblog.sql

#先要关联leancloud的应用，只用关联一次就可以了，以后操作不用了
#lean app add seaofheart 77FLlJI1rJm01PSAt8UKoovE-gzGzoHsz
lean upload libertyblog.sql
