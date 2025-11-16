const express = require("express");
const router = express.Router();

const { pagarCuota } = require("../controllers/coutaController.js");

router.put("/:id/pagar", pagarCuota);

module.exports = router;
