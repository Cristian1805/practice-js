function saludar(){
    console.log('Hola desde la funcion saludar');
}


saludar();
//Se ejecuta cuando hacemos el llamado a la función


function hola(nombre){
    //console.log(`Hola, ${nombre} desde la funcion hola`);
    return `Hola, ${nombre} desde la funcion hola`;
}


const saludo = hola('Cristhian')
console.log(saludo)
//Se ejecuta cuando hacemos el llamado a la función
