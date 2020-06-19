-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: hrm
-- ------------------------------------------------------
-- Server version	8.0.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `department`
--

DROP TABLE IF EXISTS `department`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `department` (
  `id` int NOT NULL AUTO_INCREMENT,
  `created_at` datetime DEFAULT NULL,
  `created_by` int NOT NULL,
  `del_flag` bit(1) NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `updated_by` int NOT NULL,
  `dept_code` varchar(255) DEFAULT NULL,
  `dept_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `department`
--

LOCK TABLES `department` WRITE;
/*!40000 ALTER TABLE `department` DISABLE KEYS */;
INSERT INTO `department` VALUES (1,NULL,1,_binary '\0','2020-06-16 13:17:04',1,'GA','Bộ Phận Tổng Vụ'),(2,NULL,1,_binary '\0',NULL,1,'DEV','Bộ Phận Lập Trình'),(4,'2020-06-10 15:30:15',0,_binary '\0','2020-06-10 15:30:15',0,'PBO','123'),(5,'2020-06-11 14:12:05',0,_binary '\0','2020-06-11 14:12:05',0,'ba','aaa'),(6,'2020-06-11 14:28:23',0,_binary '\0','2020-06-11 14:28:23',0,'123','123'),(7,'2020-06-11 14:29:11',0,_binary '\0','2020-06-12 17:46:41',0,'123334','123123'),(17,'2020-06-12 16:03:55',0,_binary '\0','2020-06-12 16:03:55',0,'123123','2331'),(18,'2020-06-12 17:46:15',0,_binary '\0','2020-06-12 17:46:15',0,'BPO','123'),(20,'2020-06-15 11:13:59',0,_binary '\0','2020-06-15 11:13:59',0,'123123',NULL),(21,'2020-06-15 14:10:21',0,_binary '\0','2020-06-15 14:10:21',0,'abc','123'),(23,'2020-06-15 14:23:25',0,_binary '\0','2020-06-15 14:23:25',0,'','');
/*!40000 ALTER TABLE `department` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee` (
  `id` int NOT NULL AUTO_INCREMENT,
  `created_at` datetime DEFAULT NULL,
  `created_by` int NOT NULL,
  `del_flag` bit(1) NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `updated_by` int NOT NULL,
  `emp_address` varchar(255) DEFAULT NULL,
  `emp_birth_day` datetime DEFAULT NULL,
  `emp_email` varchar(255) DEFAULT NULL,
  `emp_first_name` varchar(255) DEFAULT NULL,
  `emp_gender` varchar(255) DEFAULT NULL,
  `emp_last_name` varchar(255) DEFAULT NULL,
  `emp_phone_number` varchar(255) DEFAULT NULL,
  `emp_start_day` datetime DEFAULT NULL,
  `userid` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKbhfr8cadx6f3npq5osobmaogj` (`userid`)
) ENGINE=MyISAM AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES (1,'2020-06-09 00:00:00',1,_binary '\0','2020-06-16 14:23:32',1,'aaa','2020-06-09 07:00:00','cuten1999@gmail.com','bbb','aaa','aaa','01631231231','2020-06-09 07:00:00',1),(3,NULL,1,_binary '\0','2020-06-11 08:32:05',1,'vvb','2020-06-09 07:00:00','vvb','vvb','vvb','vvb','vvb','2020-06-09 07:00:00',2),(5,NULL,1,_binary '\0',NULL,1,'aaa','2020-06-09 00:00:00','aaa','bbb','aaa','aaa','aaa','2020-06-09 00:00:00',1),(6,NULL,1,_binary '',NULL,1,'ccc','2020-06-09 00:00:00','ccc','ccc','ccc','ccc','ccc','2020-06-09 00:00:00',2),(7,NULL,1,_binary '',NULL,1,'ccc','2020-06-09 00:00:00','ccc','ccc','ccc','ccc','ccc','2020-06-09 00:00:00',1),(25,'2020-06-16 17:02:49',0,_binary '\0','2020-06-16 17:02:49',0,'a','2020-06-16 07:00:00','a@a','aa','aaa','aaa','01234567890','2020-06-16 07:00:00',2),(26,'2020-06-16 17:02:49',0,_binary '\0','2020-06-16 17:02:49',0,'a','2020-06-16 07:00:00','a@a','aa','aaa','aaa','01234567890','2020-06-16 07:00:00',1);
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `id` int NOT NULL AUTO_INCREMENT,
  `created_at` datetime DEFAULT NULL,
  `created_by` int NOT NULL,
  `del_flag` bit(1) NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `updated_by` int NOT NULL,
  `role_name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,NULL,1,_binary '\0',NULL,1,'admin',NULL),(2,NULL,1,_binary '\0',NULL,1,'user',NULL);
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `skill`
--

DROP TABLE IF EXISTS `skill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `skill` (
  `id` int NOT NULL AUTO_INCREMENT,
  `created_at` datetime DEFAULT NULL,
  `created_by` int NOT NULL,
  `del_flag` bit(1) NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `updated_by` int NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `skill_code` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `skill`
--

LOCK TABLES `skill` WRITE;
/*!40000 ALTER TABLE `skill` DISABLE KEYS */;
INSERT INTO `skill` VALUES (1,'2020-06-17 15:55:08',0,_binary '\0','2020-06-17 15:55:08',0,'ngôn ngữ java','java'),(2,'2020-06-17 15:55:17',0,_binary '\0','2020-06-17 15:55:17',0,'ngôn ngữ java','java'),(3,'2020-06-17 15:55:17',0,_binary '','2020-06-17 16:02:24',0,'ngôn ngữ java','java'),(4,'2020-06-17 15:55:18',0,_binary '\0','2020-06-17 15:55:18',0,'ngôn ngữ java','java'),(5,'2020-06-17 15:55:19',0,_binary '\0','2020-06-17 15:55:19',0,'ngôn ngữ java','java');
/*!40000 ALTER TABLE `skill` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `skill_emp`
--

DROP TABLE IF EXISTS `skill_emp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `skill_emp` (
  `id` int NOT NULL AUTO_INCREMENT,
  `del_flag` bit(1) NOT NULL,
  `level` int NOT NULL,
  `emp_id` int DEFAULT NULL,
  `skill_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK51q1grpcdiqyndmognxf2lwmq` (`emp_id`),
  KEY `FKrbqxo22vlu20nkmcptxdikf1w` (`skill_id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `skill_emp`
--

LOCK TABLES `skill_emp` WRITE;
/*!40000 ALTER TABLE `skill_emp` DISABLE KEYS */;
INSERT INTO `skill_emp` VALUES (1,_binary '\0',2,1,1),(2,_binary '\0',2,1,2),(3,_binary '\0',2,3,1),(4,_binary '\0',2,3,2);
/*!40000 ALTER TABLE `skill_emp` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `created_at` datetime DEFAULT NULL,
  `created_by` int NOT NULL,
  `del_flag` bit(1) NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `updated_by` int NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `deptid` int DEFAULT NULL,
  `roleid` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKe3iecx9yhhd94ke07o1im1nlw` (`deptid`),
  KEY `FK2ovmsl4hvm5vu1w8i308r5j6w` (`roleid`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,NULL,1,_binary '\0',NULL,1,'123','hoang',1,NULL),(2,NULL,1,_binary '\0',NULL,1,'123','hoang1',2,NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'hrm'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-06-19 17:16:13
