import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const decodeToken = (token) => {
  try {
    const payload = JSON.parse(atob(token.split('.')[1]))
    return payload
  } catch {
    return null
  }
}

export const useSocioStore = create()(
  persist(
    (set, get) => ({
      token: null,

      login: (token) => set({ token: token }),

      isTokenValid: () => {
        const token = get().token
        if (!token) return false

        const payload = decodeToken(token)
        if (!payload?.exp) return false

        const now = Math.floor(Date.now() / 1000)

        // si expiró, limpiar y avisar
        if (payload.exp < now) {
          set({ token: null })
          return false
        }

        return true
      },

      getToken: () => {
        if (!get().isTokenValid()) return null
        return get().token
      },

      getIdSocio: () => {
        if (!get().isTokenValid()) return null
        const payload = decodeToken(get().token)
        return payload?.id ?? null
      },

      isAdmin: () => {
        if (!get().isTokenValid()) return null
        const payload = decodeToken(get().token)
        return payload?.admin ?? null
      },

      logout: () => set({ token: null }),
    }),
    {
      name: 'socios-gym', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    },
  ),
)