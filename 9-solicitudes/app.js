const http = require("http"); // Importa el módulo 'http' de Node.js para crear el servidor HTTP.
const fs = require("fs"); // Importa el módulo 'fs' de Node.js para leer archivos.

const PUERTO = 3000; // Define el puerto en el cual el servidor escuchará las peticiones.

const server = http.createServer((req, res) => {
  // Crea el servidor HTTP y define una función de callback que se ejecutará cada vez que se reciba una solicitud.

  if (req.url === "/") {
    // Verifica si la URL solicitada es la raíz ("/").

    if (req.method === "GET") {
      // Verifica si el método de solicitud es GET.

      // Método GET: mostrar el formulario
      fs.readFile("index.html", (error, data) => {
        // Lee el archivo "index.html".
        
        if (error) {
          // Si ocurre un error al leer el archivo.
          res.writeHead(500, { "Content-Type": "text/html" });
          res.write("<h1>Error interno del servidor</h1>");
          return res.end();
        }

        // Si la lectura del archivo es exitosa, se envía el contenido como respuesta.
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    }
  } else if (req.url === "/enviado" && req.method === "POST") {
    // Verifica si la URL solicitada es "/enviado" y el método de solicitud es POST.

    // Método POST: procesar datos del formulario
    let body = "";
    req.on("data", (chunk) => {
      // Recopila los datos del formulario en bloques (chunks).
      body += chunk.toString();
    });
    req.on("end", () => {
      // Se ejecuta cuando se han recibido todos los bloques de datos.

      const formData = new URLSearchParams(body);
      const name = formData.get("name"); // Obtiene el valor del campo "name" del formulario.
      const email = formData.get("email"); // Obtiene el valor del campo "email" del formulario.

      // Realiza alguna acción con los datos recibidos, como almacenarlos en una base de datos o mostrarlos en la consola.
      console.log("Nombre:", name);
      console.log("Email:", email);

      fs.readFile("enviado.html", "utf8", (error, data) => {
        // Lee el archivo "enviado.html".

        if (error) {
          // Si ocurre un error al leer el archivo.
          res.writeHead(500, { "Content-Type": "text/html" });
          res.write("<h1>Error interno del servidor</h1>");
          return res.end();
        }

        // Reemplaza las variables "{{name}}" y "{{email}}" en el contenido HTML con los datos recibidos.
        data = data.replace("{{name}}", name);
        data = data.replace("{{email}}", email);

        // Envía el contenido modificado como respuesta.
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    });
  } else {
    // Ruta no encontrada
    fs.readFile("404.html", (error, data) => {
      // Lee el archivo "404.html".

      if (error) {
        // Si ocurre un error al leer el archivo.
        res.writeHead(500, { "Content-Type": "text/html" });
        res.write("<h1>Error interno del servidor</h1>");
        return res.end();
      }

      // Envía el contenido del archivo "404.html" como respuesta con el código de estado 404 (Not Found).
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  }
});

server.listen(PUERTO, () => {
  // Inicia el servidor y lo hace escuchar en el puerto especificado.
  console.log(`El servidor está corriendo en http://localhost:${PUERTO}`);
});
