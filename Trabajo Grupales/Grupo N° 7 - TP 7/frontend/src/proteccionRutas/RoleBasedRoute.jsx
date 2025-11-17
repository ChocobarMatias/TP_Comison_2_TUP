import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export default function RoleBasedRoute({ children, allowedRoles }) {
  const user = useAuthStore((state) => state.user);

  if (!user || !allowedRoles.includes(user.rol)) {
    return <Navigate to="/home" />;
  }

  return children;
}
