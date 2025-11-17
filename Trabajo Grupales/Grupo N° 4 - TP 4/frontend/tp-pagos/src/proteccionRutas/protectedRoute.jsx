import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export default function ProtectedRoute({ children }) {
  const { token, user } = useAuthStore();

  if (!token) return <Navigate to="/login" replace />;

  // Si tiene token pero aún no cargó user
  if (token && !user) {
    return <div>Cargando...</div>;
  }

  return children;
}