import api from './api';

export const entregasService = {
  
  getAll: async () => {
    console.log("Obteniendo entregas (REAL)...");
    const response = await api.get('/entregas');
    return response.data.payload;
  },
  
  getById: async (id) => {
    console.log(`Buscando entrega con id: ${id} (REAL)...`);
    const response = await api.get(`/entregas/${id}`);
    return response.data;
  },

  create: async (nuevaEntregaData) => {
    console.log("Creando nueva entrega (REAL)...", nuevaEntregaData);
    // El backend espera los IDs como números
    const dataToSend = {
      ...nuevaEntregaData,
      id_donador: parseInt(nuevaEntregaData.id_donador),
      id_producto: parseInt(nuevaEntregaData.id_producto),
      id_comedor: parseInt(nuevaEntregaData.id_comedor),
      cantidad: parseInt(nuevaEntregaData.cantidad),
    };
    const response = await api.post('/entregas', dataToSend);
    return response.data;
  },

  update: async (id, entregaData) => {
    console.log(`Actualizando entrega con id: ${id} (REAL)...`, entregaData);
    const dataToSend = {
      ...entregaData,
      id_donador: parseInt(entregaData.id_donador),
      id_producto: parseInt(entregaData.id_producto),
      id_comedor: parseInt(entregaData.id_comedor),
      cantidad: parseInt(entregaData.cantidad),
    };
    const response = await api.put(`/entregas/${id}`, dataToSend);
    return response.data;
  },

  delete: async (id) => {
    console.log(`Borrando entrega con id: ${id} (REAL)...`);
    const response = await api.delete(`/entregas/${id}`);
    return response.data;
  },
};