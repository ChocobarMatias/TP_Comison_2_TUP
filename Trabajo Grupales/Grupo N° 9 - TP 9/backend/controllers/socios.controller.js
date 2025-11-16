import prisma from '../config/DB.js';

const socioSelect = {
    idSocio: true,
    nombre: true,
    apellido: true,
    dni: true,
    telefono: true,
    email: true,
    fecha_alta: true,
    activo: true,
    rol: true
};

export const getSocios = async (req, res) => {
    try {
        const socios = await prisma.socios.findMany({
            where: { activo: true },
            select: socioSelect
        });
        res.json(socios);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener socios' });
    }
};

export const getSocio = async (req, res) => {
    try {
        const { id } = req.params;
        const socio = await prisma.socios.findFirst({
            where: { 
                idSocio: Number(id),
                activo: true 
            },
            select: socioSelect
        });

        if (!socio) {
            return res.status(404).json({ message: 'Socio no encontrado o inactivo' });
        }
        res.json(socio);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener socio' });
    }
};

export const updateSocio = async (req, res) => {
    const { id } = req.params;
    const { nombre, apellido, telefono, email } = req.body;

    if (!nombre || !apellido || !telefono || !email) {
         return res.status(400).json({ message: 'Faltan campos obligatorios (nombre, apellido, telefono, email)' });
    }

    try {
        const result = await prisma.socios.updateMany({
            where: { 
                idSocio: Number(id),
                activo: true
            },
            data: {
                nombre,
                apellido,
                telefono,
                email
            }
        });

        if (result.count === 0) {
            return res.status(404).json({ message: 'Socio no encontrado o inactivo' });
        }
        
        const updatedSocio = await prisma.socios.findUnique({ 
            where: { idSocio: Number(id) },
            select: socioSelect 
        });
        res.json(updatedSocio);

    } catch (error) {
        console.error(error);
        if (error.code === 'P2002' && error.meta?.target?.includes('email')) {
             return res.status(409).json({ message: 'El email ya está en uso por otro socio.' });
        }
        res.status(500).json({ message: 'Error al actualizar socio' });
    }
};

export const deleteSocio = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await prisma.socios.updateMany({
            where: { 
                idSocio: Number(id),
                activo: true
            },
            data: {
                activo: false
            }
        });

        if (result.count === 0) {
            return res.status(404).json({ message: 'Socio no encontrado o ya inactivo' });
        }
        res.status(200).json({ message: 'Socio desactivado (borrado lógico) exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al desactivar socio' });
    }
};