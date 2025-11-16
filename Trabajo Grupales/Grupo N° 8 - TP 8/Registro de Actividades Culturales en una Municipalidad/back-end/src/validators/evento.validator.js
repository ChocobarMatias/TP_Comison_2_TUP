// validators/eventos.validator.js
const { body, param } = require('express-validator');

const createEventValidation = [
  body('nombre_evento')
    .notEmpty().withMessage('El nombre del evento es obligatorio')
    .isLength({ max: 100 }).withMessage('Nombre: max 100 caracteres'),
  body('fecha_inicio_evento')
    .notEmpty().withMessage('fecha_inicio_evento es obligatoria')
    .isISO8601().withMessage('fecha_inicio_evento debe ser fecha válida'),
  body('fecha_fin_evento')
    .notEmpty().withMessage('fecha_fin_evento es obligatoria')
    .isISO8601().withMessage('fecha_fin_evento debe ser fecha válida'),
  body('precio_entrada_evento')
    .optional()
    .isFloat({ min: 0 }).withMessage('precio_entrada_evento debe ser numérico y >= 0'),
  body('id_lugar')
    .notEmpty().withMessage('id_lugar es obligatorio')
    .isInt().withMessage('id_lugar debe ser entero'),
];

const updateEventValidation = [
  param('id').notEmpty().isInt().withMessage('id debe ser entero'),
  body('nombre_evento').optional().isLength({ max: 100 }),
  body('fecha_inicio_evento').optional().isISO8601(),
  body('fecha_fin_evento').optional().isISO8601(),
  body('precio_entrada_evento').optional().isFloat({ min: 0 }),
  body('id_lugar').optional().isInt()
];

const idParamValidation = [
  param('id').notEmpty().isInt().withMessage('id debe ser entero')
];

const agregarArtistaValidation = [
  body('id_artista').notEmpty().isInt().withMessage('id_artista debe ser entero'),
  body('id_evento').notEmpty().isInt().withMessage('id_evento debe ser entero'),
  body('rol_artista_evento').optional().isLength({ max: 50 })
];

const venderBoletoValidation = [
  body('id_evento').notEmpty().isInt().withMessage('id_evento debe ser entero'),
  body('id_usuario').notEmpty().isInt().withMessage('id_usuario debe ser entero'),
  body('cantidad_boletos').notEmpty().isInt({ min: 1 }).withMessage('cantidad_boletos debe ser entero >= 1'),
  body('metodo_pago').optional().isLength({ max: 50 })
];

module.exports = {
  createEventValidation,
  updateEventValidation,
  idParamValidation,
  agregarArtistaValidation,
  venderBoletoValidation
};
