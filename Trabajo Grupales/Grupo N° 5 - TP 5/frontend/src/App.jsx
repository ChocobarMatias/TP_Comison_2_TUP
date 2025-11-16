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
import Layout from "./components/Layout"

function App() {

  return (
    <>
      <div className="min-h-screen flex flex-col">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reset-solicitud" element={<ResetSolicitud />} />
        <Route path="/reset-contrasena" element={<ResetPassword />} />
        <Route element={<Layout />}>
          <Route path="/actividades" element={<ProtectedRoute><Actividades /></ProtectedRoute>} />
          <Route path="/reservar" element={<ProtectedRoute><ActividadesHoy /></ProtectedRoute>} />
          <Route path="/cambiar-contrasena" element={<ProtectedRoute><ChangePassword /></ProtectedRoute>} />
          <Route path="/mis-actividades" element={<ProtectedRoute><MisActividades /></ProtectedRoute>} />
          <Route path="/reservas" element={<ProtectedRoute><Reservas /></ProtectedRoute>} />
          <Route path="/admin" element={<ProtectedRouteAdmin><Admin /></ProtectedRouteAdmin>} />
        </Route>
      </Routes>
      </div>
    </>
  )
}

export default App
