-- database info copied from mySql workbench
CREATE DATABASE BAMAZON;
USE BAMAZON;

 -- created products table
CREATE TABLE PRODUCTS (
	ITEM_ID INTEGER(11) auto_increment NOT NULL,
    PRODUCT_NAME VARCHAR(30) NOT NULL,
   DEPARTMENT_NAME VARCHAR(30)NOT NULL,
   PRICE INTEGER(11) NOT NULL,
   STOCK_QUANTITY INTEGER(11) NOT NULL,
   PRIMARY KEY (ITEM_ID)
);
--select * from products--

--Inserting data into the 'products' table
INSERT INTO PRODUCTS (product_name, DEPARTMENT_NAME, price, STOCK_QUANTITY)
values
("Bat", "Sports", 30, 100),
("Broccoli", "Foods", 2, 1000),
("Socks", "Apparel", 10, 250),
("towel", "bath", 13, 1250),
('Redhill Cabernet Sauvignon', "Foods", 12, 100),
('body soap', 'bath', 6, 500),
('xHtech Ultra Sleek Performance Laptop Computer', 'tech', 1299, 50),
('FreezyPops', 'foods', 2, 3000),
('whistle', 'toys', 4, 144),
('wireless mouse', 'tech', 19, 300,)
;

--UPDATE products
--SET product_name = "Bat"
--where id = 1;


