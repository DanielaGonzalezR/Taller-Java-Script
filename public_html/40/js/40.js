//Point 40

function agen() {
  var name = $("#name").val();
  var typeD = $("#type").val();
  var numberD = $("#number").val();
  var genderP = $("#gender").val();
  var height = $("#height").val();
  var live = $("#live").val();
  var answer = "Hello, my name is " + name + ", My number of " + typeD + " is " + numberD + ", Biological gender " + genderP + ", My height is " + height + " mtrs" + live + " Is it true that I live in Carthage";
  $("#answer").text(answer);
}
;
