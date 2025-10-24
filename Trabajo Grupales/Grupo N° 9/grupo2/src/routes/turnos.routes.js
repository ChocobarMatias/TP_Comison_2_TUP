import { Router } from "express";
import { cancelarTurno, solicitarTurno, traerTurnosPorFecha } from "../controllers/turnos.controller.js"; 

const router = Router();

router.post('/', solicitarTurno); 
router.get('/fecha', traerTurnosPorFecha);
router.put('/:idTurno/cancelar', cancelarTurno);

export default router;