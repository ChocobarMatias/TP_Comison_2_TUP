import { Router } from 'express';
import { verifyToken } from '../middlewares/auth.middleware.js';

const router = Router();

import {
  getserviciosID,
  getservicios,
  createservicios,
  updateservicios,
  deleteservicios
} from '../controllers/serviciosController.js';

router.get('/', verifyToken, getservicios);
router.get('/:id', verifyToken, getserviciosID);
router.post('/crear', verifyToken, createservicios);
router.put('/editar/:id', verifyToken, updateservicios);
router.delete('/eliminar/:id', verifyToken, deleteservicios);

export default router;