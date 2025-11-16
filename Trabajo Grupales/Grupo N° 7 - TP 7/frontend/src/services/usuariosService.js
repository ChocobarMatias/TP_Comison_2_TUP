import api from "./api";

export const obtenerUsuarios = async () => {
  const { data } = await api.get("/usuarios/todos");
  return data;
};

export const crearUsuario = async (usuario) => {
  const { data } = await api.post("/usuarios/crear", usuario);
  return data;
};

export const actualizarUsuario = async (id, usuario) => {
  const { data } = await api.put(`/usuarios/editar/${id}`, usuario);
  return data;
};

export const eliminarUsuario = async (id) => {
  const { data } = await api.delete(`/usuarios/borrar/${id}`);
  return data;
};
