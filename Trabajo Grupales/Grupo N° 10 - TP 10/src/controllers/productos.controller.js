// 1. ¡Adiós 'pool', hola 'prisma'!
import prisma from '../config/prisma.js';

// GET Todos los Productos (¡SOLO LOS ACTIVOS!)
export const getProductos = async (req, res) => {
  try {
    // ANTES: pool.query('SELECT * FROM productos')
    // AHORA: ¡Solo traemos los que NO están borrados!
    const productos = await prisma.productos.findMany({
      where: {
        deleted_at: null, // ¡Respetamos el "soft delete"!
      },
    });
    // ¡Tu código viejo no mandaba un JSON estandarizado, ahora sí!
    res.json({ status: 200, payload: productos });
  } catch (error) {
    console.log('Error al obtener productos:', error);
    res.status(500).json({ status: 500, message: 'Error interno del servidor' });
  }
};

// GET Un Producto (¡SOLO SI ESTÁ ACTIVO!)
export const getProductoId = async (req, res) => {
  try {
    const idProducto = parseInt(req.params.id);

    // ANTES: pool.query('SELECT * FROM productos WHERE id_producto = ?')
    // AHORA:
    const producto = await prisma.productos.findFirst({
      where: {
        id_producto: idProducto,
        deleted_at: null, // ¡Respetamos el "soft delete"!
      },
    });

    if (!producto) {
      return res.json({ status: 404, message: 'Producto no encontrado o eliminado' });
    }

    res.json({ status: 200, payload: producto });
  } catch (error) {
    console.log('Error al obtener un producto:', error);
    res.status(500).json({ status: 500, message: 'Error interno del servidor' });
  }
};

// POST (Crear) Un Producto
export const createProducto = async (req, res) => {
  try {
    const { nombre, descripcion, categoria, cantidad } = req.body;

    // ANTES: pool.query(`INSERT INTO productos (...) VALUES (?, ?, ?, ?);`)
    // AHORA:
    const nuevoProducto = await prisma.productos.create({
      data: {
        nombre,
        descripcion,
        categoria,
        cantidad,
        // ¡'deleted_at' se pone solo en 'null' por defecto!
      },
    });

    res.status(201).json({ status: 201, payload: nuevoProducto });
  } catch (error) { 
    console.log('Error al crear producto:', error);
    res.status(500).json({ status: 500, message: 'Error interno del servidor' });
  }

}
;

// PUT (Actualizar) Un Producto
export const updateProducto = async (req, res) => {
  try {
    const idProducto = parseInt(req.params.id);
    const { nombre, descripcion, categoria, cantidad } = req.body;

    // ANTES: pool.query('UPDATE productos SET ... WHERE id_producto = ?;')
    // AHORA:
    const productoActualizado = await prisma.productos.update({
      where: {
        id_producto: idProducto,
      },
      data: {
        nombre,
        descripcion,
        categoria,
        cantidad,
      },
    });

    res.json({ status: 200, payload: productoActualizado });
  } catch (error) {
    console.log('Error al actualizar producto:', error);
    if (error.code === 'P2025') {
      return res.json({ status: 404, message: 'Producto no encontrado' });
    }
    res.status(500).json({ status: 500, message: 'Error interno del servidor' });
  }
};

// DELETE (¡Lógico!) Un Producto
export const deleteProducto = async (req, res) => {
  try {
    const idProducto = parseInt(req.params.id);

    // ANTES: pool.query('DELETE FROM productos WHERE ...') ¡¡¡MAL!!!
    // AHORA: ¡Usamos "soft delete" para MANTENER LA TRAZABILIDAD!
    await prisma.productos.update({
      where: {
        id_producto: idProducto,
      },
      data: {
        deleted_at: new Date(), // ¡Le ponemos la fecha de borrado!
      },
    });

    res.json({ status: 200, payload: `El producto fue dado de baja (lógicamente)` });
  } catch (error) {
    console.log('Error al eliminar producto:', error);
    if (error.code === 'P2025') {
      return res.json({ status: 404, message: 'Producto no encontrado' });
    }
    res.status(500).json({ status: 500, message: 'Error interno del servidor' });
  }
};