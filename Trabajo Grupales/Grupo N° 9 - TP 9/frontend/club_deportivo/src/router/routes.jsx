import { Login } from '../components/auth/Login.jsx';
import { Register } from '../components/auth/Register.jsx'; 
import NotFound from '../pages/NotFound.jsx';
import Dashboard from '../components/Dashboard/Dashboard';
import SociosList from '../components/Socios/SociosList';
import DeportesList from '../components/Deportes/DeportesList';
import PagosList from '../components/Pagos/PagosList';
import MembresiasList from '../components/Membresias/MembresiasList';
import MainLayout from '../components/Layout/MainLayout.jsx'; 
import { ProtectedRoute } from '../components/ProtectedRoute';
import { Navigate } from 'react-router-dom'; 

export const routes = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Navigate to="/dashboard" replace />
      </ProtectedRoute>
    ),
  },
  {
    path: '/dashboard',
    element: (
      <ProtectedRoute>
        <MainLayout>
          <Dashboard />
        </MainLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: '/socios',
    element: (
      <ProtectedRoute>
        <MainLayout>
          <SociosList />
        </MainLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: '/deportes',
    element: (
      <ProtectedRoute>
        <MainLayout>
          <DeportesList />
        </MainLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: '/pagos',
    element: (
      <ProtectedRoute>
        <MainLayout>
          <PagosList />
        </MainLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: '/membresias', 
    element: (
      <ProtectedRoute>
        <MainLayout>
          <MembresiasList />
        </MainLayout>
      </ProtectedRoute>
    ),
  },  
  {
    path: '*',
    element: <NotFound />,
  },
];