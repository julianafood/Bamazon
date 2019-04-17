var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "iamsocool",
  database: "bamazon_DB"
});

connection.connect(function(err) {
  if (err) throw err;
  start();
});

function listItems() {
    inquirer
      .prompt({
        name: "list",
        type: "rawlist",
        message: "What would you like to purchase?",
  
