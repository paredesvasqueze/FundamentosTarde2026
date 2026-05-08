let numero = prompt("Ingrese el primer numero");
let divisor = prompt("Ingrese su divisor");

if (numero % divisor == 0)
{
    alert( "El numero " + numero + " es divisible entre "+ divisor);
}
else
{
    alert( "El numero " + numero + " no es divisible entre "+ divisor);
}