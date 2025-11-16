// 1. ¡Adiós 'pool', hola 'prisma'!
import prisma from '../config/prisma.js';

// GET Todos los Donadores (Activos)
export const getDonadores = async (req, res) => {
  try {
    // ANTES: pool.query('SELECT * FROM donadores WHERE deleted_at IS NULL')
    // AHORA:
    const donadores = await prisma.donadores.findMany({
      where: {
        deleted_at: null, // ¡Así se hace un WHERE en Prisma!
      },
    });
    res.json({ status: 200, payload: donadores });
  } catch (error) {
    console.log('Error al obtener donadores:', error);
    res.status(500).json({ status: 500, message: 'Error interno del servidor' });
  }
};

// GET Un Donador (Activo)
export const getOneDonador = async (req, res) => {
  try {
    // Convertimos el ID de string (de params) a número
    const idDonador = parseInt(req.params.id);

    // ANTES: pool.query('... WHERE deleted_at IS NULL AND id = ?', [id])
    // AHORA:
    const donador = await prisma.donadores.findFirst({
      where: {
        id: idDonador,
        deleted_at: null,
      },
    });

    // Si no lo encuentra, ¡devolvemos el 404!
    if (!donador) {
      return res.json({ status: 404, message: 'Donador no encontrado o eliminado' });
    }

    res.json({ status: 200, payload: donador });
  } catch (error) {
    console.log('Error al obtener un donador:', error);
    res.status(500).json({ status: 500, message: 'Error interno del servidor' });
  }
};

// POST (Crear) Un Donador
export const postDonadores = async (req, res) => {
  try {
    const { nombre, apellido, contacto } = req.body;

    // ANTES: pool.query(`INSERT INTO donadores (nombre, ...) VALUES (?, ?, ?);`)
    // AHORA:
    const nuevoDonador = await prisma.donadores.create({
      data: {
        nombre,
        apellido,
        contacto,
        // ¡'deleted_at' se pone solo en 'null' por defecto!
      },
    });

    // ¡Mantenemos el mismo mensaje de éxito que tenías!
    res.status(201).json({
      status: 201,
      payload: `Donador ${nuevoDonador.apellido} ${nuevoDonador.nombre} creado con éxito`,
    });
  } catch (error) {
    console.log('Error al crear donador:', error);
    res.status(500).json({ status: 500, message: 'Error interno del servidor' });
  }
};

// PUT (Actualizar) Un Donador
export const putDonadores = async (req, res) => {
  try {
    const idDonador = parseInt(req.params.id);
    const { nombre, apellido, contacto } = req.body;

    // ANTES: pool.query('UPDATE donadores SET nombre = ?, ... WHERE id = ?;')
    // AHORA:
    const donadorActualizado = await prisma.donadores.update({
      where: {
        id: idDonador,
      },
      data: {
        nombre,
        apellido,
        contacto,
      },
    });

    res.json({ status: 200, payload: donadorActualizado });
  } catch (error) {
    console.log('Error al actualizar donador:', error);
    // Manejo de error por si el ID no existe
    if (error.code === 'P2025') {
      return res.json({ status: 404, message: 'Donador no encontrado' });
    }
    res.status(500).json({ status: 500, message: 'Error interno del servidor' });
  }
};

// DELETE (Lógico) Un Donador
export const deleteDonadores = async (req, res) => {
  try {
    const idDonador = parseInt(req.params.id);

    // ANTES: pool.query('UPDATE donadores SET deleted_at = NOW() WHERE id = ?;')
    // AHORA: ¡Así se hace un "soft delete"!
    await prisma.donadores.update({
      where: {
        id: idDonador,
      },
      data: {
        deleted_at: new Date(), // ¡Usamos el 'new Date()' de JS!
      },
    });

    res.json({ status: 200, payload: `El donador fue dado de baja` });
  } catch (error) {
    console.log('Error al eliminar donador:', error);
    if (error.code === 'P2025') {
      return res.json({ status: 404, message: 'Donador no encontrado' });
    }
    res.status(500).json({ status: 500, message: 'Error interno del servidor' });
  }
};