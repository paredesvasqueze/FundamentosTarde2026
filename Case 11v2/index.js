let temperaturas = [20, 25 ,17];
function mostrartodo() {
    const listita = document.getElementById("lista");
    
    tabla = "<table border=1>";
         tabla +="<thead>";
         tabla +="<th> Nª </th>";
         tabla +="<th> Temperaturas</th>";
         tabla +="</thead> <tbody>";
       for( let i=0 ; i<temperaturas.length; i++){
         tabla +="<tr>";
         tabla +="<td>" + (i + 1) + "</td>";
         tabla +="<td>" + temperaturas[i] + "</td>";
         tabla +="</tr>";
       }
tabla += "</tbody></table>"
listita.innerHTML = tabla;



tablaresumen = "<table border=1>";
tablaresumen +="<tr>";
         tablaresumen +="<td>Cantidad</td>";
         tablaresumen +="<td>" + temperaturas.length + "</td>";
         tablaresumen +="</tr>";
         tablaresumen +="<tr>";
         tablaresumen +="<td> Ultima Temperatura </td>";
         tablaresumen +="<td>" + temperaturas[temperaturas.length-1] + "</td>";
         tablaresumen +="</tr>";
 tablaresumen += "</table>" 
const lisresumen = document.getElementById("resumen");
lisresumen.innerHTML = tablaresumen;
}

mostrartodo();



function agregar()
{
    const listita = document.getElementById("temp");    
    let valor=Number(listita.value);
    temperaturas.push(valor);
    mostrartodo();    
}

function eliminarultimo()
{
    temperaturas.pop();
    mostrartodo();  
}
 
