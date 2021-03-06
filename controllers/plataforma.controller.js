const { request, response } = require("express");
const { type, json } = require("express/lib/response");

const { QueryTypes } = require("sequelize");
const db = require("../config/db.admin.config");
const { getTypeTask } = require("../helpers/getId");
const {
  getAlumno,
  getAdmin,
  getProfesor,
} = require("../modules/getUser.Modules");
const {
  queryCreatePost,
  queryViewPosts,
  queryViewTeams,
  queryLogin,
  _createTask,
  _viewAllTasks,
} = require("../sql/querys.plataforma");

exports.crearPost = async (req = request, res = require) => {
  const { titulo_publicacion, texto_publicacion, id_equipo, date } = req.body;

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
  const { id_usuario, id_equipo } = req.body;
  console.log("=>=>=>=>=>", req.body);
  try {
    const result = await db.query(queryViewPosts, {
      replacements: {
        id_usuario,
        id_equipo,
      },
      type: QueryTypes.SELECT,
    });

    console.log("RESULT =>=>=>=>", result);
    res.status(200).json(result[0]);
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: "Error al obtener posts",
      error,
    });
    console.log(error);
  }
};

exports.verTeam = async (req = request, res = response) => {
  const { idUsuario } = req.body;

  try {
    const result = await db.query(queryViewTeams, {
      replacements: {
        idUsuario,
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
};

exports.logIn = async (req = request, res = response) => {
  const { email, password } = req.body;

  //password validation
  try {
    const result = await db.query(queryLogin, {
      replacements: {
        email,
        password,
      },
      type: QueryTypes.SELECT,
    });

    password === result[0].password && email
      ? res.status(200).json({
          msg: "login success",
          result,
        })
      : res.status(200).json({
          msg: "invalid user or password",
          result,
        });
  } catch (error) {
    console.log(error);
  }
};

exports.getUserInfo = async (req = request, res = response) => {
  const { typeUser, idUsuario } = req.body;

  if (typeUser === "") {
    return;
  }
  if (typeUser === "alumno") {
    getAlumno(res, idUsuario);
  }
  if (typeUser === "profesor") {
    getProfesor(res, idUsuario);
  }
  if (typeUser === "administrador") {
    getAdmin(res, idUsuario);
  }
};

exports.CreateTask = async (req = request, res = response) => {
  const { nombre, instrucciones, idEquipo, tipoTarea, fechaVencimiento } =
    req.body;

  const typeTask = getTypeTask(tipoTarea);

  try {
    const result = await db.query(_createTask, {
      replacements: {
        nombre,
        instrucciones,
        idEquipo,
        tipoTarea: typeTask,
        fechaVencimiento,
      },
      type: QueryTypes.INSERT,
    });

    res.status(200).json({
      ok: true,
      message: "Tarea creada correctamente",
      result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      message: "Error al crear tarea",
      error,
    });
  }
};

exports.viewAllTask = async (req = request, res = response) => {
  const { idUsu } = req.body;

  try {
    const result = await db.query(_viewAllTasks, {
      replacements: {
        idUsu,
      },
      type: QueryTypes.SELECT,
    });

    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      message: "Error al obtener tareas",
      error,
    });
  }
};
