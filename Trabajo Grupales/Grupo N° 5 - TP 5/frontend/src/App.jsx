import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Actividades from "./pages/Actividades"
import Admin from "./pages/Admin"
import Reservas from "./pages/Reservas"
import ChangePassword from "./pages/ChangePassword"
import MisActividades from "./pages/MisActividades"
import ResetPassword from "./pages/ResetPassword"
import ResetSolicitud from "./pages/ResetSolicitud"
import ActividadesHoy from "./pages/ActividadesHoy"
import ProtectedRouteAdmin from "./components/ProtectedRouteAdmin";
import ProtectedRoute from "./components/ProtectedRoute"

function App() {

  return (
    <>
      <div className="min-h-screen flex flex-col">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/actividades" element={<Actividades />} />
        <Route path="/actividades-hoy" element={<ProtectedRoute><ActividadesHoy /></ProtectedRoute>} />
        <Route path="/cambiar-contrasena" element={<ProtectedRoute><ChangePassword /></ProtectedRoute>} />
        <Route path="/mis-actividades" element={<ProtectedRoute><MisActividades /></ProtectedRoute>} />
        <Route path="/reservas" element={<ProtectedRoute><Reservas /></ProtectedRoute>} />
        <Route path="/reset-solicitud" element={<ResetSolicitud />} />
        <Route path="/reset-contrasena" element={<ResetPassword />} />
        <Route path="/admin" element={<ProtectedRouteAdmin><Admin /></ProtectedRouteAdmin>} />
      </Routes>
      </div>
    </>
  )
}

export default App
