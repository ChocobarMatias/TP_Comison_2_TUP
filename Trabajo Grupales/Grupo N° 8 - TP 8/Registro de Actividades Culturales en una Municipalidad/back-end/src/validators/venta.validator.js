// validators/ventas.validator.js
const { body, param } = require('express-validator');

const crearVentaValidation = [
  body('id_evento').notEmpty().isInt().withMessage('id_evento debe ser entero'),
  body('id_usuario').notEmpty().isInt().withMessage('id_usuario debe ser entero'),
  body('cantidad_boletos').notEmpty().isInt({ min: 1 }).withMessage('cantidad_boletos debe ser entero >= 1'),
  body('metodo_pago').optional().isLength({ max: 50 })
];

const idVentaParamValidation = [
  param('id_venta_boleto').notEmpty().isInt().withMessage('id_venta_boleto debe ser entero')
];

const idEventoParamValidation = [
  param('id_evento').notEmpty().isInt().withMessage('id_evento debe ser entero')
];

module.exports = {
  crearVentaValidation,
  idVentaParamValidation,
  idEventoParamValidation
};
