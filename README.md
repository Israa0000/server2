# Express basico

Para iniciar mi proyecto de node + npm:

```bash
npm init -y
```

ESto me creara un `package.json` con los datos de mi proyecto. ESte archivo 
sirve para varias cosas, pero principalmente encontraremos las dependencias del proyecto

Para instalar dependencias en un proyecto de `nodejs` y `npm` hacemos:

```bash
npm install express
npm i express # version corta
```

Es buena practica y recomendado, meter `node_modules` en nuestro 
`.gitignore`

Para arrancar el servidor lanzo `node server.js`

## Endpoint básico

Este endpoint me devuelve un hola mundo tanto en el servidor como al cliente
```javascript
function holaMundo(request, response){
    console.log('Hola mundo') // esto se ejecuta en el servidor
    response.send('Hola mundo') // esto se ejecuta 
}

app.get("/", holaMundo)
```