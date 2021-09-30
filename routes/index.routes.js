const express = require('express');
const router = express.Router();
const {createDocumental,deleteDocumnetal,getDocumentales,getDocumental} = require('../controllers/documentales.controlers')

module.exports = function () {
	//Servicio para registro de nuevo documental
	router.post('/registrar-documentales', createDocumental);

    //Servicio para ver documentales
    router.get('/ver-documentales',getDocumentales);

    //Servicio para eliminar documentales
    router.delete('/eliminar-documental' ,deleteDocumnetal);

    //Servicio para ver un documental
    router.post('/documental-info',getDocumental);

	return router;
};