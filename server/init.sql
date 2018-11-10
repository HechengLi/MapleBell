CREATE DATABASE IF NOT EXISTS MapleBell;
USE MapleBell;
CREATE TABLE IF NOT EXISTS `bosstime` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `boss_name` VARCHAR(100) NOT NULL UNIQUE,
  `boss_level` INT NOT NULL,
  `spawn_location` VARCHAR(100) NOT NULL,
  `spawn_time` TINYINT NOT NULL,
  `img` VARCHAR(100),
  PRIMARY KEY (`id`));

  INSERT INTO bosstime
  	(boss_name, boss_level, spawn_location, spawn_time)
  VALUES
  	('Acreon', 50, 'Lavender Island', 5),
    ('Alpha Turtle', 37, 'Ellua Riverside', 40),
    ('Amadon', 50, 'Ludari Arena', 55)
