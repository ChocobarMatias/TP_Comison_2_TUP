const express = require("express");

const {
  register,
  login,
  recuperarPassword,
  cambioPasswordRecuperado,
} = require("../controllers/auth.controller");
const {
  registerValidator,
  loginValidator,
} = require("../validators/auth.validator");
const { validate } = require("../middlewares/checkValidations");

const router = express.Router();

//Registro
router.post("/register", registerValidator, validate, register);

//Login
router.post("/login", loginValidator, validate, login);

//aca se envía el email con el link de recuperación
router.post("/recuperar-password", recuperarPassword);

//aca se cambia la contraseña usando el token
router.put("/cambio_password/:token", cambioPasswordRecuperado);

module.exports = router;



// // src/routes/authRoutes.js (ESM)
// import { Router } from "express";

// import {
//   register,
//   login,
//   recuperarPassword,
//   cambioPasswordRecuperado,
// } from "../controllers/auth.controller.js";

// import {
//   registerValidator,
//   loginValidator,
// } from "../validators/auth.validator.js";

// import { validate } from "../middlewares/checkValidations.js";

// const router = Router();

// // Registro
// router.post("/register", registerValidator, validate, register);

// // Login
// router.post("/login", loginValidator, validate, login);

// // Enviar email con link de recuperación
// router.post("/recuperar-password", recuperarPassword);

// // Cambiar contraseña usando el token
// router.put("/cambio_password/:token", cambioPasswordRecuperado);

// export default router;
