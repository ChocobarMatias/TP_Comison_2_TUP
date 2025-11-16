import { useEffect, useState } from "react";
import api from "../Services/Api";

const useCustomAlumnos = () => {
  // Ahora manejamos múltiples tablas: ejemplo { alumnos: [], cursos: [] }
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");

  const obtenerAlumnos = async () => {
    setLoading(true);
    try {
      const response = await api.get("/alumnos");
      // Si la respuesta es un array, la guardamos como { alumnos: [...] }
      if (Array.isArray(response.data)) {
        setData({ alumnos: response.data });
      } else {
        setData(response.data);
      }
      setError(null);
    } catch (err) {
      setError(err);
      console.error("Error al obtener alumnos:", err);
    } finally {
      setLoading(false);
    }
  };

  const traerAlumnosporId = async (id) => {
    setLoading(true);
    try {
      const response = await api.get(`/alumnos/${id}`);
      // Si la respuesta es un objeto único, lo guardamos como { alumnos: [objeto] }
      if (response.data && !Array.isArray(response.data)) {
        setData({ alumnos: [response.data] });
      } else {
        setData({ alumnos: response.data });
      }
      setError(null);
    } catch (err) {
      setError(err);
      console.error("Error al obtener alumno:", err);
    } finally {
      setLoading(false);
    }
  };

  const crearAlumno = async (nuevoAlumno) => {
    setLoading(true);
    try {
      await api.post("/alumnos/crear", nuevoAlumno, {
        headers: {
          Authorization: token,
        },
      });
      setError(null);
    } catch (err) {
      setError(err);
      console.error("Error al crear alumno:", err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const eliminarAlumno = async (id) => {
    setLoading(true);
    try {
      await api.delete(`/alumnos/eliminar/${id}`, {
        headers: {
          Authorization: token,
        },
      });
      // Si tienes alumnos en data.alumnos, actualiza solo esa parte
      setData((prev) => ({
        ...prev,
        alumnos: prev.alumnos
          ? prev.alumnos.filter((al) => al.alumno_id !== id)
          : [],
      }));
      setError(null);
    } catch (err) {
      setError(err);
      console.error("Error al eliminar alumno:", err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const editarAlumno = async (id, alumnoActualizado) => {
    setLoading(true);
    try {
      await api.put(`/alumnos/editar/${id}`, alumnoActualizado, {
        headers: {
          Authorization: token,
        },
      });
      setError(null);
    } catch (err) {
      setError(err);
      console.error("Error al editar alumno:", err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    obtenerAlumnos();
  }, []);

  return {
    data, // contiene todas las tablas
    loading,
    error,
    obtenerAlumnos,
    traerAlumnosporId,
    crearAlumno,
    eliminarAlumno,
    editarAlumno,
  };
};

export default useCustomAlumnos;
