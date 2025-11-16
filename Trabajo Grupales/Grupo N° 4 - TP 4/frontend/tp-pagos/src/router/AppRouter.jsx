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

        <Route path="/servicios" element={<ServiciosList />} 
        />
        <Route path="/servicios/nuevo" element={<ServiciosCreate />} />
        <Route path="/servicios/editar/:id" element={<ServiciosEdit />} />



        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />

      </Routes>
    </BrowserRouter>
  );
}
