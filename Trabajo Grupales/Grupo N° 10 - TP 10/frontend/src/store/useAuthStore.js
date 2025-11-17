import { create } from 'zustand';

// Función para guardar el estado en localStorage
const saveStateToLocalStorage = (state) => {
  localStorage.setItem('auth-storage', JSON.stringify(state));
};

// Función para cargar el estado desde localStorage
const loadStateFromLocalStorage = () => {
  try {
    const storedState = localStorage.getItem('auth-storage');
    if (storedState === null) return { user: null, token: null };
    return JSON.parse(storedState);
  } catch (err) {
    return { user: null, token: null };
  }
};

// 1. Cargamos el estado inicial desde localStorage
const initialState = loadStateFromLocalStorage();

export const useAuthStore = create((set) => ({
  user: initialState.user,
  token: initialState.token,
  
  login: (userData, authToken) => {
    const newState = { user: userData, token: authToken };
    set(newState);
    // 2. Guardamos en localStorage cada vez que hacemos login
    saveStateToLocalStorage(newState);
  },
  
  logout: () => {
    const newState = { user: null, token: null };
    set(newState);
    // 3. Limpiamos localStorage al hacer logout
    saveStateToLocalStorage(newState);
  },
}));