const { Router } = require("express");
const router = Router();

const {
  altaUser,
  altaUniversidad,
} = require("../controllers/altas.controller");

module.exports = function () {
  //dar de alta a susarios: docente, estudiante, admin
  router.post("/alta-usuario", altaUser);

  //dar de alta a univerdidades
  router.post("/alta-universidad", altaUniversidad);

  return router;
};
