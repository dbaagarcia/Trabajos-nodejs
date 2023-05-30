//importacion de la clase
const calculo = require("./calculadora.js");
//Calculadora
const primerCalculo = new calculo(1,2)
//suma
console.log(primerCalculo.sumar())
//resta
console.log(primerCalculo.restar())
//multiplicar
console.log(primerCalculo.multiplicar())
//division
console.log(primerCalculo.dividir())
const segundoCalculo = new calculo(5,2)
console.log(segundoCalculo.restar())