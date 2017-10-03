//Point 65.1

$(document).ready(() => {
  var kev = JSON.parse(localStorage.getItem(`result`));
  $("#love").text("The hypotenuse is:" + kev.result);


});

