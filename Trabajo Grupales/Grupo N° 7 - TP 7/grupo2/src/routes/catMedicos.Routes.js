const express = require('express');
const router = express.Router();
const {
  getAllCatMedicos,
  mostrarCatMedicosInactivos,
  getOneCatMedico,
  crearCatMedico,
  updateCatMedico,
  deleteCatMedico,
  logicDeleteCatMedico,
  activarCatMedico
} = require('../controllers/catMedicos.controller');

// 📋 Obtener todas las categorías activas
router.get('/', getAllCatMedicos);

// 📋 Obtener todas las categorías inactivas
router.get('/inactivas', mostrarCatMedicosInactivos);

// 📋 Obtener una categoría por ID
router.get('/:id', getOneCatMedico);

// 🆕 Crear nueva categoría médica
router.post('/crear', crearCatMedico);

// ✏️ Actualizar categoría médica
router.put('/:id', updateCatMedico);

// ❌ Eliminar físicamente una categoría médica
router.delete('/:id', deleteCatMedico);

// 🚫 Desactivar (baja lógica)
router.put('/desactivar/:id', logicDeleteCatMedico);

// ✅ Activar categoría médica
router.put('/activar/:id', activarCatMedico);

module.exports = router;
