const { Router } = require("express");
const router = Router();
//prettier-ignore
const {altaUser,altaUniversidad,altaEquipo}= require("../controllers/altas.controller");
//prettier-ignore
const {crearPost,verPosts,verTeam,logIn,getUserInfo, CreateTask, viewAllTask} = require("../controllers/plataforma.controller");

module.exports = function () {
  //dar de alta a susarios: docente, estudiante, admin
  router.post("/alta-usuario", altaUser);

  //dar de alta a univerdidades
  router.post("/alta-universidad", altaUniversidad);

  //dar de alta grupo
  router.post("/alta-equipo", altaEquipo);

  //crear un post
  router.post("/crear-publicacion", crearPost);

  //ver publicaciones
  router.post("/publicaciones", verPosts);

  router.post("/ver-grupos", verTeam);

  //servicio para LogIn
  router.post("/log-in", logIn);

  //get user info
  router.post("/user-info", getUserInfo);

  //add task
  router.post("/create-task", CreateTask);

  //get tasks
  router.post("/get-tasks", viewAllTask);

  //add record to task
  router.post("/add-record", () => {});

  return router;
};
