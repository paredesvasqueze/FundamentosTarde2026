let clave = prompt("Ingrese Contraseña");
let intentos = 1;

while (clave != "admin123")
{
    alert("Contraseña Incorrecta");    
    clave = prompt("Ingrese Contraseña");
    intentos++;
}

alert("Contraseña Correcta");
alert("Se hicieron "+intentos + " intentos" );


