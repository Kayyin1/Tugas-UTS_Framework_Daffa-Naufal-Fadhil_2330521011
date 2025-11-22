-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.30 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for uts_cv_db
DROP DATABASE IF EXISTS `uts_cv_db`;
CREATE DATABASE IF NOT EXISTS `uts_cv_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `uts_cv_db`;

-- Dumping structure for table uts_cv_db.biodata
DROP TABLE IF EXISTS `biodata`;
CREATE TABLE IF NOT EXISTS `biodata` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nama` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '0',
  `email` varchar(255) NOT NULL DEFAULT '0',
  `alamat` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `deskripsi` text,
  `no_hp` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `foto url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table uts_cv_db.biodata: ~1 rows (approximately)
INSERT INTO `biodata` (`id`, `nama`, `email`, `alamat`, `deskripsi`, `no_hp`, `foto url`) VALUES
	(4, 'Daffa Naufal Fadhil', 'daffanaufalfadhil02@gmail.com', 'Kp.Cisarua', 'saya adalah individu yang disiplin, ulet, dan berorientasi pada hasil, dengan latar belakang pendidikan formal dan pengalaman kerja yang mendukung profesionalisme. Menguasai komputer dengan sangat baik, mencakup pengoperasian aplikasi perkantoran, pengelolaan data, dan troubleshooting teknis. Terbiasa bekerja di bawah tekanan, cepat beradaptasi, serta memiliki kemampuan komunikasi dan kerja sama tim yang solid.', '085794760467', NULL);

-- Dumping structure for table uts_cv_db.keahlian
DROP TABLE IF EXISTS `keahlian`;
CREATE TABLE IF NOT EXISTS `keahlian` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nama_skill` varchar(255) NOT NULL DEFAULT '0',
  `level` enum('Basic','Intermediate','Expert') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `kategori` enum('Hard Skill','Soft Skill','Life Skill') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table uts_cv_db.keahlian: ~2 rows (approximately)
INSERT INTO `keahlian` (`id`, `nama_skill`, `level`, `kategori`) VALUES
	(2, 'Editing', 'Intermediate', 'Hard Skill'),
	(3, 'Programming', 'Basic', 'Hard Skill');

-- Dumping structure for table uts_cv_db.pendidikan
DROP TABLE IF EXISTS `pendidikan`;
CREATE TABLE IF NOT EXISTS `pendidikan` (
  `id` int NOT NULL AUTO_INCREMENT,
  `institusi` varchar(255) NOT NULL DEFAULT '0',
  `tingkat` enum('SD','SMP','SMA','SMK','D3','D4','S1','S2','S3','Non-Formal') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `jurusan` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '0',
  `tahun_mulai` year DEFAULT NULL,
  `tahun_selesai` year DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table uts_cv_db.pendidikan: ~1 rows (approximately)
INSERT INTO `pendidikan` (`id`, `institusi`, `tingkat`, `jurusan`, `tahun_mulai`, `tahun_selesai`) VALUES
	(1, 'SMA ISLAM AL-AZHAR 21 SUKABUMI', 'SMA', 'IPA', '2018', '2021');

-- Dumping structure for table uts_cv_db.pengalaman
DROP TABLE IF EXISTS `pengalaman`;
CREATE TABLE IF NOT EXISTS `pengalaman` (
  `id` int NOT NULL AUTO_INCREMENT,
  `posisi` varchar(255) NOT NULL DEFAULT '0',
  `perusahaan` varchar(255) NOT NULL DEFAULT '0',
  `jenis` varchar(100) DEFAULT '0',
  `deskripsi` text,
  `tahun_mulai` year DEFAULT '2000',
  `tahun_selesai` year DEFAULT '2000',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table uts_cv_db.pengalaman: ~1 rows (approximately)
INSERT INTO `pengalaman` (`id`, `posisi`, `perusahaan`, `jenis`, `deskripsi`, `tahun_mulai`, `tahun_selesai`) VALUES
	(1, 'Crew Member', 'KFC Yogya Sukabumi', 'Foods and Beverages', NULL, '2022', '2024');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
