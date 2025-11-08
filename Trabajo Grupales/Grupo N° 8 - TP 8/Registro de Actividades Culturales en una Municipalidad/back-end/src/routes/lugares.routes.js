// routes/lugares.js
const express = require("express");
const router = express.Router();

const {
  obtenerTodos,
  obtenerUno,
  crear,
  actualizar,
  eliminar,
} = require("../controllers/lugares.controllers");
const validateInput = require("../middlewares/validateInput");
const verifyToken = require("../middlewares/auth.middlewares");

const {
  crearLugarValidation,
  actualizarLugarValidation,
  eliminarLugarValidation,
  idLugarParamValidation,
} = require("../validators/lugar.validator");

// Obtener todos los lugares
router.get("/", verifyToken, obtenerTodos);

// Obtener un lugar por id_lugar
router.get(
  "/:id_lugar",
  verifyToken,
  idLugarParamValidation,
  validateInput,
  obtenerUno
);

// Crear lugar
router.post("/", verifyToken, crearLugarValidation, validateInput, crear);

// Actualizar lugar
router.put(
  "/:id_lugar",
  verifyToken,
  actualizarLugarValidation,
  validateInput,
  actualizar
);

// Borrado lógico de lugar
router.delete(
  "/:id_lugar",
  verifyToken,
  eliminarLugarValidation,
  validateInput,
  eliminar
);

module.exports = router;
