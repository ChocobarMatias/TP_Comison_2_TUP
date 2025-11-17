import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/authService';
import RegisterForm from '../components/RegisterForm';

const Registrar = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (userData) => {
    setError('');
    setLoading(true);

    try {
      await authService.register(userData);
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Error al registrarse');
    } finally {
      setLoading(false);
    }
  };

  return <RegisterForm onRegister={handleRegister} error={error} loading={loading} />;
};

export default Registrar;
