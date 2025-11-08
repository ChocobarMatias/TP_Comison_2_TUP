// routes/eventos.js
const express = require("express");
const router = express.Router();

const {
  obtenerTodos,
  obtenerUno,
  crear,
  actualizar,
  eliminar,
  agregarArtistaEvento,
  venderBoleto,
} = require("../controllers/eventos.controllers");

const validateInput = require("../middlewares/validateInput");

const verifyToken = require("../middlewares/auth.middlewares");

const {
  createEventValidation,
  updateEventValidation,
  idParamValidation,
  agregarArtistaValidation,
  venderBoletoValidation,
} = require("../validators/evento.validator");

// Obtener todos
router.get("/", verifyToken, obtenerTodos);

// Obtener uno por id
router.get(
  "/getOne/:id",
  verifyToken,
  idParamValidation,
  validateInput,
  obtenerUno
);

// Crear evento
router.post(
  "/create",
  verifyToken,
  createEventValidation,
  validateInput,
  crear
);

// Actualizar evento
router.put(
  "/update/:id",
  verifyToken,
  updateEventValidation,
  validateInput,
  actualizar
);

// Borrado lógico
router.delete(
  "/delete/:id",
  verifyToken,
  idParamValidation,
  validateInput,
  eliminar
);

// Agregar artista a evento
router.post(
  "/agregar-artista",
  verifyToken,
  agregarArtistaValidation,
  validateInput,
  agregarArtistaEvento
);

// Vender boleto
router.post(
  "/vender",
  verifyToken,
  venderBoletoValidation,
  validateInput,
  venderBoleto
);

module.exports = router;
