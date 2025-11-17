import { validationResult } from 'express-validator';

export const validateRequest = (req, res, next) => {
  const result = validationResult(req);

  if (result.isEmpty()) return next();

  return res.status(400).json({
    status: 'error',
    message: 'Errores de validación',
    errors: result.array().map(e => ({
      campo: e.param,
      mensaje: e.msg,
    })),
  });
};