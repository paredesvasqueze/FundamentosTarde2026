function suma(num1, num2)
{
console.log(num1+num2);    
}

function resta(numero1, numero2)
{
console.log(numero1-numero2);    
}

let numero1 = Number(prompt("Ingrese Numero 1"));
let numero2 = Number(prompt("Ingrese Numero 2"));
let operacion = Number(prompt("Ingrese Operacion"));

switch(operacion)
{
    case 1:
        suma(numero1,numero2);
        break;
    case 2:
        resta(numero1,numero2);
        break;    
}

