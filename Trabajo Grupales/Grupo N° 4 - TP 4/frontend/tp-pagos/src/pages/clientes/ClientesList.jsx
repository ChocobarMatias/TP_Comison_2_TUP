import { useState } from "react";
import { useClientes } from "../../hooks/useClientes";

import Table from "../../components/Table";
import Button from "../../components/Button";
import Modal from "../../components/Modal";

export default function ClientesList() {
  const { clientes, loading, eliminarCliente } = useClientes();

  const [clienteSeleccionado, setClienteSeleccionado] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);

  const abrirModal = (cliente) => {
    setClienteSeleccionado(cliente);
    setMostrarModal(true);
  };

  const cerrarModal = () => {
    setClienteSeleccionado(null);
    setMostrarModal(false);
  };

  const confirmarEliminar = async () => {
    await eliminarCliente(clienteSeleccionado.id);
    cerrarModal();
  };

  if (loading) return <p>Cargando clientes...</p>;

  return (
    <div>
      <h1>Clientes</h1>

      <Button to="/clientes/nuevo">+ Nuevo Cliente</Button>

      <Table
        data={clientes}
        columns={[
          { label: "ID", key: "id" },
          { label: "Nombre", key: "nombre" },
          { label: "Apellido", key: "apellido" },
          { label: "Email", key: "email" },
        ]}
        actions={[
          {
            label: "Editar",
            to: (c) => `/clientes/editar/${c.id}`,
            variant: "warning",
          },
          {
            label: "Eliminar",
            onClick: abrirModal,
            variant: "danger",
          },
        ]}
      />

      {mostrarModal && (
        <Modal
          title="Confirmar eliminación"
          onClose={cerrarModal}
          onConfirm={confirmarEliminar}
        >
          ¿Seguro que deseas eliminar al cliente{" "}
          <strong>{clienteSeleccionado.nombre} {clienteSeleccionado.apellido}</strong>?
        </Modal>
      )}
    </div>
  );
}
