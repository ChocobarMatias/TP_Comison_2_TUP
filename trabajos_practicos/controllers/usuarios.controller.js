import { query } from '../config/database.js';

export const getAll = async (req, res) => {
    try {
        const [usuarios] = await query('SELECT * FROM usuarios');
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getById = async (req, res) => {
    try {
        const { id } = req.params;
        const [usuario] = await query('SELECT * FROM usuarios WHERE id = ?', [id]);
        if (usuario.length === 0) return res.status(404).json({ error: 'Usuario no encontrado' });
        res.json(usuario[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const create = async (req, res) => {
    try {
        const { nombre, email, rol } = req.body;
        await query('INSERT INTO usuarios (nombre, email, rol) VALUES (?, ?, ?)', [nombre, email, rol]);
        res.status(201).json({ message: 'Usuario creado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const update = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, email, rol } = req.body;
        await query('UPDATE usuarios SET nombre = ?, email = ?, rol = ? WHERE id = ?', [nombre, email, rol, id]);
        res.json({ message: 'Usuario actualizado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const remove = async (req, res) => {
    try {
        const { id } = req.params;
        await query('DELETE FROM usuarios WHERE id = ?', [id]);
        res.json({ message: 'Usuario eliminado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};