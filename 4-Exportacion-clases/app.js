//importacion de la clase
const saludo = require("./saludo.js");
//primer saludo
const primerSaludo = new saludo('Mi primer saludo')
console.log(primerSaludo.saludar("Amparo", 39));
console.log(primerSaludo.saludarHolaMundo());
console.log("--------------------------------------");
//segundo saludo
const segundoSaludo = new saludo('Mi segundo saludo')
console.log(segundoSaludo.saludar("Amparo", 39));
console.log(segundoSaludo.saludarHolaMundo());