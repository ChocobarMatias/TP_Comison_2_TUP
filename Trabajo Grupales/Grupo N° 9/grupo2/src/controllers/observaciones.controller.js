import db from '../config/db.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secretKey = process.env.JWT_SECRET;

const verificarToken = (req, res) => {
    const authHeader = req.headers.authorization;

    if (!secretKey) {
        console.error('Error: JWT_SECRET no está definida en el archivo .env');
        res.status(500).json({ message: 'Error interno del servidor: Falta configuración de seguridad.' });
        return null;
    }

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        res.status(401).json({ message: 'Acceso no autorizado. Token no proporcionado o formato incorrecto.' });
        return null;
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, secretKey);
        return decoded;
    } catch (error) {
        console.error('Error de token:', error.message);
        if (error.name === 'TokenExpiredError') {
            res.status(401).json({ message: 'Acceso no autorizado. Token expirado.' });
        } else if (error.name === 'JsonWebTokenError') {
             res.status(401).json({ message: 'Acceso no autorizado. Token inválido.' });
        } else {
             res.status(401).json({ message: 'Acceso no autorizado. Error al verificar token.' });
        }
        return null;
    }
};

export const obtenerObservaciones = async (req, res) => {
    const usuarioAutenticado = verificarToken(req, res);
    if (!usuarioAutenticado) return;

    try {
        const obtenerListadoObservaciones = `
            SELECT
                o.idObservacion, o.Comentario, o.FechaObservacion, o.isActive,
                t.idTurno, t.FechaRequeridaTurno, t.HorarioRequeridaTurno,
                p.NombrePaciente, p.ApellidoPaciente,
                m.NombreMedico, m.ApellidoMedico
            FROM observaciones o
            JOIN turnos t ON o.idTurno = t.idTurno
            JOIN pacientes p ON t.idPaciente = p.idPaciente
            JOIN medicos m ON t.idMedico = m.idMedico
            ORDER BY o.FechaObservacion DESC
        `;
        db.query(obtenerListadoObservaciones, (error, results) => {
            if (error) {
                console.error('Error al obtener las observaciones:', error);
                if (!res.headersSent) {
                    return res.status(500).json({ error: 'Error al obtener las observaciones' });
                }
            }
            if (!res.headersSent) {
                 res.status(200).json(results);
            }
        });
    } catch (error) {
        console.error('Error al obtener las observaciones:', error);
         if (!res.headersSent) {
            res.status(500).json({ error: 'Error al obtener las observaciones' });
         }
    }
};

export const obtenerObservacionPorId = async (req, res) => {
    const usuarioAutenticado = verificarToken(req, res);
    if (!usuarioAutenticado) return;

    try {
        const { idObservacion } = req.params;
        const obtenerObservacion = `
            SELECT
                o.idObservacion, o.Comentario, o.FechaObservacion, o.isActive,
                t.idTurno, t.FechaRequeridaTurno, t.HorarioRequeridaTurno,
                p.NombrePaciente, p.ApellidoPaciente,
                m.NombreMedico, m.ApellidoMedico
            FROM observaciones o
            JOIN turnos t ON o.idTurno = t.idTurno
            JOIN pacientes p ON t.idPaciente = p.idPaciente
            JOIN medicos m ON t.idMedico = m.idMedico
            WHERE o.idObservacion = ? AND o.isActive = 1
        `;
        db.query(obtenerObservacion, [idObservacion], (error, results) => {
            if (error) {
                console.error('Error al obtener la observacion:', error);
                if (!res.headersSent) {
                     return res.status(500).json({ error: 'Error al obtener la observacion' });
                }
            }
             if (!res.headersSent) {
                if (results.length === 0) {
                     return res.status(404).json({ message: 'Observación no encontrada o inactiva.' });
                }
                res.status(200).json(results[0]);
            }
        });
    } catch (error) {
        console.error('Error al obtener la observacion:', error);
         if (!res.headersSent) {
            res.status(500).json({ error: 'Error al obtener la observacion' });
         }
    }
};

