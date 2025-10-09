import { query } from '../config/database.js';

export const getAll = async (req, res) => {
    try {
        const [proveedores] = await query('SELECT * FROM proveedores');
        res.json(proveedores);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getById = async (req, res) => {
    try {
        const { id } = req.params;
        const [proveedor] = await query('SELECT * FROM proveedores WHERE id = ?', [id]);
        if (proveedor.length === 0) return res.status(404).json({ error: 'Proveedor no encontrado' });
        res.json(proveedor[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const create = async (req, res) => {
    try {
        const { nombre, contacto, telefono } = req.body;
        await query('INSERT INTO proveedores (nombre, contacto, telefono) VALUES (?, ?, ?)', [nombre, contacto, telefono]);
        res.status(201).json({ message: 'Proveedor creado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const update = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, contacto, telefono } = req.body;
        await query('UPDATE proveedores SET nombre = ?, contacto = ?, telefono = ? WHERE id = ?', [nombre, contacto, telefono, id]);
        res.json({ message: 'Proveedor actualizado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const remove = async (req, res) => {
    try {
        const { id } = req.params;
        await query('DELETE FROM proveedores WHERE id = ?', [id]);
        res.json({ message: 'Proveedor eliminado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};