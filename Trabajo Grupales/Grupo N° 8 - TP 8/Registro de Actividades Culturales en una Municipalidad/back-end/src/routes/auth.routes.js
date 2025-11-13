const express = require("express");
const router = express.Router();

const { registrar, login } = require("../controllers/auth.controller");

const validateInput = require("../middlewares/validateInput");

const {
  registroValidation,
  loginValidation,
} = require("../validators/auth.validator");

// 🔹 Registro de usuario
router.post("/registro", registroValidation, validateInput, registrar);

// 🔹 Login de usuario
router.post("/login", loginValidation, validateInput, login);

module.exports = router;
