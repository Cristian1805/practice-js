const persona = {
    nombre : 'Cristhian',
    apellido : 'Lozano',
    edad : '23',


    nombreCompleto(){
        return `${this.nombre} ${this.apellido}`
    },

    trajes : ['Traje 1' , 'Traje 2', 'Traje 3'],
}

console.log(persona);
console.log(persona.nombreCompleto());
console.log(persona.trajes);

