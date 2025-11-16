import { useEffect, useState } from "react";
import api from "../Services/Api";

const useCustomUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");

  const obtenerUsuarios = async () => {
    setLoading(true);
    try {
      const response = await api.get("/usuarios");
      setUsuarios(response.data);
      setError(null);
    } catch (err) {
      setError(err);
      console.error("Error al obtener usuarios:", err);
    } finally {
      setLoading(false);
    }
  };

  const traerUsuarioPorId = async (id) => {
    setLoading(true);
    try {
      const response = await api.get(`/usuarios/${id}`);
      setUsuarios([response.data]);
      setError(null);
    } catch (err) {
      setError(err);
      console.error("Error al obtener usuario:", err);
    } finally {
      setLoading(false);
    }
  };

  // Crear usuario
  const crearUsuario = async (nuevoUsuario) => {
    setLoading(true);
    try {
      await api.post("/usuarios/crear", nuevoUsuario, {
        headers: {
          Authorization: token,
        },
      });
      setError(null);
    } catch (err) {
      setError(err);
      console.error("Error al crear usuario:", err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const eliminarUsuario = async (id) => {
    setLoading(true);
    try {
      await api.delete(`/usuarios/eliminar/${id}`, {
        headers: {
          Authorization: token,
        },
      });
      setUsuarios(usuarios.filter((u) => u.usuario_id !== id));
      setError(null);
    } catch (err) {
      setError(err);
      console.error("Error al eliminar usuario:", err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const editarUsuario = async (id, usuarioActualizado) => {
    setLoading(true);
    try {
      await api.put(`/usuarios/editar/${id}`, usuarioActualizado, {
        headers: {
          Authorization: token,
        },
      });
      setError(null);
    } catch (err) {
      setError(err);
      console.error("Error al editar usuario:", err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    obtenerUsuarios();
  }, []);

  return {
    usuarios,
    loading,
    error,
    obtenerUsuarios,
    traerUsuarioPorId,
    crearUsuario,
    eliminarUsuario,
    editarUsuario,
  };
};

export default useCustomUsuarios;
