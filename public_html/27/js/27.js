//Punto 27
function men() {
  var menu = Number(prompt("Menu\n\
1. Datos personales\n\
2. Referencia familiar\n\
3. Referencia laboral\n\
4. Descripcion de perfil profesional\n\
5. Imprimir hoja de vida\n\
0. Exit the program"));
  return menu;
}

function regt() {
  var registro = {
    name: "",
    family: "",
    Work: "",
    profile: "",
    hv: ""
  };
  return registro;
}




