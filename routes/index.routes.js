const express = require('express');
const router = express.Router();
const {registrarDocumental} = require('../controllers/documentales.controlers')

module.exports = function () {
	//Servicio para registro de nuevo documental
	router.post('/registrar-documentales', registrarDocumental);

    //Servicio para ver documentales
    router.get('/ver-documentales',() => {});

    //Servicio para eliminar documentales
    router.delete('/eliminar-documental' ,()=>{});

	return router;
};