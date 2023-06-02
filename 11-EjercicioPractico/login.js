// Módulo de login

// Función para verificar las credenciales de inicio de sesión
function login(username, password) {
    // Aquí puedes realizar la lógica de verificación de credenciales
    if (username === 'desarrollador' && password === 'backend1234') {
        return true;
    } else {
        return false;
    }
}

// Exporta la función de login para que pueda ser utilizada desde otros archivos
module.exports = {login};