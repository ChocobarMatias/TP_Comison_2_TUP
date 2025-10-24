import Router from 'express';

import {
    borradoLogicoMedico,
    crearMedico,
    actualizarMedico,
    obtenerMedicoPorId,
    obtenerMedicos
} from '../controllers/medicos.controller.js'; 

const router = Router();

router.get('/', obtenerMedicos);
router.get('/:idMedico', obtenerMedicoPorId);
router.post('/', crearMedico);
router.put('/:idMedico', actualizarMedico);
router.delete('/:idMedico', borradoLogicoMedico); 

export default router;