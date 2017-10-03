//Point 65.1

$(document).ready(() => {
  var kev = JSON.parse(localStorage.getItem(`result`));
  if (kev.x === 1) {
    $("#text").val("The salary is: " + kev.salary);
    $("#text1").val("The help is: " + kev.ayu);
    $("#text2").val("Total salary: " + kev.salary2);
  } else {
    $("#text").val("The salary is: " + kev.salary);
    $("#text1").val("The help is: " + kev.persalary);
    $("#text2").val("Total salary: " + kev.salary2);

  }
});

