const { request, response } = require("express");
const { type, json } = require("express/lib/response");

const { QueryTypes } = require("sequelize");
const db = require("../config/db.admin.config");
const { queryCreatePost, queryViewPosts, queryViewTeams } = require("../sql/querys.plataforma");


exports.crearPost = async (req = request, res= require) => {
    const {
        titulo_publicacion, 
        texto_publicacion, 
        id_equipo,
        date
    } = req.body;

    try {
        const result = await db.query(queryCreatePost, {
            replacements: {
                titulo_publicacion, 
                texto_publicacion, 
                id_equipo,
                date,
            },
            type: QueryTypes.INSERT,
        });

        res.status(200).json({
            ok: true,
            message: "Post creado correctamente",
            result,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: "Error al crear post",
            error,
        });
    }
};

exports.verPosts = async (req = request, res = response) => {
    const { id_usuario } = req.body;

    //fixme: esto no funciona   {
    // '0': TextRow {
    //     titulo: 'tareita',
    //     texto: 'terea como negro todo el mes',
    //     date: '0000-00-00'
    //   }
    // }
    try {
        const result = await db.query(queryViewPosts, {
            replacements: {
                id_usuario,
            },
            type: QueryTypes.SELECT,
        });

        console.log(result);
        res.status(200).json(result[0]);
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: "Error al obtener posts",
            error,
        });
        console.log(error);
    }

}

exports.verTeam = async (req = request, res = response) => {
    const {email} = req.body;

    try {
        const result = await db.query(queryViewTeams, {
            replacements: {
                email,
            },
            type: QueryTypes.SELECT,
        });

        console.log(result);
        res.status(200).json(result[0]);
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: "Error al obtener equipo",
            error,
        });
        console.log(error);
    }
}
