import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api/medicos";

export const getMedicosPorCategoria = async (idCategoria) => {
  try {
    const res = await axios.get(`${API_BASE_URL}/categoria/${idCategoria}`);
    return res.data; // Ahora res.data ya es un array directamente
  } catch (error) {
    console.error("ERROR en servicio Medicos:", error);
    return []; // En caso de error devolvemos array vacío
  }
};

export const crearMedico = async (data) => {
  try {
    // Enviamos los datos al endpoint POST /api/medicos
    const res = await axios.post(`${API_BASE_URL}`, data);
    // Devuelve directamente el objeto del médico creado
    return res.data;
  } catch (error) {
    console.error("ERROR en servicio Crear Medico:", error);
    return null; // En caso de error devolvemos null
  }
};

// ====================================
// NUEVO: Servicio para eliminar médico
// ====================================
export const eliminarMedico = async (idMedico) => {
  try {
    const res = await axios.delete(`${API_BASE_URL}/${idMedico}`);
    return res.data; // Devuelve mensaje del backend { message: 'Médico eliminado' }
  } catch (error) {
    console.error("ERROR en servicio Eliminar Medico:", error);
    return null; // En caso de error devolvemos null
  }
};
