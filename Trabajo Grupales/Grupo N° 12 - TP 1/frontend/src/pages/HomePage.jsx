/**
 * Página de inicio (pública)
 */

import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Bienvenido al Sistema de Gestión</h1>
      <p>Grupo 12 - TP Programación 4</p>
      
      <div className="home-actions">
        <Link to="/login" className="btn btn-primary">
          Iniciar Sesión
        </Link>
        <Link to="/dashboard" className="btn btn-secondary">
          Ir al Dashboard
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
