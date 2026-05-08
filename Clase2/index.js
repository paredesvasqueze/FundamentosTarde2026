console.log("Hola sigo aprendiendo JavaScript");
/*
let pago, sueldoxdia, diastrabajados;
sueldoxdia = 40;
diastrabajados = 5;
pago = sueldoxdia * diastrabajados;
console.log("el pago del trabajador sera " + pago);
*/
/*
function Calcular()
{
    //declarando variables
let gradocelsius, total;
//leer
gradocelsius = document.getElementById('Celsius').value;
//operacion
total = (gradocelsius * 1.8) + 32;
//escribir
document.getElementById('Fahrenheit').value = total

}
*/
/*
function Calcular()
{
    //declarando variables
let gradocelsius, total;
//leer
gradocelsius = document.getElementById('Celsius').value;
//operacion
total = (gradocelsius * 1.8) + 32;
//escribir
document.getElementById('Fahrenheit').value = total
}
*/
function Calcular()
{
    //Calcular puntaje
let Respuestascorrectas,Respuestasinc,RespuestasBlanco;
//leer
Respuestascorrectas = document.getElementById('correctas').value;
Respuestasinc = document.getElementById('incorrectas').value;
RespuestasBlanco = document.getElementById('respuestaenblanco').value;

//operacion
//calcularpuntaje = Respuestascorrectas * 4-Respuestasinc*1+ RespuestasBlanco*0;
totalcorrectas = Respuestascorrectas * 4;
totalincorrectas = Respuestasinc * 1; 
totalblanco = RespuestasBlanco * 0 ;
calcularpuntaje = totalcorrectas -totalincorrectas + totalblanco;

//escribir
document.getElementById('resultado').value = "Usted obtuvo "+ calcularpuntaje + " puntos";
}

mivariablenumber = 5;
console.log(typeof(mivariable));

mivariablecadena = "8";
console.log(typeof(mivariable));

mivariableboleana = true;
console.log(typeof(mivariable));

console.log(mivariablenumber + mivariableboleana );

mivariableboleanafalse= false;
console.log(typeof(mivariable));

console.log(mivariableboleanafalse +  mivariableboleana);





//console.log(typeof(mivariableinfinity));

