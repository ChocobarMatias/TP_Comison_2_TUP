const prisma = require('../config/prisma');

exports.obtenerClientes = async (req, res) => {
  try {
    const clientes = await prisma.clientes.findMany({
      orderBy: { id: 'asc' }
    });

    res.json(clientes);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en obtenerClientes' });
  }
};

exports.obtenerClientePorId = async (req, res) => {
  try {
    const { id } = req.params;

    const cliente = await prisma.clientes.findUnique({
      where: { id: Number(id) }
    });

    if (!cliente) {
      return res.status(404).json({ error: 'Cliente no encontrado' });
    }

    res.json(cliente);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en obtenerClientePorId' });
  }
};

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
      data: { nombre, apellido, email }
    });

    res.json({ message: 'Cliente creado', cliente });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en crearCliente' });
  }
};


exports.actualizarCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, apellido, email } = req.body;

    const cliente = await prisma.clientes.findUnique({
      where: { id: Number(id) }
    });

    if (!cliente) {
      return res.status(404).json({ error: 'Cliente no encontrado' });
    }

    // Validar email único (para otros clientes)
    if (email) {
      const emailExistente = await prisma.clientes.findUnique({
        where: { email }
      });

      if (emailExistente && emailExistente.id !== Number(id)) {
        return res.status(400).json({ error: 'El email ya está registrado por otro cliente' });
      }
    }

    const actualizado = await prisma.clientes.update({
      where: { id: Number(id) },
      data: { nombre, apellido, email }
    });

    res.json({ message: 'Cliente actualizado', actualizado });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en actualizarCliente' });
  }
};


exports.eliminarCliente = async (req, res) => {
  try {
    const { id } = req.params;

    const cliente = await prisma.clientes.findUnique({
      where: { id: Number(id) }
    });

    if (!cliente) {
      return res.status(404).json({ error: 'Cliente no encontrado' });
    }

    await prisma.clientes.delete({
      where: { id: Number(id) }
    });

    res.json({ message: 'Cliente eliminado correctamente' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en eliminarCliente' });
  }
};
