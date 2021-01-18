--
-- Table structure for table `user`
--
 
 
CREATE TABLE `user` (
  `id` varchar(20) NOT NULL,
  `email` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
);
 
--
-- Dumping data for table `user`
--
 
INSERT INTO `user` VALUES ('egoing','egoing@gmail.com');
INSERT INTO `user` VALUES ('duru','duru@gmail.com');
INSERT INTO `user` VALUES ('taeho','taeho@gmail.com');
 
--
-- Table structure for table `portfolio`
--
 
CREATE TABLE `portfolio` (
  `key` int(11) NOT NULL AUTO_INCREMENT,
  `u_id` varchar(20) NOT NULL,
  `photoPath` varchar(20),
  `introduction` text,
  `phone`  varchar(15),
  PRIMARY KEY (`key`)
);
 
--
-- Dumping data for table `portfolio`
--
 
INSERT INTO `portfolio` VALUES (1,'egoing','그림1.png', 'MySQL is...','010-1234-5678');
INSERT INTO `portfolio` VALUES (2,'duru','그림2.png', 'Oracle is ...','010-3423-3212');
INSERT INTO `portfolio` VALUES (3,'taeho','', 'SQL Server is ...','010-1223-1125');

--
-- Table structure for table `active`
--
 
CREATE TABLE `active` (
  `key` int(11) NOT NULL AUTO_INCREMENT,
  `u_id` varchar(20) NOT NULL,
  `date` varchar(20) NOT NULL,
  `contents` text,
  PRIMARY KEY (`key`)
);
 
--
-- Dumping data for table `active`
--
 
INSERT INTO `active` VALUES (1,'egoing','2020-02-18','JYP 아이돌 연습생');
INSERT INTO `active` VALUES (2,'duru','2020-03-20','JYP 작곡 커뮤니티');
INSERT INTO `active` VALUES (3,'taeho','2021-01-15','매니저 인턴');

--
-- Table structure for table `project`
--
 
CREATE TABLE `project` (
  `key` int(11) NOT NULL AUTO_INCREMENT,
  `u_id` varchar(20) NOT NULL,
  `audioPath` varchar(50) NOT NULL,
  `title` varchar(20) NOT NULL,
  `description` text,
  PRIMARY KEY (`key`)
);
 
--
-- Dumping data for table `project`
--
 
INSERT INTO `project` VALUES (1,'egoing','학선_우리만남이.mp3','우리만남이','1절은 완성했는데 2절을 못하겠어요 좋은 아이디어 부탁드려요');
INSERT INTO `project` VALUES (2,'taeho','music1.mp3','내가 살아있는 건','곡이 너무 무난해서 악기 추천해 주세요');
INSERT INTO `project` VALUES (3,'duru','music2.mp3','falling','edm 쪽으로 멜로디 추천 부탁드려요');