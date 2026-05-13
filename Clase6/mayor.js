a = Number(prompt("Ingresse numero 1"));
b = Number(prompt("Ingresse numero 2"));
c = Number(prompt("Ingresse numero 3"));

let mayor = 0;

if (a<b)
    mayor = b;
else
    mayor = a;      

if (mayor <c)
    mayor = c;    

console.log("El Mayor es "+mayor);
