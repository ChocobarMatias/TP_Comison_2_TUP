const express = require('express');
const router = express.Router();
const db = require('../db');

// GET todos los libros
router.get('/', (req, res) => {
    db.query('SELECT * FROM libros', (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});

// POST agregar libro
router.post('/', (req, res) => {
    const { titulo, autor, categoria, ejemplares_disponibles } = req.body;
    db.query(
        'INSERT INTO libros (titulo, autor, categoria, ejemplares_disponibles) VALUES (?, ?, ?, ?)',
        [titulo, autor, categoria, ejemplares_disponibles],
        (err, results) => {
            if (err) return res.status(500).json(err);
            res.json({ message: 'Libro agregado', id: results.insertId });
        }
    );
});

module.exports = router;
