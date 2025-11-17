const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export const AUTH_ENDPOINTS = {
  LOGIN: `${API_BASE_URL}/auth/login`,
  REGISTER: `${API_BASE_URL}/auth/register`,
  LOGOUT: `${API_BASE_URL}/auth/logout`,
  VERIFY: `${API_BASE_URL}/auth/verify`,
};

export const TURNOS_ENDPOINTS = {
  BASE: `${API_BASE_URL}/turnos`,
  GET_ALL: `${API_BASE_URL}/turnos`,
  GET_BY_ID: (id) => `${API_BASE_URL}/turnos/${id}`,
  CREATE: `${API_BASE_URL}/turnos`,
  UPDATE: (id) => `${API_BASE_URL}/turnos/${id}`,
  DELETE: (id) => `${API_BASE_URL}/turnos/${id}`,
};

export const CLIENTES_ENDPOINTS = {
  BASE: `${API_BASE_URL}/clientes`,
  GET_ALL: `${API_BASE_URL}/clientes`,
  GET_BY_ID: (id) => `${API_BASE_URL}/clientes/${id}`,
  CREATE: `${API_BASE_URL}/clientes`,
  UPDATE: (id) => `${API_BASE_URL}/clientes/${id}`,
  DELETE: (id) => `${API_BASE_URL}/clientes/${id}`,
};

export const SERVICIOS_ENDPOINTS = {
  BASE: `${API_BASE_URL}/servicios`,
  GET_ALL: `${API_BASE_URL}/servicios`,
  GET_BY_ID: (id) => `${API_BASE_URL}/servicios/${id}`,
  CREATE: `${API_BASE_URL}/servicios`,
  UPDATE: (id) => `${API_BASE_URL}/servicios/${id}`,
  DELETE: (id) => `${API_BASE_URL}/servicios/${id}`,
};

export default API_BASE_URL;
