$(() => {
  var aste = "*";
  var maximo = 6;
  var x = 1;
  var n = "";
  do {
    n = n + aste;
    $("#aste").append(n, '<br>');
    if (x <= 6) {
      x++;
    }
  } while (x <= maximo);
});

