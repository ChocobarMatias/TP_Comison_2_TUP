import { useState } from "react";
import { Button, Form, Alert, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { funcionLogin } from "../Hooks/UseAuth";
import { funcionRecuperarPassword } from "../Services/AuthService";
import { useAuthStore } from "../Store/UseAuthStore";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../Styles/Login/Login.css";

const Login = () => {
  const [data, setData] = useState({
    usuario: "",
    contrasena: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // Estado para recuperar contraseña
  const [showForgot, setShowForgot] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotLoading, setForgotLoading] = useState(false);
  const [forgotMsg, setForgotMsg] = useState("");

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

    if (!data.usuario || !data.contrasena) {
      setError("Por favor, completa todos los campos");
      return;
    }

    setLoading(true);

    try {
      const response = await funcionLogin(data);
      console.log("Respuesta del login:", response);

      if (response.token) {
        setToken(response.token);
        localStorage.setItem("token", response.token);
      }

      if (response.user) {
        setUser(response.user);
        localStorage.setItem("user", JSON.stringify(response.user));
      }

      await Swal.fire({
        icon: "success",
        title: "¡Bienvenido!",
        text: `Inicio de sesión exitoso`,
        timer: 2000,
        showConfirmButton: false
      });

      if(response.user.rol === 'admin'){
        navigate("/admin/*");
        return;
      }
      navigate("/home");
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Error al iniciar sesión, verifica tus credenciales";

      Swal.fire({
        icon: "error",
        title: "Error",
        text: errorMessage
      });

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

          {!showForgot ? (
            <>
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
                    name="contrasena"
                    value={data.contrasena}
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
              <div style={{ marginTop: 10 }}>
                <Button variant="link" onClick={() => setShowForgot(true)}>
                  ¿Olvidaste tu contraseña?
                </Button>
              </div>
            </>
          ) : (
            <>
              <Form
                onSubmit={async (e) => {
                  e.preventDefault();
                  setForgotMsg("");
                  setError("");
                  if (!forgotEmail) {
                    setError("Por favor, ingresa tu email");
                    return;
                  }
                  setForgotLoading(true);
                  try {
                    const res = await funcionRecuperarPassword(forgotEmail);
                    setForgotMsg(res.message || "Email enviado correctamente");
                  } catch (err) {
                    setError(
                      err?.response?.data?.message || "Error al enviar el email"
                    );
                  } finally {
                    setForgotLoading(false);
                  }
                }}
              >
                <Form.Group className="mb-3">
                  <Form.Label>Ingresa tu email</Form.Label>
                  <Form.Control
                    type="email"
                    value={forgotEmail}
                    onChange={(e) => setForgotEmail(e.target.value)}
                    placeholder="Email registrado"
                    disabled={forgotLoading}
                    required
                  />
                </Form.Group>
                <Button type="submit" disabled={forgotLoading}>
                  {forgotLoading ? "Enviando..." : "Enviar recuperación"}
                </Button>
                <Button variant="link" onClick={() => {
                  setShowForgot(false);
                  setForgotEmail("");
                  setForgotMsg("");
                  setError("");
                }}>
                  Volver al login
                </Button>
                {forgotMsg && (
                  <Alert variant="success" className="mt-3">{forgotMsg}</Alert>
                )}
                {error && (
                  <Alert variant="danger" className="mt-3">{error}</Alert>
                )}
              </Form>
            </>
          )}
          <p className="register-text">
            ¿No tienes una cuenta? <Link to="/registro">Regístrate</Link>
          </p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
