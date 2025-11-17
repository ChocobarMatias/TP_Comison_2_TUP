import api from "./api";
import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api/turnos";


export const crearTurno = async ({
  idMedico,
  idPaciente,
  FechaRequeridaTurno,
  HorarioRequeridoTurno,
  EstadoTurno
}) => {
  return api.post("/turnos/crear", {
    idMedico,
    idPaciente,
    FechaRequeridaTurno,
    HorarioRequeridoTurno,
    EstadoTurno,
  });
};


export const eliminarTurno = async (idTurno) => {
  try {
    const res = await axios.delete(`${API_BASE_URL}/${idTurno}`);
    return res.data;
  } catch (error) {
    console.error("ERROR eliminando médico:", error);
    return null;
  }
};