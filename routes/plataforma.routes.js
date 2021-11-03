const express = require('express');
const router = express.Router();

const {altaUser} = require('../controllers/altas.controller');


module.exports = function () {
    //dar de alta a susarios: docente, estudiante, admin
    router.post('/alta-usuario', altaUser());

    //dar de alta a univerdidades
    router.post('/alta-universidad',()=>{});

	return router;
};