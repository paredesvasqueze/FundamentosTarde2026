nombre = prompt("Ingresar nombre");
nombre = nombre.toLowerCase();
posicion = nombre.indexOf("e");

if(posicion != -1) {
  alert("El nombre empieza con e");
} else {
  alert("No empieza con e");
}