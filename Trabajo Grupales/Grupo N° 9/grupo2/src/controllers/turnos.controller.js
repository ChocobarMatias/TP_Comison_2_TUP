
import db from "../config/db.js";
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

export const solicitarTurno = (req, res) => {
    const usuarioAutenticado = verificarToken(req, res); 
    if (!usuarioAutenticado) return; 
    try {
        const {
            idPaciente,
            idMedico,
            FechaRequeridaTurno,
            HorarioRequeridoTurno,
        } = req.body;

        if (
            !idPaciente ||
            !idMedico ||
            !FechaRequeridaTurno ||
            !HorarioRequeridoTurno
        ) {
            return res.status(400).json({ message: "Faltan datos obligatorios" });
        }

        const verificarDisponibilidad =
            "SELECT idTurno FROM turnos WHERE idMedico = ? AND FechaRequeridaTurno = ? AND HorarioRequeridoTurno = ? AND EstadoTurno != 'Cancelado'";

        db.query(
            verificarDisponibilidad,
            [idMedico, FechaRequeridaTurno, HorarioRequeridoTurno],
            (error, results) => {
                if (error) {
                    console.log(error);
                    return res
                        .status(500)
                        .json({ message: "Error al verificar disponibilidad" });
                }

                if (results.length > 0) {
                    return res.status(409).json({ 
                        message: "Turno no disponible en ese horario para el médico seleccionado.",
                    });
                }

                const solicitar =
                    "INSERT INTO turnos (FechaRequeridaTurno, HorarioRequeridoTurno, EstadoTurno, idPaciente, idMedico) VALUES (?, ?, 'Pendiente', ?, ?)";

                db.query(
                    solicitar,
                    [FechaRequeridaTurno, HorarioRequeridoTurno, idPaciente, idMedico],
                    (errorInsert, resultsInsert) => {
                        if (errorInsert) {
                            console.log(errorInsert);
                            return res
                                .status(500)
                                .json({ message: "Error al solicitar turno" });
                        }
                        res.status(201).json({
                            message: "Turno solicitado exitosamente",
                            idTurno: resultsInsert.insertId
                        });
                    }
                );
            }
        );
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error en el servidor" });
    }
};

export const traerTurnosPorFecha = (req, res) => {
    const usuarioAutenticado = verificarToken(req, res); 
    if (!usuarioAutenticado) return; 
    try {
        const { FechaRequeridaTurno } = req.query;
        
        if (!FechaRequeridaTurno) {
            return res.status(400).json({ message: "La fecha es obligatoria (en formato YYYY-MM-DD)" });
        }

        const traerTurnos = `
            SELECT
                t.idTurno, t.FechaRequeridaTurno, t.HorarioRequeridoTurno, t.EstadoTurno,
                p.NombrePaciente, p.ApellidoPaciente,
                m.NombreMedico, m.ApellidoMedico,
                cm.NombreCat AS EspecialidadMedico
            FROM turnos t
            JOIN pacientes p ON t.idPaciente = p.idPaciente
            JOIN medicos m ON t.idMedico = m.idMedico
            JOIN catmedicos cm ON m.idCatMedico = cm.idCatMedico
            WHERE t.FechaRequeridaTurno = ?
            ORDER BY t.HorarioRequeridoTurno ASC
        `;
        db.query(traerTurnos, [FechaRequeridaTurno], (error, results) => {
            if (error) {
                console.log(error);
                return res.status(500).json({ message: "Error al traer turnos por fecha" });
            }
            res.status(200).json(results);
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error en el servidor" });
    }
};

export const cancelarTurno = (req, res) => {
    const usuarioAutenticado = verificarToken(req, res);
    if (!usuarioAutenticado) return;

    try {
        const { idTurno } = req.params;

        if (!idTurno) {
            return res.status(400).json({ message: "El id del turno es obligatorio" });
        }

        const cancelar = "UPDATE turnos SET EstadoTurno = 'Cancelado' WHERE idTurno = ? AND EstadoTurno = 'Pendiente'"; 
        db.query(cancelar, [idTurno], (error, results) => {
            if (error) {
                console.log(error);
                return res.status(500).json({ message: "Error al cancelar el turno" });
            }
            if (results.affectedRows === 0) {
                return res.status(404).json({ message: "Turno no encontrado o ya no estaba pendiente." });
            }
            res.status(200).json({ message: "Turno cancelado exitosamente" });
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error en el servidor" });
    }
};