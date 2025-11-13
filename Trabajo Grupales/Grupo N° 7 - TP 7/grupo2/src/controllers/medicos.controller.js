const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

// 📋 Obtener todos los médicos activos
const getAllMedicos = async (req, res) => {
  try {
    const medicos = await prisma.medicos.findMany({
      where: {
        IsActive: 1
      },
      include: {
        catMedicos: true, // incluye la categoría médica
        usuarios: true    // incluye datos del usuario vinculado (si existe)
      }
    });
    res.status(200).json(medicos);
  } catch (error) {
    console.error('Error al obtener médicos:', error);
    res.status(500).json({ message: 'Error al obtener los médicos' });
  }
};

// 📋 Mostrar médicos inactivos
const mostrarMedicosInactivos = async (req, res) => {
  try {
    const medicosInactivos = await prisma.medicos.findMany({
      where: {
        IsActive: 0
      },
      include: {
        catMedicos: true,
        usuarios: true
      }
    });
    if (medicosInactivos.length === 0) {
      return res.status(404).json({ message: 'No hay médicos inactivos' });
    }
    res.status(200).json(medicosInactivos);
  } catch (error) {
    console.error('Error al obtener médicos inactivos:', error);
    res.status(500).json({ message: 'Error al obtener los médicos inactivos' });
  }
};

// 📋 Obtener un médico por ID
const getOneMedico = async (req, res) => {
  const id = req.params.id;
  try {
    const medico = await prisma.medicos.findUnique({
      where: { idMedico: Number(id) },
      include: {
        catMedicos: true,
        usuarios: true
      }
    });
    if (!medico) {
      return res.status(404).json({ message: 'Médico no encontrado' });
    }
    res.status(200).json(medico);
  } catch (error) {
    console.error('Error al obtener el médico:', error);
    res.status(500).json({ message: 'Error al obtener el médico' });
  }
};

// 🆕 Crear un nuevo médico
const crearMedico = async (req, res) => {
  const {
    NombreMedico,
    ApellidoMedico,
    FechaNacMedico,
    TelefonoMedico,
    DireccionMedico,
    LocalidadMedico,
    SalarioMedico,
    idUsuario,
    idCatMedico
  } = req.body;

  try {
    const nuevoMedico = await prisma.medicos.create({
      data: {
        NombreMedico,
        ApellidoMedico,
        FechaNacMedico: new Date(FechaNacMedico),
        TelefonoMedico,
        DireccionMedico,
        LocalidadMedico,
        SalarioMedico: Number(SalarioMedico),
        idUsuario: idUsuario ? Number(idUsuario) : null,
        idCatMedico: Number(idCatMedico)
      }
    });
    res.status(201).json({ message: 'Médico creado exitosamente', medico: nuevoMedico });
  } catch (error) {
    console.error('Error al crear el médico:', error);
    res.status(500).json({ message: 'Error al crear el médico' });
  }
};

// ✏️ Actualizar médico
const updateMedico = async (req, res) => {
  const id = req.params.id;
  const {
    NombreMedico,
    ApellidoMedico,
    FechaNacMedico,
    TelefonoMedico,
    DireccionMedico,
    LocalidadMedico,
    SalarioMedico,
    IsActive,
    idUsuario,
    idCatMedico
  } = req.body;

  try {
    const medicoActualizado = await prisma.medicos.update({
      where: { idMedico: Number(id) },
      data: {
        NombreMedico,
        ApellidoMedico,
        FechaNacMedico: new Date(FechaNacMedico),
        TelefonoMedico,
        DireccionMedico,
        LocalidadMedico,
        SalarioMedico: Number(SalarioMedico),
        IsActive,
        idUsuario: idUsuario ? Number(idUsuario) : null,
        idCatMedico: Number(idCatMedico)
      }
    });
    res.status(200).json({ message: 'Médico actualizado exitosamente', medico: medicoActualizado });
  } catch (error) {
    console.error('Error al actualizar el médico:', error);
    res.status(500).json({ message: 'Error al actualizar el médico' });
  }
};

// ❌ Eliminar físicamente un médico
const deleteMedico = async (req, res) => {
  const id = req.params.id;
  try {
    await prisma.medicos.delete({
      where: { idMedico: Number(id) }
    });
    res.status(200).json({ message: 'Médico eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar el médico:', error);
    res.status(500).json({ message: 'Error al eliminar el médico' });
  }
};

// 🚫 Desactivar (baja lógica)
const logicDeleteMedico = async (req, res) => {
  const id = req.params.id;
  try {
    const medicoDesactivado = await prisma.medicos.update({
      where: { idMedico: Number(id) },
      data: { IsActive: 0 }
    });
    res.status(200).json({ message: 'Médico desactivado exitosamente', medico: medicoDesactivado });
  } catch (error) {
    console.error('Error al desactivar el médico:', error);
    res.status(500).json({ message: 'Error al desactivar el médico' });
  }
};

// ✅ Activar médico
const activarMedico = async (req, res) => {
  const id = req.params.id;
  try {
    const medicoActivado = await prisma.medicos.update({
      where: { idMedico: Number(id) },
      data: { IsActive: 1 }
    });
    res.status(200).json({ message: 'Médico activado exitosamente', medico: medicoActivado });
  } catch (error) {
    console.error('Error al activar el médico:', error);
    res.status(500).json({ message: 'Error al activar el médico' });
  }
};

module.exports = {
  getAllMedicos,
  mostrarMedicosInactivos,
  getOneMedico,
  crearMedico,
  updateMedico,
  deleteMedico,
  logicDeleteMedico,
  activarMedico
};
