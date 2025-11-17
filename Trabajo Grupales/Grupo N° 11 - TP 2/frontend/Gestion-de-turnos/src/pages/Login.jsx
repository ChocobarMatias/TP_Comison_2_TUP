import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';
import { authService } from '../services/authService';
import LoginForm from '../components/LoginForm';

const Login = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { setUser, setToken } = useAuthStore();
  const navigate = useNavigate();

  const handleLogin = async (credentials) => {
    setError('');
    setLoading(true);

    try {
      const data = await authService.login(credentials);
      
      if (data.token) {
        setToken(data.token);
        setUser(null);
        navigate('/panel');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Error al iniciar sesión');
    } finally {
      setLoading(false);
    }
  };

  return <LoginForm onLogin={handleLogin} error={error} loading={loading} />;
};

export default Login;
