import { Navigate } from "react-router-dom";
import { useSocioStore } from "../stores/socios.store";

export default function ProtectedRouteAdmin({ children }) {
  const isAdmin = useSocioStore((state) => state.isAdmin());

  if (!isAdmin) return <Navigate to="/" replace />;

  return children;
}
