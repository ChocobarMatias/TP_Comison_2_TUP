import { useState, useEffect } from "react";
import { getPlanesByCliente, pagarCuota } from "../services/planesService";

export const usePlanesCliente = (clienteId) => {
  const [planes, setPlanes] = useState([]);
  const [loading, setLoading] = useState(true);

  const cargarPlanes = async () => {
    try {
      const { data } = await getPlanesByCliente(clienteId);
      setPlanes(data);
    } catch (err) {
      console.error("Error cargando planes:", err);
    } finally {
      setLoading(false);
    }
  };

  const pagar = async (idCuota) => {
    try {
      await pagarCuota(idCuota);
      cargarPlanes();
    } catch (err) {
      console.error("Error pagando cuota:", err);
    }
  };

  useEffect(() => {
    cargarPlanes();
  }, [clienteId]);

  return { planes, loading, pagar };
};
