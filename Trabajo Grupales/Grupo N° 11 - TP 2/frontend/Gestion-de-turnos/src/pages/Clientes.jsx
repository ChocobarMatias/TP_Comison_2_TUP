import { useAxios } from '../hooks/useAxios';
import { clientesService } from '../services/clientesService';
import ClientesMain from '../components/ClientesMain';

const Clientes = () => {
  const { data: clientes, loading, error, refetch } = useAxios(clientesService.getAll, []);

  const handleCreateCliente = async (formData) => {
    try {
      await clientesService.create(formData);
      refetch();
    } catch (err) {
      alert('Error al crear cliente');
    }
  };

  const handleDeleteCliente = async (id) => {
    if (window.confirm('¿Seguro que deseas eliminar este cliente?')) {
      try {
        await clientesService.delete(id);
        refetch();
      } catch (err) {
        alert('Error al eliminar cliente');
      }
    }
  };

  return (
    <ClientesMain
      clientes={clientes}
      loading={loading}
      error={error}
      onCreateCliente={handleCreateCliente}
      onDeleteCliente={handleDeleteCliente}
    />
  );
};

export default Clientes;