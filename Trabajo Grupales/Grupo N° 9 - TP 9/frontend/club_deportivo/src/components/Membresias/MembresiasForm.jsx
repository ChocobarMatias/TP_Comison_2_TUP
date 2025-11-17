import { useState, useEffect } from 'react';
import { getSocios, getDeportes } from '../../services/api'; 

const MembresiasForm = ({ membresiaToEdit, onSubmit, onCancel }) => {
  const isEditing = !!membresiaToEdit;
  const [formData, setFormData] = useState(() => ({
    socio_id: membresiaToEdit?.socio_id || '',
    deporte_id: membresiaToEdit?.deporte_id || '',
    cuota_mensual: membresiaToEdit?.cuota_mensual || ''
  }));

  const [socios, setSocios] = useState([]);
  const [deportes, setDeportes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isEditing) {
      setLoading(false);
      return;
    }

    const loadSelects = async () => {
      try {
        setLoading(true);
        const [sociosData, deportesData] = await Promise.all([
          getSocios(),
          getDeportes()
        ]);
        setSocios(sociosData);
        setDeportes(deportesData);
      } catch (error) {
        console.error("Error cargando socios o deportes", error);
      } finally {
        setLoading(false);
      }
    };
    loadSelects();
  }, [isEditing]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToSend = {
      socio_id: Number(formData.socio_id),
      deporte_id: Number(formData.deporte_id),
      cuota_mensual: parseFloat(formData.cuota_mensual)
    };
    
    if (isEditing) {
      onSubmit({ cuota_mensual: dataToSend.cuota_mensual });
    } else {
      onSubmit(dataToSend);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-bold mb-4">
        {isEditing 
          ? `Editando Cuota de Membresía`
          : 'Nueva Membresía'}
      </h2>
      
      {loading ? (
        <p>Cargando datos...</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="socio_id" className="block text-sm font-medium text-gray-700">Socio *</label>
            {isEditing ? (
              <p className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md">
                {membresiaToEdit.socios.nombre} {membresiaToEdit.socios.apellido}
              </p>
            ) : (
              <select
                name="socio_id"
                id="socio_id"
                value={formData.socio_id}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              >
                <option value="">-- Seleccione un socio --</option>
                {socios.map(socio => (
                  <option key={socio.idSocio} value={socio.idSocio}>
                    {socio.nombre} {socio.apellido} (DNI: {socio.dni})
                  </option>
                ))}
              </select>
            )}
          </div>
          <div>
            <label htmlFor="deporte_id" className="block text-sm font-medium text-gray-700">Deporte *</label>
            {isEditing ? (
              <p className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md">
                {membresiaToEdit.deportes.nombre}
              </p>
            ) : (
              <select
                name="deporte_id"
                id="deporte_id"
                value={formData.deporte_id}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              >
                <option value="">-- Seleccione un deporte --</option>
                {deportes.map(deporte => (
                  <option key={deporte.idDeporte} value={deporte.idDeporte}>
                    {deporte.nombre}
                  </option>
                ))}
              </select>
            )}
          </div>
          <div>
            <label htmlFor="cuota_mensual" className="block text-sm font-medium text-gray-700">Cuota Mensual ($) *</label>
            <input
              type="number"
              step="0.01"
              name="cuota_mensual"
              id="cuota_mensual"
              value={formData.cuota_mensual}
              onChange={handleChange}
              required
              placeholder="Ej: 5000.00"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            />
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
              {isEditing ? 'Guardar Cambios' : 'Crear Membresía'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default MembresiasForm;