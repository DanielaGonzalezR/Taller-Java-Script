//Punto 41

function enun() {
  var name = $("#name").val();
  var number = $("#number").val();
  var type = $("#type").val();
  var message = ("Hello, my Name Is " + name + ", my number of " + type + " is " + number);
  $("#msj").text(message);
}