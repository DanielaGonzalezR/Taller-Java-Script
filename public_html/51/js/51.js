//Point 51

$("#jQueryM").on("click", () => {
  var age = Number($("#age").val());
  $("#jQuery").modal();
  if (age < 18) {
    $("#rps").text("Can not log in");
  } else {
    $("#rps").text("welcome to the party");
  }
});
