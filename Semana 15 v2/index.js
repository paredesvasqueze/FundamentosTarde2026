let contactos= [];
let contacto = {
    foto: "",
    dni: "12345678",
    nombre: "Edwin",
    apellido: "Paredes",
    telefono: "987654321",
    correo: "correo@gmail.com"
}
contactos.push(contacto);

const  cuerpo = document.getElementById("cuerpo");
const  dialognuevo = document.getElementById("dialognuevo");
const  btnnuevo = document.getElementById("btnnuevo");


btnnuevo.addEventListener("click",()=>
{
dialognuevo.showModal();
});


const  foto = document.getElementById("foto");
const  preview = document.getElementById("preview");

foto.addEventListener("change", ()=>{    
const archivo = foto.files[0];
    if (archivo) {
        preview.src = URL.createObjectURL(archivo);
    }

});




function mostrar()
{
    let filas = "";
    for (let i = 0; i< contactos.length; i++)
    {
        filas = filas + "<tr>"+
                "<td><img src='" + contactos[i].foto + "'></td>" +
                "<td>" + contactos[i].dni + "</td>" +
                "<td>" + contactos[i].nombre + "</td>" +
                "<td>" + contactos[i].apellido + "</td>" +
                "<td>" + contactos[i].telefono + "</td>" +
                "<td>" + contactos[i].correo + "</td>" +
                "<td><button onclick='eliminar("+i+")' >Eliminar</button></td>" +                
                "</tr>"
    }
 cuerpo.innerHTML = filas;
}
mostrar();