let inicial = 20;
let venta = Number(prompt("Ingrese venta"));
while (inicial>0 )
{
    if (venta<=0 || !Number.isInteger(venta))
    {
        alert("Ingresa Valor valido chistresse" );
        venta = Number(prompt("Ingrese venta"));
    }else
    {
        if (venta>inicial)
        {
            alert("Stock insuficiente solo puedo venderte "+inicial );
            venta = Number(prompt("Ingrese venta"));
        }
        else
        {
            inicial = inicial - venta;
            alert("Stock Actual " + inicial);
                if (inicial >0)
                {
                    venta = Number(prompt("Ingrese venta"));
                }
        }   
    } 
}

