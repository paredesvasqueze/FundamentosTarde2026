let alumnos =[];
const nombre = document.getElementById("nombre");
const nota1 = document.getElementById("nota1");
const nota2 = document.getElementById("nota2");
const nota3 = document.getElementById("nota3");
const btnagregar = document.getElementById("btnagregar");
const btneliminarultimo = document.getElementById("btneliminarultimo");
const cuerpo = document.getElementById("cuerpo");


btneliminarultimo.addEventListener("click",()=>
    {
       alumnos.pop(); 
       mostrar(); 
    }
);


btnagregar.addEventListener("click", ()=>{
    let alumno = 
        {
        nombre: nombre.value,
        nota1 : nota1.value,
        nota2 : nota2.value,
        nota3 : nota3.value
        };

    alumnos.push(alumno); 
    mostrar();
});

function mostrar()
{
    let filas = "";
    for (let i = 0; i< alumnos.length; i++)
    {
        filas = filas + "<tr>"+
                "<td>" + alumnos[i].nombre + "</td>" +
                "<td>" + alumnos[i].nota1 + "</td>" +
                "<td>" + alumnos[i].nota2 + "</td>" +
                "<td>" + alumnos[i].nota3 + "</td>" +
                "</tr>"
    }
 cuerpo.innerHTML = filas;
}