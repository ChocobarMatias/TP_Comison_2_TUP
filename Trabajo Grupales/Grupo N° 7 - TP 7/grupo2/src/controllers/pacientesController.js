const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();


const getAllPacientes = async (req, res) => {
  try {
    const pacientes = await prisma.pacientes.findMany({
      where: { IsActive: 1 },
    });
    res.status(200).json(pacientes);
  } catch (error) {
    console.error('Error al obtener pacientes:', error);
    res.status(500).json({ message: 'Error al obtener los pacientes' });
  }
};


const mostrarPacientesInactivos = async (req, res) => {
  try {
    const pacientesInactivos = await prisma.pacientes.findMany({
      where: { IsActive: 0 },
    });

    if (pacientesInactivos.length === 0) {
      return res.status(404).json({ message: 'No hay pacientes inactivos' });
    }

    res.status(200).json(pacientesInactivos);
  } catch (error) {
    console.error('Error al obtener los pacientes inactivos:', error);
    res.status(500).json({ message: 'Error al obtener los pacientes inactivos' });
  }
};


const getOnePaciente = async (req, res) => {
  const id = req.params.id;

  try {
    const paciente = await prisma.pacientes.findUnique({
      where: { idPaciente: Number(id) },
    });

    if (!paciente) {
      return res.status(404).json({ message: 'Paciente no encontrado' });
    }

    res.status(200).json(paciente);
  } catch (error) {
    console.error('Error al obtener el paciente:', error);
    res.status(500).json({ message: 'Error al obtener el paciente' });
  }
};


const crearPaciente = async (req, res) => {
  const {
    NombrePaciente,
    ApellidoPaciente,
    FechaNacPaciente,
    TelefonoPaciente,
    DireccionPaciente,
    SexoPaciente,
    idUsuario,
  } = req.body;

  try {
    const nuevoPaciente = await prisma.pacientes.create({
      data: {
        NombrePaciente,
        ApellidoPaciente,
        FechaNacPaciente: new Date(FechaNacPaciente),
        TelefonoPaciente,
        DireccionPaciente,
        SexoPaciente,
        idUsuario: idUsuario ? Number(idUsuario) : null,
      },
    });

    res.status(201).json({
      message: 'Paciente creado exitosamente',
      paciente: nuevoPaciente,
    });
  } catch (error) {
    console.error('Error al crear el paciente:', error);
    res.status(500).json({ message: 'Error al crear el paciente' });
  }
};


const updatePaciente = async (req, res) => {
  const id = req.params.id;
  const {
    NombrePaciente,
    ApellidoPaciente,
    FechaNacPaciente,
    TelefonoPaciente,
    DireccionPaciente,
    SexoPaciente,
    IsActive,
    idUsuario,
  } = req.body;

  try {
    const pacienteActualizado = await prisma.pacientes.update({
      where: { idPaciente: Number(id) },
      data: {
        NombrePaciente,
        ApellidoPaciente,
        FechaNacPaciente: new Date(FechaNacPaciente),
        TelefonoPaciente,
        DireccionPaciente,
        SexoPaciente,
        IsActive,
        idUsuario: idUsuario ? Number(idUsuario) : null,
      },
    });

    res.status(200).json({
      message: 'Paciente actualizado exitosamente',
      paciente: pacienteActualizado,
    });
  } catch (error) {
    console.error('Error al actualizar el paciente:', error);
    res.status(500).json({ message: 'Error al actualizar el paciente' });
  }
};


const deletePaciente = async (req, res) => {
  const id = req.params.id;

  try {
    await prisma.pacientes.delete({
      where: { idPaciente: Number(id) },
    });

    res.status(200).json({ message: 'Paciente eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar el paciente:', error);
    res.status(500).json({ message: 'Error al eliminar el paciente' });
  }
};


const logicDeletePaciente = async (req, res) => {
  const id = req.params.id;

  try {
    const pacienteDesactivado = await prisma.pacientes.update({
      where: { idPaciente: Number(id) },
      data: { IsActive: 0 },
    });

    res.status(200).json({
      message: 'Paciente desactivado exitosamente',
      paciente: pacienteDesactivado,
    });
  } catch (error) {
    console.error('Error al desactivar el paciente:', error);
    res.status(500).json({ message: 'Error al desactivar el paciente' });
  }
};


const activarPaciente = async (req, res) => {
  const id = req.params.id;

  try {
    const pacienteActivado = await prisma.pacientes.update({
      where: { idPaciente: Number(id) },
      data: { IsActive: 1 },
    });

    res.status(200).json({
      message: 'Paciente activado exitosamente',
      paciente: pacienteActivado,
    });
  } catch (error) {
    console.error('Error al activar el paciente:', error);
    res.status(500).json({ message: 'Error al activar el paciente' });
  }
};

module.exports = {
  getAllPacientes,
  mostrarPacientesInactivos,
  getOnePaciente,
  crearPaciente,
  updatePaciente,
  deletePaciente,
  logicDeletePaciente,
  activarPaciente,
};
