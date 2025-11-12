const express = require("express");
const router = express.Router();
const { loginSocio, createSocio} = require("../controllers/socios.controller");


router.post("/login", loginSocio);

router.post("/registro", createSocio);

module.exports = router;
