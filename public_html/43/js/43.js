//point 43
$("#jQueryM").on("click", () => {
  var n1 = Number($("#num1").val());
  var n2 = Number($("#num2").val());

  $("#jQuery").modal();
  var result = (n1 + " a la " + n2 + " es:" + (n1 ** n2));
  var resultA = (n2 + " a la " + n1 + " es: " + (n2 ** n1));
  var mult = ("La multiplicación entre" + n1 + " y " + n2 + " es: " + (n1 * n2));
  var division = ("La división entre " + n1 + " y " + n2 + " es: " + (n1 / n2));
  var divisionA = ("La división entre " + n2 + " y " + n1 + " es: " + (n2 / n1));
  var modul = ("El módulo de la división entre" + n1 + " y " + n2 + " es: " + (n1 % n2));
  $("#rps").html(result + "<br>" + resultA + "<br>" + mult + "<br>" + division + "<br>" + divisionA + "<br>" + modul);
});




