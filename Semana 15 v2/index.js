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

//creamos la referencia al boton de guardar nuevo en el modal
const  btnguardarnuevomodal = document.getElementById("btnguardarnuevomodal"); 

//asosciamos el eventpo click a una funcion flecha
btnguardarnuevomodal.addEventListener("click",()=>{
//creamos el objeto
let nuevocontacto = {
    foto: preview.src,
    dni: document.getElementById("dnimodalnuevo").value,
    nombre: document.getElementById("nombremodalnuevo").value,
    apellido: document.getElementById("apellidosmodalnuevo").value,
    telefono: document.getElementById("telefonomodalnuevo").value,
    correo: document.getElementById("emailmodalnuevo").value    
    };
contactos.push(nuevocontacto);    
dialognuevo.close();
mostrar();
});

function mostrar()
{
    let filas = "";
    for (let i = 0; i< contactos.length; i++)
    {
        filas = filas + "<tr>"+
                "<td><img style='width: 100px ; height: 100px;'  src='" + contactos[i].foto + "'></td>" +
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

function eliminar(i)
{
    //alert("Con esto eliminare la posicion "+i);
    contactos.splice(i,1);
    mostrar();
}