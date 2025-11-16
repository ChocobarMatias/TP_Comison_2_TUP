import { useState, useEffect } from "react";
import { clientesService } from "../services/clienteService";

export const useClientes = () => {
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const cargarClientes = async () => {
    try {
      setLoading(true);
      const res = await clientesService.getAll();
      setClientes(res.data);
    } catch (err) {
      console.error("Error cargando clientes:", err);
      setError("No se pudieron cargar los clientes");
    } finally {
      setLoading(false);
    }
  };

  const crearCliente = async (data) => {
    const res = await clientesService.create(data);
    await cargarClientes();
    return res.data;
  };

  const actualizarCliente = async (id, data) => {
    const res = await clientesService.update(id, data);
    await cargarClientes();
    return res.data;
  };

  const eliminarCliente = async (id) => {
    const res = await clientesService.remove(id);
    await cargarClientes();
    return res.data;
  };

  useEffect(() => {
    cargarClientes();
  }, []);

  return {
    clientes,
    loading,
    error,
    crearCliente,
    actualizarCliente,
    eliminarCliente,
    cargarClientes,
  };
};
