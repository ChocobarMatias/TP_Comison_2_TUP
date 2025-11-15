const prisma = require('../config/prisma');

exports.crearCliente = async (req, res) => {
  try {
    const { nombre, apellido, email } = req.body;

    if (!nombre || !apellido || !email) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    // Validar email único
    const existe = await prisma.clientes.findUnique({
      where: { email }
    });

    if (existe) {
      return res.status(400).json({ error: 'El email ya está registrado' });
    }

    const cliente = await prisma.clientes.create({
      data: {
        nombre,
        apellido,
        email
      }
    });

    res.json({ message: 'Cliente creado', cliente });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en crearCliente' });
  }
};