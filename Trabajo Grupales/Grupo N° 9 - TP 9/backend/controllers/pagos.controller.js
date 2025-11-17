import prisma from '../config/DB.js';

export const listar = async (req, res) => {
    try {
        const pagos = await prisma.pagos.findMany({
            include: {
                membresias: {
                    select: {
                        idMembresia: true,
                        socios: { 
                            select: { idSocio: true, nombre: true, apellido: true } 
                        },
                        deportes: { 
                            select: { idDeporte: true, nombre: true } 
                        }
                    }
                }
            },
            orderBy: { fecha_pago: 'desc' }
        });
        res.json(pagos);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Error al listar pagos' });
    }
};

export const registrar = async (req, res) => {
    const { membresia_id, importe, cuota_mes, cuota_anio, metodo_pago, comentario } = req.body;

    if (!membresia_id || !importe || !cuota_mes || !cuota_anio) {
        return res.status(400).json({ error: 'Datos incompletos (membresia_id, importe, cuota_mes, cuota_anio son requeridos)' });
    }

    try {
        const membresia = await prisma.membresias.findUnique({
            where: { idMembresia: Number(membresia_id) }
        });

        if (!membresia) {
            return res.status(404).json({ error: 'Membresía no encontrada' });
        }

        const newPago = await prisma.pagos.create({
            data: {
                membresia_id: Number(membresia_id),
                importe: parseFloat(importe),
                cuota_mes: Number(cuota_mes),
                cuota_anio: Number(cuota_anio),
                metodo_pago: metodo_pago || null,
                comentario: comentario || null,
                fecha_pago: new Date()
            }
        });
        res.status(201).json(newPago);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Error al registrar el pago' });
    }
};

export const getDeudas = async (req, res) => {
    try {
        const hoy = new Date();
        const mesActual = hoy.getMonth() + 1;
        const anioActual = hoy.getFullYear();

        const deudores = await prisma.membresias.findMany({
            where: {
                activo: true,
                NOT: {
                    pagos: {
                        some: {
                            cuota_mes: mesActual,
                            cuota_anio: anioActual
                        }
                    }
                }
            },
            include: {
                socios: {
                    select: { 
                        idSocio: true, 
                        nombre: true, 
                        apellido: true, 
                        email: true, 
                        telefono: true 
                    }
                },
                deportes: {
                    select: { 
                        idDeporte: true,
                        nombre: true 
                    }
                }
            }
        });

        res.json(deudores);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Error al calcular deudas pendientes' });
    }
};