const mibotonjs = document.getElementById("miboton");

function mostrarmensaje()
{
    alert("Hola");
}

function mostraramigo()
{
    alert("Amigo");
}

//asignar con propiedad

//mibotonjs.onclick = mostrarmensaje;
//mibotonjs.onclick = mostraramigo;

//asignar con listener

mibotonjs.addEventListener("click",mostrarmensaje);
mibotonjs.addEventListener("click",mostraramigo);

const micolorjs = document.getElementById("micolor");
const midivjs = document.getElementById("midiv");
const miselectjs = document.getElementById("miselect");

function cambiarfondo()
{
   midivjs.style.backgroundColor =  micolorjs.value;
}

function cambiarfondoselect()
{
   midivjs.style.backgroundColor =  miselectjs.value;
}

micolorjs.addEventListener("input",cambiarfondo);

miselectjs.addEventListener("change",cambiarfondoselect)