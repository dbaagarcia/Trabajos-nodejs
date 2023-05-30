const http = require("http");  // Importa el módulo http de Node.js que proporciona funcionalidades para crear servidores HTTP.
const fs = require("fs");  // Importa el módulo fs de Node.js que proporciona funcionalidades para trabajar con el sistema de archivos.

const PUERTO = 3000;  // Define el puerto en el cual el servidor escuchará las peticiones.

const server = http.createServer((req, res) => {
    // Crea un servidor HTTP utilizando la función createServer. Se pasa una función de callback que se ejecutará cuando llegue una solicitud.


    fs.readFile("index.html", "utf8", (error, data) => {
        // Lee el contenido del archivo index.html de manera asíncrona utilizando la función readFile del módulo fs.
        // Se especifica "utf8" como codificación para obtener el contenido del archivo como una cadena de texto.
        if (error) {
            // Si ocurre un error al leer el archivo, se ejecuta esta parte del código.
            res.writeHead(500, { "Content-Type": "text/html" });
            // Establece el código de estado de la respuesta en 500 (Error interno del servidor) y los encabezados de respuesta.
            res.end("<h1>Error interno del servidor</h1>");
            // Envía una respuesta con un mensaje de error en forma de HTML.
        } else {
            // Si la lectura del archivo es exitosa, se ejecuta esta parte del código.
            res.writeHead(200, { "Content-Type": "text/html" });
            // Establece el código de estado de la respuesta en 200 (OK) y los encabezados de respuesta.
            res.end(data);
            // Envía como respuesta el contenido del archivo leído.
        }
    });
});


server.listen(PUERTO, () => {
    // El servidor comienza a escuchar las peticiones en el puerto especificado.
    console.log(`El servidor está corriendo en http://localhost:${PUERTO}`);
    // Muestra un mensaje en la consola indicando que el servidor se ha iniciado correctamente.
});


//PARA DEJAR DE CORRER EL SERVIDOR UTILIZA CTRL + C
