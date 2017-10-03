//Punto 57

$("#number").click(() => {
  var array = [i];
  var i = 0;
  a = Number($("#a").val());
  b = Number($("#b").val());

  side = {
    a,
    b
  };
  if (array === null) {
    array = [
      side = {
        a,
        b
      }
    ];
  } else {
    array.push(side);
  }
  localStorage.setItem(`side`, JSON.stringify(array));
  var k = JSON.parse(localStorage.getItem(`side`));

  sessionStorage.setItem(`side`, JSON.stringify(array));
  var e = JSON.parse(sessionStorage.getItem(`side`));

  var v = (a ** 2 + b ** 2);
  var i = (v ** (1 / 2));
  var result = v ** i;
  var date = {
    result
  };
  localStorage.setItem(`result`, JSON.stringify(date));
});