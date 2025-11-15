import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Actividades from "./pages/Actividades"
import Admin from "./pages/Admin"
import Reservas from "./pages/Reservas"
import ResetPassword from "./pages/ResetPassword"
import ResetSolicitud from "./pages/ResetSolicitud"
import ActividadesHoy from "./pages/ActividadesHoy"

function App() {

  return (
    <>
      <div className="min-h-screen flex flex-col">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/actividades" element={<Actividades />} />
        <Route path="/actividades-hoy" element={<ActividadesHoy />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/reservas" element={<Reservas />} />
        <Route path="/reset-solicitud" element={<ResetSolicitud />} />
        <Route path="/reset-contrasena" element={<ResetPassword />} />
      </Routes>
      </div>
    </>
  )
}

export default App
