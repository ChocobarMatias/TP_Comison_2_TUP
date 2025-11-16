const express = require("express");
const router = express.Router();

const {
  pagarCuota,
  obtenerCuotaPorId,
  obtenerTodasLasCuotas
} = require("../controllers/coutaController"); // o cuotaController

// Obtener info de una cuota
router.get("/:id", obtenerCuotaPorId);

// Pagar cuota
router.put("/:id/pagar", pagarCuota);

//Obtener todas las cuotas
router.get("/", obtenerTodasLasCuotas);

module.exports = router;