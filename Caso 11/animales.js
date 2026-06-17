let animales = ["Perro", "Gato", "Cuy"];

const midiv = document.getElementById("lista");

function llenatabla()
{
let tabla = '<table border=1>';
for (let i =0;i<animales.length;i++)
    {
        tabla = tabla + "<tr><td>"+animales[i]+"</td></tr>"
    }
tabla =  tabla + "</table>";
midiv.innerHTML = tabla;
}

function agregar()
{
    let textoanimalito = document.getElementById("animalito").value;    
    if(textoanimalito.trim() == "")
        alert("No puedes dejar este campo vacìo");
    else
    animales.push(textoanimalito);

    llenatabla();
}

function eliminar()
{    
    animales.pop();
    llenatabla();
}

llenatabla();