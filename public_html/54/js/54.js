//Punto 54

$("#jQueryM").on('click', () => {
  var salary = Number($("#salaryT").val());
  var Retention = Number($("#Retention").val());

  $("#jQuery").modal();
  var percentage = (Retention / 100);
  var x = (salary * percentage);
  var salaryT = (salary - x);
  $("#salary").html("Retention is: " + x + "<br>" + "The total salary of the worker is: " + salaryT);
});
