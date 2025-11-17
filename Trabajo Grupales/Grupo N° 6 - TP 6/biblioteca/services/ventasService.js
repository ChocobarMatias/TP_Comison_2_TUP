// src/services/ventasService.js
import api from "./api";

// Podés usar esto para préstamos de libros
export const getPrestamos = async () => {
  const { data } = await api.get("/prestamos"); // Ajustá al endpoint real
  return data;
};
