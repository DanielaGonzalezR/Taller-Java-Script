var aste = "*";
var espacio = "    ";
var x = "";
var z = "";
var t = " ";
for (i = 1; i <= 13; i++) {
  if (i === 1) {
    console.log(x = espacio + aste);
  }
  if (i > 1 && i <= 4) {
    if (i === 3) {
      z = x;
    }
    console.log(x = x.slice(1) + aste + aste);
  }
  if (i === 5) {
    console.log(z);
  }
  if (i === 6) {
    console.log(z);
  }
  if (i >= 7 && i <= 9) {
    console.log(z = z.slice(1) + aste + aste);
  }
  if (i > 9) {
    console.log(z = t + z.slice(0, -2));
  }
}