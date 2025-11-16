/**
 * Componente de Ruta de Administrador
 * Solo permite acceso a usuarios con rol de administrador
 */

import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';

export const AdminRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (user?.rol !== 'admin') {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};
