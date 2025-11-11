import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";
import "../styles/DashboardPage.css";

function DashboardPage() {
  const { user, logout, token } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>🏆 Dashboard - Club Deportivo</h1>
        <button onClick={handleLogout} className="logout-button">
          Cerrar Sesión
        </button>
      </div>

      <div className="dashboard-content">
        <div className="welcome-card">
          <h2>¡Bienvenido!</h2>
          <div className="user-info">
            <p>
              <strong>Email:</strong> {user?.email}
            </p>
            <p>
              <strong>Tipo:</strong> {user?.user_type}
            </p>
            <p>
              <strong>Rol:</strong> {user?.rol}
            </p>
          </div>
        </div>

        <div className="token-card">
          <h3>🔑 Token JWT (para usar en otras peticiones)</h3>
          <div className="token-display">
            <code>{token}</code>
          </div>
          <p className="token-hint">
            Este token se incluye automáticamente en todas las peticiones a la
            API. Copia este token si necesitas hacer peticiones manuales.
          </p>
        </div>

        <div className="info-card">
          <h3>📝 Próximos pasos</h3>
          <ul>
            <li>El token se guarda en localStorage y se usa automáticamente</li>
            <li>
              Puedes usar <code>api.get('/socios')</code> para obtener socios
            </li>
            <li>
              Puedes usar <code>api.post('/deportes', data)</code> para crear
              deportes
            </li>
            <li>El interceptor de Axios agrega el token automáticamente</li>
            <li>
              Si el token expira (401), se redirige al login automáticamente
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
