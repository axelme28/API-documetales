const { request, response } = require("express");
const { type, json } = require("express/lib/response");

const { QueryTypes } = require("sequelize");
const db = require("../config/db.admin.config");

const { queryCreateUniversidad } = require("../sql/querys.plataforma");

const {
  altaAlumno,
  altaProfesor,
  altaAdmin,
} = require("../modules/altas.modules");

exports.altaUser = (req = request, res = response) => {
  const { typeUser } = req.body;
  console.log(typeUser);

  console.log(req.body);
  if (typeUser === "alumno") {
    try {
      altaAlumno(req, res);
    } catch (error) {
      console.log(error);
    }
  }
  if (typeUser === "profesor") {
    altaProfesor(req, res);
  }
  if (typeUser === "admin") {
    altaAdmin(req, res);
  }
};

exports.altaUniversidad = async (req = request, res = response) => {
  const { nombre, codigo } = req.body;

  try {
    const result = await db.query(queryCreateUniversidad, {
      replacements: {
        nombre,
        codigo,
      },
      type: QueryTypes.INSERT,
    });

    res.status(200).json({
      ok: true,
      message: "Universidad creada correctamente",
      result,
    });
  } catch (error) {
    console.log(error);
  }
};
