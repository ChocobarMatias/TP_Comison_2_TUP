const express = require("express");
const router = express.Router();

const { recover, reset } = require("../controllers/authPassword.Controller");
const {
  recoverValidation,
  resetValidation,
} = require("../validators/authPassword.validator");
const validateInput = require("../middlewares/validateInput");

//Ruta para enviar el email de recuperacion
router.post("/recover", recoverValidation, validateInput, recover);

//Ruta para recuperar la contraseña
router.put("/reset/:token", resetValidation, validateInput, reset);

module.exports = router;
