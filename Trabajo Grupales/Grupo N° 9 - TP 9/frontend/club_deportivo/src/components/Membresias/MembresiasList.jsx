import { useState, useEffect } from 'react';
import { 
  getMembresias, 
  createMembresia, 
  updateMembresia, 
  deleteMembresia 
} from '../../services/api'; 
import MembresiasForm from './MembresiasForm';
import { GoPencil, GoTrash } from 'react-icons/go';

const MembresiasList = () => {
  const [membresias, setMembresias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formState, setFormState] = useState(null);

  useEffect(() => {
    fetchMembresias();
  }, []);

  const fetchMembresias = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getMembresias(); // Llama al 'listar' del controller
      setMembresias(data);
    } catch (err) {
      console.error('Error fetching membresias:', err);
      setError('No se pudieron cargar las membresías.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de desactivar (borrado lógico) esta membresía?')) {
      try {
        await deleteMembresia(id);
        fetchMembresias();
      } catch (err) {
        console.error('Error deleting membresia:', err);
        setError('Error al eliminar la membresía.');
      }
    }
  };

  const handleSubmitForm = async (formData) => {
    try {
      if (formState?.isEditing) {
        await updateMembresia(formState.membresia.idMembresia, formData);
      } else {
        await createMembresia(formData);
      }
      setFormState(null);
      fetchMembresias();
    } catch (err) {
      console.error('Error submitting form:', err);
      setError(err.response?.data?.message || 'Error al guardar. ¿Ese socio ya está en ese deporte?');
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
        <h1 className="text-3xl font-bold text-gray-900">Gestión de Membresías</h1>
        {!formState && (
          <button
            onClick={() => setFormState({ isEditing: false })}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Nueva Membresía
          </button>
        )}
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      {formState && (
        <MembresiasForm
          key={formState.membresia?.idMembresia || 'new'}
          membresiaToEdit={formState.membresia}
          onSubmit={handleSubmitForm}
          onCancel={() => setFormState(null)}
        />
      )}

      <div className="bg-white shadow rounded-lg overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Socio</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Deporte</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cuota Mensual</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Acciones</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {membresias.map((mem) => (
              <tr key={mem.idMembresia}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {mem.socios.nombre} {mem.socios.apellido}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {mem.deportes.nombre}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  ${mem.cuota_mensual.toLocaleString('es-AR')}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex gap-2">
                  <button
                    onClick={() => setFormState({ isEditing: true, membresia: mem })}
                    className="text-blue-600 hover:text-blue-900"
                    title="Editar Cuota"
                  >
                    <GoPencil size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(mem.idMembresia)}
                    className="text-red-600 hover:text-red-900"
                    title="Eliminar Membresía"
                  >
                    <GoTrash size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {membresias.length === 0 && !loading && (
        <div className="text-center py-12">
          <h3 className="mt-2 text-sm font-medium text-gray-900">No hay membresías</h3>
          <p className="mt-1 text-sm text-gray-500">Comienza agregando una nueva membresía.</p>
        </div>
      )}
    </div>
  );
};

export default MembresiasList;