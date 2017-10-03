//Point 44

function operation() {
  var n1 = Number($("#num1").val());
  var n2 = Number($("#num2").val());
  var sum = ("la suma es: " + (n1 + n2));
  var subt = ("la resta es: " + (n1 - n2));
  var mult = ("la multiplicacion es: " + (n1 * n2));
  var div = ("la division es: " + (n1 / n2));
  $("#result").html(sum + "<br>" + subt + "<br>" + mult + "<br>" + div + "<br>");
}
;


