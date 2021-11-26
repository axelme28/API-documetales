const { request, response } = require("express");
const { type, json } = require("express/lib/response");

const { QueryTypes } = require("sequelize");
const db = require("../config/db.admin.config");
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
  const { id_usuario } = req.body;

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

// exports.logIn = async (req = request, res = response) => {
//     const { email, password } = req.body;
//     try {
//       const queryLogIn = logIn;
//       const [result] = await db.query(queryLogIn, {
//         // raw: true,
//         replacements: {
//           email,
//           password,
//         },
//         type: db.QueryTypes.SELECT,
//       });
//       /* Se convierte objeto "TextRow" para trabajar correctamente el objeto que retorna la bd */
//       let resultToString = JSON.stringify(result["0"]);
//       let { correo_u, contrasena_u } = JSON.parse(resultToString);
//       const validpass =
//         password === contrasena_u
//           ? { validacion: true, data: { correo_u, contrasena_u } }
//           : { validacion: false, msg: "invalid user or password" };
//       res.status(200).json(validpass);
//       // // console.log(result);
//       // console.log();
//       // console.log(result[0].contrasena_u);
//     } catch (error) {
//       console.log(error);
//     }
//   };

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
