const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// ==============================
// Obtener todos los alumnos
// ==============================
const getAll = async (req, res) => {
  try {
    const alumnos = await prisma.alumnos.findMany();
    return res.json(alumnos);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error al obtener los alumnos", error: err });
  }
};

// ==============================
// Obtener un alumno por ID
// ==============================
const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const alumno = await prisma.alumnos.findUnique({
      where: { alumno_id: Number(id) },
    });

    if (!alumno) {
      return res.status(404).json({ error: "Alumno no encontrado" });
    }

    return res.json(alumno);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error al obtener el alumno", error: err });
  }
};

// ==============================
// Crear un nuevo alumno
// ==============================
const create = async (req, res) => {
  const { nombre, curso, dni } = req.body;
  try {
    await prisma.alumnos.create({
      data: {
        nombre,
        curso: curso || null,
        dni,
      },
    });
    return res.status(201).json({ message: "Alumno creado con éxito" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error al crear el alumno", error: err });
  }
};

// ==============================
// Actualizar un alumno
// ==============================
const update = async (req, res) => {
  const { id } = req.params;
  const { nombre, curso, dni } = req.body;

  try {
    // Verificar si el alumno existe
    const alumnoExistente = await prisma.alumnos.findUnique({
      where: { alumno_id: Number(id) },
    });

    if (!alumnoExistente) {
      return res.status(404).json({ error: "Alumno no encontrado" });
    }

    await prisma.alumnos.update({
      where: { alumno_id: Number(id) },
      data: { nombre, curso: curso || null, dni },
    });

    return res.json({ message: "Alumno actualizado con éxito" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error al actualizar el alumno", error: err });
  }
};

// ==============================
// Eliminar un alumno
// ==============================
const remove = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.alumnos.delete({
      where: { alumno_id: Number(id) },
    });

    return res.json({ message: "Alumno eliminado con éxito" });
  } catch (err) {
    console.error(err);
    // Si el alumno no existe, Prisma lanza un error de tipo "P2025"
    if (err.code === "P2025") {
      return res.status(404).json({ error: "Alumno no encontrado" });
    }
    return res.status(500).json({ message: "Error al eliminar el alumno", error: err });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};