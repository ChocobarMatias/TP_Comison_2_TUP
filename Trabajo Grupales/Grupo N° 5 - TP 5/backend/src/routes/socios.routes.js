const express = require("express");
const router = express.Router();
const { verificarToken, verificarTokenAdmin } = require("../../middleware/auth");

const {
  getSocios,
  getSocio,
  updateSocio,
  darBajaSocio,
  reactivarSocio,
  loginSocio,
  recuperarPassword,
  createSocio,
  getSociosAdmin,
  eliminarSocio
} = require("../controllers/socios.controller");


router.post("/login", loginSocio);
router.post("/recuperar", recuperarPassword);
router.post("/crear", verificarTokenAdmin, createSocio);
router.delete("/eliminar/:id", verificarTokenAdmin, eliminarSocio);

router.get("/", getSocios);
router.get("/getAll", verificarTokenAdmin, getSociosAdmin);
router.get("/:id", verificarToken, getSocio);
router.put("/actualizar/:id", verificarTokenAdmin, updateSocio);
router.put("/darBaja/:id",verificarTokenAdmin, darBajaSocio);
router.put("/reactivar/:id",verificarTokenAdmin, reactivarSocio);

module.exports = router;
