import { useState, useEffect } from 'react';
import { getSocios, deleteSocio, updateSocio } from '../../services/api'; 
import SocioForm from './SocioForm';
import SocioCard from './SocioCard';

const SociosList = () => {
  const [socios, setSocios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingSocio, setEditingSocio] = useState(null); 

  useEffect(() => {
    fetchSocios();
  }, []);

  const fetchSocios = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getSocios();
      setSocios(data);
    } catch (error) {
      console.error('Error fetching socios:', error);
      setError('No se pudieron cargar los socios.');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateSocio = async (socioData) => {
    if (!editingSocio) return;

    try {
      await updateSocio(editingSocio.idSocio, socioData);
      setEditingSocio(null);
      fetchSocios();
    } catch (error) {
      console.error('Error updating socio:', error);
    }
  };

  const handleDeleteSocio = async (id) => {
    if (window.confirm('¿Estás seguro de desactivar (borrado lógico) este socio?')) {
      try {
        await deleteSocio(id);
        fetchSocios();
      } catch (error) {
        console.error('Error deleting socio:', error);
      }
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
        <h1 className="text-3xl font-bold text-gray-900">Gestión de Socios</h1>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}
      {editingSocio && (
        <SocioForm
        key={editingSocio.idSocio}
          socioToEdit={editingSocio}
          onSubmit={handleUpdateSocio} 
          onCancel={() => setEditingSocio(null)} 
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {socios.map((socio) => (
          <SocioCard
            key={socio.idSocio}
            socio={socio}
            onDelete={handleDeleteSocio}
            onEdit={setEditingSocio} 
          />
        ))}
      </div>

      {socios.length === 0 && !loading && (
        <div className="text-center py-12">
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900">No hay socios</h3>
          <p className="mt-1 text-sm text-gray-500">Comienza agregando un nuevo socio.</p>
        </div>
      )}
    </div>
  );
};

export default SociosList;