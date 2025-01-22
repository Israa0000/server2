const express = require('express');

const app = express();

app.get("/", (req, res) =>{
    console.log("hola")
    res.send("hola")
})

//Lista de usuarios
const users =[
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
]

app.get("/", (req, res) => {
    res.send('Hola mundo')
})
app.get("/users", (req, res) =>{
    res.json(users)
})

app.listen(3000, () => {
    console.log('El servidor esta funcionando en el puerto 3000')
})