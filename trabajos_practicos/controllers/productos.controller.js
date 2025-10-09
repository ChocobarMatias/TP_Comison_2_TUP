import { query } from '../config/database.js';

export const getAll = async (req, res) => {
    try {
        const [productos] = await query(`
            SELECT p.*, prov.nombre as proveedor_nombre 
            FROM productos p 
            LEFT JOIN proveedores prov ON p.proveedor_id = prov.id
        `);
        res.json(productos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getById = async (req, res) => {
    try {
        const { id } = req.params;
        const [producto] = await query(`
            SELECT p.*, prov.nombre as proveedor_nombre 
            FROM productos p 
            LEFT JOIN proveedores prov ON p.proveedor_id = prov.id 
            WHERE p.id = ?
        `, [id]);
        if (producto.length === 0) return res.status(404).json({ error: 'Producto no encontrado' });
        res.json(producto[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const create = async (req, res) => {
    try {
        const { nombre, descripcion, precio, stock, proveedor_id } = req.body;
        await query(
            'INSERT INTO productos (nombre, descripcion, precio, stock, proveedor_id) VALUES (?, ?, ?, ?, ?)',
            [nombre, descripcion, precio, stock, proveedor_id]
        );
        res.status(201).json({ message: 'Producto creado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const update = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, descripcion, precio, stock, proveedor_id } = req.body;
        await query(
            'UPDATE productos SET nombre = ?, descripcion = ?, precio = ?, stock = ?, proveedor_id = ? WHERE id = ?',
            [nombre, descripcion, precio, stock, proveedor_id, id]
        );
        res.json({ message: 'Producto actualizado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const remove = async (req, res) => {
    try {
        const { id } = req.params;
        await query('DELETE FROM productos WHERE id = ?', [id]);
        res.json({ message: 'Producto eliminado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};