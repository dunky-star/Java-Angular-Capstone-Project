-- -----------------------------------------------------
-- Schema capstone_project_medicare
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `capstone_project_medicare`;

CREATE SCHEMA `capstone_project_medicare`;
USE `capstone_project_medicare` ;

-- -----------------------------------------------------
-- Table `capstone_project_medicare`.`drug_category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `capstone_project_medicare`.`drug_category` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `category_name` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE=InnoDB;

-- -----------------------------------------------------
-- Table `capstone_project_medicare`.`drugs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `capstone_project_medicare`.`drugs` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `sku` VARCHAR(255) DEFAULT NULL,
  `name` VARCHAR(255) DEFAULT NULL,
  `description` VARCHAR(255) DEFAULT NULL,
  `unit_price` DECIMAL(13,2) DEFAULT NULL,
  `image_url` VARCHAR(255) DEFAULT NULL,
  `active` BIT DEFAULT 1,
  `units_in_stock` INT(11) DEFAULT NULL,
   `date_created` DATETIME(6) DEFAULT NULL,
  `last_updated` DATETIME(6) DEFAULT NULL,
  `category_id` BIGINT(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_category` (`category_id`),
  CONSTRAINT `fk_category` FOREIGN KEY (`category_id`) REFERENCES `drug_category` (`id`)
) 
ENGINE=InnoDB;


-- -----------------------------------------------------
-- Add sample data
-- -----------------------------------------------------

INSERT INTO drug_category(category_name) VALUES ('Antibacterials');
INSERT INTO drug_category(category_name) VALUES ('Bronchodilators');
INSERT INTO drug_category(category_name) VALUES ('Antifungals');

INSERT INTO drugs (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES ('Anti-bac-001', 'Vancomysin', 'Vancomycin is a glycopeptide antibiotic medication used to treat a number of bacterial infections. It is recommended intravenously as a treatment for complicated skin infections',
'assets/images/products/capsules.png'
,1,100,19.99,1, NOW());

INSERT INTO drugs (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES ('Bron-cho-001', 'Tiotropium bromide', 'Is a long-acting bronchodilator used in the management of chronic obstructive pulmonary disease and asthma',
'assets/images/products/tricopium.png'
,1,100,29.99,1, NOW());

INSERT INTO drugs (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES ('Anti-fung-001', 'Miconazole', ' is an antifungal medication used to treat ring worm, pityriasis versicolor, and yeast infections of the skin',
'assets/images/products/miconazole.png'
,1,100,24.99,1, NOW());

INSERT INTO drugs (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES ('Anti-bac-002', 'Turmeric', 'Turmeric contains curcumin, which is known for its powerful antioxidant and anti-inflammatory properties.',
'assets/images/products/antibac1.png'
,1,100,29.99,1, NOW());

INSERT INTO drugs (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES ('Bron-cho-002', 'Thoracic drug', 'Thoracic medicine looks after diseases that involve the lung, the lining of the lung and sometimes the chest wall itself.',
'assets/images/products/thoracic.png'
,1,100,24.99,1, NOW());
