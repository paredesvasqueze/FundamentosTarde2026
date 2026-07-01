let persona = {
    nombre: "Edwin",    
    casado: true,
    notas: {
        ind1: 15,
        ind2: 16,
        ind3:20
        },
    edad: 40
    };

console.log(persona);
console.log(persona.nombre);
console.log(persona.edad );
console.log(persona.casado);

persona.distrito = "La Esperanza";
console.log(persona);

delete persona.edad;
console.log(persona);




