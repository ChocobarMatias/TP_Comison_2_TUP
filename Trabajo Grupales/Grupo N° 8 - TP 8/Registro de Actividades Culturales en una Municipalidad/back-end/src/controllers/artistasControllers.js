const connection = require('../config/bd');

// Obtener todos los artistas activos
const obtenerTodos = (req, res) => {
    const consulta = 'SELECT * FROM artistas WHERE estado_artista = 1';
    connection.query(consulta, (err, result) => {
        if (err) {
            console.error("Error al obtener artistas:", err);
            return res.status(500).json({ error: 'Error del servidor' });
        }
        res.json(result);
    });
};

// Obtener artistas de un evento específico
const obtenerPorEvento = (req, res) => {
    const { id_evento } = req.params;
    const consulta = `
        SELECT a.*
        FROM artistas a
        JOIN artistas_eventos ae ON a.id_artista = ae.id_artista
        WHERE ae.id_evento = ? AND a.estado_artista = 1
    `;
    connection.query(consulta, [id_evento], (err, result) => {
        if (err) {
            console.error("Error al obtener artistas por evento:", err);
            return res.status(500).json({ error: 'Error del servidor' });
        }
        res.json(result);
    });
};

// Obtener un artista por id
const obtenerUno = (req, res) => {
    const { id } = req.params;
    const consulta = 'SELECT * FROM artistas WHERE id_artista = ? AND estado_artista = 1';
    connection.query(consulta, [id], (err, result) => {
        if (err) {
            console.error("Error al obtener artista:", err);
            return res.status(500).json({ error: 'Error del servidor' });
        }
        if (result.length === 0) {
            return res.status(404).json({ error: 'Artista no encontrado' });
        }
        res.json(result[0]);
    });
};

// Crear un nuevo artista
const crear = (req, res) => {
    const { nombre_artista, tipo_arte_artista, biografia_artista, email_artista, contra_artista, telefono_artista } = req.body;
    const consulta = `
        INSERT INTO artistas (nombre_artista, tipo_arte_artista, biografia_artista, email_artista, contra_artista, telefono_artista)
        VALUES (?, ?, ?, ?, ?, ?)
    `;
    connection.query(
        consulta,
        [nombre_artista, tipo_arte_artista, biografia_artista, email_artista, contra_artista, telefono_artista],
        (err, result) => {
            if (err) {
                console.error("Error al crear artista:", err);
                return res.status(500).json({ error: 'Error del servidor' });
            }
            res.status(201).json({ message: 'Artista creado', id_artista: result.insertId });
        }
    );
};

// Actualizar artista
const actualizar = (req, res) => {
    const { id } = req.params;
    const { nombre_artista, tipo_arte_artista, biografia_artista, email_artista, contra_artista, telefono_artista } = req.body;
    const consulta = `
        UPDATE artistas
        SET nombre_artista = ?, tipo_arte_artista = ?, biografia_artista = ?, email_artista = ?, contra_artista = ?, telefono_artista = ?
        WHERE id_artista = ? AND estado_artista = 1
    `;
    connection.query(
        consulta,
        [nombre_artista, tipo_arte_artista, biografia_artista, email_artista, contra_artista, telefono_artista, id],
        (err, result) => {
            if (err) {
                console.error("Error al actualizar artista:", err);
                return res.status(500).json({ error: 'Error del servidor' });
            }
            if (result.affectedRows === 0) {
                return res.status(404).json({ error: 'Artista no encontrado o inactivo' });
            }
            res.json({ message: 'Artista actualizado' });
        }
    );
};

// Borrado lógico de artista
const eliminar = (req, res) => {
    const { id } = req.params;
    const consulta = 'UPDATE artistas SET estado_artista = 0 WHERE id_artista = ?';
    connection.query(consulta, [id], (err, result) => {
        if (err) {
            console.error("Error al eliminar artista:", err);
            return res.status(500).json({ error: 'Error del servidor' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Artista no encontrado' });
        }
        res.json({ message: 'Artista eliminado (borrado lógico)' });
    });
};

module.exports = {
    obtenerTodos,
    obtenerPorEvento,
    obtenerUno,
    crear,
    actualizar,
    eliminar
};
