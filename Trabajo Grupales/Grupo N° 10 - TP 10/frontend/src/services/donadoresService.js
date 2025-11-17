import api from './api';

// ¡Ya no necesitamos el array MOCK_DONADORES!

export const donadoresService = {
  
  getAll: async () => {
    console.log("Obteniendo donadores (REAL)...");
    const response = await api.get('/donadores');
    return response.data.payload; // <-- CAMBIO AQUÍ
  },
  
  getById: async (id) => {
    console.log(`Buscando donante con id: ${id} (REAL)...`);
    const response = await api.get(`/donadores/${id}`);
    return response.data;
  },

  create: async (donanteData) => {
    console.log("Creando nuevo donante (REAL)...", donanteData);
    const response = await api.post('/donadores', donanteData);
    return response.data;
  },

  update: async (id, donanteData) => {
    console.log(`Actualizando donante con id: ${id} (REAL)...`, donanteData);
    const response = await api.put(`/donadores/${id}`, donanteData);
    return response.data;
  },

  delete: async (id) => {
    console.log(`Borrando donante con id: ${id} (REAL)...`);
    const response = await api.delete(`/donadores/${id}`);
    return response.data;
  },
};