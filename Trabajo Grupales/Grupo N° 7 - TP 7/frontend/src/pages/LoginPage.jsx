import { useState } from "react";
import { loginRequest } from "../services/authService";
import { useAuthStore } from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";

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
    <div style={{ width: "300px", margin: "50px auto" }}>
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

      {/* 👇 Enlace para registrarse */}
      <p style={{ marginTop: "20px" }}>
        ¿No tenés cuenta?{" "}
        <span
          style={{ color: "blue", cursor: "pointer" }}
          onClick={() => navigate("/signup")}
        >
          Registrate aquí
        </span>
      </p>
    </div>
  );
}

export default LoginPage;
