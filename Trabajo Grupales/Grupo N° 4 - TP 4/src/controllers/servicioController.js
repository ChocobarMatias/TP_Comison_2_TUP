const prisma = require('../config/prisma');

exports.crearServicio = async (req, res) => {
  try {
    const { nombre, descripcion, precio_total } = req.body;

    if (!nombre || !precio_total) {
      return res.status(400).json({ error: 'Nombre y precio total son obligatorios' });
    }

    const servicio = await prisma.servicios.create({
      data: {
        nombre,
        descripcion,
        precio_total: Number(precio_total)
      }
    });

    res.json({ message: 'Servicio creado', servicio });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en crearServicio' });
  }
};