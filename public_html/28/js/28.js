//Punto 28
function m() {
  var menu = Number(prompt("menu\n\
1. Llenar arreglo \n\
2. Buscar elemento por método de búsqueda secuencial \n\
3. Aplicar método de ordenamiento de burbuja \n\
4. Aplicar método de ordenamiento de burbuja bidireccional \n\
5. Aplicar método de ordenamiento por inserción \n\
6. Aplicar método de ordenamiento por mezcla \n\
7. Aplicar el método de ordenamiento por selección \n\
8. Imprimir arreglo \n\
0. Salir del programa"));

  switch (menu) {
    case 1:

      var men = menu1();
      break;
    case 2:
      menu2();
      break;
    case 3:
      break;
    case 4:
      break;
    case 5:
      break;
    case 6:
      break;
    case 7:
      break;
    case 8:
      break;
    case 0:
      break;

  }
  return men1;
}

//Var menu es la variable que esta dentro de la funcion menu
//Solo se puede llamar una variable que este dentro de una funcion
var men1 = Number(prompt("Enter Array Size"));
var menu = m();

function menu1(men1) {
  var array = [];
  for (var i = 0; i < men1; i++) {
    array[i] = Math.round(Math.random() * 100);
  }
  return array;
}

function menu2(array) {
  var num = Number(prompt("Enter the number you want to search"));
  for (var i = 0; i < men1; i++) {
    if (num === array[i]) {
      console.log("Your search was successful");
    }
  }
}


