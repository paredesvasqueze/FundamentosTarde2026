const texto = "Mensaje secreto";

const clave = 25;

// Encriptar
let cifrado = "";

for(let i = 0; i < texto.length; i++) {
    cifrado += String.fromCharCode(
        texto.charCodeAt(i) + clave
    );
}


console.log(cifrado);

// Desencriptar
cifrado = "f~z~9~|~"
let original = "";

for(let i = 0; i < cifrado.length; i++) {
    original += String.fromCharCode(
        cifrado.charCodeAt(i) - clave
    );
}

console.log(original);