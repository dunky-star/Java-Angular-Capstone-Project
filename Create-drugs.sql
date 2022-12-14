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
INSERT INTO drug_category(category_name) VALUES ('Hormonal');
INSERT INTO drug_category(category_name) VALUES ('Other medicines');

INSERT INTO drugs (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES ('Anti-bac-001', 'Vancomysin', 'Vancomycin is a glycopeptide antibiotic medication used to treat a number of bacterial infections. It is recommended intravenously as a treatment for complicated skin infections',
'assets/images/products/capsules.png'
,1,2000,10000,1, NOW());

INSERT INTO drugs (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES ('Bron-cho-001', 'Tiotropium bromide', 'Is a long-acting bronchodilator used in the management of chronic obstructive pulmonary disease and asthma',
'assets/images/products/tricopium.png'
,1,300,25000,2, NOW());

INSERT INTO drugs (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES ('Anti-fung-001', 'Miconazole', ' is an antifungal medication used to treat ring worm, pityriasis versicolor, and yeast infections of the skin',
'assets/images/products/miconazole.png'
,1,5000,50000,3, NOW());

INSERT INTO drugs (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES ('Anti-bac-002', 'Turmeric', 'Turmeric contains curcumin, which is known for its powerful antioxidant and anti-inflammatory properties.',
'assets/images/products/antibac1.png'
,1,1500,80000,1, NOW());

INSERT INTO drugs (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES ('Bron-cho-002', 'Thoracic drug', 'Thoracic medicine looks after diseases that involve the lung, the lining of the lung and sometimes the chest wall itself.',
'assets/images/products/thoracic.png'
,1,4000,45000,2, NOW());

INSERT INTO drugs (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES ('Hor-mon-001', 'drospirenone', 'Drospirenone is a progestin and antiandrogen medication which is used in birth control pills to prevent pregnancy and in menopausal hormone therapy, among other uses.',
'assets/images/products/drospirenone.png'
,1,900,42000,4, NOW());

INSERT INTO drugs (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES ('Hor-mon-002', 'norethindrone acetate', 'This medicine is used to treat endometriosis, uterine bleeding caused by abnormal hormone levels, and secondary amenorrhea.',
'assets/images/products/norethindrone.png'
,1,1500,100000,4, NOW());

INSERT INTO drugs (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES ('Oth-med-001', 'Coartem', 'Lumefantrine, sold under the trade name Coartem among others, is a combination of the two medications artemether and lumefantrine. It is used to treat malaria caused by Plasmodium falciparum that is not treatable with chloroquine.',
'assets/images/products/coartem.png'
,1,10000,80000,5, NOW());


**************************


INSERT INTO drugs (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES ('Anti-bac-007', 'Penicillins', 'Penicillins are distributed rapidly in the extracellular fluid of most tissues, particularly when inflammation is present.',
'assets/images/products/disinfectant.png'
,1,2000,10000,1, NOW());

INSERT INTO drugs (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES ('Anti-bac-003', 'Amoxicillin', 'Amoxicillin has generally replaced ampicillin for oral use because amoxicillin is absorbed better, has fewer gastrointestinal effects, and can be given less frequently.',
'assets/images/products/disinfectant.png'
,1,300,25000,1, NOW());

INSERT INTO drugs (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES ('Anti-bac-004', 'Ampicillin', ' is an antifungal medication used to treat ring worm, pityriasis versicolor, and yeast infections of the skin',
'assets/images/products/disinfectant.png'
,1,5000,50000,1, NOW());

INSERT INTO drugs (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES ('Anti-bac-005', 'Carbapenems', 'Carbapenems are parenteral bactericidal beta-lactam antibiotics that have an extremely broad spectrum.',
'assets/images/products/disinfectant.png'
,1,1500,80000,1, NOW());

INSERT INTO drugs (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES ('Anti-bac-006', 'Monobactams', 'Aztreonam is currently the only available monobactam. Aztreonam has activity similar to that of ceftazidime against pneumoniae carbapenemase.',
'assets/images/products/disinfectant.png'
,1,4000,45000,1, NOW());

INSERT INTO drugs (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES ('Anti-bac-008', 'Aminoglycosides', 'Aminoglycosides are active against most gram-negative aerobic and facultative anaerobic bacilli.',
'assets/images/products/disinfectant.png'
,1,900,42000,1, NOW());

INSERT INTO drugs (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES ('Anti-bac-009', 'Daptomycin', 'Daptomycin is used mainly for infections caused by Vancomycin- and methicillin-resistant Staphylococcus aureus.',
'assets/images/products/disinfectant.png'
,1,1500,100000,1, NOW());

INSERT INTO drugs (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES ('Anti-bac-010', 'Fosfomycin', 'Fosfomycin has a broad spectrum of activity against both gram-positive and gram-negative organisms, including many antibiotic-resistant organisms.',
'assets/images/products/disinfectant.png'
,1,10000,80000,1, NOW());

