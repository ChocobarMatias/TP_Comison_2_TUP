const express = require('express');
const router = express.Router();

const {
  getAllPacientes,
  mostrarPacientesInactivos,
  getOnePaciente,
  crearPaciente,
  updatePaciente,
  deletePaciente,
  logicDeletePaciente,
  activarPaciente
} = require('../controllers/pacientesController');


router.get('/todos', getAllPacientes);


router.get('/inactivos', mostrarPacientesInactivos);


router.get('/:id', getOnePaciente);


router.post('/crear', crearPaciente);


router.put('/actualizar/:id', updatePaciente);


router.delete('/eliminar/:id', deletePaciente);


router.put('/desactivar/:id', logicDeletePaciente);


router.put('/activar/:id', activarPaciente);

module.exports = router;
