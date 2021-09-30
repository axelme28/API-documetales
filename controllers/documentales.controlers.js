const { request, response } = require('express');
const { QueryTypes } = require('sequelize');
const db = require('../config/db.config');
const {getClasificacion,getIdCategoria,getIdiona,getPais} = require('../helpers/getId')
const {insertDocumental} = require('../sql/querys')

exports.registrarDocumental = async (req = request, res = response) => {
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
		insertDocumental+'VALUES(:Nombre,:Fecha_lanzamiento,:Elenco,:Duracion,:Trama,:Productor,:Escritor,:Categoria,:Clasificacion,:Idioma,:Pais_origen,:director))';

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
