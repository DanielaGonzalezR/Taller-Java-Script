//Point 50


$("#jQueryM").on("click", () => {
  var employees = Number($("#employees").val());
  var hour = Number($("#hours").val());

  $("#jQuery").modal();
//1.
  var x = 258320000 / employees;

//2.
  var day = (hour * 45000) - 20000;

//3.
  var mile = 5280;
  var foot = 12;
  var inch = 2.54;
  var cmenmile = (inch * foot) * mile;


  $("#rps").html("1. the money that corresponds to each employee is: $" + x + "<br>" + "2. Your profit per day is: $" + day + "<br>" + "3. Within a mile there are " + cmenmile + " cms");
});



