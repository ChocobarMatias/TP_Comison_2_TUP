import prisma from '../config/DB.js';

export const listar = async (req, res) => {
    try {
        const membresias = await prisma.membresias.findMany({
            where: { activo: true },
            include: {
                socios: {
                    select: {
                        idSocio: true,
                        nombre: true,
                        apellido: true,
                        email: true
                    }
                },
                deportes: {
                    select: {
                        idDeporte: true,
                        nombre: true
                    }
                }
            },
            orderBy: { fecha_alta: 'desc' }
        });
        res.json(membresias);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Error al listar membresías' });
    }
};

export const obtener = async (req, res) => {
    try {
        const { id } = req.params;
        const membresia = await prisma.membresias.findFirst({
            where: { 
                idMembresia: Number(id),
                activo: true
            },
            include: {
                socios: {
                    select: { idSocio: true, nombre: true, apellido: true }
                },
                deportes: {
                    select: { idDeporte: true, nombre: true }
                }
            }
        });

        if (!membresia) {
            return res.status(404).json({ error: 'Membresía no encontrada o inactiva' });
        }
        res.json(membresia);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Error al obtener membresía' });
    }
};

export const crear = async (req, res) => {
    const { socio_id, deporte_id, cuota_mensual } = req.body;

    if (!socio_id || !deporte_id || cuota_mensual === undefined) {
        return res.status(400).json({ error: 'Faltan campos obligatorios (socio_id, deporte_id, cuota_mensual)' });
    }

    try {
        const existing = await prisma.membresias.findFirst({
            where: {
                socio_id: Number(socio_id),
                deporte_id: Number(deporte_id)
            }
        });

        if (existing && existing.activo) {
             return res.status(409).json({ message: 'Este socio ya está inscrito en este deporte.' });
        }

        if (existing && !existing.activo) {
            const membresiaActivada = await prisma.membresias.update({
                where: { idMembresia: existing.idMembresia },
                data: { 
                    activo: true,
                    cuota_mensual: parseFloat(cuota_mensual),
                    fecha_alta: new Date()
                }
            });
             return res.status(200).json({ message: 'Membresía reactivada.', membresia: membresiaActivada });
        }

        const nuevaMembresia = await prisma.membresias.create({
            data: {
                socio_id: Number(socio_id),
                deporte_id: Number(deporte_id),
                cuota_mensual: parseFloat(cuota_mensual),
                fecha_alta: new Date()
            }
        });
        res.status(201).json(nuevaMembresia);
    } catch (err) {
        console.error(err.message);
        if (err.code === 'P2002') {
            return res.status(409).json({ message: 'Error de constraint, es posible que el socio o deporte no exista o la membresía ya exista.' });
        }
        res.status(500).json({ error: 'Error al crear membresía' });
    }
};

export const actualizar = async (req, res) => {
    const { id } = req.params;
    const { cuota_mensual } = req.body;

    if (cuota_mensual === undefined) {
        return res.status(400).json({ error: 'El campo cuota_mensual es requerido' });
    }

    try {
        const result = await prisma.membresias.updateMany({
            where: {
                idMembresia: Number(id),
                activo: true
            },
            data: {
                cuota_mensual: parseFloat(cuota_mensual)
            }
        });

        if (result.count === 0) {
            return res.status(404).json({ error: 'Membresía no encontrada o inactiva' });
        }
        
        const updatedMembresia = await prisma.membresias.findUnique({ where: { idMembresia: Number(id) }});
        res.json({ message: 'Membresía actualizada', membresia: updatedMembresia });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Error al actualizar membresía' });
    }
};

export const eliminar = async (req, res) => {
    const { id } = req.params;

    try {
         const result = await prisma.membresias.updateMany({
            where: {
                idMembresia: Number(id),
                activo: true
            },
            data: {
                activo: false
            }
        });

        if (result.count === 0) {
            return res.status(404).json({ error: 'Membresía no encontrada o ya inactiva' });
        }
        res.json({ message: 'Membresía eliminada (desactivada) exitosamente' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Error al eliminar membresía' });
    }
};