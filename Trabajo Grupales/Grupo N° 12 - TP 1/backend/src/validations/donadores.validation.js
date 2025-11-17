import { campoTexto } from './common.validation.js';

export const validarCrearDonador = [
  campoTexto('nombre'),
  campoTexto('apellido'),
  campoTexto('contacto', { min: 3, max: 100 }),
];

export const validarActualizarDonador = [
  campoTexto('nombre').optional(),
  campoTexto('apellido').optional(),
  campoTexto('contacto', { min: 3, max: 100 }).optional(),
];