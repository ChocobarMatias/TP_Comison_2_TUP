import api from './api';

export const authService = {
  login: async (credentials) => {
    const data = {
      email: credentials.email,
      contrasena: credentials.password
    };
    const response = await api.post('/auth/login', data);
    return response.data;
  },

  register: async (userData) => {
    const data = {
      nombre: userData.nombre,
      email: userData.email,
      contrasena: userData.password
    };
    const response = await api.post('/auth/register', data);
    return response.data;
  },

  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  getCurrentUser: () => {
      const user = localStorage.getItem('user');
      if (!user) return null;
      try {
        return JSON.parse(user);
      } catch (e) {
        return null;
      }
  },
};
