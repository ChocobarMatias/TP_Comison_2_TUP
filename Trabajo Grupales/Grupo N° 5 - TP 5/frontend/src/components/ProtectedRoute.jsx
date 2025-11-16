import { Navigate } from "react-router-dom";
import { useSocioStore } from "../stores/socios.store";

export default function ProtectedRoute({ children }) {
  const token = useSocioStore((state) => state.token);

  if (!token) return <Navigate to="/" replace />;

  return children;
}
