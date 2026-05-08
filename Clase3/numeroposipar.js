let compra = prompt("Ingrese Monto");
let membresia = prompt("Ingrese Membresia");

if (compra > 50 || membresia =="PREMIUM")
{
    alert("El envio es gratis");
}
else
{    
    alert("El envio no es gratis");
}