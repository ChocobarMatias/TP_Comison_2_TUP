import { body } from 'express-validator';
import { campoEnteroPositivo } from './common.validation.js';

export const validarCrearEntrega = [
  campoEnteroPositivo('id_donador'),
  campoEnteroPositivo('id_producto'),
  campoEnteroPositivo('id_comedor'),
  campoEnteroPositivo('cantidad'),
  body('observaciones').optional().isString(),
];

export const validarActualizarEntrega = [
  campoEnteroPositivo('id_donador').optional(),
  campoEnteroPositivo('id_producto').optional(),
  campoEnteroPositivo('id_comedor').optional(),
  campoEnteroPositivo('cantidad').optional(),
  body('observaciones').optional().isString(),
];