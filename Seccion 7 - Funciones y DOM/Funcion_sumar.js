function sumar (a=null, b=null){
    if(a===null || b===null){
        console.log('Error: se debe enviar dos numeros a la funcion');
        return '';
    }

    return a + b;
}


const s = sumar(40,50);
console.log(s);