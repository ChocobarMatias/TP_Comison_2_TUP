const express = require(`express`);
const router = express.Router()
const {solicitarReset,resetPassword} = require("../controllers/auth.controller");

router.post(`solicitar-reset`, solicitarReset);
router.post(`reset-password`, resetPassword);

module.exports = router;