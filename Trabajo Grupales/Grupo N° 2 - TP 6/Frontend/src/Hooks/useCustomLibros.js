import { useEffect, useState } from "react";
import api from "../Services/Api";
import { useAuthStore } from "../Store/UseAuthStore";

const useCustomLibros = () => {
  const [libros, setLibros] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");
  const obtenerLibros = async () => {
    setLoading(true);
    try {
      const response = await api.get("/libros");
      setLibros(response.data);
      setError(null);
    } catch (err) {
      setError(err);
      console.error("Error al obtener libros:", err);
    } finally {
      setLoading(false);
    }
  };

  const traerLibrosporId = async (id) => {
    setLoading(true);
    try {
      const response = await api.get(`/libros/${id}`);
      setLibros([response.data]);
      setError(null);
    } catch (err) {
      setError(err);
      console.error("Error al obtener libro:", err);
    } finally {
      setLoading(false);
    }
  };

  const crearLibro = async (nuevoLibro) => {
    setLoading(true);
    try {
      //enviar token al backend
      await api.post("/libros/crear", nuevoLibro, {
        headers: {
          Authorization: token,
          usuario : usuario.rol
        },
      });
      setError(null);
    } catch (err) {
      setError(err);
      console.error("Error al crear libro:", err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const eliminarLibro = async (id) => {
    setLoading(true);
    try {
      await api.delete(`/libros/eliminar/${id}`, {
        headers: {
          Authorization: token,
        },
      });
      setLibros(libros.filter((lib) => lib.libro_id !== id));
      setError(null);
    } catch (err) {
      setError(err);
      console.error("Error al eliminar libro:", err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const editarLibro = async (id, libroActualizado) => {
    setLoading(true);
    try {
      await api.put(`/libros/editar/${id}`, libroActualizado, {
        headers: {
          Authorization: token,
        },
      });
      setError(null);
    } catch (err) {
      setError(err);
      console.error("Error al editar libro:", err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    obtenerLibros();
  }, []);

  return {
    libros,
    loading,
    error,
    obtenerLibros,
    traerLibrosporId,
    crearLibro,
    eliminarLibro,
    editarLibro,
  };
};

export default useCustomLibros;
