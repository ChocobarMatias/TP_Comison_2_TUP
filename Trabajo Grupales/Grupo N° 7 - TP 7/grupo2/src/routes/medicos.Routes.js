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
  activarMedico,
  getMedicosPorCategoria
} = require('../controllers/medicos.controller');

// ⚠️ IMPORTANTE → Primero rutas específicas
console.log("⏳ Cargando rutas de Médicos...");

// 📌 Obtener médicos por categoría
router.get('/categoria/:idCat', (req, res, next) => {
  console.log("➡️ [ROUTE] GET /categoria/:idCat →", req.params);
  next();
}, getMedicosPorCategoria);

// 📋 Obtener todos los médicos activos
router.get('/', (req, res, next) => {
  console.log("➡️ [ROUTE] GET / → Obtener todos los médicos");
  next();
}, getAllMedicos);

// 📋 Obtener médicos inactivos
router.get('/inactivos', (req, res, next) => {
  console.log("➡️ [ROUTE] GET /inactivos");
  next();
}, mostrarMedicosInactivos);

// 📋 Obtener un médico por ID
router.get('/:id', (req, res, next) => {
  console.log("➡️ [ROUTE] GET /:id →", req.params);
  next();
}, getOneMedico);

// 🆕 Crear un nuevo médico
router.post('/', (req, res, next) => {
  console.log("➡️ [ROUTE] POST / → Body:", req.body);
  next();
}, crearMedico);

// ✏️ Actualizar médico por ID
router.put('/:id', (req, res, next) => {
  console.log("➡️ [ROUTE] PUT /:id →", req.params, req.body);
  next();
}, updateMedico);

// 🚫 Desactivar médico (baja lógica)
router.put('/desactivar/:id', (req, res, next) => {
  console.log("➡️ [ROUTE] PUT /desactivar/:id");
  next();
}, logicDeleteMedico);

// ✅ Activar médico
router.put('/activar/:id', (req, res, next) => {
  console.log("➡️ [ROUTE] PUT /activar/:id");
  next();
}, activarMedico);

// ❌ Eliminar físicamente un médico
router.delete('/:id', (req, res, next) => {
  console.log("➡️ [ROUTE] DELETE /:id");
  next();
}, deleteMedico);

console.log("✅ Rutas de Médicos cargadas correctamente");

module.exports = router;
