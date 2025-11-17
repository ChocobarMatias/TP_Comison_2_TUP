import React, { useCallback } from 'react'; // 1. Importa useCallback
import { useFetch } from '../hooks/useFetch';
import { donadoresService } from '../services/donadoresService';

const DonantesList = ({ refreshKey, onDelete, onEditar }) => {
  
  // 2. Envuelve la función del servicio en useCallback
  const getDonantes = useCallback(() => {
    return donadoresService.getAll();
  }, []); // El [] significa que esta función NUNCA cambia

  // 3. Pasa la función "memorizada" a useFetch
  const { data: donantes, loading, error } = useFetch(getDonantes, refreshKey);

  if (loading) return <p>Cargando donantes...</p>;
  
  // 4. Mostramos el error 404 (que viene del backend)
  if (error) return <p style={{ color: 'red' }}>Error: {error.message}</p>;

  if (!donantes || donantes.length === 0) {
    return <p>No se encontraron donantes.</p>;
  }

  return (
    <div>
      <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Contacto</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {donantes.map((donante) => (
            <tr key={donante.id}>
              <td>{donante.id}</td>
              <td>{donante.nombre}</td>
              <td>{donante.apellido}</td>
              <td>{donante.contacto}</td>
              <td>
                <button 
                  onClick={() => onEditar(donante.id)}
                  style={{ backgroundColor: '#aaeebb' }}
                >
                  Editar
                </button>
                <button 
                  onClick={() => onDelete(donante.id)}
                  style={{ backgroundColor: '#ffaaaa', marginLeft: '5px' }}
                >
                  Borrar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DonantesList;