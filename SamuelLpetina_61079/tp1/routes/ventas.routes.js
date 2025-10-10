const express = require('express');
const router = express.Router();
const ventasController = require('../controllers/ventas.controller');

router.get('/', ventasController.getVentas);
router.get('/:id', ventasController.getVentaById);
router.post('/', ventasController.createVenta);
router.delete('/:id', ventasController.deleteVenta);

module.exports = router;
