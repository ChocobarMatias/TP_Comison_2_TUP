/**
 * Página de Dashboard (protegida)
 */

import { useAuthStore } from '../store/useAuthStore';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
  const { user, logout } = useAuthStore();

  return (
    <div className="dashboard-page">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <div className="user-info">
          <span>Bienvenido, {user?.nombre || 'Usuario'}</span>
          <button onClick={logout} className="btn btn-danger">
            Cerrar Sesión
          </button>
        </div>
      </header>

      <div className="dashboard-content">
        <div className="dashboard-cards">
          <Link to="/productos" className="dashboard-card">
            <h3>Productos</h3>
            <p>Gestionar productos</p>
          </Link>

          <Link to="/donadores" className="dashboard-card">
            <h3>Donadores</h3>
            <p>Gestionar donadores</p>
          </Link>

          <Link to="/comedores" className="dashboard-card">
            <h3>Comedores</h3>
            <p>Gestionar comedores</p>
          </Link>

          <Link to="/entregas" className="dashboard-card">
            <h3>Entregas</h3>
            <p>Gestionar entregas</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
