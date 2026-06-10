function estadoalumno(nombre,nota1,nota2,nota3)
{
    console.log("Estudiante: "+ nombre)    ;
    let promedio = (nota1 + nota2 + nota3 )/3
    console.log("Promedio: "+ promedio)    ;

    if (promedio >=13)
    {
        console.log("Estado: Aprobado ")    ;    
    }
    else
    {
        console.log("Estado: Desaprobado ")    ;    
    }

}

function calcularbono(anios)
{
    if (anios >=5)
        bono = 300;
    else
        if (anios ==3 || anios ==4)
            bono = 150;
        else
            bono =0;

return bono;
}

function calcularsueldo(nombre,ht, sh,anios)
{
    sueldo = ht * sh;
    bono =  calcularbono(anios);
    sueldototal = sueldo + bono;
    console.log("Sr "+nombre+"\n sueldo es : "+sueldototal )

}

