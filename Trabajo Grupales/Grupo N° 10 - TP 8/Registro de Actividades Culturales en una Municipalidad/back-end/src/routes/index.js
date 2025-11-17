const express = require('express');
const router = express.Router();
const artistas_eventos = require("./artistas_eventos.routes")
const artistas = require("./artistas.routes")
const auth = require("./auth.routes")
const eventos = require("./eventos.routes")
const login = require("./login.routes")
const lugares = require("./lugares.routes")
const ventas = require("./ventas_boletos.routes")

router.get("/artitasEventos",artistas_eventos)
router.get("/artitas", artistas)
router.get("/auth",auth)
router.get("/eventos",eventos)
router.get("/login", login)
router.get("/lugares", lugares)
router.get("/ventas", ventas)



module.exports = router;