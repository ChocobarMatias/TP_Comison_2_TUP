// src/hooks/useServicios.js
import { useState, useEffect } from "react";
import { serviciosService } from "../services/servicioService";

export const useServicios = () => {
  const [servicios, setServicios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cargarServicios = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await serviciosService.getAll();
        setServicios(res.data);
      } catch (err) {
        console.error("Error cargando servicios:", err);
        setError("No se pudieron cargar los servicios");
      } finally {
        setLoading(false);
      }
    };

    cargarServicios();
  }, []);

  const crearServicio = async (data) => {
    const res = await serviciosService.create(data);
    // recargar lista
    const updated = await serviciosService.getAll();
    setServicios(updated.data);
    return res.data;
  };

  const actualizarServicio = async (id, data) => {
    const res = await serviciosService.update(id, data);
    const updated = await serviciosService.getAll();
    setServicios(updated.data);
    return res.data;
  };

  const eliminarServicio = async (id) => {
    const res = await serviciosService.remove(id);
    const updated = await serviciosService.getAll();
    setServicios(updated.data);
    return res.data;
  };

  return {
    servicios,
    loading,
    error,
    crearServicio,
    actualizarServicio,
    eliminarServicio,
  };
};
