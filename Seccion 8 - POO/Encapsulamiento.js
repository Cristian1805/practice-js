class Persona{
    #nombre
    #edad

    constructor(nombre, edad){

        this.#nombre = nombre;
        this.#edad = edad;
    }


    set setNombre(nombre){
        this.#nombre = nombre
    }

    get getNombre(){
        return this.#nombre
    }

    set setEdad(edad){
        this.#edad = edad
    }

    get getEdad(){
        return this.#edad
    }
}

const p1 = new Persona('Cristian', 23)
console.log(p1);

p1.setNombre = 'Camilo'
console.log(p1)