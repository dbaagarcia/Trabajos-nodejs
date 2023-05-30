function mezclar() {
    // Importar la función 'shuffle' de Lodash
    const { shuffle } = require('lodash');


    // Crear un array de números del 1 al 10
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


    // Mezclar el array utilizando la función 'shuffle' de Lodash
    const shuffledNumbers = shuffle(numbers);


    // Imprimir el array original y el array mezclado
    console.log('Array original:', numbers);
    console.log('Array mezclado:', shuffledNumbers);
}


function dividirArreglo() {
    // Importar la función 'chunk' de Lodash
    const { chunk } = require('lodash');


    // Crear un array de números del 1 al 12
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];


    // Dividir el array en grupos de 3 elementos utilizando la función 'chunk' de Lodash
    const groupedNumbers = chunk(numbers, 3);


    // Imprimir el array original y el array dividido en grupos
    console.log('Array original:', numbers);
    console.log('Array dividido en grupos:', groupedNumbers);
}


function unico() {
    // Importar la función 'uniq' de Lodash
    const { uniq } = require('lodash');


    // Crear un array con valores duplicados
    const numbers = [1, 2, 3, 4, 1, 2, 3, 4, 5];


    // Utilizar la función 'uniq' de Lodash para obtener los valores únicos
    const uniqueNumbers = uniq(numbers);


    // Imprimir el array original y el array con valores únicos
    console.log('Array original:', numbers);
    console.log('Array con valores únicos:', uniqueNumbers);
}




mezclar()
dividirArreglo()
unico()
