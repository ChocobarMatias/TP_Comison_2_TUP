const express = require("express");
const router = express.Router();

const { loginAdmin } = require("../controllers/administradores.controller");

router.post("/login", loginAdmin);


module.exports = router;
