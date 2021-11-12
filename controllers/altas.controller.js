const { request, response } = require("express");
const { type, json } = require("express/lib/response");

const { QueryTypes } = require("sequelize");
const db = require("../config/db.admin.config");

const {
  queryCreateUniversidad,
  queryCreateGrupo,
  queryExistConvenio,
} = require("../sql/querys.plataforma");

const {
  altaAlumno,
  altaProfesor,
  altaAdmin,
  altaEquipo_,
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
  const { nombre, convenio } = req.body;

  try {
    const convenios = await db.query(queryExistConvenio, {
      type: QueryTypes.SELECT,
    });

    const existConvenio = convenios
      .map((item) => item.convenio)
      .includes(convenio);

    if (existConvenio) {
      res.status(500).json({
        ok: false,
        message: "El convenio ya existe",
      });
    }

    const result = await db.query(queryCreateUniversidad, {
      replacements: { nombre, convenio },
      type: QueryTypes.INSERT,
    });

    res.status(200).json({
      ok: true,
      message: "Universidad creada correctamente",
      result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      message: "hubo un error. ALV",
      error,
    });
  }
};

exports.altaEquipo = async (req = request, res = response) => {
  const { nombre, codigo, idUsuario } = req.body;

  try {
    const idEquipo = await altaEquipo_(nombre, codigo);

    const result = await db.query(queryCreateGrupo, {
      replacements: {
        idEquipo,
        idUsuario,
      },
      type: QueryTypes.INSERT,
    });

    res.status(200).json({
      ok: true,
      message: "Equipo creado correctamente",
      result,
    });
  } catch (error) {
    console.log(error);
  }
};
