function armartabla()
{
const mitextito = document.getElementById("textito");
let numero = Number(mitextito.value);
const midiv = document.getElementById("tablitas");
let tabla = ""
tabla =  "<table border = 1>"+
                    "<thead><tr><th> Tabla del "+numero + "</th></tr></thead>"+
                    "<tbody>" ;

                    for(let i = 1; i<= 12;i++)
                    {
                        resultado = numero*i;
                        console.log(tabla);
                       tabla = tabla + "<tr><td>" +numero +"x"+i+"="+resultado +"</td></tr>";
                    }
tabla = tabla +     "</tbody>"+
                    "</table>";
console.log(tabla);
midiv.innerHTML = tabla;
}