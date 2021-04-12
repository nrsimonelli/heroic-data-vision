-- DB: superhero
-- data csv -> https://www.kaggle.com/jonathanbesomi/superheroes-nlp-dataset

CREATE TABLE hero_info (
id SERIAL PRIMARY KEY,
name VARCHAR,
real_name VARCHAR,
full_name VARCHAR,
overall_score VARCHAR,
history_text TEXT,
powers_text TEXT,
intelligence_score INT,
strength_score INT,
speed_score INT,
durability_score INT,
power_score INT,
combat_score INT,
superpowers TEXT,
alter_egos TEXT,
aliases TEXT,
place_of_birth VARCHAR,
first_appearance VARCHAR,
alignment VARCHAR,
occupation VARCHAR,
relatives VARCHAR,
gender VARCHAR,
type_race VARCHAR,
height VARCHAR,
weight VARCHAR,
eye_color VARCHAR,
hair_color VARCHAR,
skin_color VARCHAR,
img VARCHAR
);

SELECT * FROM hero_info;

SELECT id, name, img FROM hero_info WHERE hero_info.img IS NULL;

-- added missing images that I could find
UPDATE hero_info SET img = '/pictures2/portraits/10/050/10029.jpg?v=1610816004' WHERE id = 45;
UPDATE hero_info SET img = '/pictures2/portraits/10/050/11013.jpg?v=1601996402' WHERE id = 130;
UPDATE hero_info SET img = '/pictures2/portraits/10/050/5.jpg?v=1616867405' WHERE id = 355;
UPDATE hero_info SET img = '/pictures2/portraits/10/050/12300.jpg?v=1607414965' WHERE id = 392;
UPDATE hero_info SET img = '/pictures2/portraits/10/050/11670.jpg?v=1591614424' WHERE id = 400;
UPDATE hero_info SET img = '/pictures2/portraits/10/050/8.jpg?v=1616869748' WHERE id = 471;
UPDATE hero_info SET img = '/pictures2/portraits/10/050/15880.jpg?v=1614839345' WHERE id = 494;
UPDATE hero_info SET img = '/pictures2/portraits/11/050/10417.jpg?v=1572213429' WHERE id = 765;
UPDATE hero_info SET img = '/pictures2/portraits/10/050/15879.jpg?v=1603937907' WHERE id = 791;
UPDATE hero_info SET img = '/pictures2/portraits/10/050/13121.jpg?v=1545253264' WHERE id = 801;
UPDATE hero_info SET img = '/pictures2/portraits/10/050/10.jpg?v=1602776514' WHERE id = 817;
UPDATE hero_info SET img = '/pictures2/portraits/10/050/11277.jpg?v=1607409038' WHERE id = 822;
UPDATE hero_info SET img = '/pictures2/portraits/11/050/15434.jpg?v=1553599052' WHERE id = 872;
UPDATE hero_info SET img = '/pictures2/portraits/10/050/1302.jpg?v=1605417979' WHERE id = 956;
UPDATE hero_info SET img = '/pictures2/portraits/10/050/22667.jpg?v=1605261980' WHERE id = 1004;
UPDATE hero_info SET img = '/pictures2/portraits/10/050/110.jpg?v=1617120076' WHERE id = 1019;
UPDATE hero_info SET img = '/pictures2/portraits/10/050/25919.jpg?v=1614215013' WHERE id = 1037;
UPDATE hero_info SET img = '/pictures2/portraits/10/050/119.jpg?v=1617121305' WHERE id = 1139;
UPDATE hero_info SET img = '/pictures2/portraits/10/050/128.jpg?v=1617122181' WHERE id = 1186;
UPDATE hero_info SET img = '/pictures2/portraits/10/050/18503.jpg?v=1609165901' WHERE id = 1194;
UPDATE hero_info SET img = '/pictures2/portraits/10/050/17697.jpg?v=1610213824' WHERE id = 1211;
UPDATE hero_info SET img = '/pictures2/portraits/10/050/20.jpg?v=1616927733' WHERE id = 1216;
UPDATE hero_info SET img = '/pictures2/portraits/10/050/134.jpg?v=1617123033' WHERE id = 1238;
UPDATE hero_info SET img = '/pictures2/portraits/10/050/10899.jpg?v=1605417427' WHERE id = 1295;
UPDATE hero_info SET img = '/pictures2/portraits/10/050/143.jpg?v=1617126060' WHERE id = 1327;
UPDATE hero_info SET img = '/pictures2/portraits/10/050/1469.jpg?v=1603874488' WHERE id = 1333;
UPDATE hero_info SET img = '/pictures2/portraits/10/050/144.jpg?v=1617126455' WHERE id = 1340;
UPDATE hero_info SET img = '/pictures2/portraits/10/050/146.jpg?v=1617127163' WHERE id = 1355;
UPDATE hero_info SET img = '/pictures2/portraits/10/050/158.jpg?v=1617129222' WHERE id = 1408;
UPDATE hero_info SET img = '/pictures2/portraits/10/050/159.jpg?v=1617129732' WHERE id = 1412;
UPDATE hero_info SET img = '/pictures2/portraits/10/050/1497.jpg?v=1596724357' WHERE id = 1418;
UPDATE hero_info SET img = '/pictures2/portraits/10/050/23.jpg?v=1616929167' WHERE id = 1434;
UPDATE hero_info SET img = '/pictures2/portraits/11/050/14440.jpg?v=1553618759' WHERE id = 1448;

-- cleaned dataset of remaining null immages
DELETE FROM hero_info WHERE img IS NULL;