import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/contacto");
  };

  return (
    <div className="homepage-container">
      <header className="homepage-header">
        <h1>Club Deportivo Los Halcones</h1>
        <p>
          Bienvenido a nuestra comunidad deportiva. Promovemos el trabajo en equipo,
          el esfuerzo y la pasión por el deporte.
        </p>
      </header>

      <nav className="homepage-nav">
        <Link to="/actividades" className="nav-link">
          Actividades
        </Link>
        <Link to="/equipo" className="nav-link">
          Nuestro Equipo
        </Link>
        <Link to="/noticias" className="nav-link">
          Noticias
        </Link>
      </nav>

      <main className="homepage-main">
        <section className="intro-section">
          <h2>Un lugar para crecer juntos</h2>
          <p>
            En el Club Deportivo Los Halcones encontrarás entrenamientos de fútbol, 
            básquet, natación y muchas más disciplinas. 
            Nuestra misión es formar deportistas y personas íntegras.
          </p>
          <button className="contact-button" onClick={handleNavigate}>
            Contáctanos
          </button>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
