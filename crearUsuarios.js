const express = require('express');

const app = express();

// Lista inicial de usuarios
const users = [
    {
        "username": "admin",
        "password": "admin",
        "email": "admin@gmail.com",
        "status": "active"
    },
    {
        "username": "user1",
        "password": "user1",
        "email": "user1@gmail.com",
        "status": "active"
    }
];

// Lista de palabras para generar aleatoriamente
const palabras = ["gato", "perro", "libro", "pelota", "sol", "luna", "estrella", "cielo", "nube", "flor", 
    "agua", "rojo", "verde", "azul", "flor", "animal", "montaña", "mar", "ciudad", "río", 
    "noche", "día", "luz", "sombras", "hoja", "viento", "tormenta", "piedra", "árbol"
];

// Lista de números
const numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Función para obtener una palabra aleatoria
function getPalabra() {
    const palabraRandom = Math.floor(Math.random() * palabras.length);
    return palabras[palabraRandom]; // Corregido: usé 'palabraRandom' en vez de 'random'
}

// Función para obtener un número aleatorio
function getNumero() {
    const numeroRandom = Math.floor(Math.random() * numeros.length);
    return numeros[numeroRandom]; // Corregido: usé 'numeroRandom' en vez de 'random'
}

// Función para generar un nombre de usuario, contraseña y correo electrónico aleatorios
function generarUsuarios(count) {
    const generatedUsers = [];
    for (let i = 0; i < count; i++) {
        const username = getPalabra() + getPalabra() + getNumero() +  getNumero()+  getNumero() + getNumero();  // Combina palabras aleatorias y números para el nombre de usuario
        const password = getPalabra() + getNumero() + getPalabra() + getNumero()+  getNumero() + getNumero();  // Genera una contraseña aleatoria
        const email = username + "@gmail.com";  // Crea un correo electrónico con el nombre de usuario generado

        const user = {
            username: username,
            password: password,
            email: email,
            status: "active"
        };

        generatedUsers.push(user);
    }
    return generatedUsers;
}

// Generamos 500 usuarios y los agregamos a la lista de usuarios
const generatedUsers = generarUsuarios(500);
users.push(...generatedUsers);  // Agrega los usuarios generados a la lista de usuarios existente

// Ruta para obtener todos los usuarios
app.get("/users", (req, res) => {
    res.json(users);
});

// Ruta principal
app.get("/", (req, res) => {
    console.log("hola");
    res.send("hola");
});

// Iniciar el servidor
app.listen(3000, () => {
    console.log('El servidor está funcionando en el puerto 3000');
});


app.use(express.static('public'));
app.get ('/users', (req,res) => {
    res.json(users)
})

app.get('/users/:id',(req, res) => {
    const id = req.params.id;
    res.json(users[id])
})