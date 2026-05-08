nombre = prompt("Ingresar nombre");
nombre = nombre.toLowerCase();
posicion = nombre.indexOf("h");

if(posicion == -1) {
  alert("No contiene H");
} else {
  alert("Contiene h");
}