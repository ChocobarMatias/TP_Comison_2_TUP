import express from 'express';
import { verifyToken } from '../middlewares/auth.middleware.js';
import * as clientes from '../controllers/clientes.js';

const router = express.Router();

router.post('/', verifyToken, clientes.createCliente);

router.get('/', verifyToken, clientes.getClientes);

router.get('/:id', verifyToken, clientes.getClienteById);

router.put('/:id', verifyToken, clientes.updateCliente);

router.delete('/:id', verifyToken, clientes.deleteCliente);

export default router;
