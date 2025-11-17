// src/proteccionRutas/RoleBasedRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export default function RoleBasedRoute({ children, roles = [] }) {
  const user = useAuthStore((state) => state.user);

  if (!user || (roles.length > 0 && !roles.includes(user.rol))) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}
