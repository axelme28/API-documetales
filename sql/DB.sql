-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: documentales
-- ------------------------------------------------------
-- Server version	5.7.33-log

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
-- Table structure for table `categoria`
--

DROP TABLE IF EXISTS `categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoria` (
  `idCategoria` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre_categoria` varchar(30) NOT NULL,
  PRIMARY KEY (`idCategoria`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
INSERT INTO `categoria` VALUES (1,'biográficos'),(2,'sobre crímenes'),(3,'históricos'),(4,'bélicos'),(5,'sobre deportes'),(6,'de música y conciertos'),(7,'de viajes y aventuras'),(8,'sobre política');
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clasificacion`
--

DROP TABLE IF EXISTS `clasificacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clasificacion` (
  `idClasificacion` int(11) NOT NULL AUTO_INCREMENT,
  `Clasificacion` varchar(20) NOT NULL,
  PRIMARY KEY (`idClasificacion`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clasificacion`
--

LOCK TABLES `clasificacion` WRITE;
/*!40000 ALTER TABLE `clasificacion` DISABLE KEYS */;
INSERT INTO `clasificacion` VALUES (1,'B'),(2,'B15'),(3,'C'),(4,'D'),(5,'AA'),(6,'A');
/*!40000 ALTER TABLE `clasificacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `documental`
--

DROP TABLE IF EXISTS `documental`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `documental` (
  `idDocumental` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(45) NOT NULL,
  `Fecha_Lanzamiento` date NOT NULL,
  `Elenco` varchar(200) NOT NULL,
  `Duracion` int(11) NOT NULL,
  `Trama` varchar(200) NOT NULL,
  `Productor` varchar(45) NOT NULL,
  `Escritor` varchar(45) NOT NULL,
  `idCategoria` int(11) NOT NULL,
  `idClasificacion` int(11) NOT NULL,
  `idIdioma` int(11) NOT NULL,
  `idPais_origen` int(11) NOT NULL,
  `director` varchar(45) NOT NULL,
  `URL` varchar(200) NOT NULL,
  PRIMARY KEY (`idDocumental`),
  KEY `fk_Documental_Categoria1_idx` (`idCategoria`),
  KEY `fk_Documental_Clasificacion1_idx` (`idClasificacion`),
  KEY `fk_Documental_Idioma1_idx` (`idIdioma`),
  KEY `fk_Documental_Pais_origen1_idx` (`idPais_origen`),
  CONSTRAINT `fk_Documental_Categoria1` FOREIGN KEY (`idCategoria`) REFERENCES `categoria` (`idCategoria`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Documental_Clasificacion1` FOREIGN KEY (`idClasificacion`) REFERENCES `clasificacion` (`idClasificacion`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Documental_Idioma1` FOREIGN KEY (`idIdioma`) REFERENCES `idioma` (`idIdioma`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Documental_Pais_origen1` FOREIGN KEY (`idPais_origen`) REFERENCES `pais_origen` (`idPais_origen`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `documental`
--

LOCK TABLES `documental` WRITE;
/*!40000 ALTER TABLE `documental` DISABLE KEYS */;
INSERT INTO `documental` VALUES (2,'redes sociales','2002-03-01','axel y alex',160,'gdzjfjhsthdzfh','erick','erick',1,1,1,1,'quentin','la que sea'),(3,'a','2001-02-03','fjs',200,'xgjsdj','adf','dhsrgh',1,1,1,1,'hrshwr','xd'),(9,'Test','1000-01-04','test',12,'tkadddn','nose','nose',3,2,2,1,'nose','https://www.youtube.com'),(10,'test','0001-05-02','test, test',11,'lasmdmans','test','nose',4,2,1,1,'test','http://youtube.com'),(11,'test2','2021-10-14','test, test',120,'test','test','test',5,2,2,2,'test','kddkjdjk'),(12,'test','2021-10-14','test, test',150,'test','test','test',5,1,2,2,'test','kdkdkdkd'),(13,'test4','2021-10-05','test, test',150,'test','test','test',5,5,1,1,'test','jdjdjdjddj'),(14,'test5','2021-10-07','test, test',150,'test','test','test',1,1,2,1,'test','htkdndm'),(15,'re=dms','2021-10-13','test, test',152,'test','test','test',1,1,1,1,'test','djdjdjd'),(16,'test87','2021-10-08','test, test',150,'test','test','test',1,2,1,1,'test','https://youtube.com'),(17,'test','2021-10-20','test, test',6,'test','test','test',1,1,2,1,'test','https:youtube.com');
/*!40000 ALTER TABLE `documental` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `idioma`
--

DROP TABLE IF EXISTS `idioma`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `idioma` (
  `idIdioma` int(11) NOT NULL AUTO_INCREMENT,
  `Idioma` varchar(45) NOT NULL,
  PRIMARY KEY (`idIdioma`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `idioma`
--

LOCK TABLES `idioma` WRITE;
/*!40000 ALTER TABLE `idioma` DISABLE KEYS */;
INSERT INTO `idioma` VALUES (1,'Ingles'),(2,'Espanol');
/*!40000 ALTER TABLE `idioma` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pais_origen`
--

DROP TABLE IF EXISTS `pais_origen`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pais_origen` (
  `idPais_origen` int(11) NOT NULL AUTO_INCREMENT,
  `Pais` varchar(45) NOT NULL,
  PRIMARY KEY (`idPais_origen`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pais_origen`
--

LOCK TABLES `pais_origen` WRITE;
/*!40000 ALTER TABLE `pais_origen` DISABLE KEYS */;
INSERT INTO `pais_origen` VALUES (1,'Mexico'),(2,'USA');
/*!40000 ALTER TABLE `pais_origen` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `ver_documentales`
--

DROP TABLE IF EXISTS `ver_documentales`;
/*!50001 DROP VIEW IF EXISTS `ver_documentales`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `ver_documentales` AS SELECT 
 1 AS `idDocumental`,
 1 AS `Nombre`,
 1 AS `Fecha_lanzamiento`,
 1 AS `Elenco`,
 1 AS `Duracion`,
 1 AS `Trama`,
 1 AS `Productor`,
 1 AS `Escritor`,
 1 AS `categoria`,
 1 AS `Clasificacion`,
 1 AS `Idioma`,
 1 AS `Pais`,
 1 AS `director`*/;
SET character_set_client = @saved_cs_client;

--
-- Dumping routines for database 'documentales'
--
/*!50003 DROP PROCEDURE IF EXISTS `Eliminar_documental` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Eliminar_documental`(IN IdDoc varchar(45))
BEGIN

delete from documentales.documental where idDocumental = idDoc;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `insertar_documental` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `insertar_documental`( IN Nombre varchar(45),IN Fecha_lanzamiento date, IN
Elenco varchar(200),IN Duracion int(11),IN Trama varchar(200),IN Productor varchar(45),
IN Escritor varchar(45),IN idCategoria int(11),IN idClasificacion int(11),IN idIdioma int(11),IN idPais_origen int(11), IN director varchar(45), 
IN URL varchar(200))
BEGIN

INSERT INTO documentales.documental(Nombre,Fecha_lanzamiento,Elenco,Duracion,Trama,Productor,Escritor,idCategoria,idClasificacion,idIdioma,idPais_origen,director,URL)
VALUES (Nombre,Fecha_lanzamiento,Elenco,Duracion,Trama,Productor,Escritor,idCategoria,idClasificacion,idIdioma,idPais_origen,director,URL );

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ver_documental` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `ver_documental`( IN idDoc int(11))
BEGIN

SELECT `documental`.`idDocumental`,`documental`.`Nombre`,`documental`.`Fecha_lanzamiento`,`documental`.`Elenco`,`documental`.`Duracion`,`documental`.`Trama`,`documental`.`Productor`,`documental`.`Escritor`,`categoria`.`Nombre_categoria`,`clasificacion`.`Clasificacion`,`idioma`.`Idioma`,`pais_origen`.`Pais`,`documental`.`director`,`documental`.`URL`
FROM `documentales`.`documental` 
INNER JOIN categoria 
	ON(categoria.idCategoria = documental.idCategoria) 
INNER JOIN pais_origen 
	ON(pais_origen.idPais_origen = documental.idPais_origen) 
INNER JOIN idioma 
	ON(idioma.idIdioma = documental.idIdioma) 
INNER JOIN clasificacion 
	ON(clasificacion.idClasificacion = documental.idClasificacion)
WHERE (idDocumental = idDoc);

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Final view structure for view `ver_documentales`
--

/*!50001 DROP VIEW IF EXISTS `ver_documentales`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `ver_documentales` AS select `documental`.`idDocumental` AS `idDocumental`,`documental`.`Nombre` AS `Nombre`,`documental`.`Fecha_Lanzamiento` AS `Fecha_lanzamiento`,`documental`.`Elenco` AS `Elenco`,`documental`.`Duracion` AS `Duracion`,`documental`.`Trama` AS `Trama`,`documental`.`Productor` AS `Productor`,`documental`.`Escritor` AS `Escritor`,`categoria`.`Nombre_categoria` AS `categoria`,`clasificacion`.`Clasificacion` AS `Clasificacion`,`idioma`.`Idioma` AS `Idioma`,`pais_origen`.`Pais` AS `Pais`,`documental`.`director` AS `director` from ((((`documental` join `categoria` on((`categoria`.`idCategoria` = `documental`.`idCategoria`))) join `pais_origen` on((`pais_origen`.`idPais_origen` = `documental`.`idPais_origen`))) join `idioma` on((`idioma`.`idIdioma` = `documental`.`idIdioma`))) join `clasificacion` on((`clasificacion`.`idClasificacion` = `documental`.`idClasificacion`))) */;
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

-- Dump completed on 2021-10-07 22:37:15
