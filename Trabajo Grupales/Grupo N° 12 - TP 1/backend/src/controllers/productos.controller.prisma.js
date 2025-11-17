/**
 * Controlador de Productos - Migrado a Prisma ORM
 * Reemplaza las consultas SQL manuales por métodos de Prisma
 */

import prisma from '../config/prisma.js';

// GET - Obtener todos los productos
export const getProductos = async (req, res) => {
    try {
        const productos = await prisma.productos.findMany();
        res.json(productos);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

// GET - Obtener un producto por ID
export const getProductoId = async (req, res) => {
    try {
        const { id } = req.params;
        const producto = await prisma.productos.findUnique({
            where: { id_producto: parseInt(id) }
        });
        
        if (!producto) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        
        res.json(producto);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

// POST - Crear un nuevo producto
export const createProducto = async (req, res) => {
    try {
        const { nombre, descripcion, categoria, cantidad } = req.body;
        
        const nuevoProducto = await prisma.productos.create({
            data: {
                nombre,
                descripcion,
                categoria,
                cantidad
            }
        });
        
        res.status(201).json(nuevoProducto);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

// PUT - Actualizar un producto existente
export const updateProducto = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, descripcion, categoria, cantidad } = req.body;
        
        const productoActualizado = await prisma.productos.update({
            where: { id_producto: parseInt(id) },
            data: {
                nombre,
                descripcion,
                categoria,
                cantidad
            }
        });
        
        res.json({ 
            message: 'Producto actualizado',
            producto: productoActualizado 
        });
    } catch (error) {
        if (error.code === 'P2025') {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        return res.status(500).json({ error: error.message });
    }
};

// DELETE - Eliminar un producto
export const deleteProducto = async (req, res) => {
    try {
        const { id } = req.params;
        
        await prisma.productos.delete({
            where: { id_producto: parseInt(id) }
        });
        
        res.json({ message: 'Producto eliminado correctamente' });
    } catch (error) {
        if (error.code === 'P2025') {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        return res.status(500).json({ error: error.message });
    }
};
