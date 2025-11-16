import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainUsuarios from "./components/MainUsuarios";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import AdminRoute from "./proteccionRutas/AdminRoute";
import ProtectedRoute from "./proteccionRutas/ProtectedRoute";
import RoleBasedRoute from "./proteccionRutas/RoleBasedRoute";








function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        

        <Route 
    path="/home" 
    element={
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    }
  />

  {/* SOLO ADMIN */}
  <Route
    path="/usuarios"
    element={
      <AdminRoute>
        <MainUsuarios />
      </AdminRoute>
    }
  />

  {/* EJEMPLO ROLE-BASED */}
  <Route
    path="/turnos"
    element={
      <RoleBasedRoute allowedRoles={["Admin", "Medico"]}>
        <TurnosPage />
      </RoleBasedRoute>
    }
  />
        
       
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
