// src/services/productosService.js
import api from "./api";

export const getLibros = async () => {
  const { data } = await api.get("/libros"); // Cambiá por tu endpoint real
  return data;
};
