import api from "./api";

export const loginRequest = async (email, password) => {
  const res = await api.post("/login", { email, password });

  return {
    user: res.data.user,  
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
