var x = "     *";
var y = "*";
var i = 1;
while (i <= 5) {
  if (x === "     *") {
    console.log(x);
  }
  console.log(x = (x.slice(1) + y));
  i++;
}