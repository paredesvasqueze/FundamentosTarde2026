"use strict";

//declarando un array
let animales = ["Perro", "Gato", "Cuy"];
console.log(animales);

//devolviendo valores por indice

console.log(animales[0]);
console.log(animales[2]);
console.log(animales[5]);

// modificando valores

animales[1] = "Conejo";
console.log("cambie conejo");
console.log(animales);

animales[7] = "Raton";
console.log(animales);

for (let i = 0; i<animales.length; i++ )
{
   console.log(animales[i]); 
}

let notas = [20,18,15,17,18,13];

console.log("Estas son tus notas");
for (let i = 0; i<notas.length; i++ )
{    
   console.log("Nota"+ (i+1) +": "+notas[i]); 
}

 notas = [8,18,15,17,18,13];

console.log("Otra forma");

let suma = 0;

for (let i = 1; i<=notas.length; i++ )
{
   suma = suma + notas[i-1];
   console.log("Nota"+ i +": "+notas[i-1]); 
}

console.log("El promedio es: "+ suma/notas.length );


notas = [8,18,15,17,18,13,11];
let pares = 0;
let impares = 0;

 for (let i = 0; i<notas.length; i++ )
{    
   if (notas[i] % 2 == 0){
        pares++;
    }
    else{
        impares++;
    }
}

console.log(pares+ " notas son pares");
console.log(impares+ " notas son impares");


animales = ["Perro", "Gato", "Cuy"];
animales.push("Chancho");
animales.push("Oveja");

console.log(animales);
animales.pop();
console.log(animales);



