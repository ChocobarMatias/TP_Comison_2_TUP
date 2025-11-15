import { useState } from 'react';

const useCustomRegister = () => {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [mensaje, setMensaje] = useState(null);
  const [error, setError] = useState(null);

  const validar = () => {
    if (!usuario.trim() || !password.trim() || !email.trim()) {
      setError('Todos los campos son obligatorios');
      return false;
    }
    if (usuario.length > 50) {
      setError('El nombre de usuario supera 50 caracteres');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Email inválido');
      return false;
    }
    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      return false;
    }
    setError(null);
    return true;
  };

  const registrarUsuario = async () => {
    if (!validar()) return;
    
    setLoading(true);
    setMensaje(null);
    setError(null);

    try {
      const resp = await fetch('http://localhost:3000/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usuario, contraseña: password, email })
      });
      
      const data = await resp.json();
      
      if (resp.ok) {
        setMensaje(data.message || 'Registro exitoso');
        setUsuario('');
        setPassword('');
        setEmail('');
        return { success: true, data };
      } else {
        setError(data.message || 'Error al registrarse');
        return { success: false, error: data.message };
      }
    } catch (err) {
      const errorMsg = 'Error de red o servidor';
      setError(errorMsg);
      return { success: false, error: errorMsg };
    } finally {
      setLoading(false);
    }
  };

  const limpiarMensajes = () => {
    setMensaje(null);
    setError(null);
  };

  return {
    usuario,
    setUsuario,
    password,
    setPassword,
    email,
    setEmail,
    loading,
    mensaje,
    error,
    registrarUsuario,
    limpiarMensajes
  };
};

export default useCustomRegister;
