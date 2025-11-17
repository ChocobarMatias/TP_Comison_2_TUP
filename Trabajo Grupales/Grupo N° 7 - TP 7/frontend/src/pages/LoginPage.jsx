import { useState } from "react";
import { loginRequest } from "../services/authService";
import { useAuthStore } from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";
import "../App.css"; 

function LoginPage() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const setAuth = useAuthStore((state) => state.setAuth);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await loginRequest(mail, password);
      console.log("RESPUESTA LOGIN DESDE LOGINPAGE ->", response);

      const { user, token } = response;

      setAuth(user, token);

      navigate("/home");
    } catch (error) {
      alert("Credenciales incorrectas");
    }
  };

  return (
   <div className="app-container">
  <div className="login-container">
    <h2>Iniciar Sesión</h2>

    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Correo"
        value={mail}
        onChange={(e) => setMail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button type="submit">Ingresar</button>
    </form>

    <p>
      ¿No tenés cuenta?{" "}
      <span onClick={() => navigate("/signup")}>Registrate aquí</span>
    </p>


     <p style={{ marginTop: "15px" }}>
          <span
            style={{ color: "blue", cursor: "pointer" }}
            onClick={() => navigate("/forgot-password")}
          >
            ¿Olvidaste tu contraseña?
          </span>
        </p>
  </div>
</div> 
  )
}

export default LoginPage;
