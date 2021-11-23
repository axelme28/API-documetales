const { request, response } = require("express");
const { type, json } = require("express/lib/response");
const { async } = require("jshint/src/prod-params");
const { QueryTypes } = require("sequelize");
const db = require("../config/db.config");
const {
  getClasificacion,
  getIdCategoria,
  getIdiona,
  getPais,
} = require("../helpers/getId");
const {
  deleteDocumental,
  getDocumentales,
  getDocumetal,
  insertDocumental,
  logIn,
} = require("../sql/querys");

exports.createDocumental = async (req = request, res = response) => {
  //Desestructuramos las variables que vienen en el Body
  const {
    Nombre,
    Fecha_Lanzamiento,
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
    URL,
  } = req.body;

  let id_clasificacion, id_categoria, id_idioma, id_pais;

  try {
    const queryInsertDocumental = insertDocumental;

    id_clasificacion = getClasificacion(Clasificacion);
    id_categoria = getIdCategoria(Categoria);
    id_idioma = getIdiona(Idioma);
    id_pais = getPais(Pais_origen);

    await db.query(queryInsertDocumental, {
      replacements: {
        Nombre,
        Fecha_Lanzamiento,
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
        URL,
      },
      type: db.QueryTypes.INSERT,
    });

    res.status(200).json({ msg: "register success" });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteDocumnetal = async (req = request, res = response) => {
  const { idDocumental } = req.body;

  try {
    const queryDeleteDocumental = deleteDocumental;

    await db.query(queryDeleteDocumental, {
      replacements: {
        idDocumental,
      },
      type: db.QueryTypes.DELETE,
    });

    res.status(200).json({ msg: "Delete success" });
  } catch (error) {
    console.log(error);
  }
};

exports.getDocumentales = async (req = request, res = response) => {
  try {
    const queryGetDocumentales = getDocumentales;
    const result = await db.query(queryGetDocumentales, {
      type: db.QueryTypes.GET,
    });
    res.status(200).json(result[0]);
  } catch (error) {
    console.log(error);
  }
};

exports.getDocumental = async (req = request, res = response) => {
  const { idDocumental } = req.body;

  try {
    const queryGetdocumental = getDocumetal;

    const result = await db.query(queryGetdocumental, {
      replacements: {
        idDocumental,
      },
      type: db.QueryTypes.POST,
    });
    // console.log(result);
    res.status(200).json(result[0]);
  } catch (error) {
    console.log(error);
  }
};

 exports.logIn = async (req = request, res = response) => {
   const { email, password } = req.body;
   try {
     const queryLogIn = logIn;
     const [result] = await db.query(queryLogIn, {
       // raw: true,
       replacements: {
         email,
         password,
       },
       type: db.QueryTypes.SELECT,
     });
     /* Se convierte objeto "TextRow" para trabajar correctamente el objeto que retorna la bd */
     let resultToString = JSON.stringify(result["0"]);
     let { correo_u, contrasena_u } = JSON.parse(resultToString);
     const validpass =
       password === contrasena_u
         ? { validacion: true, data: { correo_u, contrasena_u } }
         : { validacion: false, msg: "invalid user or password" };
     res.status(200).json(validpass);
     // // console.log(result);
     // console.log();
     // console.log(result[0].contrasena_u);
   } catch (error) {
     console.log(error);
   }
 };

exports.logIn = async (req = request, res = response) => {
	
	const {email,password,} = req.body;

	try {
		const queryLogIn = logIn;

		const result = await db.query(queryLogIn,{
			replacements: {
				email,
				password,
			}, type: db.QueryTypes.POST
		})
			
		const validpass =
		password === result[0]
			? { validacion: true }
				: {msg: 'invalid user or password'};

		res.status(200).json(validpass);
		// // console.log(result);
		// console.log();
		// console.log(result[0].contrasena_u);
		} catch (error) {
			console.log(error);
		}
}
