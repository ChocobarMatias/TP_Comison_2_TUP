const Router = require("express")

const { verificarTokenAdmin } = require("../../middleware/auth");
const router = Router();
const {getActividades, CreateAtividades, updateActividades, deleteActividades} = require("../controllers/actividades.controller")



router.get("/", getActividades)
router.post("/", verificarTokenAdmin, CreateAtividades);
router.put("/:id", verificarTokenAdmin, updateActividades);
router.delete("/:id", verificarTokenAdmin, deleteActividades)

module.exports = router