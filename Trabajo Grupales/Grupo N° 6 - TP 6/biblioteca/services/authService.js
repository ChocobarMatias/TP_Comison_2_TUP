// src/services/authService.js
import api from "./api";

export const loginRequest = async (credentials) => {
  const { data } = await api.post("/auth/login", credentials);
  // Esperado: { user: {...}, token: "..." }
  return data;
};
