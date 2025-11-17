import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore'; // 1. Importamos el store
import { authService } from '../services/authService'; // 2. Importamos el servicio MOCK

const LoginPage = () => {
  const [correoUsuario, setCorreoUsuario] = useState('admin@admin.com');
  const [contraseñaUsuario, setContraseñaUsuario] = useState('admin');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // 3. Importamos la acción de login de Zustand
  const { login: loginToStore } = useAuthStore((state) => state);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // 4. Llamamos a nuestro servicio MOCK
      const data = await authService.login(correoUsuario, contraseñaUsuario);
      
      // 5. Si todo sale bien, guardamos en el store de Zustand
      loginToStore(data.user, data.token);

      // 6. Redirigimos al dashboard
      navigate('/dashboard');

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={correoUsuario}
            onChange={(e) => setCorreoUsuario(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={contraseñaUsuario}
            onChange={(e) => setContraseñaUsuario(e.target.value)}
            required
          />
        </div>
        
        {loading && <p>Cargando...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        
        <button type="submit" disabled={loading}>
          {loading ? 'Ingresando...' : 'Ingresar'}
        </button>
      </form>
      <p>Prueba con: admin@admin.com / admin</p>
    </div>
  );
};

export default LoginPage;