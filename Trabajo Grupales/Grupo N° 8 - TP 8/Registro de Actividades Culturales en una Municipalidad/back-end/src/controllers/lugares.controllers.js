const prisma = require("../config/prisma");

// Obtener todos los lugares activos
const obtenerTodos = async (req, res) => {
  try {
    const lugares = await prisma.lugares.findMany({
      where: { estado_lugar: 1 },
    });
    return res.json(lugares);
  } catch (error) {
    console.error("Error obtener todos los lugares:", error);
    return res.status(500).json({ error: "Error del servidor" });
  }
};

// Obtener un lugar por id_lugar
const obtenerUno = async (req, res) => {
  try {
    const { id_lugar } = req.params;

    const lugar = await prisma.lugares.findFirst({
      where: {
        id_lugar: parseInt(id_lugar),
        estado_lugar: 1,
      },
    });

    if (!lugar) {
      return res.status(404).json({ error: "Lugar no encontrado" });
    }

    return res.json(lugar);
  } catch (error) {
    console.error("Error obtener lugar:", error);
    return res.status(500).json({ error: "Error del servidor" });
  }
};

// Crear un nuevo lugar
const crear = async (req, res) => {
  try {
    const {
      nombre_lugar,
      tipo_lugar,
      direccion_lugar,
      contacto_nombre_lugar,
      contacto_telefono_lugar,
      contacto_email_lugar,
      equipamiento_lugar,
      capacidad_maxima_lugar,
    } = req.body;

    const nuevoLugar = await prisma.lugares.create({
      data: {
        nombre_lugar,
        tipo_lugar: tipo_lugar || null,
        direccion_lugar: direccion_lugar || null,
        contacto_nombre_lugar: contacto_nombre_lugar || null,
        contacto_telefono_lugar: contacto_telefono_lugar || null,
        contacto_email_lugar: contacto_email_lugar || null,
        equipamiento_lugar: equipamiento_lugar || null,
        capacidad_maxima_lugar:
          capacidad_maxima_lugar != null
            ? parseInt(capacidad_maxima_lugar)
            : null,
      },
    });

    return res.status(201).json({
      message: "Lugar creado",
      id_lugar: nuevoLugar.id_lugar,
    });
  } catch (error) {
    console.error("Error crear lugar:", error);
    return res.status(500).json({ error: "Error del servidor" });
  }
};

// Actualizar lugar (solo si está activo)
const actualizar = async (req, res) => {
  try {
    const { id_lugar } = req.params;
    const {
      nombre_lugar,
      tipo_lugar,
      direccion_lugar,
      contacto_nombre_lugar,
      contacto_telefono_lugar,
      contacto_email_lugar,
      equipamiento_lugar,
      capacidad_maxima_lugar,
    } = req.body;

    const actualizado = await prisma.lugares.updateMany({
      where: { id_lugar: parseInt(id_lugar), estado_lugar: 1 },
      data: {
        nombre_lugar,
        tipo_lugar: tipo_lugar || null,
        direccion_lugar: direccion_lugar || null,
        contacto_nombre_lugar: contacto_nombre_lugar || null,
        contacto_telefono_lugar: contacto_telefono_lugar || null,
        contacto_email_lugar: contacto_email_lugar || null,
        equipamiento_lugar: equipamiento_lugar || null,
        capacidad_maxima_lugar:
          capacidad_maxima_lugar != null
            ? parseInt(capacidad_maxima_lugar)
            : null,
      },
    });

    if (actualizado.count === 0) {
      return res.status(404).json({ error: "Lugar no encontrado o inactivo" });
    }

    return res.json({ message: "Lugar actualizado" });
  } catch (error) {
    console.error("Error actualizar lugar:", error);
    return res.status(500).json({ error: "Error del servidor" });
  }
};

// Borrado lógico de lugar
const eliminar = async (req, res) => {
  try {
    const { id_lugar } = req.params;

    const eliminado = await prisma.lugares.updateMany({
      where: { id_lugar: parseInt(id_lugar) },
      data: { estado_lugar: 0 },
    });

    if (eliminado.count === 0) {
      return res.status(404).json({ error: "Lugar no encontrado" });
    }

    return res.json({ message: "Lugar eliminado (borrado lógico)" });
  } catch (error) {
    console.error("Error eliminar lugar:", error);
    return res.status(500).json({ error: "Error del servidor" });
  }
};

module.exports = {
  obtenerTodos,
  obtenerUno,
  crear,
  actualizar,
  eliminar,
};
