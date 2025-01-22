const express = require('express');

const app = express();

function holaMundo(request, response){
    console.log('Hola mundo') // esto se ejecuta en el servidor
    response.send('Hola mundo') // esto se ejecuta 
}

app.get("/", holaMundo)

app.listen(3000, () => {
    console.log('El servidor esta funcionando en el puerto 3000')
})

