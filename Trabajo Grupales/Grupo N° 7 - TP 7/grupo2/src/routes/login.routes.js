const express = require('express');
const router = express.Router();
const {loginUsuario} = require('../controllers/login.controller');
console.log("¿Qué llega del controller?:", loginUsuario);

router.post('/',loginUsuario); //ruta publica para el login

module.exports = router;