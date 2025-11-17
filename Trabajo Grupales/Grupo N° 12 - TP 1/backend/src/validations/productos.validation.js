import { campoTexto, campoEnteroNoNegativo } from './common.validation.js';
import { body } from 'express-validator';

export const validarCrearProducto = [
  campoTexto('nombre'),
  body('descripcion').optional().isString(),
  body('categoria').optional().isString(),
  campoEnteroNoNegativo('cantidad'),
];

export const validarActualizarProducto = [
  campoTexto('nombre').optional(),
  body('descripcion').optional().isString(),
  body('categoria').optional().isString(),
  campoEnteroNoNegativo('cantidad').optional(),
];