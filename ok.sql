/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student_test` (
  `name` char(10) DEFAULT NULL,
  `test` char(10) DEFAULT NULL,
  `score` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
INSERT INTO `student_test` VALUES ('Chun','SQL',75),('Chun','Tuning',73),('Esben','SQL',43),('Esben','Tuning',31),('Kaolin','SQL',56),('Kaolin','Tuning',88),('Tatiana','SQL',87),('hera','SQL',71),('hera','SQL',71);
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student_test1` (
  `name` char(10) DEFAULT NULL,
  `test` char(10) DEFAULT NULL,
  `score` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
INSERT INTO `student_test1` VALUES ('Chun','SQL',75),('Esben','SQL',43),('Kaolin','SQL',56),('Tatiana','SQL',87),('Amir','SQL',2),('dani','SQL',6),('danij','SQL',7);
