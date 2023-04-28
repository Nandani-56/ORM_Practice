-- MySQL dump 10.13  Distrib 8.0.29, for Linux (x86_64)
--
-- Host: localhost    Database: orm_task_1
-- ------------------------------------------------------
-- Server version	8.0.32

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
-- Table structure for table `Actors`
--

DROP TABLE IF EXISTS `Actors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Actors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `actorName` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT '2023-04-24 11:41:06',
  `updatedAt` datetime NOT NULL DEFAULT '2023-04-24 11:41:06',
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Actors`
--

LOCK TABLES `Actors` WRITE;
/*!40000 ALTER TABLE `Actors` DISABLE KEYS */;
INSERT INTO `Actors` VALUES (1,'Siddharth Malhotra','2023-04-25 03:54:57','2023-04-25 03:54:57','2023-04-27 13:12:17'),(2,'Kiara Advani','2023-04-25 03:57:13','2023-04-25 03:57:13',NULL),(3,'Varun Dhawan','2023-04-25 03:57:22','2023-04-25 03:57:22',NULL),(4,'Alia Bhatt','2023-04-25 03:57:31','2023-04-25 03:57:31',NULL),(5,'Alia Bhatt','2023-04-25 12:19:28','2023-04-25 12:19:28',NULL),(6,'Alia Bhatt','2023-04-25 12:23:20','2023-04-25 12:23:20',NULL),(7,'Deepika','2023-04-25 12:26:14','2023-04-25 12:26:14',NULL),(8,'Deepika','2023-04-25 12:27:01','2023-04-25 12:27:01',NULL),(9,'Deepika','2023-04-25 13:16:34','2023-04-25 13:16:34',NULL),(10,'Sushant Sinh','2023-04-27 12:53:35','2023-04-27 12:53:35',NULL);
/*!40000 ALTER TABLE `Actors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Capitals`
--

DROP TABLE IF EXISTS `Capitals`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Capitals` (
  `id` int NOT NULL AUTO_INCREMENT,
  `capitalName` varchar(255) DEFAULT NULL,
  `countryId` int DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT '2023-04-24 06:29:12',
  `updatedAt` datetime NOT NULL DEFAULT '2023-04-24 06:29:12',
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `countryId` (`countryId`),
  CONSTRAINT `Capitals_ibfk_1` FOREIGN KEY (`countryId`) REFERENCES `Countries` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Capitals`
--

LOCK TABLES `Capitals` WRITE;
/*!40000 ALTER TABLE `Capitals` DISABLE KEYS */;
INSERT INTO `Capitals` VALUES (6,'Kabul',9,'2023-04-27 11:04:35','2023-04-27 11:04:35',NULL),(7,'NEW DELHI',10,'2023-04-27 11:05:10','2023-04-27 11:11:23',NULL);
/*!40000 ALTER TABLE `Capitals` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Countries`
--

DROP TABLE IF EXISTS `Countries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Countries` (
  `id` int NOT NULL AUTO_INCREMENT,
  `countryName` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT '2023-04-24 06:29:12',
  `updatedAt` datetime NOT NULL DEFAULT '2023-04-24 06:29:12',
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `countryName` (`countryName`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Countries`
--

LOCK TABLES `Countries` WRITE;
/*!40000 ALTER TABLE `Countries` DISABLE KEYS */;
INSERT INTO `Countries` VALUES (9,'Afghanistan','2023-04-27 11:04:35','2023-04-27 11:04:35',NULL),(10,'India','2023-04-27 11:05:09','2023-04-27 11:05:09',NULL);
/*!40000 ALTER TABLE `Countries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Movie_Actors`
--

DROP TABLE IF EXISTS `Movie_Actors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Movie_Actors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `actorId` int DEFAULT NULL,
  `movieId` int DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT '2023-04-25 07:01:24',
  `updatedAt` datetime NOT NULL DEFAULT '2023-04-25 07:01:24',
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `actorId` (`actorId`),
  KEY `movieId` (`movieId`),
  CONSTRAINT `Movie_Actors_ibfk_1` FOREIGN KEY (`actorId`) REFERENCES `Actors` (`id`),
  CONSTRAINT `Movie_Actors_ibfk_2` FOREIGN KEY (`movieId`) REFERENCES `Movies` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Movie_Actors`
--

LOCK TABLES `Movie_Actors` WRITE;
/*!40000 ALTER TABLE `Movie_Actors` DISABLE KEYS */;
INSERT INTO `Movie_Actors` VALUES (1,2,2,'2023-04-25 07:02:00','2023-04-25 07:02:00',NULL),(2,2,3,'2023-04-25 07:02:25','2023-04-25 07:02:25','2023-04-25 09:52:23'),(3,1,3,'2023-04-25 07:02:50','2023-04-25 07:02:50','2023-04-27 13:12:17'),(4,1,1,'2023-04-25 07:47:39','2023-04-25 07:47:39','2023-04-27 13:12:17'),(5,1,1,'2023-04-25 09:11:09','2023-04-25 09:11:09','2023-04-27 13:12:17'),(6,1,1,'2023-04-25 09:12:01','2023-04-25 09:12:01','2023-04-27 13:12:17'),(7,3,3,'2023-04-25 10:46:05','2023-04-25 10:46:05',NULL),(8,3,4,'2023-04-27 12:57:06','2023-04-27 12:57:06',NULL),(9,3,4,'2023-04-27 12:57:21','2023-04-27 12:57:21',NULL);
/*!40000 ALTER TABLE `Movie_Actors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Movies`
--

DROP TABLE IF EXISTS `Movies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Movies` (
  `id` int NOT NULL AUTO_INCREMENT,
  `movieName` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT '2023-04-24 11:41:06',
  `updatedAt` datetime NOT NULL DEFAULT '2023-04-24 11:41:06',
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Movies`
--

LOCK TABLES `Movies` WRITE;
/*!40000 ALTER TABLE `Movies` DISABLE KEYS */;
INSERT INTO `Movies` VALUES (1,'Shershah','2023-04-25 03:55:25','2023-04-25 03:55:25','2023-04-27 13:13:55'),(2,'Student of the Year','2023-04-25 03:58:11','2023-04-25 03:58:11',NULL),(3,'Student of the Year 2','2023-04-25 03:58:22','2023-04-25 03:58:22',NULL),(4,'Chichhore','2023-04-27 12:54:14','2023-04-27 12:54:14',NULL);
/*!40000 ALTER TABLE `Movies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SequelizeMeta`
--

DROP TABLE IF EXISTS `SequelizeMeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SequelizeMeta`
--

LOCK TABLES `SequelizeMeta` WRITE;
/*!40000 ALTER TABLE `SequelizeMeta` DISABLE KEYS */;
INSERT INTO `SequelizeMeta` VALUES ('20230420040106-create-student.js'),('20230420093859-add-address-col.js'),('20230421092458-create-task.js'),('20230421111530-create-country.js'),('20230421111720-create-capital.js'),('20230424104209-create-actor.js'),('20230424104838-create-movie.js'),('20230424112234-create-movie-actor.js'),('20230426055940-create-image.js'),('20230426060036-create-video.js'),('20230426060221-create-comment.js');
/*!40000 ALTER TABLE `SequelizeMeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Students`
--

DROP TABLE IF EXISTS `Students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Students` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `age` int DEFAULT NULL,
  `contactNumber` bigint DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT '2023-04-20 06:03:59',
  `updatedAt` datetime NOT NULL DEFAULT '2023-04-20 06:03:59',
  `deletedAt` datetime DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1511 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Students`
--

LOCK TABLES `Students` WRITE;
/*!40000 ALTER TABLE `Students` DISABLE KEYS */;
INSERT INTO `Students` VALUES (1,'Vishwa','Joshi',20,4165281167,'2023-04-20 06:03:59','2023-04-27 10:24:18',NULL,'Ahemdabad'),(3,'Drashti','Gajjar',97,992433922,'2023-04-20 06:03:59','2023-04-20 06:03:59','2023-04-25 12:36:05',NULL),(4,'Nandani','Mitaliya',83,6258202928,'2023-04-20 06:03:59','2023-04-25 13:46:41','2023-04-27 11:03:55',NULL),(5,'Nandani','Mehta',71,4809476443,'2023-04-20 06:03:59','2023-04-26 09:31:37',NULL,NULL),(6,'Vishwa','Patel',78,4352484197,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(7,'Meet','Mehta',50,885206747,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(8,'Nandani','Patel',99,4213324014,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(9,'Nisarg','Mitaliya',99,610540697,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(10,'Prachi','Desai',42,9617909494,'2023-04-20 06:03:59','2023-04-20 06:03:59','2023-04-27 12:03:06',NULL),(11,'Jay','Patel',49,7461654038,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(12,'Nisarg','Patel',78,8594312471,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(13,'Nandani','Gajjar',31,9040396901,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(14,'Prachi','Desai',64,4720215947,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(15,'Vishwa','Mitaliya',62,6281369238,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(16,'Isha','Desai',22,9826024907,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(17,'Nisarg','Joshi',3,7236469460,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(18,'Drashti','Gajjar',84,4931103817,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(19,'Isha','Patel',2,2278431615,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(20,'Drashti','Joshi',86,7922163196,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(21,'Meet','Joshi',53,4366546475,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(22,'Vishwa','Desai',88,964112467,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(23,'Isha','Gajjar',88,1843138709,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(24,'Isha','Patel',79,7484634890,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(25,'Prachi','Patel',38,7324251037,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(26,'Jay','Desai',27,8520460712,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(27,'Nandani','Mitaliya',13,6858082891,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(28,'Jay','Mitaliya',73,334599923,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(29,'Vishwa','Gajjar',95,7023328903,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(30,'Nandani','Mehta',8,9756579910,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(31,'Nisarg','Mitaliya',96,1950863254,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(33,'Jay','Mitaliya',6,4461265815,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(34,'Nandani','Mitaliya',93,6119549360,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(35,'Isha','Mitaliya',5,6708338034,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(36,'Prachi','Joshi',45,745556757,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(37,'Prachi','Mehta',36,1483472483,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(38,'Meet','Joshi',88,1616641248,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(39,'Nisarg','Desai',20,5278672303,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(40,'Nandani','Joshi',43,5614101663,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(41,'Prachi','Mitaliya',62,560245,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(42,'Prachi','Joshi',55,4402055518,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(43,'Jay','Gajjar',63,3930439750,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(44,'Prachi','Desai',82,3770800023,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(45,'Drashti','Mehta',18,1526511413,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(46,'Isha','Mehta',35,3919553436,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(47,'Meet','Joshi',7,7755671633,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(48,'Isha','Patel',66,4719616180,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(49,'Drashti','Joshi',34,9718493895,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(50,'Meet','Patel',95,734685907,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(51,'Nisarg','Gajjar',51,2853934668,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(52,'Jay','Patel',57,8379205445,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(53,'Drashti','Patel',54,9958576920,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(54,'Vishwa','Mehta',41,5986386988,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(55,'Jay','Gajjar',24,469428533,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(56,'Meet','Mehta',85,3717083974,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(57,'Jay','Desai',40,3644946519,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(58,'Vishwa','Desai',83,5009478990,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(59,'Isha','Gajjar',95,4703460379,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(60,'Nisarg','Desai',78,6349427226,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(61,'Vishwa','Patel',66,8398031850,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(62,'Nandani','Mitaliya',76,9218001763,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(63,'Nisarg','Mitaliya',20,1427479141,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(64,'Nandani','Mehta',49,4885907815,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(65,'Prachi','Mitaliya',39,3562460247,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(66,'Vishwa','Desai',87,7322233485,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(67,'Nisarg','Desai',97,655898115,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(68,'Nisarg','Mitaliya',15,2490166994,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(69,'Drashti','Mehta',41,4690788498,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(70,'Nisarg','Desai',50,4893759630,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(71,'Prachi','Desai',59,2866167104,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(72,'Nandani','Desai',20,3926038440,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(73,'Prachi','Mitaliya',38,2114961300,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(74,'Nandani','Joshi',18,4587742167,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(75,'Jay','Mitaliya',71,4098868989,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(76,'Isha','Gajjar',22,4717534029,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(77,'Nisarg','Mehta',81,745239595,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(78,'Vishwa','Joshi',66,4340323906,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(79,'Meet','Desai',32,8164254968,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(80,'Vishwa','Mehta',1,9247685033,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(81,'Drashti','Mehta',14,6601902348,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(82,'Drashti','Mehta',2,4959592723,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(83,'Nandani','Desai',26,9929218630,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(84,'Meet','Desai',38,1920754376,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(85,'Meet','Gajjar',52,6228075290,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(86,'Isha','Patel',76,3997604980,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(87,'Vishwa','Gajjar',51,1216266778,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(88,'Nandani','Desai',86,2014418932,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(89,'Nandani','Joshi',24,7214083310,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(90,'Jay','Mehta',81,5197310359,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(91,'Nisarg','Patel',97,1285332931,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(92,'Nandani','Gajjar',33,2955079100,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(93,'Isha','Gajjar',73,4633558877,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(94,'Prachi','Desai',14,8964151266,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(95,'Isha','Desai',97,9625800838,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(96,'Meet','Mitaliya',9,1945771553,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(97,'Nandani','Patel',70,7625267192,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(98,'Meet','Patel',92,6152934733,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(99,'Vishwa','Mehta',14,2903980963,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(100,'Isha','Joshi',27,1056401852,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(101,NULL,NULL,NULL,NULL,'2023-04-20 11:12:17','2023-04-20 11:12:17',NULL,NULL),(102,'Nandaniii',NULL,NULL,NULL,'2023-04-20 11:13:09','2023-04-20 11:14:24',NULL,NULL),(103,'Nandani','Gajjar',20,8320908112,'2023-04-21 09:14:14','2023-04-21 09:14:14',NULL,NULL),(104,'Vishwa','Desai',93,9504027121,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(105,'Vishwa','Mitaliya',99,8071589786,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(106,'Jay','Gajjar',39,310520384,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(107,'Prachi','Patel',23,4045874981,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(108,'Jay','Mitaliya',49,471893763,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(109,'Nisarg','Desai',88,554455771,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(110,'Drashti','Patel',56,396200575,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(111,'Prachi','Mitaliya',9,2741495635,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(112,'Nisarg','Joshi',82,2295997919,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(113,'Jay','Joshi',63,7028142655,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(114,'Jay','Mitaliya',12,4755222896,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(115,'Vishwa','Mehta',35,3431733285,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(116,'Prachi','Mehta',13,5879631223,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(117,'Meet','Mitaliya',76,2518740723,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(118,'Meet','Mitaliya',82,150324942,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(119,'Nisarg','Gajjar',56,3954324633,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(120,'Jay','Mitaliya',69,1141345334,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(121,'Prachi','Gajjar',32,6544105800,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(122,'Nisarg','Mehta',8,1321336725,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(123,'Vishwa','Joshi',94,5814570571,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(124,'Nisarg','Gajjar',73,7082079730,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(125,'Jay','Joshi',9,2849630632,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(126,'Prachi','Patel',31,5588817741,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(127,'Prachi','Patel',30,764667522,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(128,'Isha','Mehta',62,6104749026,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(129,'Jay','Joshi',58,5039478747,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(130,'Nisarg','Joshi',30,2642210954,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(131,'Meet','Gajjar',91,5352812127,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(132,'Drashti','Mehta',74,6739010458,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(133,'Nisarg','Mitaliya',30,3849574699,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(134,'Jay','Mehta',38,6899221282,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(135,'Prachi','Joshi',74,7623214958,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(136,'Prachi','Mitaliya',45,5876230702,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(137,'Drashti','Mitaliya',6,3594422417,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(138,'Prachi','Joshi',11,6245537644,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(139,'Drashti','Joshi',24,7664476375,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(140,'Nisarg','Mitaliya',35,5729940620,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(141,'Isha','Mehta',10,1101179728,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(142,'Nisarg','Patel',47,2021915867,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(143,'Jay','Patel',4,1388457447,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(144,'Jay','Gajjar',32,9190755737,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(145,'Nisarg','Mitaliya',26,1082886489,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(146,'Isha','Gajjar',81,775832970,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(147,'Drashti','Mitaliya',16,5272012741,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(148,'Jay','Mitaliya',96,9165596222,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(149,'Vishwa','Patel',38,2525801540,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(150,'Meet','Mitaliya',70,2387974130,'2023-04-20 06:03:59','2023-04-20 06:03:59',NULL,NULL),(1507,'Nandanii',NULL,NULL,NULL,'2023-04-25 13:17:12','2023-04-25 13:17:12',NULL,NULL),(1508,'Nandanii',NULL,NULL,NULL,'2023-04-25 13:18:38','2023-04-25 13:18:38',NULL,NULL),(1509,'Nandanii',NULL,NULL,NULL,'2023-04-25 13:19:56','2023-04-25 13:19:56',NULL,NULL),(1510,'Prachi','Khajuria',22,1234567890,'2023-04-27 10:21:22','2023-04-27 10:21:22',NULL,'Ahemdabad');
/*!40000 ALTER TABLE `Students` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Tasks`
--

DROP TABLE IF EXISTS `Tasks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Tasks` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `userId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `Tasks_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `Students` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Tasks`
--

LOCK TABLES `Tasks` WRITE;
/*!40000 ALTER TABLE `Tasks` DISABLE KEYS */;
INSERT INTO `Tasks` VALUES (14,'Perform Crud Operation using One to One relationship',5,'2023-04-24 10:20:17','2023-04-24 10:20:17',NULL),(15,'Perform Crud Operation using One to Many relationship',5,'2023-04-24 10:20:53','2023-04-24 10:20:53',NULL),(16,'Learn about Migration',8,'2023-04-24 10:32:10','2023-04-24 10:32:10',NULL),(17,'Learn about Seeder',8,'2023-04-24 10:32:21','2023-04-24 10:32:21',NULL),(18,'Learn about Sequelize',9,'2023-04-24 10:32:53','2023-04-24 10:32:53',NULL),(19,'Learn ORM',9,'2023-04-24 10:33:06','2023-04-24 10:33:06',NULL),(23,'Polymorphic association in one-to-many',10,'2023-04-27 11:27:10','2023-04-27 11:27:10','2023-04-27 12:03:06'),(24,'Polymorphic association in many-to-many',10,'2023-04-27 11:27:10','2023-04-27 11:27:10','2023-04-27 12:03:06');
/*!40000 ALTER TABLE `Tasks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `commentableId` int DEFAULT NULL,
  `commentableType` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT '2023-04-26 08:15:44',
  `updatedAt` datetime NOT NULL DEFAULT '2023-04-26 08:15:44',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (5,'comment on pic 1',2,'image','2023-04-27 06:33:12','2023-04-27 06:33:12'),(6,'comment on pic 1',2,'image','2023-04-27 06:33:19','2023-04-27 06:33:19'),(7,'sdfs',1,'video','2023-04-27 13:23:53','2023-04-27 13:23:53');
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `id` int NOT NULL AUTO_INCREMENT,
  `url` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT '2023-04-26 06:04:47',
  `updatedAt` datetime NOT NULL DEFAULT '2023-04-26 06:04:47',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (2,'sdfsd','asd','2023-04-27 06:31:17','2023-04-27 06:31:17'),(3,'sdfsd','asd','2023-04-27 06:31:18','2023-04-27 06:31:18');
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `videos`
--

DROP TABLE IF EXISTS `videos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `videos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `text` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT '2023-04-26 06:04:47',
  `updatedAt` datetime NOT NULL DEFAULT '2023-04-26 06:04:47',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `videos`
--

LOCK TABLES `videos` WRITE;
/*!40000 ALTER TABLE `videos` DISABLE KEYS */;
INSERT INTO `videos` VALUES (1,'fsdfd','dfsfs','2023-04-25 03:54:57','2023-04-25 03:54:57'),(2,'asd','sdfsd','2023-04-27 06:31:35','2023-04-27 06:31:35'),(3,'asd','sdfsd','2023-04-27 06:31:35','2023-04-27 06:31:35');
/*!40000 ALTER TABLE `videos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-27 19:09:30
