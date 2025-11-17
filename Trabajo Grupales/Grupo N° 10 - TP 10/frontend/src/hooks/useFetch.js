import { useState, useEffect } from 'react';

// Acepta la función de servicio y un "trigger" (disparador)
export const useFetch = (serviceFunction, refreshTrigger = 0) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        // Llama a la función de servicio
        const result = await serviceFunction();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    
  // ¡LA CLAVE ESTÁ AQUÍ!
  // El hook ahora solo se re-ejecuta si el "refreshTrigger" cambia.
  // Ya no depende de 'serviceFunction', que causaba el bucle.
  }, [refreshTrigger]); 

  return { data, loading, error };
};