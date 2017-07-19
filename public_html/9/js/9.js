//Punto 9

var num = Number(prompt("Enter a number: "));

var x = 0, i;
for (i = 1; i <= num; i++) {
  if (num % i === 0) {
    x++;
  }
}
if (x <= 2) {
  console.log("the number is prime");
} else {
  console.log("The number is not prime");
}