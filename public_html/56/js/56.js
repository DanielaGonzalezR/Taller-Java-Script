//Punto 56
$("#ocult").hide();
$("#ocult1").hide();
$(document).ready(() => {
  $("#number").click(() => {
    var array = [i];
    var i = 0;
    salaryM = Number($("#num").val());
    salary = Number($("#num1").val());
    days = Number($("#num2").val());
    datos = {
      salaryM,
      salary,
      days
    };
    if (array === null) {
      array = [
        datos = {
          salaryM,
          salary,
          days
        }
      ];
    } else {
      array.push(datos);
    }
    localStorage.setItem(`datos`, JSON.stringify(array));
    var n = JSON.parse(localStorage.getItem(`datos`));

    var a = $("#num2").val();
    if (a > 30) {
      $("#text56").text("plase enter a number less than 30");
    }

    if (salary <= (salaryM * 2)) {
      $("#ocult").show();
      $("#number1").click(() => {
        var salaryD = Math.round(salary / 30);
        var ayu = Number($("#num3").val());
        var persalary = Math.round(salary * ayu);
        var salary2 = Math.round(ayu + salary);
        var x = 1;
        var result = {
          salary,
          ayu,
          salary2,
          x
        };
        localStorage.setItem(`result`, JSON.stringify(result));
      });
    } else {
      $("#ocult1").show();
      $("#number2").click(() => {
        if (salary >= (salaryM * 4)) {
          var perete = Number($("#num4").val() / 100);
          var persalary = Math.round(salary * perete);
          var salary2 = Math.round(salary - persalary);
        }
        var x = 0;
        var result = {
          salary,
          persalary,
          salary2,
          x
        };
        localStorage.setItem(`result`, JSON.stringify(result));
      });
    }
  });
});
