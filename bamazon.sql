DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INTEGER(10) NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Macbook", "Electronics", 1500, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iPod", "Electronics", 150, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iPhone", "Electronics", 850, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Spoons", "Utensils", 50, 1000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Forks", "Utensils", 40, 1000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Mario Kart", "Video Game", 20, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Monopoly", "Game", 30, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Toaster Oven", "Appliance", 100, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Snack Box", "Food", 27, 500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Banana", "Food", 7, 10000);

SELECT * FROM products;