const { request, response } = require('express');
const { type, json } = require('express/lib/response');
const { async } = require('jshint/src/prod-params');
const { QueryTypes } = require('sequelize');
const db = require('../config/db.admin.config');

const {altaAlumno} = require('../modules/altas.modules')

exports.altaUser = async (req, res) => {

    const {
        typeUser,
    } = req.body;

    try {
        switch (typeUser) {
            case 'alumno':

                await altaAlumno(req, res);
                break;

            case 'profesor':
                break;
            default:
                break;
        }
           
    }catch (error) {
        console.log(error);
    }
    

};


    