export const crearObservacion = async (req, res) => {
    const usuarioAutenticado = verificarToken(req, res);
    if (!usuarioAutenticado) return;

    try {
        const { idTurno, Comentario } = req.body;

        if (!idTurno || !Comentario) {
            return res.status(400).json({ error: 'Faltan campos obligatorios (idTurno, Comentario)' });
        }

        const fechaActual = new Date();

        const agregarObservacion = 'INSERT INTO observaciones (idTurno, Comentario, FechaObservacion) VALUES (?, ?, ?)';
        db.query(agregarObservacion, [idTurno, Comentario, fechaActual], (error, results) => {
            if (error) {
                console.error('Error al crear la observacion:', error);
                if (!res.headersSent) {
                    return res.status(500).json({ error: 'Error al crear la observacion' });
                }
            }
             if (!res.headersSent) {
                 res.status(201).json({
                     message: 'Observacion creada exitosamente',
                     idObservacion: results.insertId
                 });
            }
        });
    } catch (error) {
        console.error('Error al crear la observacion:', error);
         if (!res.headersSent) {
            res.status(500).json({ error: 'Error al crear la observacion' });
         }
    }
};

export const actualizarObservacion = async (req, res) => {
    const usuarioAutenticado = verificarToken(req, res);
    if (!usuarioAutenticado) return;

    try {
        const { idObservacion } = req.params;
        const { idTurno, Comentario } = req.body;

        if (!idTurno || !Comentario) {
            return res.status(400).json({ error: 'Faltan campos obligatorios (idTurno, Comentario)' });
        }
        if (!idObservacion) {
             return res.status(400).json({ error: 'Falta el ID de la observación en la URL.' });
        }

        const actualizarObservacion = 'UPDATE observaciones SET idTurno = ?, Comentario = ? WHERE idObservacion = ? AND isActive = 1';
        db.query(actualizarObservacion, [idTurno, Comentario, idObservacion], (error, results) => {
            if (error) {
                console.error('Error al modificar la observacion:', error);
                if (!res.headersSent) {
                    return res.status(500).json({ error: 'Error al modificar la observacion' });
                }
            }
             if (!res.headersSent) {
                 if (results.affectedRows === 0) {
                     return res.status(404).json({ message: 'Observación no encontrada o inactiva.' });
                 }
                res.status(200).json({ message: 'Observacion modificada exitosamente' });
            }
        });
    } catch (error) {
        console.error('Error al modificar la observacion:', error);
        if (!res.headersSent) {
            res.status(500).json({ error: 'Error al modificar la observacion' });
        }
    }
};

export const borradoLogicoObservacion = async (req, res) => {
    const usuarioAutenticado = verificarToken(req, res);
    if (!usuarioAutenticado) return;

    try {
        const { idObservacion } = req.params;

        if (!idObservacion) {
            return res.status(400).json({ error: 'Falta el ID de la observación en la URL.' });
        }

        const borrarObservacion = 'UPDATE observaciones SET isActive = 0 WHERE idObservacion = ? AND isActive = 1';
        db.query(borrarObservacion, [idObservacion], (error, results) => {
            if (error) {
                console.error('Error al borrar la observacion:', error);
                if (!res.headersSent) {
                    return res.status(500).json({ error: 'Error al borrar la observacion' });
                }
            }
             if (!res.headersSent) {
                 if (results.affectedRows === 0) {
                     return res.status(404).json({ message: 'Observación no encontrada o ya inactiva.' });
                 }
                res.status(200).json({ message: 'Observacion borrada (lógicamente) exitosamente' });
            }
        });
    } catch (error) {
        console.error('Error al borrar la observacion:', error);
         if (!res.headersSent) {
            res.status(500).json({ error: 'Error al borrar la observacion' });
         }
    }
};