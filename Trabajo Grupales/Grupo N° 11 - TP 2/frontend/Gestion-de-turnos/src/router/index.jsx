import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ProtectedRoute } from '../protectedroutes/ProtectedRoute';
import Layout from '../layouts/Layout';
import Login from '../pages/Login';
import Registrar from '../pages/Registrar';
import Panel from '../pages/Panel';
import Gestion from '../pages/Gestion';
import Clientes from '../pages/Clientes';
import Servicios from '../pages/Servicios';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/login" element={<Login />} />
        <Route path="/registrar" element={<Registrar />} />

        
        <Route
          path="/panel"
          element={
            <ProtectedRoute>
              <Layout>
                <Panel />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/gestion"
          element={
            <ProtectedRoute>
              <Layout>
                <Gestion />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/clientes"
          element={
            <ProtectedRoute>
              <Layout>
                <Clientes />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/servicios"
          element={
            <ProtectedRoute>
              <Layout>
                <Servicios />
              </Layout>
            </ProtectedRoute>
          }
        />

  <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
