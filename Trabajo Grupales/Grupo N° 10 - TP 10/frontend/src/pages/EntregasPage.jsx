import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EntregasList from '../components/EntregasList';
// 1. Importa el formulario renombrado
import FormularioEntrega from '../components/FormularioEntrega';
import { entregasService } from '../services/entregasService';

const EntregasPage = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  
  // 2. Nuevo estado para el ID a editar
  const [idParaEditar, setIdParaEditar] = useState(null);

  // 3. Renombramos la función
  const handleFormularioCerrado = () => {
    setMostrarFormulario(false);
    setIdParaEditar(null);
    setRefreshKey(keyAnterior => keyAnterior + 1);
  };

  // 4. Nueva función para 'Editar'
  const handleEditar = (id) => {
    setIdParaEditar(id);
    setMostrarFormulario(true);
  };
  
  // 5. Nueva función para 'Agregar'
  const handleAgregar = () => {
    setIdParaEditar(null);
    setMostrarFormulario(true);
  };

  // 6. El handleDelete (que ya tenías) sigue igual
  const handleDelete = async (id) => {
    if (window.confirm("¿Estás seguro de que quieres borrar esta entrega?")) {
      try {
        await entregasService.delete(id);
        setRefreshKey(keyAnterior => keyAnterior + 1);
      } catch (error) {
        alert("Error al borrar la entrega: " + error.message);
      }
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <Link to="/dashboard">{"< Volver al Dashboard"}</Link>
      <h1 style={{ marginTop: '20px' }}>Gestión de Entregas</h1>

      {/* 7. Lógica de renderizado actualizada */}
      {mostrarFormulario ? (
        <FormularioEntrega 
          idParaEditar={idParaEditar}
          onFormularioCerrado={handleFormularioCerrado}
          onClose={() => {
            setMostrarFormulario(false);
            setIdParaEditar(null);
          }}
        />
      ) : (
        <button 
          style={{ marginBottom: '15px', fontSize: '16px' }}
          onClick={handleAgregar}
        >
          + Registrar Nueva Entrega
        </button>
      )}
      
      {/* 8. Pasa las nuevas props a la lista */}
      <EntregasList 
        refreshKey={refreshKey} 
        onDelete={handleDelete}
        onEditar={handleEditar}
      />
    </div>
  );
};

export default EntregasPage;