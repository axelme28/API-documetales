const { type } = require("express/lib/response");
const { async } = require("jshint/src/prod-params");
const { QueryTypes } = require("sequelize");
const db = require("../config/db.admin.config");
const {
  _getAlumno,
  _getProfesor,
  _getAdmin,
} = require("../sql/querys.plataforma");

exports.getAlumno = async (res, idUsuario) => {
  try {
    const alumno = await db.query(_getAlumno, {
      replacements: {
        idUsuario: idUsuario,
      },
      type: QueryTypes.SELECT,
    });
    res.status(200).json(alumno[0]);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error al obtener el alumno",
      error,
    });
  }
};

exports.getProfesor = async (res, idUsuario) => {
  try {
    const profesor = await db.query(_getProfesor, {
      replacements: {
        idUsuario: idUsuario,
      },
      type: QueryTypes.SELECT,
    });
    res.status(200).json(profesor[0]);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error al obtener el profesor",
      error,
    });
  }
};

exports.getAdmin = async (res, idUsuario) => {
  try {
    const admin = await db.query(_getAdmin, {
      replacements: {
        idUsuario: idUsuario,
      },
      type: QueryTypes.SELECT,
    });
    res.status(200).json(admin[0]);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error al obtener el admin",
      error,
    });
  }
};
