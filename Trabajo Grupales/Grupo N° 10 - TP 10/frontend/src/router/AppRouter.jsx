import { Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';
import ProtectedRoute from '../proteccionRutas/ProtectedRoute';

// ----- ¡Vamos a crear estas páginas ahora! -----
import DonantesPage from '../pages/DonantesPage';
import ProductosPage from '../pages/ProductosPage';
import EntregasPage from '../pages/EntregasPage';
// ---------------------------------------------

const AppRouter = () => {
  return (
    <Routes>
      {/* Rutas Públicas */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<LoginPage />} />

      {/* Rutas Privadas */}
      <Route 
        path="/dashboard" 
        element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} 
      />
      <Route 
        path="/donantes" 
        element={<ProtectedRoute><DonantesPage /></ProtectedRoute>} 
      />
      <Route 
        path="/productos" 
        element={<ProtectedRoute><ProductosPage /></ProtectedRoute>} 
      />
      <Route 
        path="/entregas" 
        element={<ProtectedRoute><EntregasPage /></ProtectedRoute>} 
      />
      
      {/* (Opcional) Ruta para cuando no encuentra nada */}
      {/* <Route path="*" element={<Navigate to="/" />} /> */}
    </Routes>
  );
};

export default AppRouter;