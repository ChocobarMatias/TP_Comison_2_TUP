import api from './api';

export const turnosService = {
  getAll: async () => {
    const response = await api.get('/turnos');
    return response.data;
  },

  getById: async (id) => {
    const response = await api.get(`/turnos/${id}`);
    return response.data;
  },

  create: async (turno) => {
    const response = await api.post('/turnos/crear', turno);
    return response.data;
  },

  update: async (id, turno) => {
    const response = await api.put(`/turnos/${id}`, turno);
    return response.data;
  },

  delete: async (id) => {
    const response = await api.delete(`/turnos/${id}`);
    return response.data;
  },
};
