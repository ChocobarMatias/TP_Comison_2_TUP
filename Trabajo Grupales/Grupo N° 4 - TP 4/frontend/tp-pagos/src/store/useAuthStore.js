import { create } from "zustand";
import { loginRequest, getMeRequest } from "../services/authService";

export const useAuthStore = create((set) => ({
  user: null,
  token: localStorage.getItem("token") || null,
  loading: false,
  error: null,

  login: async (formData) => {
    set({ loading: true, error: null });

    try {
      const res = await loginRequest(formData);

      const token = res.data.token;

      localStorage.setItem("token", token);
      set({ token });

      await useAuthStore.getState().loadUser();

    } catch (err) {
      set({
        error: err.response?.data?.error || "Error al iniciar sesiÃ³n",
      });
    } finally {
      set({ loading: false });
    }
  },

  loadUser: async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      set({ user: null, token: null });
      return;
    }

    try {
      const res = await getMeRequest();
      set({ user: res.data.user });

    } catch (err) {
      localStorage.removeItem("token");
      set({ user: null, token: null });
    }
  },

  logout: () => {
    localStorage.removeItem("token");
    set({ user: null, token: null });
  },
}));