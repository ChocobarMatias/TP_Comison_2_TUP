const express = require("express");
const router = express.Router();
const { verificarToken } = require("../../middleware/auth");

const {
  getSocios,
  getSocio,
  createSocio,
  updateSocio,
  darBajaSocio,
  reactivarSocio,
  loginSocio,
  recuperarPassword
} = require("../controllers/socios.controller");


router.post("/login", loginSocio);
router.post("/recuperar", recuperarPassword);
router.post("/crear", createSocio);

router.get("/", getSocios);
router.get("/:id", verificarToken, getSocio);
router.put("/actualizar/:id", updateSocio);
router.put("/darBaja/:id", darBajaSocio);
router.put("/reactivar/:id", reactivarSocio);

module.exports = router;
