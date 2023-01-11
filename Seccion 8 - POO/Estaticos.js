class matematica {
    static #pi = 3.141592

    static get PI(){
        return this.#pi
    }

    static suma (a,b){
        return a + b
    }
}

console.log(matematica.PI);

console.log(matematica.suma(40,90));
