import { query } from '../config/database.js';
import mysql from 'mysql2/promise'; 

export const getAll = async (req, res) => {
    try {
        const [ventas] = await query(`
            SELECT v.*, u.nombre as usuario_nombre 
            FROM ventas v 
            LEFT JOIN usuarios u ON v.usuario_id = u.id
        `);
        res.json(ventas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getById = async (req, res) => {
    try {
        const { id } = req.params;
        const [venta] = await query(`
            SELECT v.*, u.nombre as usuario_nombre 
            FROM ventas v 
            LEFT JOIN usuarios u ON v.usuario_id = u.id 
            WHERE v.id = ?
        `, [id]);
        if (venta.length === 0) return res.status(404).json({ error: 'Venta no encontrada' });
        res.json(venta[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const create = async (req, res) => {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT || 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    });
    try {
        await connection.beginTransaction();

        const { fecha, usuario_id, items } = req.body;
        let total = 0;

        for (let item of items) {
            const [producto] = await connection.execute('SELECT precio, stock FROM productos WHERE id = ?', [item.producto_id]);
            if (producto[0].stock < item.cantidad) {
                throw new Error(`Stock insuficiente para producto ${item.producto_id}`);
            }
            total += item.cantidad * producto[0].precio;
        }

        const [ventaResult] = await connection.execute(
            'INSERT INTO ventas (fecha, usuario_id, total) VALUES (?, ?, ?)',
            [fecha, usuario_id, total]
        );
        const venta_id = ventaResult.insertId;

        for (let item of items) {
            const [producto] = await connection.execute('SELECT precio FROM productos WHERE id = ?', [item.producto_id]);
            const precio_unitario = producto[0].precio;
            await connection.execute(
                'INSERT INTO detalle_ventas (venta_id, producto_id, cantidad, precio_unitario) VALUES (?, ?, ?, ?)',
                [venta_id, item.producto_id, item.cantidad, precio_unitario]
            );
            await connection.execute(
                'UPDATE productos SET stock = stock - ? WHERE id = ?',
                [item.cantidad, item.producto_id]
            );
        }

        await connection.commit();
        res.status(201).json({ message: 'Venta creada', id: venta_id });
    } catch (error) {
        await connection.rollback();
        res.status(500).json({ error: error.message });
    } finally {
        connection.end();
    }
};

export const update = async (req, res) => {
    try {
        const { id } = req.params;
        const { fecha, usuario_id, total } = req.body;
        await query('UPDATE ventas SET fecha = ?, usuario_id = ?, total = ? WHERE id = ?', [fecha, usuario_id, total, id]);
        res.json({ message: 'Venta actualizada' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const remove = async (req, res) => {
    try {
        const { id } = req.params;
        await query('DELETE FROM ventas WHERE id = ?', [id]);
        res.json({ message: 'Venta eliminada' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};