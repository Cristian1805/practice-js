class Persona{

    constructor(nombre, edad){

        this.nombre = nombre;
        this.edad = edad;
    }

    detalle(){
        console.log(`Nombre: ${this.nombre}\nEdad: ${this.edad}`);
    }
}


class Empleado extends Persona{
    
    sueldo;
    constructor(nombre, edad, sueldo){

        super(nombre, edad)
        this.sueldo = sueldo
    }

    detalle(){
        super.detalle()
        console.log('Sueldo: ', this.sueldo)
    }


}

//instanciar clase empleado 

const emp1 = new Empleado('Cristhian', 23, 2500000);
console.log(emp1);


emp1.detalle()
