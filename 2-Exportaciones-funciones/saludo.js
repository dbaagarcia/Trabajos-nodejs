function saludar(nombre, edad){
    return `Hola mi nombre es ${nombre} y mi edad es ${edad}`
}

function saludarHolaMundo(){
    return `Hola mundo`
}

//Primer metodo

// module.exports.saludar = saludar;
// module.exports.saludarHolaMundo = saludarHolaMundo;

//segundo metodo
module.exports = {
    saludar: saludar,
    saludarHolaMundo: saludarHolaMundo
};
