import { useState } from "react";
import { registerRequest } from "../services/authService";
import { useNavigate } from "react-router-dom";

function SignupPage() {
  const [MailUsuario, setMail] = useState("");
  const [PasswordUsuario, setPass] = useState("");
  const [RolUsuario, setRol] = useState("Paciente");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await registerRequest({ MailUsuario, PasswordUsuario, RolUsuario });
      alert("Usuario creado exitosamente");
      navigate("/login");
    } catch (error) {
      alert("Error al registrar usuario");
    }
  };

  return (
    <div style={{ width: "300px", margin: "50px auto" }}>
      <h2>Registrarse</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo"
          value={MailUsuario}
          onChange={(e) => setMail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={PasswordUsuario}
          onChange={(e) => setPass(e.target.value)}
          required
        />

        <select value={RolUsuario} onChange={(e) => setRol(e.target.value)}>
          <option value="Admin">Admin</option>
          <option value="Medico">Medico</option>
          <option value="Paciente">Paciente</option>
        </select>

        <button type="submit">Crear cuenta</button>
      </form>

      <p style={{ marginTop: "20px" }}>
        ¿Ya tenés cuenta?{" "}
        <span
          style={{ color: "blue", cursor: "pointer" }}
          onClick={() => navigate("/login")}
        >
          Iniciar sesión
        </span>
      </p>
    </div>
  );
}

export default SignupPage;
