import { useState, useEffect } from 'react';
import api from '../services/api';

/**
 * Hook para hacer peticiones HTTP con manejo de estados
 * @param {string} url - URL del endpoint (relativa a la baseURL de api)
 * @param {Object} options - Opciones de configuración
 * @param {boolean} options.autoFetch - Si debe hacer la petición automáticamente al montar
 * @param {string} options.method - Método HTTP (GET, POST, PUT, DELETE)
 * @param {Object} options.body - Datos a enviar en el body (para POST/PUT)
 */
const useFetch = (url, options = {}) => {
  const {
    autoFetch = true,
    method = 'GET',
    body = null,
  } = options;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  /**
   * Función para ejecutar la petición
   */
  const fetchData = async (customBody = null) => {
    setLoading(true);
    setError(null);

    try {
      let response;
      const requestBody = customBody || body;

      switch (method.toUpperCase()) {
        case 'GET':
          response = await api.get(url);
          break;
        case 'POST':
          response = await api.post(url, requestBody);
          break;
        case 'PUT':
          response = await api.put(url, requestBody);
          break;
        case 'DELETE':
          response = await api.delete(url, { data: requestBody });
          break;
        default:
          throw new Error(`Método HTTP no soportado: ${method}`);
      }

      setData(response.data);
      return response.data;
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || 'Error en la petición';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  /**
   * Función para refrescar los datos
   */
  const refetch = () => fetchData();

  /**
   * Función para limpiar los datos
   */
  const reset = () => {
    setData(null);
    setError(null);
    setLoading(false);
  };

  // Auto-fetch al montar el componente si está habilitado
  useEffect(() => {
    if (autoFetch && url) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, autoFetch]);

  return {
    data,
    loading,
    error,
    fetchData,
    refetch,
    reset,
  };
};

export default useFetch;
