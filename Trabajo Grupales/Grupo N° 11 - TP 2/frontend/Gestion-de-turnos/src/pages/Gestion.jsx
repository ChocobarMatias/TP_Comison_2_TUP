import { useAxios } from '../hooks/useAxios';
import { turnosService } from '../services/turnosService';
import GestionMain from '../components/GestionMain';

const Gestion = () => {
  const { data: turnos, loading, error, refetch } = useAxios(turnosService.getAll, []);

  const handleCreateTurno = async (formData) => {
    try {
      await turnosService.create(formData);
      refetch();
    } catch (err) {
      alert('Error al crear turno');
    }
  };

  const handleDeleteTurno = async (id) => {
    if (window.confirm('¿Seguro que deseas eliminar este turno?')) {
      try {
        await turnosService.delete(id);
        refetch();
      } catch (err) {
        alert('Error al eliminar turno');
      }
    }
  };

  return (
    <GestionMain
      turnos={turnos}
      loading={loading}
      error={error}
      onCreateTurno={handleCreateTurno}
      onDeleteTurno={handleDeleteTurno}
    />
  );
};

export default Gestion;
