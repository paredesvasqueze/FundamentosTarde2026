nombre = prompt("Ingrese nombre");
apellido = prompt("Ingrese apellido");

//convirtiendo a minusculas
nombre = nombre.toLowerCase();
//convirtiendo a mayusculas
apellido = apellido.toUpperCase();
//limpiando espacios
nombre = nombre.trim();
apellido = apellido.trim();

console.log("Sus apellidos son " + apellido + " y sus nombres son "+ nombre);



