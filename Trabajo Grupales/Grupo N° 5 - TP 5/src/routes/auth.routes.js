const express = require("express");
const router = express.Router();
const { loginSocio, createSocio, resetPassword} = require("../controllers/socios.controller");


router.post("/login", loginSocio);
router.get("/reset", resetPassword);
router.post("/registro", createSocio);

module.exports = router;
