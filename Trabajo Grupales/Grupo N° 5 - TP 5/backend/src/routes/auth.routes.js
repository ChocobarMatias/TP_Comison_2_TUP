const express = require("express");
const router = express.Router();
const { loginSocio, createSocio, resetPassword} = require("../controllers/socios.controller");
const { verificarTokenAdmin } = require("../../middleware/auth");


router.post("/login", loginSocio);
router.post("/reset", resetPassword);
router.post("/registro", verificarTokenAdmin, createSocio);

module.exports = router;
