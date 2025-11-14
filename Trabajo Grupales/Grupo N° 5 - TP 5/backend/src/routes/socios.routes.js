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
  recuperarPassword
} = require("../controllers/socios.controller");


router.post("/login", loginSocio);
router.post("/recuperar", recuperarPassword);
//router.post("/crear", createSocio);

router.get("/", getSocios);
router.get("/:id", verificarToken, getSocio);
router.put("/actualizar/:id", verificarTokenAdmin, updateSocio);
router.put("/darBaja/:id",verificarTokenAdmin, darBajaSocio);
router.put("/reactivar/:id",verificarTokenAdmin, reactivarSocio);

module.exports = router;
