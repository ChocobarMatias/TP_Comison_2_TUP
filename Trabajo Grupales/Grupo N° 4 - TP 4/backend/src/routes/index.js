const express = require('express');
const router = express.Router();

// Health check
router.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'API funcionando correctamente' });
});

// Auth routes
router.use('/auth', require('./auth.routes'));

// Clientes
router.use('/clientes', require('./clienteRoutes'));

// Servicios
router.use('/servicios', require('./servicioRoutes'));

// Pagos
router.use("/planes-pago", require("./planPagoRoutes"));

module.exports = router;