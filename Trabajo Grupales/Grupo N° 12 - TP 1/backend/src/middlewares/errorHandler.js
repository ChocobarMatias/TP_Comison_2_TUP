export const errorHandler = (err, req, res, _next) => {
  const status = err.status || 500;

  const body = {
    status: 'error',
    message: err.message || 'Ocurrió un error inesperado en el servidor',
  };

  if (process.env.NODE_ENV === 'development' && err.stack) {
    body.stack = err.stack;
  }

  console.error(`❌ [${req.method}] ${req.originalUrl} -> ${body.message}`);
  res.status(status).json(body);
};