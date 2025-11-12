
const prisma = require("../config/prisma");

//  Obtener todos los préstamos
const getAll = async (req, res) => {
  try {
    const prestamos = await prisma.prestamos.findMany({
      orderBy: { prestamo_id: 'asc' },
     
    });
    return res.json(prestamos);
  } catch (err) {
    return res.status(500).json({ message: "Error al obtener préstamos", error: String(err) });
  }
};

// Obtener un préstamo por ID
const getById = async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (!id) return res.status(400).json({ error: "ID inválido" });

    const prestamo = await prisma.prestamos.findUnique({
      where: { prestamo_id: id },
      
    });

    if (!prestamo) {
      return res.status(404).json({ error: "Prestamo no encontrado" });
    }

    return res.json(prestamo);
  } catch (err) {
    return res.status(500).json({ message: "Error al obtener préstamo", error: String(err) });
  }
};

//  Crear un nuevo préstamo
const create = async (req, res) => {
  try {
    const { alumno_id, libro_id, fecha_prestamo, fecha_devolucion, estado } = req.body;

    await prisma.prestamos.create({
      data: {
        alumno_id,
        libro_id,
        fecha_prestamo,               
        fecha_devolucion: fecha_devolucion || null,
        estado: estado || "prestado",
      },
    });

    return res.status(201).json({ message: "Prestamo creado con exito" });
  } catch (err) {
    return res.status(500).json({ message: "Error al crear préstamo", error: String(err) });
  }
};

//  Actualizar un préstamo
const update = async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (!id) return res.status(400).json({ error: "ID inválido" });

    const { alumno_id, libro_id, fecha_prestamo, fecha_devolucion, estado } = req.body;

  
    const existe = await prisma.prestamos.findUnique({ where: { prestamo_id: id } });
    if (!existe) return res.status(404).json({ error: "Prestamo no encontrado" });

    await prisma.prestamos.update({
      where: { prestamo_id: id },
      data: {
        alumno_id,
        libro_id,
        fecha_prestamo,
        fecha_devolucion: fecha_devolucion || null,
        estado: estado || "prestado",
      },
    });

    return res.json({ message: "Prestamo actualizado con exito" });
  } catch (err) {
    return res.status(500).json({ message: "Error al actualizar préstamo", error: String(err) });
  }
};

//  Eliminar un préstamo
const remove = async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (!id) return res.status(400).json({ error: "ID inválido" });

 
    const existe = await prisma.prestamos.findUnique({ where: { prestamo_id: id } });
    if (!existe) return res.status(404).json({ error: "Prestamo no encontrado" });

    await prisma.prestamos.delete({ where: { prestamo_id: id } });

    return res.json({ message: "Prestamo eliminado con exito" });
  } catch (err) {
    return res.status(500).json({ message: "Error al eliminar préstamo", error: String(err) });
  }
};

module.exports = { getAll, getById, create, update, remove };
