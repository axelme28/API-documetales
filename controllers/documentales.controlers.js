const { request, response } = require('express');
const { type, json } = require('express/lib/response');
const { async } = require('jshint/src/prod-params');
const { QueryTypes } = require('sequelize');
const db = require('../config/db.config');
const {getClasificacion,getIdCategoria,getIdiona,getPais} = require('../helpers/getId')
const {insertDocumental,deleteDocumental,getDocumental} = require('../sql/querys')

exports.createDocumental = async (req = request, res = response) => {
	//Desestructuramos las variables que vienen en el Body
	const {
		Nombre,
		Fecha_lanzamiento, 
		Elenco,
		Duracion,
		Trama,
		Productor,
		Escritor,
		Clasificacion,
		Categoria,
		Idioma,
		Pais_origen,
		Director,
	} = req.body;

	let id_clasificacion,id_categoria,id_idioma,id_pais;

	try {
		const queryInsertDocumental = 
		insertDocumental+'VALUES(:Nombre,:Fecha_lanzamiento,:Elenco,:Duracion,:Trama,:Productor,:Escritor,:Categoria,:Clasificacion,:Idioma,:Pais_origen,:Director)';

		id_clasificacion = getClasificacion(Clasificacion);
		id_categoria = getIdCategoria(Categoria);
		id_idioma = getIdiona(Idioma);
		id_pais = getPais(Pais_origen);

		await db.query(queryInsertDocumental, {
			replacements: {
				Nombre,
				Fecha_lanzamiento,
				Elenco,
				Duracion,
				Trama,
				Productor,
				Escritor,
				Categoria: id_categoria,
				Clasificacion: id_clasificacion,
				Idioma: id_idioma,
				Pais_origen: id_pais,
				Director,
			},
			type: db.QueryTypes.INSERT,
		});
		
		res.status(200).json({msg: true});
	} catch (error) {
		console.log(error);
	}
};

exports.deleteDocumnetal = async (req = request, res = response) => {

	const {
		idDocumental,
	} = req.body;

	try {
		const queryDeleteDocumental = deleteDocumental + 'WHERE idDocumental = :idDocumental;'
		await db.query(queryDeleteDocumental,{
			replacements: {
				idDocumental,
			},
			type: db.QueryTypes.DELETE,
		});

		res.status(200),json({msg: true});
	} catch (error) {
		console.log(error);
	}
}

exports.getDocumentales = async (req = request, res = response)=>{
	try {
		const queryGetDocumentales = getDocumental + ';';
		const result = await db.query(queryGetDocumentales,{
			type: db.QueryTypes.GET,
		});
		res.status(200).json(result[0]);
	} catch (error) {
		console.log(error);
	}
}

exports.getDocumental = async (req = request, res = response) => {
	
	const {
		idDocumental,
	} = req.body;

	try{
		const queryGetdocumental = getDocumental + ' where documental.idDocumental = :idDocumental;';
		const result = await db.query(queryGetdocumental,{
			replacements: {
				idDocumental,
			},
			type: db.QueryTypes.POST,
		})
		console.log(result);
		// res.status.json(result[0]);
	} catch(error){
		console.log(error);
	}
}

