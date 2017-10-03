//Punto 53

$("#jQueryM").on("click", () => {
  var a = Number($("#a").val());
  var b = Number($("#b").val());
  var c = Number($("#c").val());

  $("#jQuery").modal();
  var rule = (b * c) / a;
  $("#resp").text("The result of the rule of three is: " + rule);
});

