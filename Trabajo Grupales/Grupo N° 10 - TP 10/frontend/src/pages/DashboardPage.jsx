import React from 'react';
import { useAuthStore } from '../store/useAuthStore';
import { useNavigate, Link } from 'react-router-dom';

// Estilos simples para las tarjetas (puedes mejorarlos luego)
const cardStyle = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '20px',
  margin: '10px',
  width: '200px',
  textAlign: 'center',
  textDecoration: 'none',
  color: 'black',
  display: 'inline-block', // Para que se pongan una al lado de la otra
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  marginTop: '30px',
};

const DashboardPage = () => {
  const { user, logout } = useAuthStore((state) => state);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Panel de Administración (ONG)</h1>
        <div>
          {user && <span style={{ marginRight: '15px' }}>Hola, {user.correoUsuario}</span>}
          <button onClick={handleLogout}>Cerrar Sesión</button>
        </div>
      </div>
      
      <hr style={{ margin: '20px 0' }} />
      
      <h2>¿Qué deseas gestionar?</h2>
      <div style={containerStyle}>
        {/* Tarjeta 1: Donantes */}
        <Link to="/donantes" style={cardStyle}>
          <h3>Donantes</h3>
          <p>Administrar donantes</p>
        </Link>
        
        {/* Tarjeta 2: Productos */}
        <Link to="/productos" style={cardStyle}>
          <h3>Productos</h3>
          <p>Administrar inventario</p>
        </Link>

        {/* Tarjeta 3: Entregas */}
        <Link to="/entregas" style={cardStyle}>
          <h3>Entregas</h3>
          <p>Registrar y ver entregas</p>
        </Link>
      </div>
    </div>
  );
};

export default DashboardPage;