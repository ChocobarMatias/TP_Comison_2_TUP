import { useState, useEffect } from 'react';
import { getDeportes, createDeporte, updateDeporte, deleteDeporte } from '../../services/api';
import DeporteForm from './DeporteForm';
import { GoPencil, GoTrash } from 'react-icons/go';

const DeportesList = () => {
  const [deportes, setDeportes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formState, setFormState] = useState(null);

  useEffect(() => {
    fetchDeportes();
  }, []);

  const fetchDeportes = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getDeportes();
      setDeportes(data);
    } catch (err) {
      console.error('Error fetching deportes:', err);
      setError('No se pudieron cargar los deportes.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de desactivar (borrado lógico) este deporte?')) {
      try {
        await deleteDeporte(id);
        fetchDeportes();
      } catch (err) {
        console.error('Error deleting deporte:', err);
        setError('Error al eliminar el deporte.');
      }
    }
  };

  const handleSubmitForm = async (formData) => {
    try {
      if (formState?.isEditing) {
        await updateDeporte(formState.deporte.idDeporte, formData);
      } else {
        await createDeporte(formData);
      }
      setFormState(null);
      fetchDeportes();
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Error al guardar el deporte. ¿El nombre ya existe?');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Gestión de Deportes</h1>
        {!formState && (
          <button
            onClick={() => setFormState({ isEditing: false })}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Nuevo Deporte
          </button>
        )}
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      {formState && (
        <DeporteForm
          key={formState.deporte?.idDeporte || 'new'}
          deporteToEdit={formState.deporte}
          onSubmit={handleSubmitForm}
          onCancel={() => setFormState(null)}
        />
      )}

      <div className="bg-white shadow rounded-lg">
        <ul className="divide-y divide-gray-200">
          {deportes.map((deporte) => (
            <li key={deporte.idDeporte} className="p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="flex-1">
                <p className="text-lg font-semibold text-gray-900">{deporte.nombre}</p>
                <p className="text-sm text-gray-600 mt-1">{deporte.descripcion || 'Sin descripción'}</p>
              </div>
              <div className="flex gap-2 mt-4 sm:mt-0">
                <button
                  onClick={() => setFormState({ isEditing: true, deporte: deporte })}
                  className="flex-1 bg-blue-100 text-blue-700 px-3 py-2 rounded-lg hover:bg-blue-200 text-sm font-medium flex items-center justify-center gap-2"
                >
                  <GoPencil /> Editar
                </button>
                <button
                  onClick={() => handleDelete(deporte.idDeporte)}
                  className="flex-1 bg-red-100 text-red-700 px-3 py-2 rounded-lg hover:bg-red-200 text-sm font-medium flex items-center justify-center gap-2"
                >
                  <GoTrash /> Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {deportes.length === 0 && !loading && (
        <div className="text-center py-12">
          <h3 className="mt-2 text-sm font-medium text-gray-900">No hay deportes</h3>
          <p className="mt-1 text-sm text-gray-500">Comienza agregando un nuevo deporte.</p>
        </div>
      )}
    </div>
  );
};

export default DeportesList;