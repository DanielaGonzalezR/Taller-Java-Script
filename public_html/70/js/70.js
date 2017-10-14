$(document).ready(() => {
  class order {
    constructor() {
      this._completearray = [];
    }
    set completearray(sizearray) {
      for (var i = 0; i < sizearray; i++) {
        this._completearray[i] = Math.round(Math.random() * 100);
      }
      console.log(this._completearray);
    }
    get completearray() {
      return this._completearray;
    }
    set sequential(search) {
      var n = 0;
      this._completearray.forEach((e, i) => {
        if (this._completearray[i] === parseInt(search)) {
          n++;
          alert("The number " + this._completearray[i] + " search success in the index " + i);
        }
      });
      if (n === 0) {
        alert("The number not it's in array");
      }
    }
    set bubble(sizearray) {
      var temp = 0;
      var x = 0;
      while (x === 0) {
        x = 1;
        for (var i = 0; i < sizearray; i++) {
          if (this._completearray[i] > this._completearray[i + 1]) {
            temp = this._completearray[i];
            this._completearray[i] = this._completearray[i + 1];
            this._completearray[i + 1] = temp;
            x = 0;
          }
        }
      }
      console.log(this.completearray);
    }
    set bubblebidirectional(sizearray) {
      var temp = 0;
      var x = 0;
      while (x === 0) {
        x = 1;
        for (var i = 0; i < sizearray; i++) {
          if (this._completearray[i] > this._completearray[i + 1]) {
            temp = this._completearray[i];
            this._completearray[i] = this._completearray[i + 1];
            this._completearray[i + 1] = temp;
            x = 0;
          }
        }
        for (var i = i; i > sizearray; i--) {
          if (this._completearray[i] < this._completearray[i - 1]) {
            temp = this._completearray[i];
            this._completearray[i] = this._completearray[i - 1];
            this._completearray[i - 1] = temp;
            x = 0;
          }
        }
      }
      console.log(this._completearray);
    }
    set insertion(sizearray) {
      var temp = 0;
      var p;
      for (var i = 0; i < sizearray; i++) {
        temp = this._completearray[i];
        p = i - 1;
        while (this._completearray[p] > temp && p >= 0) {
          this._completearray[p + 1] = this._completearray[p];
          p = p - 1;
        }
        this._completearray[p + 1] = temp;
      }
      console.log(this._completearray);
    }
    set mixing(sizearray) {
      var arr = this._completearray;
      var arr = () => {
        if (arr.length < 2) {
          return arr;
        }

        var middle = parseInt((sizearray / 2) | 0);
        var left = arr.slice(0, middle);
        var right = arr.slice(middle);
        const merge = function (left, right) {
          const result = [];
          let il = ir = 0;
          while (il < left.length && ir < right.length) {
            result.push((left[il] < right[ir]) ? left[il++] : right[ir++]);
          }
          return [...result, ...left.slice(il), ...right.slice(ir)];
        };
        return merge(mergeSort(left), mergeSort(right));
      };
      var mergeSort = arr;
      var result = mergeSort(arr);
      console.log(result);
    }
    set selection(sizearray) {
      for (let j = 0; j < this._completearray.length; ++j) {
        let i = j;
        let iMin = j
        for (++i; i < this._completearray.length; ++i) {
          (this._completearray[ i ] < this._completearray[ iMin ]) && (iMin = i);
        }
        [this._completearray[ j ], this._completearray[ iMin ]] = [this._completearray[ iMin ], this._completearray[ j ]];
      }
      console.log(this._completearray);
    }
    set print(completearray) {
      console.log(this._completearray);
    }
  }
  var x = new order;
  $("#completearray").click(() => {
    $("#complete").click(() => {
      sizearray = $("#number1").val();
      x.completearray = sizearray;
    });
  });
  $("#order1").click(() => {
    $("#complete2").click(() => {
      var search = $("#number2").val();
      x.sequential = search;
    });
  });
  $("#order2").click(() => {
    x.bubble = sizearray;
  });
  $("#order3").click(() => {
    x.bubblebidirectional = sizearray;
  });
  $("#order4").click(() => {
    x.insertion = sizearray;
  });
  $("#order5").click(() => {
    x.mixing = sizearray;
  });
  $("#order6").click(() => {
    x.selection = sizearray;
  });
  $("#print").click(() => {
    x.print = x.completearray;
  });
});

