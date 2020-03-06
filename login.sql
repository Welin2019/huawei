# Host: localhost  (Version: 5.5.53)
# Date: 2020-03-06 13:41:30
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES gb2312 */;

#
# Structure for table "login"
#

DROP TABLE IF EXISTS `login`;
CREATE TABLE `login` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1 COMMENT='用户相关表';

#
# Data for table "login"
#

/*!40000 ALTER TABLE `login` DISABLE KEYS */;
INSERT INTO `login` VALUES (1,'admin','123456'),(2,'li','123456');
/*!40000 ALTER TABLE `login` ENABLE KEYS */;
