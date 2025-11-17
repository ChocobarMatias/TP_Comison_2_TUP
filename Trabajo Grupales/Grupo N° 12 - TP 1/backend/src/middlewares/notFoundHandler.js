export const notFoundHandler = (req, res, _next) => {
  res.status(404).json({
    status: 'error',
    message: `Ruta no encontrada: ${req.originalUrl}`,
  });
};