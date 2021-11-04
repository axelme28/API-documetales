const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config({ path: '.env' });

const db = require('./config/db.config');
const dbP = require('./config/db.admin.config')
const routesDoc = require('./routes/documentales.routes');
const routesplatform = require('./routes/plataforma.routes.js')

const app = express();
const port = process.env.PORT || 8080;

app.use(morgan('dev')); //mostrar en consola las peticiones y codigos de respuesta HTTP

app.use(cors()); //permite tener comunicacion con cualquier otro server

app.use(express.json()); //leer solicitudes en formato JSON

app.use('/plataforma',routesplatform() ); //utilizar nuestrar rutas

app.use('/', routesDoc()); //utilizar nuestrar rutas



//inicializa el web-server y dentro tambien inicializa la conexión a la BD
app.listen(port, () => {
	console.log('El servidor esta corriendo por el puerto: ', port);
});