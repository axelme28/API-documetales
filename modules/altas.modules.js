const { type } = require("express/lib/response");
const { async } = require("jshint/src/prod-params");
const { QueryTypes } = require("sequelize");
const db = require("../config/db.admin.config");

const { getRole } = require("../helpers/getId");
const {
  queryCreateAlumno,
  queryCreateUser,
  queryCreateProfesor,
  queryCreateAdmin,
  queryCreateEquipo
} = require("../sql/querys.plataforma");

exports.altaAlumno = async (req, res) => {
  const {
    nombre,
    apellidoPaterno,
    apellidoMaterno,
    boleta,
    email,
    password,
    idRol,
    idUniversidad,
  } = req.body;

  try {
    const idUsuario = await altaUser(email, password, idRol, idUniversidad);

    const result = await db.query(queryCreateAlumno, {
      replacements: {
        nombre,
        apellidoMaterno,
        idUsuario,
        boleta,
        apellidoPaterno,
      },
      type: QueryTypes.INSERT,
    });

    res.status(200).json({ result , msg: "Alumno creado correctamente" });
  } catch (error) {
    console.log(error);
  }
};

exports.altaProfesor = async (req, res) => {
  const {
    nombre,
    apellidoMaterno,
    noTrabajador,
    fechaNacimiento,
    apellidoPaterno,
    email,
    password,
    idRol,
    idUniversidad,
  } = req.body;

  try {
    const idUsuario = await altaUser(email, password, idRol, idUniversidad);
    await db.query(queryCreateProfesor, {
      replacements: {
        nombre,
        apellidoMaterno,
        idUsuario,
        noTrabajador,
        fechaNacimiento,
        apellidoPaterno,
      },
      type: QueryTypes.INSERT,
    });

    res.status(200).json({ msg: "Profesor creado correctamente" });
  } catch (error) {
    console.log(error);
  }
};

exports.altaAdmin = async (req, res) => {
  const {
    nom_admi,
    apellido_paterno,
    apellido_materno,
    direccion,
    telefono,
    email,
    password,
    idRol,
    idUniversidad,
  } = req.body;

  const idUsuario = await altaUser(email, password, idRol, idUniversidad);

  try {
    await db.query(queryCreateAdmin, {
      replacements: {
        nom_admi,
        apellido_paterno,
        apellido_materno,
        idUsuario,
        direccion,
        telefono,
      },
      type: QueryTypes.INSERT,
    });

    res.status(200).json({ msg: "Administrador creado correctamente" });
  } catch (error) {
    console.log(error);
  }
};

altaUser = async (email, password, idRol, idUniversidad) => {
  try {
    const idRol_ = getRole(idRol);

    const idUsu = await db.query(queryCreateUser, {
      replacements: {
        email,
        password,
        idRol: idRol_,
        idUniversidad,
      },
      type: QueryTypes.INSERT,
    });

    return parseInt(idUsu[0]);
  } catch (error) {
    console.log(error);
  }
};

exports.altaEquipo_ = async (nombre,codigo) => {

  try {
    const idEquipo = await db.query(queryCreateEquipo, {
      replacements: {
        nombre,
        codigo,
      },
      type: QueryTypes.INSERT,
    });

    return parseInt(idEquipo[0]);
  } catch (error) {
    console.log(error);
  }

};