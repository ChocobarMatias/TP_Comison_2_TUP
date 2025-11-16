/**
 * Endpoints centralizados del backend
 */

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export const endpoints = {
  // Auth
  auth: {
    login: `${BASE_URL}/auth/login`,
    register: `${BASE_URL}/auth/register`,
    logout: `${BASE_URL}/auth/logout`,
  },

  // Productos
  productos: {
    getAll: `${BASE_URL}/productos`,
    getById: (id) => `${BASE_URL}/productos/${id}`,
    create: `${BASE_URL}/productos`,
    update: (id) => `${BASE_URL}/productos/${id}`,
    delete: (id) => `${BASE_URL}/productos/${id}`,
  },

  // Donadores
  donadores: {
    getAll: `${BASE_URL}/donadores`,
    getById: (id) => `${BASE_URL}/donadores/${id}`,
    create: `${BASE_URL}/donadores`,
    update: (id) => `${BASE_URL}/donadores/${id}`,
    delete: (id) => `${BASE_URL}/donadores/${id}`,
  },

  // Comedores
  comedores: {
    getAll: `${BASE_URL}/comedores`,
    getById: (id) => `${BASE_URL}/comedores/${id}`,
    create: `${BASE_URL}/comedores`,
    update: (id) => `${BASE_URL}/comedores/${id}`,
    delete: (id) => `${BASE_URL}/comedores/${id}`,
  },

  // Entregas
  entregas: {
    getAll: `${BASE_URL}/entregas`,
    getById: (id) => `${BASE_URL}/entregas/${id}`,
    create: `${BASE_URL}/entregas`,
    update: (id) => `${BASE_URL}/entregas/${id}`,
    delete: (id) => `${BASE_URL}/entregas/${id}`,
  },
};

export default endpoints;
