import { campoTexto, campoTelefono } from '../validations/common.validation.js';

export const validarCrearComedor = [
  campoTexto('nombre'),
  campoTexto('direccion', { min: 3, max: 150 }),
  campoTexto('contacto', { min: 3, max: 100 }),
  campoTelefono('telefono'),
];

export const validarActualizarComedor = [
  campoTexto('nombre'),
  campoTexto('direccion', { min: 3, max: 150 }),
  campoTexto('contacto', { min: 3, max: 100 }),
  campoTelefono('telefono'),
];