const express = require("express");
const router = express.Router();
const { verificarToken, verificarTokenAdmin } = require("../../middleware/auth");

const { getReservas, addReserva, deleteReserva } = require("../controllers/reservas.controller");

router.get("/", getReservas);
router.post("/", addReserva); 
router.delete("/:id", deleteReserva); 

module.exports = router;
