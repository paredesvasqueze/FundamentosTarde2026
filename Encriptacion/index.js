const texto = "Edwin Paredes";

const clave = 17;

// Encriptar
let cifrado = "";

for(let i = 0; i < texto.length; i++) {
    cifrado += String.fromCharCode(
        texto.charCodeAt(i) + clave
    );
}

console.log(cifrado);

// Desencriptar
//cifrado = "Tzzr1kĂzxr"
let original = "";

for(let i = 0; i < cifrado.length; i++) {
    original += String.fromCharCode(
        cifrado.charCodeAt(i) - clave
    );
}

console.log(original);