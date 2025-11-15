import api from '../Services/Api';


export const funcionRecuperoPassword = async (email) => {
    const response = await api.post('/auth/recupero_password', { email });
    return response.data;
}

export const funcionCambioPassword = async (token, newPassword) => {
  const response = await api.put(`/auth/cambio_password/${token}`, { newPassword });
  return response.data;
};