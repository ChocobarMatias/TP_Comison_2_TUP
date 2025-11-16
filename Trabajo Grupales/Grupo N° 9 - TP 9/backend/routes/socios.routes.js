import { Router } from 'express';
import {
    getSocios,
    getSocio,
    updateSocio,
    deleteSocio
} from '../controllers/socios.controller.js';
import { autenticarToken } from '../middleware/auth.middleware.js'; 

const router = Router();

router.use(autenticarToken);
router.get('/', getSocios);
router.get('/:id', getSocio);
router.put('/:id', updateSocio);
router.delete('/:id', deleteSocio);

export default router;