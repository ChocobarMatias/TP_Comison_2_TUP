import { Router } from 'express';

const router = Router();

import {
  getserviciosID,
  getservicios,
  createservicios,
  updateservicios,
  deleteservicios
} from '../controllers/serviciosController.js';

router.get('/', getservicios);
router.get('/:id', getserviciosID);
router.post('/crear', createservicios);
router.put('/editar/:id', updateservicios);
router.delete('/eliminar/:id', deleteservicios);

export default router;