const express = require('express');
const router = express.Router();

const {
  getAllTurnos,
  getOneTurno,
  crearTurno,
  updateTurno,
  deleteTurno,
  getTurnosPorMedico,
  getTurnosPorPaciente
} = require('../controllers/turnosController');


// Obtener todos los turnos
router.get('/todos', getAllTurnos);

// Obtener un turno por ID
router.get('/:id', getOneTurno);

// Crear un turno
router.post('/crear', crearTurno);

// Actualizar un turno
router.put('/actualizar/:id', updateTurno);

// Eliminar un turno
router.delete('/eliminar/:id', deleteTurno);

// Listar turnos por médico
router.get('/por-medico/:idMedico', getTurnosPorMedico);

// Listar turnos por paciente
router.get('/por-paciente/:idPaciente', getTurnosPorPaciente);

module.exports = router;
