-- MySQL dump 10.14  Distrib 5.5.52-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: libertyblog
-- ------------------------------------------------------
-- Server version	5.7.18-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `sph_counter`
--

DROP TABLE IF EXISTS `sph_counter`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sph_counter` (
  `counter_id` int(11) NOT NULL,
  `max_doc_id` int(11) NOT NULL,
  PRIMARY KEY (`counter_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tb_album`
--

DROP TABLE IF EXISTS `tb_album`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_album` (
  `id` mediumint(8) NOT NULL AUTO_INCREMENT,
  `userid` mediumint(8) unsigned DEFAULT '0' COMMENT 'userid',
  `name` varchar(100) NOT NULL COMMENT '相册名称',
  `cover` varchar(70) NOT NULL COMMENT '相册封面',
  `posttime` datetime NOT NULL,
  `ishide` tinyint(1) NOT NULL DEFAULT '0',
  `rank` tinyint(3) NOT NULL DEFAULT '0',
  `photonum` int(11) NOT NULL DEFAULT '0',
  `content` varchar(1024) CHARACTER SET utf8mb4 DEFAULT NULL COMMENT 'What do you want to say?',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Temporary table structure for view `tb_article`
--

DROP TABLE IF EXISTS `tb_article`;
/*!50001 DROP VIEW IF EXISTS `tb_article`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `tb_article` (
  `username` tinyint NOT NULL,
  `id` tinyint NOT NULL,
  `userid` tinyint NOT NULL,
  `title` tinyint NOT NULL,
  `digest` tinyint NOT NULL,
  `urlname` tinyint NOT NULL,
  `urltype` tinyint NOT NULL,
  `content` tinyint NOT NULL,
  `tags` tinyint NOT NULL,
  `views` tinyint NOT NULL,
  `status` tinyint NOT NULL,
  `posttime` tinyint NOT NULL,
  `updated` tinyint NOT NULL,
  `istop` tinyint NOT NULL,
  `coverurl` tinyint NOT NULL,
  `pubtype` tinyint NOT NULL,
  `reprinturl` tinyint NOT NULL,
  `avatarurl` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `tb_cleanup`
--

DROP TABLE IF EXISTS `tb_cleanup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_cleanup` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(255) DEFAULT NULL COMMENT '资源URL地址',
  `event` smallint(6) DEFAULT '0' COMMENT '1 本地硬盘文件无法删除, 2 七牛云存储文件无法删除，3 本地硬盘文件无法转储到又拍云，4 又拍云文件无法删除',
  `error` varchar(255) DEFAULT NULL COMMENT '不能清理的原因',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tb_comments`
--

DROP TABLE IF EXISTS `tb_comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_comments` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT COMMENT '评论id',
  `user_id` int(11) unsigned DEFAULT '0' COMMENT '用户id',
  `to_user_id` int(11) unsigned DEFAULT '0' COMMENT '目标用户id',
  `ref_comm_id` mediumint(9) unsigned DEFAULT NULL COMMENT '引用评论的id，引用的是本表的其他评论的id，作为对其评论的回复。默认为空，比如第一条评论就没有引用的评论。',
  `article_id` mediumint(8) unsigned DEFAULT '0' COMMENT '文章id，表示该评论是哪个文章下的评论。',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `like` int(10) unsigned DEFAULT '0' COMMENT '该评论被点赞的次数',
  `dislike` int(10) unsigned DEFAULT '0' COMMENT '不喜欢该评论的次数',
  `content` varchar(1023) DEFAULT NULL COMMENT '评论内容',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=37 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tb_link`
--

DROP TABLE IF EXISTS `tb_link`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_link` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `sitename` varchar(80) NOT NULL DEFAULT '' COMMENT '网站名字',
  `url` varchar(200) NOT NULL DEFAULT '' COMMENT '友链URL地址',
  `rank` tinyint(4) NOT NULL DEFAULT '0' COMMENT '排序值',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tb_option`
--

DROP TABLE IF EXISTS `tb_option`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_option` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL DEFAULT '',
  `value` text NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tb_photo`
--

DROP TABLE IF EXISTS `tb_photo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_photo` (
  `id` mediumint(8) NOT NULL AUTO_INCREMENT,
  `albumid` mediumint(8) NOT NULL COMMENT '所属相册ID',
  `des` varchar(255) NOT NULL COMMENT '照片描述',
  `posttime` datetime NOT NULL COMMENT '上传时间',
  `url` varchar(255) NOT NULL COMMENT '照片URL地址',
  `source` tinyint(1) DEFAULT '0' COMMENT '0 本地硬盘文件, 1 七牛云存储文件，2 又拍云存储文件',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=436 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`socho`@`%`*/ /*!50003 TRIGGER `InsertPhoto` AFTER INSERT ON `tb_photo` FOR EACH ROW update tb_album set photonum=photonum+1 where id = new.albumid */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `tb_post`
--

DROP TABLE IF EXISTS `tb_post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_post` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `userid` mediumint(8) unsigned NOT NULL DEFAULT '0' COMMENT '用户id',
  `title` varchar(100) NOT NULL DEFAULT '' COMMENT '标题',
  `digest` varchar(255) CHARACTER SET utf8mb4 DEFAULT '' COMMENT '文摘',
  `urlname` varchar(100) NOT NULL DEFAULT '' COMMENT 'url名',
  `urltype` tinyint(1) NOT NULL DEFAULT '0' COMMENT 'url访问形式',
  `content` mediumtext NOT NULL COMMENT '内容',
  `tags` varchar(100) NOT NULL DEFAULT '' COMMENT '标签',
  `views` mediumint(8) unsigned NOT NULL DEFAULT '0' COMMENT '查看次数',
  `status` tinyint(1) NOT NULL DEFAULT '0' COMMENT '状态{0:正常,1:草稿,2:回收站}',
  `posttime` datetime DEFAULT NULL COMMENT '发布时间',
  `updated` datetime DEFAULT NULL COMMENT '更新时间',
  `istop` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否置顶',
  `coverurl` varchar(255) DEFAULT NULL COMMENT '文章封面',
  `pubtype` tinyint(1) DEFAULT '0' COMMENT '发布类型 0原创 1转载 2翻译',
  `reprinturl` varchar(128) DEFAULT NULL COMMENT '从何处转载的地址地址，pubtype=1的时候生效',
  `editortype` tinyint(1) DEFAULT '0' COMMENT '0 ueditor，1 markdown',
  `show` tinyint(1) DEFAULT '1' COMMENT '1 every one can view, 0 just myself can view',
  PRIMARY KEY (`id`),
  KEY `userid` (`userid`),
  KEY `posttime` (`posttime`),
  KEY `urlname` (`urlname`)
) ENGINE=InnoDB AUTO_INCREMENT=708 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`socho`@`%`*/ /*!50003 TRIGGER `tg_post_insert` AFTER INSERT ON `tb_post` FOR EACH ROW begin
	update tb_user set post_count=(select count(id) from tb_post where userid=new.userid) where id=new.userid;
end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`socho`@`%`*/ /*!50003 TRIGGER `tg_post_delete` AFTER DELETE ON `tb_post` FOR EACH ROW begin
	update tb_user set post_count=(select count(id) from tb_post where userid=old.userid) where id=old.userid;
end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `tb_statistics`
--

DROP TABLE IF EXISTS `tb_statistics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_statistics` (
  `id` mediumint(9) unsigned NOT NULL AUTO_INCREMENT COMMENT 'id',
  `user_count` int(10) unsigned DEFAULT '0' COMMENT '用户数',
  `post_count` int(10) unsigned DEFAULT '0' COMMENT '文章数量',
  `tag_count` int(10) unsigned DEFAULT '0' COMMENT '标签数量',
  `dau` int(10) unsigned DEFAULT '0' COMMENT '日活跃数量',
  `tags` varchar(128) DEFAULT NULL COMMENT '标签的统计数据',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=111 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tb_tag`
--

DROP TABLE IF EXISTS `tb_tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_tag` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL DEFAULT '' COMMENT '标签名',
  `count` mediumint(8) unsigned NOT NULL DEFAULT '0' COMMENT '使用次数',
  PRIMARY KEY (`id`),
  KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tb_tag_post`
--

DROP TABLE IF EXISTS `tb_tag_post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_tag_post` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `tagid` mediumint(8) unsigned NOT NULL DEFAULT '0' COMMENT '标签id',
  `postid` mediumint(8) unsigned NOT NULL DEFAULT '0' COMMENT '内容id',
  `poststatus` tinyint(3) NOT NULL DEFAULT '0' COMMENT '内容状态',
  `posttime` datetime DEFAULT NULL COMMENT '发布时间',
  PRIMARY KEY (`id`),
  KEY `tagid` (`tagid`),
  KEY `postid` (`postid`)
) ENGINE=InnoDB AUTO_INCREMENT=1970 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tb_time_point`
--

DROP TABLE IF EXISTS `tb_time_point`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_time_point` (
  `id` mediumint(9) unsigned NOT NULL AUTO_INCREMENT COMMENT '历史足迹id',
  `timelineid` mediumint(9) unsigned DEFAULT '0' COMMENT 'every one can create many timelines',
  `userid` mediumint(9) unsigned DEFAULT '0' COMMENT '用户id',
  `createtime` datetime DEFAULT NULL,
  `pos` tinyint(4) DEFAULT '0' COMMENT '0 在时间轴左边 1 在时间轴右边',
  `icosty` tinyint(4) DEFAULT '0' COMMENT 'the icon style NO.: 0, 1, 2, 3. ',
  `title` varchar(128) CHARACTER SET utf8 DEFAULT NULL COMMENT '标题',
  `url` varchar(255) CHARACTER SET utf8 DEFAULT NULL COMMENT 'if this time point has a photo, then it is the url.',
  `content` mediumtext CHARACTER SET utf8 COMMENT '内容',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=96 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`socho`@`%`*/ /*!50003 TRIGGER `InsertTimePoint` AFTER INSERT ON `tb_time_point`
FOR EACH ROW update tb_timeline set linenum=linenum+1 where id = new.timelineid */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `tb_timeline`
--

