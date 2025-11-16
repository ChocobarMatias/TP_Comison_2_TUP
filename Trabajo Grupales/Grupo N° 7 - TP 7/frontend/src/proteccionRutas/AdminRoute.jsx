import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export default function AdminRoute({ children }) {
  const user = useAuthStore((state) => state.user);

  if (!user || user.rol !== "Admin") return <Navigate to="/home" />;

  return children;
}
