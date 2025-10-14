const express = require('express');
const router = express.Router();
const db = require('../db');

// GET todos los préstamos
router.get('/', (req, res) => {
    db.query('SELECT * FROM prestamos', (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});

// POST nuevo préstamo
router.post('/', (req, res) => {
    const { alumno_id, libro_id, fecha_prestamo, fecha_devolucion } = req.body;

    // Chequear stock disponible
    db.query('SELECT ejemplares_disponibles FROM libros WHERE libro_id = ?', [libro_id], (err, results) => {
        if (err) return res.status(500).json(err);
        if (!results[0] || results[0].ejemplares_disponibles <= 0) {
            return res.status(400).json({ message: 'No hay ejemplares disponibles' });
        }

        // Registrar préstamo
        db.query(
            'INSERT INTO prestamos (alumno_id, libro_id, fecha_prestamo, fecha_devolucion) VALUES (?, ?, ?, ?)',
            [alumno_id, libro_id, fecha_prestamo, fecha_devolucion],
            (err, results) => {
                if (err) return res.status(500).json(err);

                // Reducir stock
                db.query(
                    'UPDATE libros SET ejemplares_disponibles = ejemplares_disponibles - 1 WHERE libro_id = ?',
                    [libro_id]
                );

                res.json({ message: 'Préstamo registrado', id: results.insertId });
            }
        );
    });
});

// PUT devolver libro
router.put('/:id/devolver', (req, res) => {
    const prestamo_id = req.params.id;

    // Cambiar estado a devuelto
    db.query(
        'UPDATE prestamos SET estado = "devuelto" WHERE prestamo_id = ?',
        [prestamo_id],
        (err) => {
            if (err) return res.status(500).json(err);

            // Obtener libro_id para aumentar stock
            db.query(
                'SELECT libro_id FROM prestamos WHERE prestamo_id = ?',
                [prestamo_id],
                (err, results) => {
                    if (err) return res.status(500).json(err);
                    const libro_id = results[0].libro_id;

                    db.query(
                        'UPDATE libros SET ejemplares_disponibles = ejemplares_disponibles + 1 WHERE libro_id = ?',
                        [libro_id]
                    );

                    res.json({ message: 'Libro devuelto correctamente' });
                }
            );
        }
    );
});

module.exports = router;
