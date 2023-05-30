class Animal {
    constructor(nombre){
        this.nombre = nombre
    }
    hablar(){
        console.log(`${this.nombre} hace algun ruido`)
    }
    mover(){
        console.log(`me muevo porque soy un animal`)
    }
}
class Aereos extends Animal{
    constructor(nombre){
        super(nombre)
        this.clasificacion = "Aereo"
        this.movimiento = "vuelando"
    }
    mover(){
        console.log(`Por que soy ${this.clasificacion} me muevo ${this.movimiento}`)
    }
}
class Terrestre extends Animal{
    constructor(nombre){
        super(nombre)
        this.clasificacion = "Terrestre"
        this.movimiento = "caminando"
    }
    mover(){
        console.log(`Por que soy ${this.clasificacion} me muevo ${this.movimiento}`)
    }
}
class Acuatico extends Animal{
    constructor(nombre){
        super(nombre)
        this.clasificacion = "Acuatico"
        this.movimiento = "nadando"
    }
    mover(){
        console.log(`Por que soy ${this.clasificacion} me muevo ${this.movimiento}`)
    }
}

class Gato extends Terrestre {
    hablar(){
        console.log(`${this.nombre} hace: miau miau`)
    }
}
class Cocodrilo extends Acuatico {
    constructor(nombre){
        super(nombre)
        this.movimiento = "reptando"
    }
    hablar(){
        console.log(`${this.nombre} hace: sss`)
    }
}
class Pez extends Acuatico{
    hablar(){
        console.log(`${this.nombre} hace: glu glu`)
    }
}
class Perro extends Terrestre {
    hablar(){
        console.log(`${this.nombre} hace: guau guau`)
    }
}

const gato = new Gato("Sr gato")
const gato2 = new Gato("tom")
const cocodrilo = new Cocodrilo("lilo")
const perro = new Perro("spike")
const Perro2 = new Perro("Rocky")
const pez = new Pez("Nemo")

let animales = [gato,gato2,cocodrilo,perro,Perro2,pez]

animales[0].hablar();
animales[1].mover();