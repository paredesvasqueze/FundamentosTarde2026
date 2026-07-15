const inputfile = document.getElementById("inputfile");
const imagen = document.getElementById("miimagen");

inputfile.addEventListener("change", () => {

    const archivo = inputfile.files[0];

    if (archivo) {
        imagen.src = URL.createObjectURL(archivo);
    }

});