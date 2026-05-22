let num1 = Number(prompt("Ingrese numero 1"));
let num2 = Number(prompt("Ingrese numero 2"));
let opcion = Number(prompt("Ingrese opcion de operacion matematica"));

switch(opcion)
{
    case 1:
        suma = num1+num2;
       console.log("La suma es "+ suma);
        document.write("La suma es "+ suma);
        break;
    case 2:
        resta = num1-num2;
        console.log("La resta es "+ resta);
        document.write("La resta es "+ resta);
        break;
    case 3:
        producto = num1*num2;
       console.log("El producto es "+ producto);
        document.write("El producto es "+ producto);
        break;
    case 4:  
        if (num2 == 0)
        {
            console.log("No se puede dividir entre 0");
            document.write("No se puede dividir entre 0");
        }
        else
        {
            division = num1/num2;
            console.log("La division es "+ division);
            document.write("La division es "+ division);
        }
        break;        
    case 5:
         resto = num1%num2;
         console.log("El resto es "+ resto);
        document.write("El resto es "+ resto);
        break;
}