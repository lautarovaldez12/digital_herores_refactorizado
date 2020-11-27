// Require de Express
const express = require('express');

// Require de FS
const fs = require('fs');

// Ejecución de Express
const app = express();

// Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log('Server running in 3030 port'));

// Leyendo y parseando (en array) el contenido de heroes.json

const mainRoute = require('./routers/main');
const heroesRoute = require('./routers/heroes');

app.use('/', mainRoute);
app.use('/heroes', heroesRoute);

app.get('*', (req, res) => {
	res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});


