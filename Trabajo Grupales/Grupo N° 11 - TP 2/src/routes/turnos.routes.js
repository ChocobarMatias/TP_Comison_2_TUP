import express from 'express';
const router = express.Router();
import {
  getTurnos,
  getTurnoID,
  createTurno,
  updateTurno,
  deleteTurno
} from '../controllers/Turnos.js';

router.get('/', getTurnos);
router.get('/:id', getTurnoID);
router.post('/crear', createTurno);
router.put('/:id', updateTurno);
router.delete('/:id', deleteTurno);

export default router;
