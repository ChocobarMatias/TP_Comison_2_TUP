const express = require("express");
const router = express.Router();

const {
  obtenerClientes,
  obtenerClientePorId,
  crearCliente,
  actualizarCliente,
  eliminarCliente
} = require("../controllers/clienteController");

const { obtenerPlanesPorCliente } = require("../controllers/planpagoController");


router.get("/:id/planes", obtenerPlanesPorCliente);

router.get("/", obtenerClientes);
router.get("/:id", obtenerClientePorId);
router.post("/", crearCliente);
router.put("/:id", actualizarCliente);
router.delete("/:id", eliminarCliente);

module.exports = router;
