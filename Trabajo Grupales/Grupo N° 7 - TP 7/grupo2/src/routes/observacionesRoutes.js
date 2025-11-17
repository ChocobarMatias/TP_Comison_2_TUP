const express = require('express');
const router = express.Router();

const {
  getAllObservaciones,
  getOneObservacion,
  crearObservacion,
  updateObservacion,
  deleteObservacion
} = require('../controllers/observacionesController');


// Obtener todas las observaciones
router.get('/todas', getAllObservaciones);

// Obtener una observación por ID
router.get('/:id', getOneObservacion);

// Crear una nueva observación
router.post('/crear', crearObservacion);

// Actualizar una observación
router.put('/actualizar/:id', updateObservacion);

// Eliminar una observación (borrado físico)
router.delete('/eliminar/:id', deleteObservacion);

module.exports = router;
