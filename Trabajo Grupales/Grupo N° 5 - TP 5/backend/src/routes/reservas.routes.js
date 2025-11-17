const express = require("express");
const router = express.Router();
const { verificarToken, verificarTokenAdmin } = require("../../middleware/auth");

const { getReservas, addReserva, deleteReserva } = require("../controllers/reservas.controller");

router.get("/", getReservas);
router.post("/", verificarToken, addReserva); 
router.post("/admin", verificarTokenAdmin, addReserva); 
router.delete("/:id", verificarTokenAdmin, deleteReserva); 

module.exports = router;
