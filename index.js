var mysql = require("mysql");
var inquirer = require("inquirer");
​
// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
​
  // Your port; if not 3306
  port: 3306,
​
  // Your username
  user: "root",
​
  // Your password
  password: "",
  database: "greatBay_DB"
});
​
// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});
​
// function which prompts the user for what action they should take
function start() {
​
}
​
// function to handle posting new items up for auction
function postAuction() {
  inquirer
  .prompt([
      {name:"item",type:"input",message:"what item do you want to auction off?"},
      {name:"category", type:"input",message:"what type of item is it?"},
      {name:"startingbid",type:"input",message:"what would you like your starting bid to be?"}
    ])
​.then(function(answer){
    connection.query(
        "INSERT INTO auctions SET ?",
        {
            item_name: answer.item, category: answer.category, starting_bid: answer.startingbid 
        },
        function(err){
            if(err)throw err;
            start();
        }

    )
})
}
​
function bidAuction() {
  // query the database for all items being auctioned
​
}
Collapse