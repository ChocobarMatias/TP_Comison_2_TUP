import api from './Api';

export const funcionCambioPassword = async (token, contraseña) => {
  const response = await api.put(`/auth/cambio_password/${token}`, { contraseña });
  return response.data;
};

export const funcionRecuperarPassword = async (email) => {
  const response = await api.post('/auth/recuperar-password', { mail: email });
  return response.data;
};