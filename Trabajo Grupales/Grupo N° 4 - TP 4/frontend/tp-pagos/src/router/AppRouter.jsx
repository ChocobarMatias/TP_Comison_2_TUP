import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import NotFoundPage from "../pages/NotFoundPage";
import ProtectedRoute from "../proteccionRutas/ProtectedRoute";

// CLIENTES
import ClientesList from "../pages/clientes/ClientesList";
import ClientesCreate from "../pages/clientes/ClientesCreate";
import ClientesEdit from "../pages/clientes/ClientesEdit";


// SERVICIOS
import ServiciosList from "../pages/servicios/ServiciosList";
import ServiciosCreate from "../pages/servicios/ServiciosCreate";
import ServiciosEdit from "../pages/servicios/ServiciosEdit";

// PLANES
import PlanesList from "../pages/planes/PlanesList";
import PlanesCreate from "../pages/planes/PlanesCreate";
import PlanesCuotas from "../pages/planes/PlanesCuotas";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* Publicas */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Privadas */}
        <Route 
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />

        {/* 📌 Rutas del módulo Clientes */}
        <Route 
          path="/clientes"
          element={
            <ProtectedRoute>
              <ClientesList />
            </ProtectedRoute>
          }
        />

        <Route 
          path="/clientes/nuevo"
          element={
            <ProtectedRoute>
              <ClientesCreate />
            </ProtectedRoute>
          }
        />

        <Route 
          path="/clientes/editar/:id"
          element={
            <ProtectedRoute>
              <ClientesEdit />
            </ProtectedRoute>
          }
        />
        {/* 📌 Rutas del módulo Servicios */}
        <Route 
          path="/servicios"
          element={
            <ProtectedRoute>
              <ServiciosList />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/servicios/nuevo"
          element={
            <ProtectedRoute>
              <ServiciosCreate />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/servicios/editar/:id"
          element={
            <ProtectedRoute>
              <ServiciosEdit />
            </ProtectedRoute>
          }
        />

        {/* 📌 Rutas del módulo Planes */}
        <Route 
          path="/planes"
          element={
            <ProtectedRoute>
              <PlanesList />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/planes/nuevo"
          element={
            <ProtectedRoute>
              <PlanesCreate />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/planes/:id/cuotas"
          element={
            <ProtectedRoute>
              <PlanesCuotas />
            </ProtectedRoute>
          }
        />

        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />

      </Routes>
    </BrowserRouter>
  );
}
