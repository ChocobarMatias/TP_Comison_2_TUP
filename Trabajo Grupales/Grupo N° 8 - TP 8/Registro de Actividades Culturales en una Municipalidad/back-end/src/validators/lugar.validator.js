// validators/lugares.validator.js
const { body, param } = require("express-validator");

const crearLugarValidation = [
  body("nombre_lugar")
    .notEmpty()
    .withMessage("El nombre del lugar es obligatorio")
    .isLength({ max: 100 })
    .withMessage("nombre_lugar: max 100 caracteres"),
  body("tipo_lugar").optional().isLength({ max: 50 }),
  body("direccion_lugar").optional().isLength({ max: 255 }),
  body("contacto_nombre_lugar").optional().isLength({ max: 100 }),
  body("contacto_telefono_lugar")
    .optional()
    .isMobilePhone("any")
    .withMessage("Telefono inválido"),
  body("contacto_email_lugar")
    .optional()
    .isEmail()
    .withMessage("Email inválido"),
  body("equipamiento_lugar").optional().isLength({ max: 500 }),
  body("capacidad_maxima_lugar")
    .optional()
    .isInt({ min: 0 })
    .withMessage("capacidad_maxima_lugar debe ser entero >= 0"),
];

const actualizarLugarValidation = [
  param("id_lugar")
    .notEmpty()
    .withMessage("id_lugar es obligatorio")
    .isInt()
    .withMessage("id_lugar debe ser entero"),
  body("nombre_lugar").optional().isLength({ max: 100 }),
  body("tipo_lugar").optional().isLength({ max: 50 }),
  body("direccion_lugar").optional().isLength({ max: 255 }),
  body("contacto_nombre_lugar").optional().isLength({ max: 100 }),
  body("contacto_telefono_lugar").optional().isMobilePhone("any"),
  body("contacto_email_lugar").optional().isEmail(),
  body("equipamiento_lugar").optional().isLength({ max: 500 }),
  body("capacidad_maxima_lugar").optional().isInt({ min: 0 }),
];

const eliminarLugarValidation = [
  param("id_lugar")
    .notEmpty()
    .withMessage("id_lugar es obligatorio")
    .isInt()
    .withMessage("id_lugar debe ser entero"),
];

const idLugarParamValidation = [
  param("id_lugar")
    .notEmpty()
    .withMessage("id_lugar es obligatorio")
    .isInt()
    .withMessage("id_lugar debe ser entero"),
];

module.exports = {
  crearLugarValidation,
  actualizarLugarValidation,
  eliminarLugarValidation,
  idLugarParamValidation,
};
