const db = require("../config/prisma");

// Obtener todos los alumnos
const getAll = async (req, res) => {
  try {
    const rows = await db.$queryRaw`SELECT * FROM alumnos`;
    return res.json(rows);
  } catch (err) {
    return res.status(500).json(err);
  }
};

// Obtener un alumno por ID
const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const rows = await db.$queryRaw`SELECT * FROM alumnos WHERE alumno_id = ${Number(id)}`;
    if (!rows || rows.length === 0) {
      return res.status(404).json({ error: "Alumno no encontrado" });
    }
    return res.json(rows[0]);
  } catch (err) {
    return res.status(500).json(err);
  }
};

// Crear un nuevo alumno
const create = async (req, res) => {
  const { nombre, curso, dni } = req.body;
  try {
    await db.$executeRaw`INSERT INTO alumnos (nombre, curso, dni) VALUES (${nombre}, ${curso || null}, ${dni})`;
    return res.status(201).json({ message: "Alumno creado con exito" });
  } catch (err) {
    return res.status(500).json(err);
  }
};

// Actualizar un alumno
const update = async (req, res) => {
  const { id } = req.params;
  const { nombre, curso, dni } = req.body;
  try {
    const result = await db.$executeRaw`UPDATE alumnos SET nombre=${nombre}, curso=${curso || null}, dni=${dni} WHERE alumno_id=${Number(id)}`;
    // $executeRaw usually returns affected row count or driver-specific result; assume success if no error
    return res.json({ message: "Alumno actualizado con exito" });
  } catch (err) {
    // Could map specific errors to 404 if needed by querying first
    return res.status(500).json(err);
  }
};

// Eliminar un alumno
const remove = async (req, res) => {
  const { id } = req.params;
  try {
    await db.$executeRaw`DELETE FROM alumnos WHERE alumno_id=${Number(id)}`;
    return res.json({ message: "Alumno eliminado con exito" });
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
