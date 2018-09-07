-- database info copied from mySql workbench

CREATE DATABASE BAMAZON;
USE BAMAZON;

 -- created products table
-- id, name
CREATE TABLE PRODUCTS (
	ITEM_ID INTEGER(11) auto_increment NOT NULL,
    PRODUCT_NAME VARCHAR(30),
   DEPARTMENT_NAME VARCHAR(30),
   PRICE INTEGER(11),
   STOCK_QUANTITY INTEGER(11),
   
   primary key (ITEM_ID)
);

select * from products




--Inserting data into the 'products' table
INSERT INTO products
(product_name, department_name, price)
values
(Bat, Sports, 30);


--UPDATE products
--SET product_name = "Bat"
--where id = 1;


