import { useState, useEffect } from 'react';
import { getMembresias } from '../../services/api'; 

const PagoForm = ({ onSubmit, onCancel }) => {
  const [membresias, setMembresias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    membresia_id: '',
    importe: '',
    cuota_mes: new Date().getMonth() + 1, 
    cuota_anio: new Date().getFullYear(),
    metodo_pago: 'Efectivo',
    comentario: ''
  });

  useEffect(() => {
    const fetchMembresias = async () => {
      try {
        setLoading(true);
        const data = await getMembresias();
        setMembresias(data);
      } catch (error) {
        console.error("Error fetching membresias:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMembresias();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleMembresiaChange = (e) => {
    const { value } = e.target;
    const membresiaId = value ? Number(value) : '';
    
    let importe = '';
    if (membresiaId) {
      const seleccionada = membresias.find(m => m.idMembresia === membresiaId);
      if (seleccionada) {
        importe = seleccionada.cuota_mensual;
      }
    }

    setFormData(prev => ({
      ...prev,
      membresia_id: membresiaId,
      importe: importe
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const pagoData = {
      membresia_id: Number(formData.membresia_id),
      importe: parseFloat(formData.importe),
      cuota_mes: Number(formData.cuota_mes),
      cuota_anio: Number(formData.cuota_anio),
      metodo_pago: formData.metodo_pago,
      comentario: formData.comentario
    };
    onSubmit(pagoData);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-bold mb-4">Registrar Nuevo Pago</h2>
      {loading ? (
        <p>Cargando membresías...</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">          
          <div>
            <label htmlFor="membresia_id" className="block text-sm font-medium text-gray-700">Membresía (Socio - Deporte) *</label>
            <select
              name="membresia_id"
              id="membresia_id"
              value={formData.membresia_id}
              onChange={handleMembresiaChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            >
              <option value="">-- Seleccione una membresía --</option>
              {membresias.map((mem) => (
                <option key={mem.idMembresia} value={mem.idMembresia}>
                  Socio: {mem.socios.nombre} {mem.socios.apellido} - Deporte: {mem.deportes.nombre}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="importe" className="block text-sm font-medium text-gray-700">Importe *</label>
              <input
                type="number"
                step="0.01"
                name="importe"
                id="importe"
                value={formData.importe}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div>
              <label htmlFor="cuota_mes" className="block text-sm font-medium text-gray-700">Mes *</label>
              <input
                type="number"
                name="cuota_mes"
                id="cuota_mes"
                value={formData.cuota_mes}
                onChange={handleChange}
                required
                min="1"
                max="12"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div>
              <label htmlFor="cuota_anio" className="block text-sm font-medium text-gray-700">Año *</label>
              <input
                type="number"
                name="cuota_anio"
                id="cuota_anio"
                value={formData.cuota_anio}
                onChange={handleChange}
                required
                min="2020"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="metodo_pago" className="block text-sm font-medium text-gray-700">Método de Pago</label>
              <select
                name="metodo_pago"
                id="metodo_pago"
                value={formData.metodo_pago}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              >
                <option value="Efectivo">Efectivo</option>
                <option value="Tarjeta">Tarjeta</option>
                <option value="Transferencia">Transferencia</option>
              </select>
            </div>
            <div>
              <label htmlFor="comentario" className="block text-sm font-medium text-gray-700">Comentario</label>
              <input
                type="text"
                name="comentario"
                id="comentario"
                value={formData.comentario}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onCancel}
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Guardar Pago
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default PagoForm;