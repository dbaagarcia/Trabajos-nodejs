const http = require('http');
const fs = require('fs');
const { login } = require('./login.js')

const PUERTO = 3000

const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        // Ruta principal - Mostrar formulario de inicio de sesión
        fs.readFile('index.html', (error, data) => {
            if (error) {
                res.writeHead(500, { 'Content-Type': 'text/html' });
                res.write('<h1>Error interno del servidor</h1>');
                return res.end();
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                return res.end();
            }
        });
    } else if (req.url === '/login' && req.method === 'POST') {
        // Ruta de inicio de sesión - Validar credenciales
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const formData = new URLSearchParams(body);
            const username = formData.get('username');
            const password = formData.get('password');

            // Validar las credenciales (ejemplo simplificado)
            if (login(username, password)) {
                // Credenciales correctas - Redireccionar a página de éxito
                res.writeHead(302, { 'Location': '/exito' });
                return res.end();
            } else {
                // Credenciales incorrectas - Redireccionar a página de autenticación incorrecta
                res.writeHead(302, { 'Location': '/autenticacion-incorrecta' });
                return res.end();
            }
        });
    } else if (req.url === '/exito' && req.method === 'GET') {
        fs.readFile('exito.html', (error, data) => {
            if (error) {
                res.writeHead(500, { 'Content-Type': 'text/html' });
                res.write('<h1>Error interno del servidor</h1>');
                return res.end();
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                return res.end();
            }
        });
    } else if (req.url === '/autenticacion-incorrecta' && req.method === 'GET') {
        fs.readFile('autenticacion-incorrecta.html', (error, data) => {
            if (error) {
                res.writeHead(500, { 'Content-Type': 'text/html' });
                res.write('<h1>Error interno del servidor</h1>');
                return res.end();
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                return res.end();
            }
        });
    } else {
        // Ruta no encontrada
        fs.readFile('404.html', "utf8", (error, data) => {
            if (error) {
                res.writeHead(500, { "Content-Type": "text/html" });
                res.write("<h1>Error interno del servidor</h1>");
                return res.end();
            } else {
                res.writeHead(404, { "Content-Type": "text/html" });
                res.write(data);
                return res.end();
            }
        });
    }
});

server.listen(PUERTO, () => {
    console.log(`El servidor está corriendo en http://localhost:${PUERTO}`)
});
