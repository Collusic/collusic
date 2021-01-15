--
-- Table structure for table `user`
--
 
 
CREATE TABLE `user` (
  `key` int(11) NOT NULL AUTO_INCREMENT,
  `id` varchar(20) NOT NULL,
  `email` varchar(20) NOT NULL,
  PRIMARY KEY (`key`)
);
 
--
-- Dumping data for table `user`
--
 
INSERT INTO `user` VALUES (1,'egoing','egoing@gmail.com');
INSERT INTO `user` VALUES (2,'duru','duru@gmail.com');
INSERT INTO `user` VALUES (3,'taeho','taeho@gmail.com');
 
--
-- Table structure for table `portfolio`
--
 
CREATE TABLE `portfolio` (
  `key` int(11) NOT NULL AUTO_INCREMENT,
  `u_key` int(11) NOT NULL,
  `introduction` text,
  `phone`  varchar(15),
  PRIMARY KEY (`key`)
);
 
--
-- Dumping data for table `portfolio`
--
 
INSERT INTO `portfolio` VALUES (1,'1','MySQL is...','010-1234-5678');
INSERT INTO `portfolio` VALUES (2,'2','Oracle is ...','010-3423-3212');
INSERT INTO `portfolio` VALUES (3,'3','SQL Server is ...','010-1223-1125');

--
-- Table structure for table `active`
--
 
CREATE TABLE `active` (
  `key` int(11) NOT NULL AUTO_INCREMENT,
  `u_key` int(11) NOT NULL,
  `date` varchar(20) NOT NULL,
  `contents` text,
  PRIMARY KEY (`key`)
);
 
--
-- Dumping data for table `active`
--
 
INSERT INTO `active` VALUES (1,'1','2020-02-18','JYP 아이돌 연습생');
INSERT INTO `active` VALUES (2,'2','2020-03-20','JYP 작곡 커뮤니티');
INSERT INTO `active` VALUES (3,'3','2021-01-15','매니저 인턴');

--
-- Table structure for table `project`
--
 
CREATE TABLE `project` (
  `key` int(11) NOT NULL AUTO_INCREMENT,
  `u_key` int(11) NOT NULL,
  `path` varchar(50) NOT NULL,
  `title` varchar(20) NOT NULL,
  `description` text,
  PRIMARY KEY (`key`)
);
 
--
-- Dumping data for table `project`
--
 
INSERT INTO `project` VALUES (1,'1','./project/학선_우리만남이.mp3','우리만남이','1절은 완성했는데 2절을 못하겠어요 좋은 아이디어 부탁드려요');
INSERT INTO `project` VALUES (2,'3','./project/music1.mp3','내가 살아있는 건','곡이 너무 무난해서 악기 추천해 주세요');
INSERT INTO `project` VALUES (3,'2','./project/music2.mp3','falling','edm 쪽으로 멜로디 추천 부탁드려요');