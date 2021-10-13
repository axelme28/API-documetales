CREATE DATABASE  IF NOT EXISTS `documentales` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */;
USE `documentales`;
-- MySQL dump 10.13  Distrib 8.0.14, for macos10.14 (x86_64)
--
-- Host: localhost    Database: documentales
-- ------------------------------------------------------
-- Server version	8.0.14

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
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
 SET character_set_client = utf8mb4 ;
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
 SET character_set_client = utf8mb4 ;
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
 SET character_set_client = utf8mb4 ;
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
  CONSTRAINT `fk_Documental_Categoria1` FOREIGN KEY (`idCategoria`) REFERENCES `categoria` (`idCategoria`),
  CONSTRAINT `fk_Documental_Clasificacion1` FOREIGN KEY (`idClasificacion`) REFERENCES `clasificacion` (`idClasificacion`),
  CONSTRAINT `fk_Documental_Idioma1` FOREIGN KEY (`idIdioma`) REFERENCES `idioma` (`idIdioma`),
  CONSTRAINT `fk_Documental_Pais_origen1` FOREIGN KEY (`idPais_origen`) REFERENCES `pais_origen` (`idPais_origen`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `documental`
--

LOCK TABLES `documental` WRITE;
/*!40000 ALTER TABLE `documental` DISABLE KEYS */;
INSERT INTO `documental` VALUES (9,'Test','1000-01-04','test',12,'tkadddn','nose','nose',3,2,2,1,'nose','https://www.youtube.com'),(14,'test5','2021-10-07','test, test',150,'test','test','test',1,1,2,1,'test','htkdndm'),(17,'test','2021-10-20','test, test',6,'test','test','test',1,1,2,1,'test','https:youtube.com'),(18,'prueba','2021-10-01','prueba',123,'prueba','prueba','prueba',1,1,1,2,'prueba','prueba'),(19,'HBO','2021-10-01','HBO',146,'HBO','HBO','HBO',5,5,1,2,'HBO','WWW.HBO.COM');
/*!40000 ALTER TABLE `documental` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `idioma`
--

DROP TABLE IF EXISTS `idioma`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
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
-- Temporary view structure for view `ver_documentales`
--

CREATE
    ALGORITHM = UNDEFINED
    DEFINER = `root`@`localhost`
    SQL SECURITY DEFINER
VIEW `documentales`.`ver_documentales` AS
    SELECT
        `documentales`.`documental`.`idDocumental` AS `idDocumental`,
        `documentales`.`documental`.`Nombre` AS `Nombre`,
        `documentales`.`documental`.`Fecha_Lanzamiento` AS `Fecha_lanzamiento`,
        `documentales`.`documental`.`Elenco` AS `Elenco`,
        `documentales`.`documental`.`Duracion` AS `Duracion`,
        `documentales`.`documental`.`Trama` AS `Trama`,
        `documentales`.`documental`.`Productor` AS `Productor`,
        `documentales`.`documental`.`Escritor` AS `Escritor`,
        `documentales`.`categoria`.`Nombre_categoria` AS `categoria`,
        `documentales`.`clasificacion`.`Clasificacion` AS `Clasificacion`,
        `documentales`.`idioma`.`Idioma` AS `Idioma`,
        `documentales`.`pais_origen`.`Pais` AS `Pais`,
        `documentales`.`documental`.`director` AS `director`
    FROM
        ((((`documentales`.`documental`
        JOIN `documentales`.`categoria` ON ((`documentales`.`categoria`.`idCategoria` = `documentales`.`documental`.`idCategoria`)))
        JOIN `documentales`.`pais_origen` ON ((`documentales`.`pais_origen`.`idPais_origen` = `documentales`.`documental`.`idPais_origen`)))
        JOIN `documentales`.`idioma` ON ((`documentales`.`idioma`.`idIdioma` = `documentales`.`documental`.`idIdioma`)))
        JOIN `documentales`.`clasificacion` ON ((`documentales`.`clasificacion`.`idClasificacion` = `documentales`.`documental`.`idClasificacion`)))CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `documentales`.`ver_documentales` AS select `documentales`.`documental`.`idDocumental` AS `idDocumental`,`documentales`.`documental`.`Nombre` AS `Nombre`,`documentales`.`documental`.`Fecha_Lanzamiento` AS `Fecha_lanzamiento`,`documentales`.`documental`.`Elenco` AS `Elenco`,`documentales`.`documental`.`Duracion` AS `Duracion`,`documentales`.`documental`.`Trama` AS `Trama`,`documentales`.`documental`.`Productor` AS `Productor`,`documentales`.`documental`.`Escritor` AS `Escritor`,`documentales`.`categoria`.`Nombre_categoria` AS `categoria`,`documentales`.`clasificacion`.`Clasificacion` AS `Clasificacion`,`documentales`.`idioma`.`Idioma` AS `Idioma`,`documentales`.`pais_origen`.`Pais` AS `Pais`,`documentales`.`documental`.`director` AS `director` from ((((`documentales`.`documental` join `documentales`.`categoria` on((`documentales`.`categoria`.`idCategoria` = `documentales`.`documental`.`idCategoria`))) join `documentales`.`pais_origen` on((`documentales`.`pais_origen`.`idPais_origen` = `documentales`.`documental`.`idPais_origen`))) join `documentales`.`idioma` on((`documentales`.`idioma`.`idIdioma` = `documentales`.`documental`.`idIdioma`))) join `documentales`.`clasificacion` on((`documentales`.`clasificacion`.`idClasificacion` = `documentales`.`documental`.`idClasificacion`)));


--
-- Dumping events for database 'documentales'
--

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

-- Dump completed on 2021-10-07 23:42:05
