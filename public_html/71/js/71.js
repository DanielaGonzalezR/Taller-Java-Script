$(() => {
  class company {
    constructor() {
      this._na = [];
    }
    set na(products) {
      if (localStorage.getItem("na") !== null) {
        this._na = JSON.parse(localStorage.getItem("na"));
      }
      this._na.push(products);
      localStorage.setItem("na", JSON.stringify(this._na));
    }
    get na() {
      return this._na;
    }
    set searchN(search) {
      var n = 0;
      this._na = JSON.parse(localStorage.getItem("na"));
      this._na.forEach((e, i) => {
        if (this._na[i].name === search) {
          n++;
          $("#rps").text("This product: " + e.name + " it has a price of: $" + e.price + " and code: " + e.code);
        }
      });
      if (n === 0) {
        $("#rps").text("This product was not found");
      }
    }
    set searchC(search) {
      var n = 0;
      this._na = JSON.parse(localStorage.getItem("na"));
      this._na.forEach((e, i) => {
        if (this._na[i].code === search) {
          n++;
          $("#rps").text("This product: " + e.name + " it has a price of: $" + e.price + " and code: " + e.code);
        }
      });
      if (n === 0) {
        $("#rps").text("This product was not found");
      }
    }
  }
  var x = new company;
  $(".collapse").collapse('hide');
  $("#product").click(() => {
    var products = {
      name,
      price,
      code
    };
    products.name = $("#name").val();
    products.price = $("#price").val();
    products.code = $("#code").val();
    x.na = products;
  });
  $("#searchN").click(() => {
    var search = $("#nam").val();
    x.searchN = search;
    $("#jQuery").modal();
  });
  $("#searchC").click(() => {
    var search = $("#cod").val();
    x.searchC = search;
    $("#jQuery").modal();
  });
});


