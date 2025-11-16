import React from "react";
import "../../Styles/Footer/Footer.css"; // Cambia por la ruta correcta si tu Footer.css está en otra carpeta

const Footer = () => {
  return (
    <footer className="site-footer-footer">
      <div className="footer-content">
        <span className="footer-title">FURY Group Developers</span>
        <span className="footer-copy">
          {new Date().getFullYear()} &copy; Todos los derechos reservados
        </span>
      </div>
    </footer>
  );
};

export default Footer;