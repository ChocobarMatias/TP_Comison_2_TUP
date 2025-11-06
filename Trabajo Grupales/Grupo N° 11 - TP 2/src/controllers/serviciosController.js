// controllers/serviciosController.js
import { prisma } from '../config/prismo.js';

// GET /servicios
export const getservicios = async (req, res) => {
  try {
    const rows = await prisma.servicios.findMany();
    res.json(rows);
  } catch (error) {
    console.error('Error al obtener servicios:', error);
    res.status(500).json({ message: 'Error al obtener servicios' });
  }
};

// GET /servicios/:id
export const getserviciosID = async (req, res) => {
  try {
    const { id } = req.params;
    const servicio = await prisma.servicios.findUnique({
      where: { id: parseInt(id) }
    });
    
    if (!servicio) {
      return res.status(404).json({ message: 'Servicio no encontrado' });
    }
    res.json(servicio);
  } catch (error) {
    console.error('Error al obtener servicio:', error);
    res.status(500).json({ message: 'Error al obtener servicio' });
  }
};

// POST /servicios/crear
export const createservicios = async (req, res) => {
  try {
    const { nombre, precio } = req.body;

    if (!nombre || precio == null) {
      return res.status(400).json({ message: 'Nombre y precio son requeridos' });
    }
    if (Number.isNaN(Number(precio))) {
      return res.status(400).json({ message: 'Precio debe ser numérico' });
    }

    const result = await prisma.servicios.create({
      data: {
        nombre,
        precio: parseFloat(precio)
      }
    });

    res.status(201).json({ id: result.id, nombre, precio });
  } catch (error) {
    console.error('Error al crear servicio:', error);
    res.status(500).json({ message: 'Error al crear servicio' });
  }
};

// PUT /servicios/editar/:id
export const updateservicios = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, precio } = req.body;

    if (precio != null && Number.isNaN(Number(precio))) {
      return res.status(400).json({ message: 'Precio debe ser numérico' });
    }

    const result = await prisma.servicios.updateMany({
      where: { id: parseInt(id) },
      data: {
        nombre,
        precio: parseFloat(precio)
      }
    });

    if (result.count === 0) {
      return res.status(404).json({ message: 'Servicio no encontrado' });
    }

    res.json({ id, nombre, precio });
  } catch (error) {
    console.error('Error al actualizar servicio:', error);
    res.status(500).json({ message: 'Error al actualizar servicio' });
  }
};

// DELETE /servicios/eliminar/:id
export const deleteservicios = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await prisma.servicios.deleteMany({
      where: { id: parseInt(id) }
    });

    if (result.count === 0) {
      return res.status(404).json({ message: 'Servicio no encontrado' });
    }

    res.json({ message: 'Servicio eliminado correctamente' });
  } catch (error) {
    console.error('Error al eliminar servicio:', error);
    res.status(500).json({ message: 'Error al eliminar servicio' });
  }
};
