const Router = require("express")

const { verificarTokenAdmin } = require("../../middleware/auth");
const router = Router();
const {getActividades, CreateAtividades, updateActividades, deleteActividades, getActividadesHoy} = require("../controllers/actividades.controller")



router.get("/", getActividades)
router.get("/hoy", getActividadesHoy)
router.post("/", CreateAtividades);
router.put("/:id", updateActividades);
router.delete("/:id", deleteActividades)

module.exports = router