cliente = prompt("Es cliente?")
if (cliente  == "SI")
{
    documento = prompt("Tiene RUC O DNI");
        if (documento == "RUC")
            alert("Usted es una persona Juridica");
        else
            alert("Usted es una persona Natural");    
}
else
{
    nombre = prompt("Ingrese su nombre");
    alert("Su nombre es " + nombre);    
}