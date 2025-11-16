import { Router } from 'express';
import {
    listar,
    registrar,
    getDeudas
} from '../controllers/pagos.controller.js';
import { autenticarToken } from '../middleware/auth.middleware.js'; 

const router = Router();

router.use(autenticarToken);
router.get('/', listar);
router.post('/', registrar);
router.get('/deudas', getDeudas);

export default router;