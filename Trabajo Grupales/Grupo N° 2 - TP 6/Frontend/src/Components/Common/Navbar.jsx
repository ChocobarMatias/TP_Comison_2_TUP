import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../Store/UseAuthStore";
import "../../Styles/Navbar/Navbar.css";
import Swal from "sweetalert2";

const Navbar = () => {
  const navigate = useNavigate();
  const { logout } = useAuthStore();

  const handleLogout = () => {

    Swal.fire({
      title: '¿Estás seguro de que deseas cerrar sesión?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, cerrar sesión',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
        navigate("/Login");
      }
    });
  };

  // Sin validación, el navbar siempre se muestra

  return (
    <nav className="navbar navbar-expand-lg navbar-light site-navbar fixed-top">
      <div className="container">
        <div className="d-flex justify-content-end w-100">
          <button
            className="nav-link btn btn-link text-decoration-none"
            onClick={handleLogout}
            style={{ border: 'none', background: 'transparent' }}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;