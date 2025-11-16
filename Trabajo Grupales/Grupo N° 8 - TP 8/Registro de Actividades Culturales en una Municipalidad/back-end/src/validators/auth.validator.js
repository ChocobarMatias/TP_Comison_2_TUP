const { body } = require("express-validator");

const registroValidation = [
  body("nombre_usuario").notEmpty().withMessage("El nombre es obligatorio"),
  body("mail_usuario").isEmail().withMessage("Debe ingresar un correo válido"),
  body("password_usuario")
    .isLength({ min: 6 })
    .withMessage("La contraseña debe tener al menos 6 caracteres"),
  body("rol_usuario")
    .optional()
    .isIn(["empleado", "asistente", "admin"])
    .withMessage("El rol no es válido"),
];

const loginValidation = [
  body("mail_usuario").isEmail().withMessage("Debe ingresar un correo válido"),
  body("password_usuario")
    .notEmpty()
    .withMessage("La contraseña es obligatoria"),
];

module.exports = { registroValidation, loginValidation };
