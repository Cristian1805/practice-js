//Verificar si un numero es primo o no

const EsPrimo = (numero) =>{
    let contador = 0;

    let numeros = [];

    for (let i = 0; i < numero; i++) {
        numeros.push(i+1);

    }

    for (let n of numeros){
        if(n === 1 || n === numero){
            continue;
        }

        if (numero % n === 0){
            contador ++;
        }
    }

    return contador === 0;

}

let numero = Number (prompt('Ingrese un numero'));

if(EsPrimo(numero)){
    document.write('Es primo');

}else {
    document.write('No es primo');
}