let array = ['Cristian', 23, 'Futebol'];

console.log(array[0]); 


//Modificar un arreglo

array[1] = 'Lozano';
console.log(array); 

//Agregar metodos a un arreglo

array.push('Gary','Max'); // Se agregan los elementos al final
console.log(array);

array.unshift('Aron'); //Se agregan los elementos al inicio
console.log(array);


array.pop()//Eliminar el ultimo elemento de array
console.log(array)

array.shift()//Eliminar el primer elemento de array
console.log(array);


// Saber la longitud de array
array.length;