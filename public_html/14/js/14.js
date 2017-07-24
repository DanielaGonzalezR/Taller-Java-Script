//Punto 14

//1.
var employees = Number(prompt("Enter number of employees"));

var x = 258320000 / employees;
console.log("the money that corresponds to each employee is: $" + x);


//2.
var hour = Number(prompt("Enter number of hours worked"));
var day = (hour * 45000) - 20000;
console.log("Your profit per day is: $" + day);


//3
var mile = 5280;
var foot = 12;
var inch = 2.54;
var cmenmile = (inch * foot) * mile;

console.log("Within a mile there are " + cmenmile + " cms");
