//importacion de la clase
const animales = require("./animales.js");

//crear clases
const gato = new animales.Gato("Sr gato")
const perro = new animales.Perro("Rocky")
const pez = new animales.Pez("Nemo")

//hablar
gato.hablar()
perro.hablar()
pez.hablar()