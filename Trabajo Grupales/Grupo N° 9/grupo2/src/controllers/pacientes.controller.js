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
        res.status(401).json({ message: 'Acceso no autorizado. Token inválido o expirado.' });
        return null; 
    }
};

export const traerPacientes = async (req, res) => {
    const usuarioAutenticado = verificarToken(req, res); 

    if (!usuarioAutenticado) return; 
    try {
        const traerTodosLosPacientes = 'SELECT idPaciente, NombrePaciente, ApellidoPaciente, FechaNacPaciente, TelefonoPaciente, DireccionPaciente, SexoPaciente, IsActive FROM pacientes'; 
        db.query(traerTodosLosPacientes, (error, results) => {
            if (error) {
                console.error("Error al traer los pacientes: ", error);
                return res.status(500).json({ mensaje: 'Error al traer los pacientes' });
            }
            res.status(200).json(results);
        });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error en el servidor' });
    }
};

export const traerPacientesActivos = async (req, res) => {
    const usuarioAutenticado = verificarToken(req, res);
    if (!usuarioAutenticado) return;

    try {
        const traerActivos = 'SELECT idPaciente, NombrePaciente, ApellidoPaciente, FechaNacPaciente, TelefonoPaciente, DireccionPaciente, SexoPaciente FROM pacientes WHERE IsActive = 1'; 
        db.query(traerActivos, (error, results) => {
            if (error) {
                console.error("Error al traer los pacientes activos: ", error);
                return res.status(500).json({ mensaje: 'Error al traer los pacientes activos' }); 
            }
            res.status(200).json(results);
        });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error en el servidor' });
    }
};

export const traerPacientePorId = async (req, res) => {
    const usuarioAutenticado = verificarToken(req, res);
    if (!usuarioAutenticado) return;

    try {
        const { idPaciente } = req.params;
        const traerPorId = 'SELECT idPaciente, NombrePaciente, ApellidoPaciente, FechaNacPaciente, TelefonoPaciente, DireccionPaciente, SexoPaciente FROM pacientes WHERE idPaciente = ? AND IsActive = 1';
        db.query(traerPorId, [idPaciente], (error, results) => {
            if (error) {
                console.error("Error al traer el paciente por Id: ", error);
                return res.status(500).json({ mensaje: 'Error al traer el paciente por Id' }); 
            }
            if (results.length === 0) {
                return res.status(404).json({ mensaje: 'Paciente no encontrado o inactivo' }); 
            }
            res.status(200).json(results[0]);
        });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error en el servidor' });
    }
};

export const actualizarPaciente = async (req, res) => {
    const usuarioAutenticado = verificarToken(req, res);
    if (!usuarioAutenticado) return;

    try {
        const { idPaciente } = req.params;
        const { NombrePaciente, ApellidoPaciente, FechaNacPaciente, TelefonoPaciente, DireccionPaciente, SexoPaciente } = req.body;

        if (!NombrePaciente || !ApellidoPaciente || !FechaNacPaciente || !TelefonoPaciente || !DireccionPaciente || !SexoPaciente) {
            return res.status(400).json({ message: 'Faltan campos obligatorios.' });
        }

        const actualizacion = 'UPDATE pacientes SET NombrePaciente = ?, ApellidoPaciente = ?, FechaNacPaciente = ?, TelefonoPaciente = ?, DireccionPaciente = ?, SexoPaciente = ? WHERE idPaciente = ? AND IsActive = 1';
        db.query(actualizacion, [NombrePaciente, ApellidoPaciente, FechaNacPaciente, TelefonoPaciente, DireccionPaciente, SexoPaciente, idPaciente], (error, results) => {
            if (error) {
                console.error("Error al actualizar el paciente: ", error);
                return res.status(500).json({ mensaje: 'Error al actualizar el paciente' }); 
            }
            if (results.affectedRows === 0) {
                return res.status(404).json({ mensaje: 'Paciente no encontrado o inactivo' });
            }
            res.status(200).json({ mensaje: 'Paciente actualizado exitosamente' });
        });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error en el servidor' });
    }
};

export const borradoLogicoPaciente = async (req, res) => {
    const usuarioAutenticado = verificarToken(req, res);
    if (!usuarioAutenticado) return;

    try {
        const { idPaciente } = req.params;
        const borradoLogico = 'UPDATE pacientes SET IsActive = 0 WHERE idPaciente = ? AND IsActive = 1'; 
        db.query(borradoLogico, [idPaciente], (error, results) => {
            if (error) {
                console.error("Error al borrar el paciente: ", error);
                return res.status(500).json({ mensaje: 'Error al borrar el paciente' });
            }
            if (results.affectedRows === 0) {
                return res.status(404).json({ mensaje: 'Paciente no encontrado o ya inactivo' }); 
            }
            res.status(200).json({ mensaje: 'Paciente borrado (lógicamente) exitosamente' });
        });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error en el servidor' });
    }
};
