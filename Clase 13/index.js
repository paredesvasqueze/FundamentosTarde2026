const midiv = document.getElementById("holamundo");

function cambiaraazul()
{

midiv.style.color = "blue";
}

function cambiaraverde()
{
midiv.style.color = "green";
}

function cambiararojo()
{
midiv.style.backgroundColor = "red";
}

function cambiaraamarillo()
{
midiv.style.backgroundColor = "yellow";
}

function perdiste()
{
    alert("perdiste");
}

function mostrarmensaje()
{
    alert("moviste el mouse dentro");
}

function sepresiono()
{
    document.getElementById("mensaje").innerHTML ="se presiono";
}

function solto()
{
    document.getElementById("mensaje").innerHTML ="solto";
}

