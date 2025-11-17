import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api/medicos";


export const getMedicosPorCategoria = async (idCategoria) => {
  try {
    const res = await axios.get(`${API_BASE_URL}/categoria/${idCategoria}`);
    return res.data;
  } catch (error) {
    console.error("ERROR en servicio Medicos:", error);
    return [];
  }
};



export const getAllMedicos = async () => {
  try {
    const res = await axios.get(`${API_BASE_URL}/`); 
    return res.data;
  } catch (error) {
    console.error("ERROR obteniendo todos los médicos:", error);
    return [];
  }
};



export const crearMedico = async (data) => {
  try {
    const res = await axios.post(API_BASE_URL, data);
    return res.data;
  } catch (error) {
    console.error("ERROR creando médico:", error);
    return null;
  }
};


export const eliminarMedico = async (idMedico) => {
  try {
    const res = await axios.delete(`${API_BASE_URL}/${idMedico}`);
    return res.data;
  } catch (error) {
    console.error("ERROR eliminando médico:", error);
    return null;
  }
};
