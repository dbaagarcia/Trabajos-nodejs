class Animal {
    constructor(nombre){
        this.nombre = nombre
    }
    hablar(){
        console.log(`${this.nombre} hace algun ruido`)
    }

}

class Gato extends Animal {
    hablar(){
        console.log(`${this.nombre} hace: miau miau`)
    }
}

class Pez extends Animal{
    hablar(){
        console.log(`${this.nombre} hace: glu glu`)
    }
}
class Perro extends Animal {
    hablar(){
        console.log(`${this.nombre} hace: guau guau`)
    }
}

//exportacion de la clase
module.exports.Gato = Gato;
module.exports.Pez = Pez;
module.exports.Perro = Perro;