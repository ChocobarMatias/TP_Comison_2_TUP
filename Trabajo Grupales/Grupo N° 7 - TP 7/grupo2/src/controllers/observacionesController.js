const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();



const getAllObservaciones = async (req, res) => {
  try {
    const observaciones = await prisma.observaciones.findMany();
    res.status(200).json(observaciones);
  } catch (error) {
    console.error('Error al obtener observaciones:', error);
    res.status(500).json({ message: 'Error al obtener observaciones' });
  }
};



const getOneObservacion = async (req, res) => {
  const id = req.params.id;
  try {
    const observacion = await prisma.observaciones.findUnique({
      where: { idObservacion: Number(id) }
    });

    if (!observacion) {
      return res.status(404).json({ message: 'Observación no encontrada' });
    }

    res.status(200).json(observacion);
  } catch (error) {
    console.error('Error al obtener observación:', error);
    res.status(500).json({ message: 'Error al obtener observación' });
  }
};


const crearObservacion = async (req, res) => {
  const { idTurno, Comentario } = req.body;

  try {
    const nuevaObservacion = await prisma.observaciones.create({
      data: {
        idTurno: Number(idTurno),
        Comentario
      }
    });

    res.status(201).json({
      message: 'Observación creada exitosamente',
      observacion: nuevaObservacion
    });
  } catch (error) {
    console.error('Error al crear observación:', error);
    res.status(500).json({ message: 'Error al crear observación' });
  }
};



const updateObservacion = async (req, res) => {
  const id = req.params.id;
  const { idTurno, Comentario } = req.body;

  try {
    const observacionActualizada = await prisma.observaciones.update({
      where: { idObservacion: Number(id) },
      data: {
        idTurno: Number(idTurno),
        Comentario
      }
    });

    res.status(200).json({
      message: 'Observación actualizada exitosamente',
      observacion: observacionActualizada
    });
  } catch (error) {
    console.error('Error al actualizar observación:', error);
    res.status(500).json({ message: 'Error al actualizar observación' });
  }
};



const deleteObservacion = async (req, res) => {
  const id = req.params.id;

  try {
    await prisma.observaciones.delete({
      where: { idObservacion: Number(id) }
    });

    res.status(200).json({ message: 'Observación eliminada exitosamente' });
  } catch (error) {
    console.error('Error al eliminar observación:', error);
    res.status(500).json({ message: 'Error al eliminar observación' });
  }
};


module.exports = {
  getAllObservaciones,
  getOneObservacion,
  crearObservacion,
  updateObservacion,
  deleteObservacion
};
