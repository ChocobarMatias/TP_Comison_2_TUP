const express = require("express");
const router = express.Router();

const {
  crearPlanPago,
  obtenerPlanesPago,
  obtenerPlanPagoPorId,
  obtenerCuotasPorPlan
} = require("../controllers/planpagoController");

router.get("/", obtenerPlanesPago);
router.get("/:id", obtenerPlanPagoPorId);
router.get("/:id/cuotas", obtenerCuotasPorPlan);
router.post("/", crearPlanPago);

module.exports = router;