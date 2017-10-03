//Punto 52

$("#jQueryM").on("click", () => {
  var base = Number($("#base").val());
  var height = Number($("#height").val());

  $("#jQuery").modal();
  var perimeter = base + base + height + height;

  var area = base * height;

  $("#rps").html("The perimeter of the rectangle is: " + perimeter + "<br>" + "The area of the rectangle is: " + area);
});



