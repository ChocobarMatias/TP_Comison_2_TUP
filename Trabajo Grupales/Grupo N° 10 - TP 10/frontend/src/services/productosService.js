import api from './api';

// ¡Adiós MOCK_PRODUCTOS!

export const productosService = {
  
  getAll: async () => {
    console.log("Obteniendo productos (REAL)...");
    const response = await api.get('/productos');
    return response.data.payload;
  },
  
  getById: async (id) => {
    console.log(`Buscando producto con id: ${id} (REAL)...`);
    const response = await api.get(`/productos/${id}`);
    return response.data;
  },

  create: async (productoData) => {
    console.log("Creando nuevo producto (REAL)...", productoData);
    const response = await api.post('/productos', productoData);
    return response.data;
  },

  update: async (id, productoData) => {
    console.log(`Actualizando producto con id: ${id} (REAL)...`, productoData);
    const response = await api.put(`/productos/${id}`, productoData);
    return response.data;
  },

  delete: async (id) => {
    console.log(`Borrando producto con id: ${id} (REAL)...`);
    const response = await api.delete(`/productos/${id}`);
    return response.data;
  },
};