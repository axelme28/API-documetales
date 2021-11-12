const { Router } = require("express");
const router = Router();

const {
  altaUser,
  altaUniversidad,
  altaEquipo,
} = require("../controllers/altas.controller");
const { crearPost, verPosts, verTeam } = require("../controllers/plataforma.controller");

module.exports = function () {
  //dar de alta a susarios: docente, estudiante, admin
  router.post("/alta-usuario", altaUser);

  //dar de alta a univerdidades
  router.post("/alta-universidad", altaUniversidad);

  //dar de alta grupo
  router.post("/alta-equipo", altaEquipo);

  //crear un post
  router.post('/crear-publicacion',crearPost);

  //ver publicaciones
  router.post('/publicaciones',verPosts);

  router.post('/ver-grupos',verTeam);

  return router;
};
