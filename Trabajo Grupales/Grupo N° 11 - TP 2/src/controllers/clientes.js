// src/controllers/clientes.controller.js
import { prisma } from '../config/prismo.js';

// ------------------------------------------------------------------
// 1. CREAR CLIENTE (POST /api/clientes)
// ------------------------------------------------------------------
export const createCliente = async (req, res) => {
    const user_id = req.user.id;
    const { nombre, apellido, telefono } = req.body;

    if (!nombre || !apellido) {
        return res.status(400).json({ message: 'Nombre y apellido son requeridos.' });
    }

    try {
        const result = await prisma.clientes.create({
            data: {
                user_id,
                nombre,
                apellido,
                telefono
            }
        });
        
        res.status(201).json({ 
            message: 'Cliente creado exitosamente.', 
            id: result.id,
            creadoPor: user_id
        });

    } catch (error) {
        console.error("Error al crear cliente:", error);
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
};

// ------------------------------------------------------------------
// 2. LISTAR TODOS LOS CLIENTES DEL EMPLEADO LOGUEADO (GET /api/clientes)
// ------------------------------------------------------------------
export const getClientes = async (req, res) => {
    const user_id = req.user.id;

    try {
        const clientes = await prisma.clientes.findMany({
            where: {
                user_id
            },
            select: {
                id: true,
                nombre: true,
                apellido: true,
                telefono: true
            }
        });
        
        res.status(200).json(clientes);
    } catch (error) {
        console.error("Error al listar clientes:", error);
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
};

// ------------------------------------------------------------------
// 3. OBTENER UN CLIENTE POR ID (GET /api/clientes/:id)
// ------------------------------------------------------------------
export const getClienteById = async (req, res) => {
    const { id } = req.params;
    const user_id = req.user.id;

    try {
        const cliente = await prisma.clientes.findFirst({
            where: {
                id: parseInt(id),
                user_id
            },
            select: {
                id: true,
                nombre: true,
                apellido: true,
                telefono: true
            }
        });
        
        if (!cliente) {
            return res.status(404).json({ message: 'Cliente no encontrado o no autorizado.' });
        }

        res.status(200).json(cliente);
    } catch (error) {
        console.error("Error al obtener cliente:", error);
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
};

// ------------------------------------------------------------------
// 4. ACTUALIZAR CLIENTE (PUT /api/clientes/:id)
// ------------------------------------------------------------------
export const updateCliente = async (req, res) => {
    const { id } = req.params;
    const user_id = req.user.id;
    const { nombre, apellido, telefono } = req.body;

    if (!nombre || !apellido) {
        return res.status(400).json({ message: 'Nombre y apellido son requeridos para la actualización.' });
    }

    try {
        const cliente = await prisma.clientes.updateMany({
            where: {
                id: parseInt(id),
                user_id
            },
            data: {
                nombre,
                apellido,
                telefono
            }
        });
        
        if (cliente.count === 0) {
            return res.status(404).json({ message: 'Cliente no encontrado o no autorizado para actualizar.' });
        }

        res.status(200).json({ message: 'Cliente actualizado correctamente.' });

    } catch (error) {
        console.error("Error al actualizar cliente:", error);
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
};

// ------------------------------------------------------------------
// 5. ELIMINAR CLIENTE (DELETE /api/clientes/:id)
// ------------------------------------------------------------------
export const deleteCliente = async (req, res) => {
    const { id } = req.params;
    const user_id = req.user.id;

    try {
        const cliente = await prisma.clientes.deleteMany({
            where: {
                id: parseInt(id),
                user_id
            }
        });

        if (cliente.count === 0) {
            return res.status(404).json({ message: 'Cliente no encontrado o no autorizado para eliminar.' });
        }

        res.status(200).json({ message: 'Cliente eliminado correctamente.' });

    } catch (error) {
        console.error("Error al eliminar cliente:", error);
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
};