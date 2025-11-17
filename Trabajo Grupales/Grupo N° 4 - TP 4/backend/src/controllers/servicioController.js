const prisma = require("../config/prisma");

// =======================================
// GET /servicios
// =======================================
exports.obtenerServicios = async (req, res) => {
  try {
    const servicios = await prisma.servicios.findMany({
      orderBy: { id: "asc" }
    });

    res.json(servicios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en obtenerServicios" });
  }
};

// =======================================
// GET /servicios/:id
// =======================================
exports.obtenerServicioPorId = async (req, res) => {
  try {
    const { id } = req.params;

    const servicio = await prisma.servicios.findUnique({
      where: { id: Number(id) }
    });

    if (!servicio) {
      return res.status(404).json({ error: "Servicio no encontrado" });
    }

    res.json(servicio);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en obtenerServicioPorId" });
  }
};

// =======================================
// POST /servicios
// =======================================
exports.crearServicio = async (req, res) => {
  try {
    const { nombre, descripcion, precio_total } = req.body;

    if (!nombre || !precio_total) {
      return res
        .status(400)
        .json({ error: "Nombre y precio_total son obligatorios" });
    }

    const nuevo = await prisma.servicios.create({
      data: {
        nombre,
        descripcion,
        precio_total: Number(precio_total),
      },
    });

    res.json({ message: "Servicio creado", servicio: nuevo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en crearServicio" });
  }
};

// =======================================
// PUT /servicios/:id
// =======================================
exports.actualizarServicio = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, descripcion, precio_total } = req.body;

    const existe = await prisma.servicios.findUnique({
      where: { id: Number(id) },
    });

    if (!existe) {
      return res.status(404).json({ error: "Servicio no encontrado" });
    }

    const actualizado = await prisma.servicios.update({
      where: { id: Number(id) },
      data: {
        nombre,
        descripcion,
        precio_total: Number(precio_total),
      },
    });

    res.json({ message: "Servicio actualizado", servicio: actualizado });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en actualizarServicio" });
  }
};

// =======================================
// DELETE /servicios/:id
// =======================================
exports.eliminarServicio = async (req, res) => {
  try {
    const { id } = req.params;

    const existe = await prisma.servicios.findUnique({
      where: { id: Number(id) },
    });

    if (!existe) {
      return res.status(404).json({ error: "Servicio no encontrado" });
    }

    await prisma.servicios.delete({
      where: { id: Number(id) },
    });

    res.json({ message: "Servicio eliminado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en eliminarServicio" });
  }
};
