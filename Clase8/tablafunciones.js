function imprimetabla(numerazo){
    for(i=1; i<=12;i++){
        let suma = Number(numerazo) + i;
        console.log(numerazo+"+"+i+"="+suma); 
    }    
}

let numerito = Number(prompt("Ingresar Numero"));
imprimetabla(numerito);



