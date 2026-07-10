let alumnos =[
        {          
        nombre: "Edwin",
        nota1 : 10,
        nota2 : 10,
        nota3 : 10,
        fecharegistro : new Date().toLocaleString()
        }
        
];
const nombre = document.getElementById("nombre");
const nota1 = document.getElementById("nota1");
const nota2 = document.getElementById("nota2");
const nota3 = document.getElementById("nota3");
const btnagregar = document.getElementById("btnagregar");
const btneliminarultimo = document.getElementById("btneliminarultimo");
const cuerpo = document.getElementById("cuerpo");
const exportar = document.getElementById("exportar");
const modal = document.getElementById("mimodal");
/*
btneliminarultimo.addEventListener("click",()=>
    {
       alumnos.pop(); 
       mostrar(); 
    }
);
*/

exportar.addEventListener("click",()=>{
//    alert("hola");


const hoja = XLSX.utils.json_to_sheet(alumnos);

// 3. Crear un libro de trabajo (workbook) vacío
const libro = XLSX.utils.book_new();

// 4. Añadir la hoja al libro de trabajo y asignarle un nombre
XLSX.utils.book_append_sheet(libro, hoja, "Usuarios");

// 5. Generar el archivo y forzar la descarga en el navegador
XLSX.writeFile(libro, "ReporteUsuarios.xlsx");

});

btnagregar.addEventListener("click", ()=>{ 
    let alumno = 
        {
        nombre: nombre.value,
        nota1 : nota1.value,
        nota2 : nota2.value,
        nota3 : nota3.value,
        fecharegistro : new Date().toLocaleString()
        };

    alumnos.push(alumno); 
    console.log(alumnos);
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
                "<td>" + alumnos[i].fecharegistro + "</td>" +
                "<td><button onclick='eliminar("+i+")' >Eliminar</button></td>" +
                "<td><button onclick='mostrarmodal("+i+")' >Actualizar</button></td>" +
                "</tr>"
    }
 cuerpo.innerHTML = filas;
}

function eliminar(i)
{
    //alert("Con esto eliminare la posicion "+i);
    alumnos.splice(i,1);
    mostrar();
}

function mostrarmodal(i)
{
    modal.showModal();
}

mostrar(); 