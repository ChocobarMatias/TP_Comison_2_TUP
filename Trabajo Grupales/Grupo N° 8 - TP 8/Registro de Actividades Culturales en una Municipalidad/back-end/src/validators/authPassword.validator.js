// validators/authPassword.validator.js
const { body, param } = require('express-validator');

const recoverValidation = [
  body('email')
    .notEmpty().withMessage('El email es obligatorio')
    .isEmail().withMessage('Debe ser un email válido'),
];

const resetValidation = [
  param('token')
    .notEmpty().withMessage('Token es obligatorio'),
  body('password')
    .notEmpty().withMessage('La contraseña es obligatoria')
    .isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'),
];

module.exports = { recoverValidation, resetValidation };
