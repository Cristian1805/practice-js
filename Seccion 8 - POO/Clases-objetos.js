class Persona{

    constructor(nombre, edad){

        this.nombre = nombre;
        this.edad = edad;
    }

    imprimir(){
        console.log(this.nombre, this.edad);
    }
}


//En esta parte se instancia el nuevo objeto
const p1 = new Persona('Camilo', 23)
const p2 = new Persona ('Juanchito', 17)


console.log(p1); 

p1.imprimir();
p2.imprimir();