DROP TABLE IF EXISTS `tb_timeline`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_timeline` (
  `id` mediumint(8) NOT NULL AUTO_INCREMENT,
  `userid` mediumint(8) unsigned DEFAULT '0' COMMENT 'userid',
  `name` varchar(100) DEFAULT NULL COMMENT '相册名称',
  `coverurl` varchar(255) DEFAULT NULL COMMENT 'timeline封面',
  `createtime` datetime DEFAULT NULL,
  `ishide` tinyint(1) DEFAULT '0' COMMENT '1 hide, 0 show',
  `rank` tinyint(3) DEFAULT '0' COMMENT 'rank of all timelines. the larger on first.',
  `linenum` int(11) DEFAULT '0' COMMENT 'numbers of timeline.',
  `content` varchar(1024) CHARACTER SET utf8mb4 DEFAULT NULL COMMENT 'What do you want to say?',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tb_user`
--

DROP TABLE IF EXISTS `tb_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_user` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `username` varchar(15) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '用户名',
  `password` varchar(32) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '密码',
  `email` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '邮箱',
  `logincount` mediumint(8) unsigned NOT NULL DEFAULT '0' COMMENT '登录次数',
  `lastip` varchar(15) CHARACTER SET utf8 NOT NULL DEFAULT '0' COMMENT '最后登录ip',
  `lastlogin` datetime DEFAULT NULL COMMENT '最后登录时间',
  `authkey` char(10) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '登录key',
  `active` tinyint(3) NOT NULL DEFAULT '0' COMMENT '是否激活',
  `avatarurl` varchar(128) CHARACTER SET utf8 DEFAULT NULL,
  `follow_count` int(10) unsigned DEFAULT '0' COMMENT '粉丝数量',
  `post_count` int(10) unsigned DEFAULT '0' COMMENT '文章数量',
  `qq_openid` varchar(64) CHARACTER SET utf8 DEFAULT NULL COMMENT 'qq openid',
  `qq_accesstoken` varchar(64) CHARACTER SET utf8 DEFAULT NULL COMMENT 'qq accessToken',
  `information` varchar(1024) DEFAULT NULL COMMENT 'personal information',
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping events for database 'libertyblog'
--
/*!50106 SET @save_time_zone= @@TIME_ZONE */ ;
/*!50106 DROP EVENT IF EXISTS `e_statistics` */;
DELIMITER ;;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;;
/*!50003 SET character_set_client  = latin1 */ ;;
/*!50003 SET character_set_results = latin1 */ ;;
/*!50003 SET collation_connection  = latin1_swedish_ci */ ;;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;;
/*!50003 SET @saved_time_zone      = @@time_zone */ ;;
/*!50003 SET time_zone             = 'SYSTEM' */ ;;
/*!50106 CREATE*/ /*!50117 DEFINER=`socho`@`%`*/ /*!50106 EVENT `e_statistics` ON SCHEDULE EVERY 1 DAY STARTS '2017-11-28 09:37:45' ON COMPLETION NOT PRESERVE ENABLE DO insert into tb_statistics(`user_count`,`post_count`,`tag_count`,`create_time`)  values((select count(id) from tb_user),(select count(id) from tb_post),(select count(id) from tb_tag) ,current_time()) */ ;;
/*!50003 SET time_zone             = @saved_time_zone */ ;;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;;
/*!50003 SET character_set_client  = @saved_cs_client */ ;;
/*!50003 SET character_set_results = @saved_cs_results */ ;;
/*!50003 SET collation_connection  = @saved_col_connection */ ;;
DELIMITER ;
/*!50106 SET TIME_ZONE= @save_time_zone */ ;

--
-- Dumping routines for database 'libertyblog'
--

--
-- Final view structure for view `tb_article`
--

/*!50001 DROP TABLE IF EXISTS `tb_article`*/;
/*!50001 DROP VIEW IF EXISTS `tb_article`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`socho`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `tb_article` AS select `tb_user`.`username` AS `username`,`tb_post`.`id` AS `id`,`tb_post`.`userid` AS `userid`,`tb_post`.`title` AS `title`,`tb_post`.`digest` AS `digest`,`tb_post`.`urlname` AS `urlname`,`tb_post`.`urltype` AS `urltype`,`tb_post`.`content` AS `content`,`tb_post`.`tags` AS `tags`,`tb_post`.`views` AS `views`,`tb_post`.`status` AS `status`,`tb_post`.`posttime` AS `posttime`,`tb_post`.`updated` AS `updated`,`tb_post`.`istop` AS `istop`,`tb_post`.`coverurl` AS `coverurl`,`tb_post`.`pubtype` AS `pubtype`,`tb_post`.`reprinturl` AS `reprinturl`,`tb_user`.`avatarurl` AS `avatarurl` from (`tb_user` join `tb_post`) where (`tb_user`.`id` = `tb_post`.`userid`) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-11-29 18:04:49
