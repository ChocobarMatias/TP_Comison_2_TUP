// 1. ¡Adiós 'pool', hola 'prisma'!
import prisma from '../config/prisma.js';

// GET Todos los Comedores (¡SOLO LOS ACTIVOS!)
export const getAllComedores = async (req, res) => {
  try {
    // ANTES: pool.query('SELECT * FROM comedores')
    // AHORA: ¡Solo traemos los que NO están borrados!
    const comedores = await prisma.comedores.findMany({
      where: {
        deleted_at: null, // ¡Respetamos el "soft delete"!
      },
    });
    res.json({ status: 200, payload: comedores });
  } catch (err) {
    console.error('Error al obtener los comedores', err);
    res.status(500).json({ error: 'Error al obtener comedores' });
  }
};

// GET Un Comedor (¡SOLO SI ESTÁ ACTIVO!)
export const getUnComedor = async (req, res) => {
  try {
    const idComedor = parseInt(req.params.id);

    // ANTES: pool.query('SELECT * FROM comedores WHERE id = ?')
    // AHORA:
    const comedor = await prisma.comedores.findFirst({
      where: {
        id: idComedor,
        deleted_at: null, // ¡Respetamos el "soft delete"!
      },
    });

    if (!comedor) {
      return res.status(404).json({ error: 'Comedor no encontrado o eliminado' });
    }

    res.json({ status: 200, payload: comedor });
  } catch (err) {
    console.error('Error al obtener el comedor', err);
    res.status(500).json({ error: 'Error al obtener el comedor' });
  }
};

// DELETE (¡Lógico!) Un Comedor
export const deleteUnComedor = async (req, res) => {
  try {
    const idComedor = parseInt(req.params.id);

    // ANTES: pool.query('DELETE FROM comedores WHERE id = ?') ¡¡¡MAL!!!
    // AHORA: ¡Usamos "soft delete" para MANTENER LA TRAZABILIDAD!
    await prisma.comedores.update({
      where: {
        id: idComedor,
      },
      data: {
        deleted_at: new Date(), // ¡Le ponemos la fecha de borrado!
      },
    });

    res.json({ status: 200, payload: `El comedor fue dado de baja (lógicamente)` });
  } catch (err) {
    console.error('Error al dar de baja', err);
    if (err.code === 'P2025') {
      return res.status(404).json({ error: 'Comedor no encontrado' });
    }
    res.status(500).json({ error: 'Error al dar de baja' });
  }
};

// POST (Crear) Un Comedor
export const createNewComedor = async (req, res) => {
  try {
    const { nombre, direccion, contacto, telefono } = req.body;

    // ANTES: pool.query(`INSERT INTO comedores (...) VALUES (?, ?, ?, ?)`)
    // AHORA:
    const nuevoComedor = await prisma.comedores.create({
      data: {
        nombre,
        direccion,
        contacto,
        telefono,
        // 'deleted_at' es 'null' por defecto
      },
    });

    res.status(201).json({
      status: 201,
      message: 'Comedor creado correctamente',
      payload: nuevoComedor,
    });
  } catch (err) {
    console.error('Error al dar de alta', err);
    res.status(500).json({ error: 'Error al dar de alta' });
  }
};

// PUT (Actualizar) Un Comedor
export const modificateComedor = async (req, res) => {
  try {
    const idComedor = parseInt(req.params.id);
    const { nombre, direccion, contacto, telefono } = req.body;

    // ANTES: pool.query(`UPDATE comedores SET ... WHERE id = ?`)
    // AHORA:
    const comedorActualizado = await prisma.comedores.update({
      where: {
        id: idComedor,
      },
      data: {
        nombre,
        direccion,
        contacto,
        telefono,
      },
    });

    res.status(200).json({
      message: 'Comedor modificado correctamente',
      payload: comedorActualizado,
    });
  } catch (err) {
    console.error('Error al modificar el comedor', err);
    if (err.code === 'P2025') {
      return res.status(404).json({ message: 'Comedor no encontrado' });
    }
    res.status(500).json({ error: 'Error al modificar el comedor' });
  }
};