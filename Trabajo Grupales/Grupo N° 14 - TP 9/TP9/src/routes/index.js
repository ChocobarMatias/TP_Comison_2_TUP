import express from "express";

import asignacionesRoutes from "./asignaciones.routes.js";
import deportesRoutes from "./deportes.routes.js";
import sociosRoutes from "./socios.routes.js";
import authRoutes from "./auth.routes.js";
import pagosRoutes from "./pagos.routes.js";

const router = express.Router();

router.use("/asignaciones", asignacionesRoutes);    
router.use("/deportes", deportesRoutes);
router.use("/socios", sociosRoutes);
router.use("/auth", authRoutes);
router.use("/pagos", pagosRoutes);