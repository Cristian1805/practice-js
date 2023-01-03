let pares = [];
let impares = [];
let numeros = [1,2,3,4,5,6,7,8,9];



//Generar un numero aleatorio
let random = 0;

for (let n of numeros){
    random = parseInt(Math.random()*100);
    let resultado = n * random;
    
    if(resultado % 2 === 0){ 
        console.log(`${n} x ${random} = ${resultado}`);
        pares.push(resultado);
    } else {
        console.log(`${n} x ${random} = ${resultado}`);
        impares.push(resultado);
    }
}

console.log('Array de pares: ', pares);
console.log('Array de impares: ', impares);

