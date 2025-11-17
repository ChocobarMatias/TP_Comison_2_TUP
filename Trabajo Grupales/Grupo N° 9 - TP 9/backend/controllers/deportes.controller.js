import prisma from '../config/DB.js';

export const listar = async (req, res) => {
    try {
        const deportes = await prisma.deportes.findMany({
            where: { activo: true }, 
            orderBy: { idDeporte: 'desc' }
        });
        res.json(deportes);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Error al listar deportes' });
    }
};

export const obtener = async (req, res) => {
    try {
        const { id } = req.params;
        const deporte = await prisma.deportes.findFirst({ 
            where: { 
                idDeporte: Number(id), 
                activo: true           
            }
        });

        if (!deporte) {
            return res.status(404).json({ error: 'Deporte no encontrado o inactivo' });
        }
        res.json(deporte);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Error al obtener deporte' });
    }
};

export const crear = async (req, res) => {
    const { nombre, descripcion } = req.body;
    if (!nombre) {
        return res.status(400).json({ error: 'Nombre es requerido' });
    }
        
    try {
        const nuevoDeporte = await prisma.deportes.create({
            data: {
                nombre,
                descripcion: descripcion || null
            }
        });
        res.status(201).json(nuevoDeporte);
    } catch (err) {
        console.error(err.message);
        if (err.code === 'P2002') {
            return res.status(409).json({ error: 'El nombre de este deporte ya existe' });
        }
        res.status(500).json({ error: 'Error al crear deporte' });
    }
};

export const actualizar = async (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion } = req.body;

    if (!nombre) {
         return res.status(400).json({ error: 'El nombre es requerido' });
    }

    try {
        const deporteActualizado = await prisma.deportes.updateMany({ 
            where: { 
                idDeporte: Number(id), 
                activo: true 
            },
            data: {
                nombre,
                descripcion: descripcion || null
            }
        });

        if (deporteActualizado.count === 0) {
            return res.status(404).json({ error: 'Deporte no encontrado o inactivo' });
        }
        
        const updatedDeporte = await prisma.deportes.findUnique({ where: { idDeporte: Number(id) } });
        res.json(updatedDeporte);

    } catch (err) {
        console.error(err.message);
        if (err.code === 'P2002') {
             return res.status(409).json({ error: 'El nombre de este deporte ya existe' });
        }
        res.status(500).json({ error: 'Error al actualizar deporte' });
    }
};

export const eliminar = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await prisma.deportes.updateMany({
            where: { 
                idDeporte: Number(id), 
                activo: true 
            },
            data: {
                activo: false 
            }
        });

        if (result.count === 0) {
            return res.status(404).json({ message: 'Deporte no encontrado o ya inactivo.' });
        } 
        
        res.status(200).json({ message: 'Deporte desactivado (borrado lógico) exitosamente' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Error al eliminar deporte' });
    }
};