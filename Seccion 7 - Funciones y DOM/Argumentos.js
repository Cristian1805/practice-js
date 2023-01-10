
//Definir la funcion en la forma ... permite sumar n numeros
function sumar (...numeros){
    let suma = 0;
    for(let n of numeros){

        suma += n;
    }

    return suma;

}

const variable = sumar (10,10,10,10);
console.log ('La suma es: ', variable) 