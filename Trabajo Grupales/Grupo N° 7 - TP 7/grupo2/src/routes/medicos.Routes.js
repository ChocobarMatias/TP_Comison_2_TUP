const express = require('express');
const router = express.Router();
const {
  getAllMedicos,
  mostrarMedicosInactivos,
  getOneMedico,
  crearMedico,
  updateMedico,
  deleteMedico,
  logicDeleteMedico,
  activarMedico
} = require('../controllers/medicos.controller');

// 📋 Obtener todos los médicos activos
router.get('/', getAllMedicos);

// 📋 Obtener médicos inactivos
router.get('/inactivos', mostrarMedicosInactivos);

// 📋 Obtener un médico por ID
router.get('/:id', getOneMedico);

// 🆕 Crear un nuevo médico
router.post('/', crearMedico);

// ✏️ Actualizar médico por ID
router.put('/:id', updateMedico);

// 🚫 Desactivar médico (baja lógica)
router.put('/desactivar/:id', logicDeleteMedico);

// ✅ Activar médico
router.put('/activar/:id', activarMedico);

// ❌ Eliminar físicamente un médico
router.delete('/:id', deleteMedico);

module.exports = router;
