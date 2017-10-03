//Point 58

$(document).ready(() => {

  var res = JSON.parse(localStorage.getItem(`result`));
  $("#months").val("In years is " + res.years * res.months + " months");
  $("#days").val("Has " + res.years * res.days);
  $("#hours").val("Has " + res.hours * res.days * res.years);
  $("#minutes").val("Has " + res.minutes * res.hours * res.days * res.years);
  $("#seconds").val("Has " + res.seconds * res.minutes * res.hours * res.days * res.years);
});


