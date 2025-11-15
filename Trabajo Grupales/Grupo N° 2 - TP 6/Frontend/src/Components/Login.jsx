import { useState } from "react";
import { Button, Form, Alert, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { funcionLogin } from "../Hooks/UseAuth";
import { useAuthStore } from "../Store/UseAuthStore";
import { useNavigate } from "react-router-dom";
import "../Styles/Login/Login.css";

const Login = () => {
  const [data, setData] = useState({
    usuario: "",
    contraseña: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { setUser, setToken } = useAuthStore();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    if (error) setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!data.usuario || !data.contraseña) {
      setError("Por favor, completa todos los campos");
      return;
    }

    setLoading(true);

    try {
      const response = await funcionLogin(data);

      if (response.token) {
        setToken(response.token);
        localStorage.setItem("token", response.token);
      }

      if (response.user) {
        setUser(response.user);
        localStorage.setItem("user", JSON.stringify(response.user));
      }

      navigate("/home");
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Error al iniciar sesión, verifica tus credenciales";

      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Bienvenido! Por favor inicia sesión</h1>
      <br />
      <Card className="login-card">
        <Card.Body>
          <h3 className="text-center mb-4">Iniciar Sesión</h3>

          {error && (
            <Alert variant="danger" dismissible onClose={() => setError(null)}>
              {error}
            </Alert>
          )}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Usuario</Form.Label>
              <Form.Control
                type="text"
                name="usuario"
                value={data.usuario}
                onChange={handleChange}
                placeholder="Ingresa tu usuario"
                disabled={loading}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                name="contraseña"
                value={data.contraseña}
                onChange={handleChange}
                placeholder="Ingresa tu contraseña"
                disabled={loading}
                required
              />
            </Form.Group>

            <Button className="login-btn" type="submit" disabled={loading}>
              {loading ? "Iniciando sesión..." : "Ingresar"}
            </Button>
          </Form>
          <p className="register-text">
            ¿No tienes una cuenta? <Link to="/registro">Regístrate</Link>
          </p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
