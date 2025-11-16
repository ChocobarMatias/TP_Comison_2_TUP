import api from "./api";

export const loginRequest = async (email, password) => {
  const res = await api.post("/login", {
    email,
    password,
  });

  // El backend devuelve: { message, token }
  return {
    user: res.data.user || null, // opcional si no envías el usuario desde backend
    token: res.data.token
  };
};


export const registerRequest = async ({ MailUsuario, PasswordUsuario, RolUsuario }) => {
  const res = await api.post("/usuarios/crear", {
    MailUsuario,
    PasswordUsuario,
    RolUsuario
  });

  return res.data;
};
