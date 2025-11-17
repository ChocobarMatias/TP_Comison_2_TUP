const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();



const getAllTurnos = async (req, res) => {
  try {
    const turnos = await prisma.turnos.findMany();
    res.status(200).json(turnos);
  } catch (error) {
    console.error('Error al obtener los turnos:', error);
    res.status(500).json({ message: 'Error al obtener los turnos' });
  }
};



const getOneTurno = async (req, res) => {
  const id = req.params.id;
  try {
    const turno = await prisma.turnos.findUnique({
      where: { idTurno: Number(id) }
    });

    if (!turno) {
      return res.status(404).json({ message: 'Turno no encontrado' });
    }

    res.status(200).json(turno);
  } catch (error) {
    console.error('Error al obtener el turno:', error);
    res.status(500).json({ message: 'Error al obtener el turno' });
  }
};



const crearTurno = async (req, res) => {
  
  const { FechaRequeridaTurno, HorarioRequeridoTurno, idPaciente, idMedico } = req.body;

  if (!FechaRequeridaTurno || !HorarioRequeridoTurno || !idPaciente || !idMedico) {
    return res.status(400).json({ message: "Faltan datos obligatorios" });
  }

  try {
    const nuevoTurno = await prisma.turnos.create({
  data: {
    FechaRequeridaTurno: new Date(FechaRequeridaTurno),
    HorarioRequeridoTurno: new Date(HorarioRequeridoTurno),
    EstadoTurno: "Pendiente",
    idPaciente: Number(idPaciente),
    idMedico: Number(idMedico),
  },
});


    res.status(201).json({ message: "Turno creado", turno: nuevoTurno });
  } catch (error) {
    console.error("Error al crear el turno:", error);
    res.status(500).json({ message: "Error al crear el turno" });
  }
};




const updateTurno = async (req, res) => {
  const id = req.params.id;
  const { FechaRequeridaTurno, HorarioRequeridoTurno, EstadoTurno, idPaciente, idMedico } = req.body;

  try {
    const turnoActualizado = await prisma.turnos.update({
      where: { idTurno: Number(id) },
      data: {
        FechaRequeridaTurno: new Date(FechaRequeridaTurno),
        HorarioRequeridoTurno: new Date(HorarioRequeridoTurno),
        EstadoTurno,
        idPaciente: Number(idPaciente),
        idMedico: Number(idMedico)
      }
    });

    res.status(200).json({
      message: 'Turno actualizado exitosamente',
      turno: turnoActualizado
    });
  } catch (error) {
    console.error('Error al actualizar el turno:', error);
    res.status(500).json({ message: 'Error al actualizar el turno' });
  }
};



const deleteTurno = async (req, res) => {
  const id = req.params.id;

  try {
    await prisma.turnos.delete({
      where: { idTurno: Number(id) }
    });

    res.status(200).json({ message: 'Turno eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar el turno:', error);
    res.status(500).json({ message: 'Error al eliminar el turno' });
  }
};



const getTurnosPorMedico = async (req, res) => {
  const idMedico = req.params.idMedico;
  try {
    const turnos = await prisma.turnos.findMany({
      where: { idMedico: Number(idMedico) }
    });

    if (turnos.length === 0) {
      return res.status(404).json({ message: 'No hay turnos para este médico' });
    }

    res.status(200).json(turnos);
  } catch (error) {
    console.error('Error al obtener turnos por médico:', error);
    res.status(500).json({ message: 'Error al obtener los turnos del médico' });
  }
};



const getTurnosPorPaciente = async (req, res) => {
  const idPaciente = req.params.idPaciente;
  try {
    const turnos = await prisma.turnos.findMany({
      where: { idPaciente: Number(idPaciente) }
    });

    if (turnos.length === 0) {
      return res.status(404).json({ message: 'No hay turnos para este paciente' });
    }

    res.status(200).json(turnos);
  } catch (error) {
    console.error('Error al obtener turnos por paciente:', error);
    res.status(500).json({ message: 'Error al obtener los turnos del paciente' });
  }
};


module.exports = {
  getAllTurnos,
  getOneTurno,
  crearTurno,
  updateTurno,
  deleteTurno,
  getTurnosPorMedico,
  getTurnosPorPaciente
};
