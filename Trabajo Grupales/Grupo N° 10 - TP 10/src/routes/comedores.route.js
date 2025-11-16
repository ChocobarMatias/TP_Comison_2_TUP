import express from 'express';
import { deleteUnComedor, getAllComedores, getUnComedor, createNewComedor, modificateComedor } from '../controllers/comedores.controller.js';
import { verificarToken } from '../middleware/verificarToken.js';

const route = express.Router();

route.get('/',verificarToken, getAllComedores);
route.get('/:id',getUnComedor)
route.delete('/:id',deleteUnComedor)
route.post('/',createNewComedor)
route.put('/:id',modificateComedor)

export default route;
