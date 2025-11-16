const Router = require("express")

const { verificarTokenAdmin } = require("../../middleware/auth");
const router = Router();
const {getActividades, CreateAtividades, updateActividades, deleteActividades, getActividadesHoy} = require("../controllers/actividades.controller")



router.get("/", getActividades)
router.get("/hoy", getActividadesHoy)
router.post("/", verificarTokenAdmin, CreateAtividades);
router.put("/:id", verificarTokenAdmin, updateActividades);
router.delete("/:id", verificarTokenAdmin, deleteActividades)

module.exports = router