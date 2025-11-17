import { useAxios } from '../hooks/useAxios';
import { serviciosService } from '../services/serviciosService';
import ServiciosMain from '../components/ServiciosMain';

const Servicios = () => {
  const { data: servicios, loading, error, refetch } = useAxios(serviciosService.getAll, []);

  const handleCreateServicio = async (formData) => {
    try {
      await serviciosService.create(formData);
      refetch();
    } catch (err) {
      alert('Error al crear servicio');
    }
  };

  const handleDeleteServicio = async (id) => {
    if (window.confirm('¿Seguro que deseas eliminar este servicio?')) {
      try {
        await serviciosService.delete(id);
        refetch();
      } catch (err) {
        alert('Error al eliminar servicio');
      }
    }
  };

  return (
    <ServiciosMain
      servicios={servicios}
      loading={loading}
      error={error}
      onCreateServicio={handleCreateServicio}
      onDeleteServicio={handleDeleteServicio}
    />
  );
};

export default Servicios;