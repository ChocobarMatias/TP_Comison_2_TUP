import { query } from '../config/database.js';

export const ventasPorMes = async (req, res) => {
    try {
        const [resultados] = await query(`
            SELECT DATE_FORMAT(fecha, '%Y-%m') as mes, SUM(total) as total_ventas, COUNT(*) as num_ventas
            FROM ventas 
            GROUP BY mes 
            ORDER BY mes
        `);
        res.json(resultados);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const topProductos = async (req, res) => {
    try {
        const limit = req.query.limit || 5;
        const [resultados] = await query(`
            SELECT p.nombre, SUM(d.cantidad) as total_vendido, SUM(d.subtotal) as ingresos
            FROM detalle_ventas d
            JOIN productos p ON d.producto_id = p.id
            GROUP BY p.id, p.nombre
            ORDER BY ingresos DESC
            LIMIT ?
        `, [limit]);
        res.json(resultados);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const stockBajo = async (req, res) => {
    try {
        const [resultados] = await query(`
            SELECT p.nombre, p.stock, prov.nombre as proveedor_nombre
            FROM productos p
            LEFT JOIN proveedores prov ON p.proveedor_id = prov.id
            WHERE p.stock < 10
            ORDER BY p.stock
        `);
        res.json(resultados);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};