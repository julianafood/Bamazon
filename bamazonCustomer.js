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

function buyItems() {
  inquirer
    .prompt({
      name: "allitems",
      type: "input",
      message: "Would you like to purchase any items?",
      choices: ["Yes", "No",]
    })
    .then(function(answer) {

      if (answer.buyorNot === "Yes") {
        buyItem();
      }
      else if(answer.buyorNot === "No") {
        donotBuy();
      } else{
        connection.end();
      }
    });
}

function listItem() {
  connection.query("SELECT * FROM products", function (err, product) {
    const data = [
      ["Item ID", "Product Name", "Department", "Price", "Quantity"]
    ];

    for (var i = 0; i < product.length; i++) {
      data.push(
        [product[i].item_id, product[i].product_name, product[i].department_name, product[i].price, product[i].stock_quantity]
      );
    }
    const out = table.table(data);
    console.log(out);
    
    makeaPurchase();
  });
}


function makePurchase() {

  inquirer
    .prompt([{
      name: "choosingItems",
      type: "input",
      message: "Which item would you like to purchase?",
    },

    {
      name: "customerUnits",
      type: "input",
      message: "What quantity would you like to purchase?",
    }
    ])

    .then(function (answer) {
      connection.query("SELECT * FROM products WHERE item_id = ?",

        [answer.makeaPurchase],

        function (err, product) {
          if (err) throw err;
          if (product[0].stock_quantity < answer.customerQuantity) {
            console.log("Sold out! Try later!");

          } else {
            updateDB(answer.makeaPurchase, product[0].stock_quantity - answer.customerUnits);
            var totalAmount = parseInt(answer.customerUnits) * product[0].price;

            console.log("Thank You.  Your final cost is: $ " + totalAmount.toFixed(2));
          }
        });

    })

}


  
