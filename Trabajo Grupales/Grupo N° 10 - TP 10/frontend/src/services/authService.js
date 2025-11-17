import api from './api'; // Importamos nuestro axios configurado

export const authService = {
  
  // ¡Login REAL!
  // Asumo que la ruta de login es /api/auth/login (según el backend)
  login: async (correoUsuario, contraseñaUsuario) => {
    console.log("Iniciando sesión (REAL) con:", correoUsuario);

    // 1. Hacemos la llamada POST a la API
    // El backend del Grupo 10 espera 'correoUsuario' y 'contraseñaUsuario'
    const response = await api.post('/login', {
      correoUsuario,
      contraseñaUsuario,
    });
    
    // 2. La API nos devuelve los datos (ej: { message: "...", user: {...}, token: "..." })
    // La API del Grupo 10 devuelve el token dentro de la propiedad 'user'
    return response.data;
  },

  // (Por ahora no hacemos el register, pero así sería)
  register: async (correoUsuario, contraseñaUsuario) => {
    // Asumo que la ruta es /api/usuarios/registro
    const response = await api.post('/usuarios/registro', {
      correoUsuario,
      contraseñaUsuario,
    });
    return response.data;
  },
};