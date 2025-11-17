import { prisma } from '../config/prismo.js';
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
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
};
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
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
};
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
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
};
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
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
};
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
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
};