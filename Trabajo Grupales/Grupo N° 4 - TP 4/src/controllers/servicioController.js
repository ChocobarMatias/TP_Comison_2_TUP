exports.crearServicio = async (req, res) => {
  try {
    const { nombre, descripcion, precio_total } = req.body;

    if (!nombre || !precio_total) {
      return res.status(400).json({ error: 'Nombre y precio total son obligatorios' });
    }

    // Aquí irá: prisma.servicio.create()

    res.json({
      message: 'Controlador listo para migrar a Prisma (crear servicio)'
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en crearServicio' });
  }
};