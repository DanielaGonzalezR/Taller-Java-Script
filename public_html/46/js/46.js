function odd() {
  var num = $("#num").val();
  if (num % 2 === 0) {
    $("#result").text("El numero " + num + " es par");
  } else {
    $("#result").text("El numero " + num + " es impar");
  }
}
;

