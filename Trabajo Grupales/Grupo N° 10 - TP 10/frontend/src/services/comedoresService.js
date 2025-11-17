import api from './api';

export const comedoresService = {
  
  getAll: async () => {
    console.log("Obteniendo comedores (REAL)...");
    // ¡Esta ruta está protegida! Pero nuestro 'api.js' ya envía el token.
    const response = await api.get('/comedores');
    return response.data.payload;
  },
  
  getById: async (id) => {
    console.log(`Buscando comedor con id: ${id} (REAL)...`);
    const response = await api.get(`/comedores/${id}`);
    return response.data;
  },
  
  // (No implementamos el CRUD completo para comedores,
  // pero si quisieras, aquí irían las funciones create, update y delete)
};