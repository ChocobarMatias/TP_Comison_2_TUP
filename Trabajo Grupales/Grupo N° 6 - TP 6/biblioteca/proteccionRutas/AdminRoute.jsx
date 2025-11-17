// src/proteccionRutas/AdminRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export default function AdminRoute({ children }) {
  const user = useAuthStore((state) => state.user);

  if (!user || user.rol !== "ADMIN") {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}
