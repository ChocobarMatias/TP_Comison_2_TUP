import { Router } from "express";
const router = Router()
import comedoresRoutes from "./comedores.route.js";
import donadoresRoutes from "./donadores.route.js";
import productosRoutes from "./productos.route.js";
import entregasRoutes from "./entregas.route.js";
import usuariosRoutes from "./usuarios.routes.js";
import loginRoutes from "./login.route.js";
import recuperoPassRoutes from "./recuperoPass.route.js";

router.use("/usuario", usuariosRoutes)
router.use("comedores",comedoresRoutes)
router.use("/dondaroes",donadoresRoutes)
router.use("/productos",productosRoutes)
router.use("/entregas",entregasRoutes)
router.use("/login",loginRoutes)
router.use("/recuperoPass",recuperoPassRoutes)


export default router