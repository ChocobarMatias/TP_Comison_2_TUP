exports.crearCliente = async (req, res) => {
  try {
    const { nombre, apellido, email } = req.body;

    if (!nombre  || !apellido || !email) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    // Aquí luego irá: prisma.cliente.create()

    res.json({
      message: 'Controlador listo para migrar a Prisma (crear cliente)'
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en crearCliente' });
  }
};