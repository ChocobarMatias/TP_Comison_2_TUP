import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../Store/UseAuthStore";
import "../../Styles/Navbar/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const { logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    navigate("/Login");
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