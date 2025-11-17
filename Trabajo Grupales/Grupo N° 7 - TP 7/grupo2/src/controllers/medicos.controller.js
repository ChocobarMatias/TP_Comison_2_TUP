const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();


const getMedicosPorCategoria = async (req, res) => {
  console.log("➡️ Entró a getMedicosPorCategoria");

  const id = Number(req.params.idCat);
  console.log("🟦 ID recibido:", id);

  try {
    const medicos = await prisma.medicos.findMany({
      where: {
        idCatMedico: id,
        IsActive: 1
      },
      include: {
        catMedico: true,
        usuarios: true
      }
    });

    if (!medicos || medicos.length === 0) {
      
      return res.status(200).json([]);
    }

    
    res.status(200).json(medicos);

  } catch (error) {
    console.error("❌ ERROR:", error);
    return res.status(500).json({
      ok: false,
      message: "Error al obtener médicos por categoría",
      error: error.message
    });
  }
};


const getAllMedicos = async (req, res) => {
  try {
    const medicos = await prisma.medicos.findMany({
      where: { IsActive: 1 },
      include: {
        catMedico: { select: { idCatMedico: true, NombreCat: true } },
        usuarios: { select: { idUsuario: true, MailUsuario: true, RolUsuario: true, IsActive: true } }
      }
    });

    
    res.status(200).json(medicos);

  } catch (error) {
    console.error("❌ ERROR obteniendo todos los médicos:", error);
    res.status(500).json({ message: 'Error al obtener los médicos', error: error.message });
  }
};




const mostrarMedicosInactivos = async (req, res) => {
  try {
    const medicosInactivos = await prisma.medicos.findMany({
      where: { IsActive: 0 },
      include: {
        catMedico: true,
        usuarios: true
      }
    });

    if (medicosInactivos.length === 0) {
      return res.status(404).json({ message: 'No hay médicos inactivos' });
    }

    res.status(200).json(medicosInactivos);

  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los médicos inactivos' });
  }
};


const getOneMedico = async (req, res) => {
  const id = Number(req.params.id);
  try {
    const medico = await prisma.medicos.findUnique({
      where: { idMedico: id },
      include: {
        catMedico: true,
        usuarios: true
      }
    });

    if (!medico) {
      return res.status(404).json({ message: 'Médico no encontrado' });
    }

    res.status(200).json(medico);

  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el médico' });
  }
};


const crearMedico = async (req, res) => {
  const data = req.body;

  try {
    const nuevoMedico = await prisma.medicos.create({
      data: {
        NombreMedico: data.NombreMedico,
        ApellidoMedico: data.ApellidoMedico,
       
        TelefonoMedico: data.TelefonoMedico || "0000-000000",
        DireccionMedico: data.DireccionMedico || "Sin Dirección",
        IsActive: 1,
        idUsuario: data.idUsuario ? Number(data.idUsuario) : null,
        idCatMedico: Number(data.idCatMedico)
      }
    });

    res.status(201).json(nuevoMedico);
  } catch (error) {
    console.error("❌ ERROR al crear médico:", error);
    res.status(500).json({ message: "Error al crear médico", error: error.message });
  }
};



const updateMedico = async (req, res) => {
  const id = Number(req.params.id);
  const data = req.body;

  try {
    const medicoActualizado = await prisma.medicos.update({
      where: { idMedico: id },
      data: {
        ...data,
        FechaNacMedico: new Date(data.FechaNacMedico),
        SalarioMedico: Number(data.SalarioMedico),
        idUsuario: data.idUsuario ? Number(data.idUsuario) : null,
        idCatMedico: Number(data.idCatMedico)
      }
    });

    res.status(200).json(medicoActualizado);

  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar médico' });
  }
};


const deleteMedico = async (req, res) => {
  const id = Number(req.params.id);
  try {
    await prisma.medicos.delete({ where: { idMedico: id } });
    res.status(200).json({ message: 'Médico eliminado' });

  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar médico' });
  }
};


const logicDeleteMedico = async (req, res) => {
  const id = Number(req.params.id);
  try {
    const medico = await prisma.medicos.update({
      where: { idMedico: id },
      data: { IsActive: 0 }
    });

    res.status(200).json(medico);

  } catch (error) {
    res.status(500).json({ message: 'Error al desactivar médico' });
  }
};


const activarMedico = async (req, res) => {
  const id = Number(req.params.id);
  try {
    const medico = await prisma.medicos.update({
      where: { idMedico: id },
      data: { IsActive: 1 }
    });

    res.status(200).json(medico);

  } catch (error) {
    res.status(500).json({ message: 'Error al activar médico' });
  }
};

module.exports = {
  getMedicosPorCategoria,
  getAllMedicos,
  mostrarMedicosInactivos,
  getOneMedico,
  crearMedico,
  updateMedico,
  deleteMedico,
  logicDeleteMedico,
  activarMedico
};
