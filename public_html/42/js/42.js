//point 42

$("#jQ").modal();
var num1 = 10;
var num2 = 50;
var result = ("50 to 10 is: " + (num2 ** num1));
var resultA = ("10 to 50 is: " + (num1 ** num2));
var mult = ("Multiplication between 50 and 10 is: " + (num2 * num1));
var division = ("The division between 50 and 10 is: " + (num2 / num1));
var divisionA = ("The division between 10 and 50 is: " + (num1 / num2));
var modul = ("The module of the division between 50 and 10 is: " + (num2 % num1));
var subt = ("The subtration between 50 and 10 is: " + (num2 - num1));
var subtA = ("The subtration between 10 and 50 is: " + (num1 / num2));
$("#ans").html(result + "<br>" + resultA + "<br>" + mult + "<br>" + division + "<br>" + divisionA + "<br>" + modul + "<br>" + subt + "<br>" + subtA + "<br>");






