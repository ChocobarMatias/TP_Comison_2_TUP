import express from 'express';
import { verifyToken } from '../middlewares/auth.middleware.js';
const router = express.Router();
import {
  getTurnos,
  getTurnoID,
  createTurno,
  updateTurno,
  deleteTurno
} from '../controllers/Turnos.js';

router.get('/', verifyToken, getTurnos);
router.get('/:id', verifyToken, getTurnoID);
router.post('/crear', verifyToken, createTurno);
router.put('/:id', verifyToken, updateTurno);
router.delete('/:id', verifyToken, deleteTurno);

export default router;
