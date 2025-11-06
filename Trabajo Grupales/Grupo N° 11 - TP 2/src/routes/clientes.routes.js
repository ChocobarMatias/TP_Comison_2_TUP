import express from 'express';
import { verifyToken } from '../middlewares/auth.middleware.js';
import * as clientes from '../controllers/clientes.js';

const router = express.Router();

// ===========================================
// TODAS LAS RUTAS A CONTINUACIÓN REQUIEREN UN TOKEN VÁLIDO
// ===========================================

// POST /api/clientes: Crear un nuevo cliente
router.post('/', verifyToken, clientes.createCliente);

// GET /api/clientes: Listar todos los clientes
router.get('/', verifyToken, clientes.getClientes);

// GET /api/clientes/:id: Obtener un cliente específico
router.get('/:id', verifyToken, clientes.getClienteById);

// PUT /api/clientes/:id: Actualizar un cliente
router.put('/:id', verifyToken, clientes.updateCliente);

// DELETE /api/clientes/:id: Eliminar un cliente
router.delete('/:id', verifyToken, clientes.deleteCliente);

export default router;
