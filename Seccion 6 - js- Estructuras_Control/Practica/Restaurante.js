let consumo = Number(prompt('Ingrese el consumo'));
let descuento, datoDescuento;

//Proceso

if (consumo <= 100){
    //Descuento de 10%
    datoDescuento = '10%';
    descuento = consumo * 0.10;
} else if (consumo > 100 && consumo <=200){
    //Descuento del 20%
    datoDescuento = '20%';
    descuento = consumo * 0.20;
} else if (consumo > 200){
    //Descuento del 30%
    datoDescuento = '30%';
    descuento = consumo * 0.30;
}


let montoDescuento = consumo - descuento;
let IVA = montoDescuento * 0.19;
let totalPagar = montoDescuento + IVA;


//Mostrar datos en la pantalla

document.write(`<pre>
    Consumo             : ${consumo}
    Descuento           : ${descuento}      | ${datoDescuento}
    Monto con Descuento : ${montoDescuento}
    IVA                 : ${IVA}            | 19%
    Total a pagar       : ${totalPagar}
</pre>`)