import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; 
import { authLogin, authForgotPassword } from '../../services/api';

export const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    contrasena: '',
  });

  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [emailForgot, setEmailForgot] = useState('');

  const [error, setError] = useState(null);     
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);   

  const { login, user, loading: authLoading } = useAuth(); 
  const navigate = useNavigate();

  useEffect(() => {
    if (!authLoading && user) {
      navigate('/dashboard'); 
    }
  }, [user, authLoading, navigate]);

  const handleLoginChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      const data = await authLogin(formData);
      login(data.token, data.user);
      navigate('/dashboard');

    } catch (err) {
      const errorMsg = err.response?.data?.message || 'Error al iniciar sesión';
      setError(errorMsg);
      setLoading(false);
    }
  };

  const handleForgotSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      const data = await authForgotPassword(emailForgot);
      setMessage(data.message);
      setIsForgotPassword(false);    
    } catch (err) {
      const errorMsg = err.response?.data?.message || 'Error al procesar la solicitud';
      setError(errorMsg);
    }
    setLoading(false);
  };

  if (authLoading || user) {
    return <div>Cargando...</div>; 
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          {isForgotPassword ? 'Recuperar Contraseña' : 'Iniciar Sesión'}
        </h2>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        {message && (
          <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded mb-4">
            {message}
          </div>
        )}

        {isForgotPassword ? (
          <form onSubmit={handleForgotSubmit}>
            <p className="mb-4 text-sm text-gray-600">
              Ingresa tu email y te enviaremos un enlace para resetear tu contraseña.
            </p>
            <div className="mb-4">
              <label htmlFor="emailForgot" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="emailForgot"
                value={emailForgot}
                onChange={(e) => setEmailForgot(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:bg-blue-400"
            >
              {loading ? 'Enviando...' : 'Enviar Email'}
            </button>
            <button
              type="button"
              onClick={() => {
                setIsForgotPassword(false);
                setError(null);
                setMessage(null);
              }}
              className="mt-4 w-full text-sm text-blue-600 hover:underline"
            >
              Volver a Iniciar Sesión
            </button>
          </form>
        ) : (
          <form onSubmit={handleLoginSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleLoginChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <div className="flex justify-between">
                <label htmlFor="contrasena" className="block text-sm font-medium text-gray-700">Contraseña</label>
                <button
                  type="button"
                  onClick={() => {
                    setIsForgotPassword(true);
                    setError(null);
                    setMessage(null);
                  }}
                  className="text-sm text-blue-600 hover:underline"
                >
                  ¿Olvidaste tu contraseña?
                </button>
              </div>
              <input
                type="password"
                id="contrasena"
                name="contrasena"
                value={formData.contrasena}
                onChange={handleLoginChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:bg-blue-400"
            >
              {loading ? 'Ingresando...' : 'Ingresar'}
            </button>
            
            <p className="text-center mt-6 text-sm text-gray-600">
              ¿No tienes cuenta?{' '}
              <Link to="/register" className="font-medium text-blue-600 hover:underline">
                Regístrate aquí
              </Link>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};