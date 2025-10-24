import db from '../config/db.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';

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

export const obtenerMedicos = async (req, res) => {
    const usuarioAutenticado = verificarToken(req, res);
    if (!usuarioAutenticado) return;

    try {
        const obtenerListadoMedicos = `
            SELECT m.idMedico, m.NombreMedico, m.ApellidoMedico, m.FechaNacMedico, m.TelefonoMedico, m.DireccionMedico, m.LocalidadMedico, m.SalarioMedico, m.isActive, cm.NombreCat as Especialidad
            FROM medicos m
            JOIN catmedicos cm ON m.idCatMedico = cm.idCatMedico
        `;
        db.query(obtenerListadoMedicos, (error, results) => {
            if (error) {
                console.error('Error al obtener los medicos:', error);
                if (!res.headersSent) {
                    return res.status(500).json({ error: 'Error al obtener los medicos' });
                }
            }
            if (!res.headersSent) {
                 res.status(200).json(results);
            }
        });
    } catch (error) {
        console.error('Error al obtener los medicos:', error);
         if (!res.headersSent) {
            res.status(500).json({ error: 'Error al obtener los medicos' });
         }
    }
};

export const obtenerMedicoPorId = async (req, res) => {
    const usuarioAutenticado = verificarToken(req, res);
    if (!usuarioAutenticado) return;

    try {
        const { idMedico } = req.params;
        const obtenerMedico = `
            SELECT m.idMedico, m.NombreMedico, m.ApellidoMedico, m.FechaNacMedico, m.TelefonoMedico, m.DireccionMedico, m.LocalidadMedico, m.SalarioMedico, cm.NombreCat as Especialidad
            FROM medicos m
            JOIN catmedicos cm ON m.idCatMedico = cm.idCatMedico
            WHERE m.idMedico = ? AND m.isActive = 1
        `;
        db.query(obtenerMedico, [idMedico], (error, results) => {
            if (error) {
                console.error('Error al obtener el medico:', error);
                if (!res.headersSent) {
                    return res.status(500).json({ error: 'Error al obtener el medico' });
                }
            }
             if (!res.headersSent) {
                if (results.length === 0) {
                     return res.status(404).json({ message: 'Médico no encontrado o inactivo.' });
                }
                res.status(200).json(results[0]);
            }
        });
    } catch (error) {
        console.error('Error al obtener el medico:', error);
        if (!res.headersSent) {
             res.status(500).json({ error: 'Error al obtener el medico' });
        }
    }
};

export const crearMedico = async (req, res) => {
    const usuarioAutenticado = verificarToken(req, res);
    if (!usuarioAutenticado) return;

    // Solo un Admin puede crear médicos
    if (usuarioAutenticado.role !== 'Admin') {
         return res.status(403).json({ message: 'No tienes permiso para realizar esta acción.' });
    }

    const { email, password, NombreMedico, ApellidoMedico, FechaNacMedico, TelefonoMedico, DireccionMedico, LocalidadMedico, SalarioMedico, idCatMedico } = req.body;

    if (!email || !password || !NombreMedico || !ApellidoMedico || !FechaNacMedico || !TelefonoMedico || !DireccionMedico || !LocalidadMedico || !SalarioMedico || !idCatMedico) {
        return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }

    let connection;

    try {
        connection = await db.getConnection();
        await connection.beginTransaction();

        const [existingUser] = await connection.query('SELECT idUsuario FROM usuarios WHERE MailUsuario = ? LIMIT 1', [email]);
        if (existingUser.length > 0) {
            await connection.rollback();
            connection.release();
            return res.status(409).json({ message: 'El email ya está registrado para otro usuario.' });
        }

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);

        const [userResult] = await connection.query(
            'INSERT INTO usuarios (MailUsuario, PasswordUsuario, RolUsuario) VALUES (?, ?, ?)',
            [email, hashedPassword, 'Medico']
        );
        const newUserId = userResult.insertId;

        const [medicoResult] = await connection.query(
            'INSERT INTO medicos (NombreMedico, ApellidoMedico, FechaNacMedico, TelefonoMedico, DireccionMedico, LocalidadMedico, SalarioMedico, idCatMedico, idUsuario) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [NombreMedico, ApellidoMedico, FechaNacMedico, TelefonoMedico, DireccionMedico, LocalidadMedico, SalarioMedico, idCatMedico, newUserId]
        );

        await connection.commit();
        connection.release();

        res.status(201).json({
             message: 'Medico creado exitosamente',
             idMedico: medicoResult.insertId,
             idUsuario: newUserId
         });

    } catch (error) {
        console.error('Error al crear el medico:', error);
        if (connection) {
             try { await connection.rollback(); } catch (rbError) { console.error('Rollback error:', rbError); }
             connection.release();
        }
        if (!res.headersSent) {
            res.status(500).json({ error: 'Error al crear el medico' });
        }
    }
};

