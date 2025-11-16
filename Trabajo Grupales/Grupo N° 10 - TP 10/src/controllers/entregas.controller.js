// 1. ¡Adiós 'pool', hola 'prisma'!
import prisma from '../config/prisma.js';

// GET Todas las Entregas (¡CON LOS DATOS RELACIONADOS!)
export const getEntregas = async (req, res) => {
  try {
    // ANTES: pool.query('SELECT * FROM entregas WHERE deleted_at IS NULL')
    // AHORA: ¡¡LA MAGIA DE PRISMA!!
    const entregas = await prisma.entregas.findMany({
      where: {
        deleted_at: null, // Mantenemos el "soft delete"
      },
      // ¡¡ESTO ES EL "JOIN"!!
      // Gracias a los "@relation" que pusimos en el schema,
      // podemos pedirle que "incluya" los datos de las tablas relacionadas.
      include: {
        donador: true,  // Trae todo el objeto 'donador'
        producto: true, // Trae todo el objeto 'producto'
        comedor: true,  // Trae todo el objeto 'comedor'
      },
    });

    res.json({ status: 200, payload: entregas });
  } catch (error) {
    console.log('Error al obtener entregas:', error);
    res.status(500).json({ status: 500, message: 'Error interno del servidor' });
  }
};

// GET Una Entrega (¡CON LOS DATOS RELACIONADOS!)
export const getOneEntrega = async (req, res) => {
  try {
    const idEntrega = parseInt(req.params.id);

    // ANTES: pool.query('... WHERE deleted_at IS NULL AND id = ?')
    // AHORA:
    const entrega = await prisma.entregas.findFirst({
      where: {
        id: idEntrega,
        deleted_at: null,
      },
      // ¡También le ponemos el "JOIN" acá!
      include: {
        donador: true,
        producto: true,
        comedor: true,
      },
    });

    if (!entrega) {
      return res.json({ status: 404, message: 'Entrega no encontrada o eliminada' });
    }

    res.json({ status: 200, payload: entrega });
  } catch (error) {
    console.log('Error al obtener una entrega:', error);
    res.status(500).json({ status: 500, message: 'Error interno del servidor' });
  }
};

// POST (Crear) Una Entrega
export const postEntrega = async (req, res) => {
  try {
    // El body nos va a mandar IDs como strings, ¡hay que convertirlos!
    const { id_donador, id_producto, id_comedor, cantidad, observaciones } = req.body;

    // ¡¡IMPORTANTE!! Prisma es estricto con los tipos.
    // Si el schema dice 'Int', ¡tenemos que pasarle un 'Int'!
    const idDonadorNum = parseInt(id_donador);
    const idProductoNum = parseInt(id_producto);
    const idComedorNum = parseInt(id_comedor);
    const cantidadNum = parseInt(cantidad);

    // ANTES: pool.query(`INSERT INTO entregas (...) VALUES (?, ?, ?, ?, ?);`)
    // AHORA:
    const nuevaEntrega = await prisma.entregas.create({
      data: {
        id_donador: idDonadorNum,
        id_producto: idProductoNum,
        id_comedor: idComedorNum,
        cantidad: cantidadNum,
        observaciones,
      },
    });

    res.status(201).json({ status: 201, payload: nuevaEntrega });
  } catch (error) {
    console.log('Error al crear entrega:', error);
    // ¡Error nuevo! P2003 = Falla la llave foránea
    // (Ej: estás intentando agregar un id_donador que no existe)
    if (error.code === 'P2003') {
      return res.json({
        status: 400,
        message: 'Error de llave foránea: El donador, producto o comedor no existe',
      });
    }
    res.status(500).json({ status: 500, message: 'Error interno del servidor' });
  }
};

// PUT (Actualizar) Una Entrega
export const putEntrega = async (req, res) => {
  try {
    const idEntrega = parseInt(req.params.id);
    const { id_donador, id_producto, id_comedor, cantidad, observaciones } = req.body;

    // ¡También convertimos todo a números!
    const dataActualizada = {
      id_donador: parseInt(id_donador),
      id_producto: parseInt(id_producto),
      id_comedor: parseInt(id_comedor),
      cantidad: parseInt(cantidad),
      observaciones,
    };

    // ANTES: pool.query('UPDATE entregas SET ... WHERE id = ?;')
    // AHORA:
    const entregaActualizada = await prisma.entregas.update({
      where: {
        id: idEntrega,
      },
      data: dataActualizada,
    });

    res.json({ status: 200, payload: entregaActualizada });
  } catch (error) {
    console.log('Error al actualizar entrega:', error);
    if (error.code === 'P2025') {
      return res.json({ status: 404, message: 'Entrega no encontrada' });
    }
    if (error.code === 'P2003') {
      return res.json({
        status: 400,
        message: 'Error de llave foránea: El donador, producto o comedor no existe',
      });
    }
    res.status(500).json({ status: 500, message: 'Error interno del servidor' });
  }
};

// DELETE (Lógico) Una Entrega
export const deleteEntrega = async (req, res) => {
  try {
    const idEntrega = parseInt(req.params.id);

    // ANTES: pool.query('UPDATE entregas SET deleted_at = NOW() WHERE id = ?;')
    // AHORA: ¡Misma lógica de "soft delete"!
    await prisma.entregas.update({
      where: {
        id: idEntrega,
      },
      data: {
        deleted_at: new Date(),
      },
    });

    res.json({ status: 200, payload: `La entrega fue dada de baja` });
  } catch (error) {
    console.log('Error al eliminar entrega:', error);
    if (error.code === 'P2025') {
      return res.json({ status: 404, message: 'Entrega no encontrada' });
    }
    res.status(500).json({ status: 500, message: 'Error interno del servidor' });
  }
};