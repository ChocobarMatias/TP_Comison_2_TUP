import { param, body } from 'express-validator';

export const validarId = [
  param('id')
    .isInt({ min: 1 })
    .withMessage('El id debe ser un entero positivo'),
];

export const campoTexto = (nombre, { min = 1, max = 100 } = {}) =>
  body(nombre)
    .isString()
    .withMessage(`El campo ${nombre} debe ser texto`)
    .trim()
    .isLength({ min, max })
    .withMessage(`El campo ${nombre} debe tener entre ${min} y ${max} caracteres`);

export const campoEnteroPositivo = nombre =>
  body(nombre)
    .isInt({ min: 1 })
    .withMessage(`${nombre} debe ser un entero positivo`);

export const campoEnteroNoNegativo = nombre =>
  body(nombre)
    .isInt({ min: 0 })
    .withMessage(`${nombre} debe ser un entero mayor o igual a 0`);

export const campoTelefono = nombre =>
  body(nombre)
    .isString()
    .trim()
    .isLength({ min: 6, max: 50 })
    .withMessage(`El campo ${nombre} debe ser un teléfono válido`);