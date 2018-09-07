var inquirer = require("inquirer");
var table = require("cli-table");
var mysql = require("mysql");

//establishing connection to mySQL
var connection = mysql.createConnection({
    host: "localhost",
    //your port#, (can change it, if not 3306)
    port: 3306,
    // Your username
    user: "root",
    // Your pwd
    password: "",
    database: "BAMAZON"
});

//command line argument capturing the user's input
var userInput = process.argv[2];
if (userInput === "Bat") {
    console.log("You're in luck! We have Bats");

} else if (userInput === "Broccoli") {

    console.log("Broccoli is in stock! And we have plenty!");
} else if (userInput === "Socks") {
    console.log("Congrats! Socks are in stock!");

} else if (userInput === "towel") {
    console.log("You're in luck! Towels are in stock.");

} else if (userInput === "Redhill Cabernet Sauvignon") {
    console.log("You're in luck! We have plenty of Redhill Cabernet Sauvignon in stock.");

} else if (userInput === "body soap") {
    console.log("You're in luck! Body soap is in stock.");

} else if (userInput === "xHtech Ultra Sleek Performance Laptop Computer") {
    console.log("You're in luck! xHtech Ultra Sleek Performance Laptop Computer is in stock.");

} else if (userInput === "FreezyPops") {
    console.log("Cool off! FreezyPops are in stock.");

} else if (userInput === "whistle") {
    console.log("You're in luck! Whistles are in stock.");

} else if (userInput === "wireless mouse") {
    console.log("You're in luck! A wireless mouse is in stock!");

} else {
    console.log("Sorry, " + (userInput) + " is an invalid product input or we are out of that item today! Please try searching for a different product please!")
}

//use inquirer pkg to prompt users on the CL
function prompts() {
    inquirer.prompt

}





// if (STOCK_QUANTITY < 1) {
// then (console.log("Sorry, this item is out of stock");
    // else (console.log product + "Item is in stock" );
// )}

//deplete inventory by -1 each time an item is purchased
// if (STOCK_QUANTITY < 1, STOCK_QUANTITY --) {
// then (console.log("Sorry, this item is out of stock");
    //
    //for manager view, prompt mgr to reorder product selected
// )}
