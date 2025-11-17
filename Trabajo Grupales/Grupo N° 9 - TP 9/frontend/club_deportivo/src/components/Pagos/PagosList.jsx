import { useState, useEffect } from 'react';
import { getPagos, createPago } from '../../services/api';
import PagoForm from './PagoForm';

const formatDate = (dateString) => {
  if (!dateString) return 'N/A';
  const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
  return new Date(dateString).toLocaleString('es-AR', options);
};

const PagosList = () => {
  const [pagos, setPagos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false); 

  useEffect(() => {
    fetchPagos();
  }, []);

  const fetchPagos = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getPagos();
      setPagos(data);
    } catch (err) {
      console.error('Error fetching pagos:', err);
      setError('No se pudieron cargar los pagos.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitPago = async (pagoData) => {
    try {
      await createPago(pagoData);
      setShowForm(false); 
      fetchPagos();
    } catch (err) {
      console.error('Error creating pago:', err);
      setError('Error al registrar el pago.');
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
        <h1 className="text-3xl font-bold text-gray-900">Historial de Pagos</h1>
        {!showForm && (
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Registrar Pago
          </button>
        )}
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      {showForm && (
        <PagoForm
          onSubmit={handleSubmitPago}
          onCancel={() => setShowForm(false)}
        />
      )}

      <div className="bg-white shadow rounded-lg overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Socio</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Deporte</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Importe</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Período</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Fecha de Pago</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Método</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {pagos.map((pago) => (
              <tr key={pago.idPago}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {pago.membresias.socios.nombre} {pago.membresias.socios.apellido}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {pago.membresias.deportes.nombre}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  ${pago.importe.toLocaleString('es-AR')}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {pago.cuota_mes}/{pago.cuota_anio}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {formatDate(pago.fecha_pago)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {pago.metodo_pago || 'N/A'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {pagos.length === 0 && !loading && (
        <div className="text-center py-12">
          <h3 className="mt-2 text-sm font-medium text-gray-900">No hay pagos</h3>
          <p className="mt-1 text-sm text-gray-500">Comienza registrando un nuevo pago.</p>
        </div>
      )}
    </div>
  );
};

export default PagosList;