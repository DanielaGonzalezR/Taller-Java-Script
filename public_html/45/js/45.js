function prime() {
  var c = 0;
  var num = $("#num").val();
  for (i = 1; i <= num; i++) {
    if (num % i === 0) {
      c++;
    }
  }
  if (c <= 2) {
    var x = ("The number " + num + " is prime");
    $("#result").text(x);
  } else {
    var v = ("The number " + num + " is not prime");
    $("#result").text(v);
  }
}
;

