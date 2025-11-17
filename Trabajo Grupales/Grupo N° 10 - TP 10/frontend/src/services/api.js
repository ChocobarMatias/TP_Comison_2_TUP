import axios from 'axios';
import { useAuthStore } from '../store/useAuthStore'; // Importamos el store

// 1. Configuración base de Axios
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8080/api',
  headers: { 'Content-Type': 'application/json' },
});

// 2. --- ¡Esto es lo nuevo e importante! ---
// "Interceptor": Es una función que se ejecuta ANTES de que se envíe cualquier llamada de axios.
// Su trabajo es tomar el token que tenemos guardado y "pegarlo" en la cabecera de la llamada.
api.interceptors.request.use(
  (config) => {
    // Obtenemos el token desde nuestro store de Zustand
    const token = useAuthStore.getState().token;
    
    if (token) {
      // Si el token existe, lo añadimos a la cabecera 'Authorization'
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config; // Dejamos que la llamada continúe
  },
  (error) => {
    // Si hay un error al configurar la llamada, lo rechazamos
    return Promise.reject(error);
  }
);

export default api;