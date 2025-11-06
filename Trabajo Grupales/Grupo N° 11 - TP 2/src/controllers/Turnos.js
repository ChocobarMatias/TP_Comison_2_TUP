import { prisma } from '../config/prismo.js';

export const getTurnos = async (req, res) => {
  try {
    const rows = await prisma.turnos.findMany({
      include: {
        clientes: {
          select: {
            nombre: true
          }
        },
        servicios: {
          select: {
            nombre: true,
            precio: true
          }
        }
      },
      orderBy: [
        { fecha: 'asc' },
        { hora: 'asc' }
      ]
    });
    
    const formattedRows = rows.map(t => ({
      id: t.id,
      cliente: t.clientes.nombre,
      servicio: t.servicios.nombre,
      precio: t.servicios.precio,
      fecha: t.fecha,
      hora: t.hora
    }));
    
    res.json(formattedRows);
  } catch (error) {
    console.error('Error al obtener turnos:', error);
    res.status(500).json({ message: 'Error al obtener turnos' });
  }
};

export const getTurnoID = async (req, res) => {
  try {
    const { id } = req.params;
    const turno = await prisma.turnos.findUnique({
      where: { id: parseInt(id) }
    });
    res.json(turno || null);
  } catch (error) {
    console.error('Error al obtener turno:', error);
    res.status(500).json({ message: 'Error al obtener turno' });
  }
};

export const createTurno = async (req, res) => {
  try {
    const { idCliente, idServicio, fecha, hora } = req.body;
    const result = await prisma.turnos.create({
      data: {
        idCliente: parseInt(idCliente),
        idServicio: parseInt(idServicio),
        fecha: new Date(fecha),
        hora
      }
    });
    res.status(201).json({ id: result.id, idCliente, idServicio, fecha, hora });
  } catch (error) {
    console.error('Error al crear turno:', error);
    res.status(500).json({ message: 'Error al crear turno' });
  }
};

export const updateTurno = async (req, res) => {
  try {
    const { id } = req.params;
    const { idCliente, idServicio, fecha, hora } = req.body;

    const result = await prisma.turnos.updateMany({
      where: { id: parseInt(id) },
      data: {
        idCliente: parseInt(idCliente),
        idServicio: parseInt(idServicio),
        fecha: new Date(fecha),
        hora
      }
    });

    if (result.count === 0) {
      return res.status(404).json({ message: 'Turno no encontrado' });
    }

    res.json({ id, idCliente, idServicio, fecha, hora });
  } catch (error) {
    console.error('Error al actualizar turno:', error);
    res.status(500).json({ message: 'Error al actualizar turno' });
  }
};

export const deleteTurno = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await prisma.turnos.deleteMany({
      where: { id: parseInt(id) }
    });

    if (result.count === 0) {
      return res.status(404).json({ message: 'Turno no encontrado' });
    }

    res.json({ message: 'Turno eliminado correctamente' });
  } catch (error) {
    console.error('Error al eliminar turno:', error);
    res.status(500).json({ message: 'Error al eliminar turno' });
  }
};