export const actualizarMedico = async (req, res) => {
    const usuarioAutenticado = verificarToken(req, res);
    if (!usuarioAutenticado) return;

    if (usuarioAutenticado.role !== 'Admin') {
         return res.status(403).json({ message: 'No tienes permiso para realizar esta acción.' });
    }

    try {
        const { idMedico } = req.params;
        const { NombreMedico, ApellidoMedico, FechaNacMedico, TelefonoMedico, DireccionMedico, LocalidadMedico, SalarioMedico, idCatMedico } = req.body;

        if (!NombreMedico || !ApellidoMedico || !FechaNacMedico || !TelefonoMedico || !DireccionMedico || !LocalidadMedico || !SalarioMedico || !idCatMedico) {
            return res.status(400).json({ error: 'Faltan campos obligatorios' });
        }
        if (!idMedico) {
             return res.status(400).json({ error: 'Falta el ID del médico en la URL.' });
        }

        const actualizarMedico = 'UPDATE medicos SET NombreMedico = ?, ApellidoMedico = ?, FechaNacMedico = ?, TelefonoMedico = ?, DireccionMedico = ?, LocalidadMedico = ?, SalarioMedico = ?, idCatMedico = ? WHERE idMedico = ? AND isActive = 1';
        db.query(actualizarMedico, [NombreMedico, ApellidoMedico, FechaNacMedico, TelefonoMedico, DireccionMedico, LocalidadMedico, SalarioMedico, idCatMedico, idMedico], (error, results) => {
            if (error) {
                console.error('Error al modificar el medico:', error);
                 if (!res.headersSent) {
                    return res.status(500).json({ error: 'Error al modificar el medico' });
                 }
            }
             if (!res.headersSent) {
                 if (results.affectedRows === 0) {
                     return res.status(404).json({ message: 'Médico no encontrado o inactivo.' });
                 }
                res.status(200).json({ message: 'Medico modificado exitosamente' });
            }
        });
    } catch (error) {
        console.error('Error al modificar el medico:', error);
        if (!res.headersSent) {
             res.status(500).json({ error: 'Error al modificar el medico' });
        }
    }
};

export const borradoLogicoMedico = async (req, res) => {
    const usuarioAutenticado = verificarToken(req, res);
    if (!usuarioAutenticado) return;

     if (usuarioAutenticado.role !== 'Admin') {
         return res.status(403).json({ message: 'No tienes permiso para realizar esta acción.' });
    }

    try {
        const { idMedico } = req.params;

         if (!idMedico) {
            return res.status(400).json({ error: 'Falta el ID del médico en la URL.' });
        }

        const borrarMedico = 'UPDATE medicos SET isActive = 0 WHERE idMedico = ? AND isActive = 1';
        db.query(borrarMedico, [idMedico], (error, results) => {
            if (error) {
                console.error('Error al borrar el medico:', error);
                if (!res.headersSent) {
                    return res.status(500).json({ error: 'Error al borrar el medico' });
                }
            }
            if (!res.headersSent) {
                if (results.affectedRows === 0) {
                     return res.status(404).json({ message: 'Médico no encontrado o ya inactivo.' });
                 }
                res.status(200).json({ message: 'Medico borrado (lógicamente) exitosamente' });
            }
        });
    } catch (error) {
        console.error('Error al borrar el medico:', error);
        if (!res.headersSent) {
            res.status(500).json({ error: 'Error al borrar el medico' });
        }
    }
};