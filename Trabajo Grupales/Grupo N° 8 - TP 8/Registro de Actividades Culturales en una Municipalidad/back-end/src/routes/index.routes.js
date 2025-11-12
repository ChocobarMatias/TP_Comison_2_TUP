const expresss = require("express");
const router = expresss.Router();

const artistas = require("./artistas.routes");
const auth = require("./auth.routes");
const eventos = require("./eventos.routes");
const lugares = require("./lugares.routes");
const password = require("./password.routes");
const ventas_boletos = require("./ventas_boletos.routes");

router.use("/artistas", artistas);
router.use("/auth", auth);
router.use("/eventos", eventos);
router.use("/lugares", lugares);
router.use("/password", password);
router.use("venta_boletos", ventas_boletos);

module.exports = router
