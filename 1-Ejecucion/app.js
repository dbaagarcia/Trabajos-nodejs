/**
 * Se trabajara con uno de los ejemplos trabajados anteriormente
 */

// funciones
console.log("------------------------FUNCIONES-----------------------------")
function saludar(nombre, edad){
    return `Hola mi nombre es ${nombre} y mi edad es ${edad}`
}

console.log(saludar("Amparo", 39));

//arreglos
console.log("------------------------ARREGLOS-----------------------------")
const a=[] //Arreglo vacio
const b=[1,2,3,4]//Arreglo con 4 elementos
const c=[1,true,"Hola",["A","B","C"]] //Arreglo mixto
const d= new Array('a', 'b', 'c')//Arreglo creando con una instancia de Array

console.log(a)
console.log(b)
console.log(c)
console.log(d)