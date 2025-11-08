const express = require("express");
const router = express.Router();

const { recover, reset } = require("../controllers/authPassword.Controller");
const {
  recoverValidation,
  resetValidation,
} = require("../validators/authPassword.validator");
const validateInput = require("../middlewares/validateInput");

router.post("/recover", recoverValidation, validateInput, recover);
router.post("/reset/:token", resetValidation, validateInput, reset);

module.exports = router;
