import Router from 'express';

import {
    traerPacientes,
    traerPacientesActivos,
    traerPacientePorId,
    actualizarPaciente,
    borradoLogicoPaciente
} from '../controllers/pacientes.controller.js'; 

const router = Router();

router.get('/', traerPacientes);
router.get('/activos', traerPacientesActivos);
router.get('/:idPaciente', traerPacientePorId);
router.put('/:idPaciente', actualizarPaciente);
router.delete('/:idPaciente', borradoLogicoPaciente);

export default router;