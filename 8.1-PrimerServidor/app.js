const http = require("http");

const PUERTO = 3000;

const server = http.createServer((req, res) => {
    //funciones de request
    // Obtener la URL de la solicitud
    const url = req.url;
    // Obtener el método HTTP de la solicitud
    const method = req.method;
    // Imprimir la URL y el método en la consola del servidor
    console.log('URL:', url);
    console.log('Método:', method);
    //funciones de response
    // Configurar el código de estado y los encabezados de la respuesta
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    //enviar un mensaje al cliente
    res.write("<h1>Hola mundo!</h1>");
    // Escuchar el evento 'finish' en la respuesta
    res.on('finish', () => {
        console.log('La respuesta se ha enviado completamente.');
    });
    // Finalizar la respuesta y
    res.end();
});

server.listen(PUERTO, () => {
    console.log(`El servidor está corriendo en http://localhost:${PUERTO}`);
});