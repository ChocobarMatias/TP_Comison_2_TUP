import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainUsuarios from "./components/MainUsuarios";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Navbar from './components/Navbar';
import AgregarMedAdmin from './components/AgregarMedAdimn';
import ProtectedRoute from './proteccionRutas/ProtectedRoute';
import AdminRoute from './proteccionRutas/AdminRoute';
import { useAuthStore } from "./store/useAuthStore";
import MisTurnos from './components/MisTurnos';
function App() {
  window.useAuthStore = useAuthStore;
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          {/* 👇 HOME protegido */}
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />


          <Route
  path="/mis-turnos"
  element={
    <ProtectedRoute>
      <MisTurnos />
    </ProtectedRoute>
  }
/>



 

          {/* 👇 Página inicial redirige al login */}
          <Route path="/" element={<LoginPage />} />

          {/* Login / Registro libres */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />

          {/* 👇 RUTA SOLO ADMIN */}
          <Route
            path="/admin-med"
            element={
              <AdminRoute>
                <AgregarMedAdmin />
              </AdminRoute>
            }
          />

          {/* Gestión de usuarios, también solo admin */}
          <Route
            path="/usuarios"
            element={
              <AdminRoute>
                <MainUsuarios />
              </AdminRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
