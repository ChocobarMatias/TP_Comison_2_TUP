import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DonantesList from '../components/DonantesList';
// 1. Importa el formulario renombrado
import FormularioDonante from '../components/FormularioDonante'; 
import { donadoresService } from '../services/donadoresService';

const DonantesPage = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  
  // 2. --- ¡NUEVO ESTADO AQUÍ! ---
  // Este estado guardará el ID del donante que queremos editar
  const [idParaEditar, setIdParaEditar] = useState(null);

  // 3. Renombramos la función (ahora sirve para crear y editar)
  const handleFormularioCerrado = () => {
    setMostrarFormulario(false);
    setIdParaEditar(null); // Limpia el ID
    setRefreshKey(keyAnterior => keyAnterior + 1);
  };

  // 4. --- ¡NUEVA FUNCIÓN AQUÍ! ---
  // Se llama cuando hacemos clic en 'Editar' en la lista
  const handleEditar = (id) => {
    setIdParaEditar(id); // Guarda el ID del donante a editar
    setMostrarFormulario(true); // Muestra el formulario
  };
  
  // 5. --- ¡NUEVA FUNCIÓN AQUÍ! ---
  // Se llama cuando hacemos clic en 'Agregar Donante'
  const handleAgregar = () => {
    setIdParaEditar(null); // Nos aseguramos de que el ID esté nulo (modo crear)
    setMostrarFormulario(true); // Muestra el formulario
  };

  const handleDelete = async (id) => {
    // ... (el código de handleDelete sigue igual)
    if (window.confirm("¿Estás seguro de que quieres borrar este donante?")) {
      try {
        await donadoresService.delete(id);
        setRefreshKey(keyAnterior => keyAnterior + 1);
      } catch (error) {
        alert("Error al borrar el donante: " + error.message);
      }
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <Link to="/dashboard">{"< Volver al Dashboard"}</Link>
      <h1 style={{ marginTop: '20px' }}>Gestión de Donantes</h1>
      
      {/* 6. Lógica de renderizado actualizada */}
      {mostrarFormulario ? (
        <FormularioDonante
          // Pasa el ID a editar (puede ser null o un número)
          idParaEditar={idParaEditar} 
          // Renombramos la prop que avisa que se cerró
          onFormularioCerrado={handleFormularioCerrado} 
          onClose={() => {
            setMostrarFormulario(false); 
            setIdParaEditar(null); // Limpia el ID al cancelar
          }}
        />
      ) : (
        <button 
          style={{ marginBottom: '15px', fontSize: '16px' }}
          onClick={handleAgregar} // 7. Llama al nuevo handler de agregar
        >
          + Agregar Donante
        </button>
      )}

      <DonantesList 
        refreshKey={refreshKey} 
        onDelete={handleDelete}
        onEditar={handleEditar} // 8. Pasa la nueva función de editar
      />
    </div>
  );
};

export default DonantesPage;