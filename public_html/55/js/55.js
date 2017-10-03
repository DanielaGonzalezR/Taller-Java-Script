//Punto 55
function number() {
  var a = $("#num").val();

  if (a > 0) {
    $("#result").text("Enter a number less than zero");
  }
  if (a < 0) {
    a = a * (-1);
    $("#result").text("The result is: " + a);
  }
}



