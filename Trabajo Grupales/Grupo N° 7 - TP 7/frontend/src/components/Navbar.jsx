import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import "../index.css";

const Navbar = () => {
  const user = useAuthStore((state) => state.user);
  const token = useAuthStore((state) => state.token);
  const location = useLocation();

  // rutas donde no debe mostrarse el navbar
  const noNavbarRoutes = ["/login", "/signup", "/"];
  const hideNavbar = noNavbarRoutes.includes(location.pathname);

  if (hideNavbar) return null;  // ⛔ oculta navbar COMPLETAMENTE

  const isLogged = !!user && !!token;

  return (
    <nav>
      {isLogged && (
        <Link to="/mis-turnos" className="nav-link">
          Mis Turnos
        </Link>
      )}

      {isLogged && user?.rol === "Admin" && (
        <Link to="/admin-med" className="nav-link">
          Administrar Médicos
        </Link>
      )}

       {isLogged && user?.rol === "Admin" && (
        <Link to="/usuarios" className="nav-link">
          Administrar Usuarios
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
