import { campoTexto, campoTelefono } from './common.validation.js';

export const validarCrearComedor = [
  campoTexto('nombre'),
  campoTexto('direccion', { min: 3, max: 150 }),
  campoTexto('contacto', { min: 3, max: 100 }),
  campoTelefono('telefono'),
];

// Como tu UPDATE siempre setea los 4 campos, mejor exigirlos todos
export const validarActualizarComedor = [
  campoTexto('nombre'),
  campoTexto('direccion', { min: 3, max: 150 }),
  campoTexto('contacto', { min: 3, max: 100 }),
  campoTelefono('telefono'),
];