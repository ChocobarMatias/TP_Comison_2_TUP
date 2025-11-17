/**
 * Servicio de autenticación
 */

import api from './api.js';

// Login de usuario
export const login = async (credentials) => {
  const response = await api.post('/auth/login', credentials);
  if (response.data.token) {
    localStorage.setItem('token', response.data.token);
  }
  return response.data;
};

// Registro de usuario
export const register = async (userData) => {
  const response = await api.post('/auth/register', userData);
  return response.data;
};

// Logout
export const logout = () => {
  localStorage.removeItem('token');
  window.location.href = '/login';
};

// Verificar si el usuario está autenticado
export const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};
