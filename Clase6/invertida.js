n = Number(prompt("Ingrese un numero"));
letra = "*";
espacios = " ";

for (let i = n; i>=1;i--)
{
let cntesp = n-i ;
console.log(espacios.repeat(cntesp)+letra.repeat(i));
}