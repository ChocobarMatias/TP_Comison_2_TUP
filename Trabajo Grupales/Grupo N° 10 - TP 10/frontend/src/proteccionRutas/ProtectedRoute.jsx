import React from 'react';
import { useAuthStore } from '../store/useAuthStore';
import { Navigate } from 'react-router-dom';

// Este componente es un "guardián"
const ProtectedRoute = ({ children }) => {
  // 1. Revisa en el store si hay un token
  const token = useAuthStore((state) => state.token);

  if (!token) {
    // 2. Si NO hay token, lo saca de la ruta y lo manda al login
    return <Navigate to="/login" replace />;
  }

  // 3. Si HAY token, deja que el "children" (la página) se muestre
  return children;
};

export default ProtectedRoute;