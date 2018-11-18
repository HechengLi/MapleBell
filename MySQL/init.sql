CREATE DATABASE IF NOT EXISTS MapleBell;
USE MapleBell;
CREATE TABLE IF NOT EXISTS `boss_schedule` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `boss_name` VARCHAR(100) NOT NULL UNIQUE,
  `boss_level` INT NOT NULL,
  `spawn_location` VARCHAR(100) NOT NULL,
  `spawn_time` TINYINT NOT NULL,
  `img` VARCHAR(100),
  PRIMARY KEY (`id`));

  INSERT INTO boss_schedule
  	(boss_name, boss_level, spawn_location, spawn_time)
  VALUES
  	('Acreon', 50, 'Lavender Island', 5),
    ('Alpha Turtle', 37, 'Ellua Riverside', 40),
    ('Amadon', 50, 'Ludari Arena', 55),
    ('Devilin Warrior', 21, 'South Royal Road', 55),
    ('Doondun', 15, 'Kerning Junkyard', 5),
    ('Furious Baphomet', 40, 'Mirrow Castle', 5),
    ('Giant Turtle', 18, 'Beachway 111', 35),
    ('Griffin', 23, 'Frostheart', 15),
    ('Griffina', 30, 'Trinian Crossing', 25),
    ('Heartless Baphomet', 50, 'Frostpeak Mountain', 15),
    ('Ikar Morde', 50, 'Frozencrest', 5),
    ('Lernos', 40, 'Twilight Moon Castle', 45),
    ('Lo and Moomoo', 32, 'Baum Tree', 5),
    ('MK 52 Alpha', 27, 'Neuron DNA Research Center', 45),
    ('Pekanos', 47, 'Fractured Canon', 55),
    ('Toh and Googoo', 43, 'Whistler Cliffs', 25),
    ('Ureus', 50, 'Nazkar Pyramid', 15),
    ('Vayar Gatekeeper', 35, 'Precipice Fortress', 35)
