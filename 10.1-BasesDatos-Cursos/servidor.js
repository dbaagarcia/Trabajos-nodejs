const http = require('http');
const moment = require('moment');
const { obtenerEstudiantes, obtenerCursos } = require('./conexion.js'); // Importar función para obtener estudiantes desde la base de datos

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8'); // Establecer el tipo de contenido de la respuesta como HTML

    if (req.url === '/estudiantes' && req.method === 'GET') { // Si la ruta es '/estudiantes' y el método es GET
        obtenerEstudiantes((error, results) => { // Obtener los estudiantes desde la base de datos
            if (error) {
                res.statusCode = 500; // Establecer código de estado 500 (Error interno del servidor)
                res.end('<h1>Error al obtener los estudiantes</h1>'); // Enviar mensaje de error al cliente
            } else {
                res.statusCode = 200; // Establecer código de estado 200 (OK)
                res.write('<h1>Estudiantes</h1>'); // Escribir encabezado de la tabla
                res.write('<table border="1">'); // Iniciar la tabla
                res.write('<tr><th>Id</th><th>Nombre</th><th>Apellido</th><th>Correo</th><th>Fecha Nacimiento</th></tr>'); // Escribir encabezados de columna

                results.forEach((estudiante) => { // Recorrer la lista de estudiantes
                    res.write(`<tr><td>${estudiante.id}</td><td>${estudiante.nombre}</td><td>${estudiante.apellido}</td><td>${estudiante.correo}</td><td>${moment(estudiante.fecha_nacimiento).format('DD/MM/YYYY')}</td></tr>`); // Escribir una fila por cada estudiante
                });

                res.write('</table>'); // Cerrar la tabla
                res.end(); // Finalizar la respuesta
            }
        });
    } else if (req.url === '/cursos' && req.method === 'GET') { // Si la ruta es '/estudiantes' y el método es GET
        obtenerCursos((error, results) => { // Obtener los estudiantes desde la base de datos
            if (error) {
                res.statusCode = 500; // Establecer código de estado 500 (Error interno del servidor)
                res.end('<h1>Error al obtener los cursos</h1>'); // Enviar mensaje de error al cliente
            } else {
                res.statusCode = 200; // Establecer código de estado 200 (OK)
                res.write('<h1>Cursos</h1>'); // Escribir encabezado de la tabla
                res.write('<table border="1">'); // Iniciar la tabla
                res.write('<tr><th>Id</th><th>Nombre</th><th>Docente</th><th>Cantidad de estudiantes</th></tr>'); // Escribir encabezados de columna

                results.forEach((curso) => { // Recorrer la lista de estudiantes
                    res.write(`<tr><td>${curso.id}</td><td>${curso.nombre}</td><td>${curso.docente}</td><td>${curso.cantidad_estudiantes}</td></tr>`); // Escribir una fila por cada estudiante
                });

                res.write('</table>'); // Cerrar la tabla
                res.end(); // Finalizar la respuesta
            }
        });
    } else {
        res.statusCode = 404; // Establecer código de estado 404 (No encontrado)
        res.end('<h1>Ruta no encontrada</h1>'); // Enviar mensaje de error al cliente
    }
});

server.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000/'); // Imprimir mensaje en la consola cuando el servidor esté escuchando
});

