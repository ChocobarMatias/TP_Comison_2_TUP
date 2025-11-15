import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Actividades from "./pages/Actividades"
import Admin from "./pages/Admin"
import Reservas from "./pages/Reservas"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/actividades" element={<Actividades />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/reservas" element={<Reservas />} />
      </Routes>
    </>
  )
}

export default App
