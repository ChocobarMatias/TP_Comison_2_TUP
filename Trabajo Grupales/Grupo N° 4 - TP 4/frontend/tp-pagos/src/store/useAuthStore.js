import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: null,
  token: null,

  login: (token) => set({ token }),
  logout: () => set({ user: null, token: null }),
}));
