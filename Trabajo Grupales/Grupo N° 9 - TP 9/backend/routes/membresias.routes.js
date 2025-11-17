import { Router } from 'express';
import {
    listar,
    obtener,
    crear,
    actualizar,
    eliminar
} from '../controllers/membresias.controller.js';
import { autenticarToken } from '../middleware/auth.middleware.js';

const router = Router();

router.use(autenticarToken);
router.get('/', listar);
router.get('/:id', obtener);
router.post('/', crear);
router.put('/:id', actualizar);
router.delete('/:id', eliminar);

export default router;