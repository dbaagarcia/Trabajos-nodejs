const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'personas',
    charset: 'utf8mb4' // Establecer el conjunto de caracteres en UTF-8
});

function obtenerUsuarios(callback) {
    connection.query('SELECT * FROM personas ORDER BY edad ASC', callback); // Consultar todos los usuarios en la base de datos
}

connection.connect((error) => { // Conectar a la base de datos
    if (error) {
        console.error('Error al conectar a la base de datos: ', error); // Imprimir mensaje de error en la consola
    }
});

module.exports = { obtenerUsuarios }; // Exportar la función para obtener usuarios
