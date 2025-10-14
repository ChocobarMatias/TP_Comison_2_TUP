const express = require('express');
const router = express.Router();
const db = require('../db');

// GET todos los alumnos
router.get('/', (req, res) => {
    db.query('SELECT * FROM alumnos', (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});

// POST agregar alumno
router.post('/', (req, res) => {
    const { nombre, curso, dni } = req.body;
    db.query(
        'INSERT INTO alumnos (nombre, curso, dni) VALUES (?, ?, ?)',
        [nombre, curso, dni],
        (err, results) => {
            if (err) return res.status(500).json(err);
            res.json({ message: 'Alumno agregado', id: results.insertId });
        }
    );
});

module.exports = router;
