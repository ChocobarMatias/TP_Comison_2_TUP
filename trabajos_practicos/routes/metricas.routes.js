import express from 'express';
import { ventasPorMes, topProductos, stockBajo } from '../controllers/metricas.controller.js';

const router = express.Router();

router.get('/ventas-por-mes', ventasPorMes);
router.get('/top-productos', topProductos);
router.get('/stock-bajo', stockBajo);

export default router;