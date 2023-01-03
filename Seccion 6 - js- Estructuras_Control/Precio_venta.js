let valor_venta, iva, precio_venta;

//Entrada de datos
valor_venta = Number(prompt('Ingrese un valor'))

//Proceso de los datos
iva = valor_venta * 0.19; 
precio_venta = iva + valor_venta

//Salida de datos
document.write('Valor venta: ' + valor_venta + '<br>');
document.write('IVA: ' + iva + '<br>');
document.write('Precio de venta: ' + precio_venta);   
