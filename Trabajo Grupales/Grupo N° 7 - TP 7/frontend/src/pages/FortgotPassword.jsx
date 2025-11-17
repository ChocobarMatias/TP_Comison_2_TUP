import { useState } from "react";
import { solicitarResetPassword } from "../services/authService";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await solicitarResetPassword(email);
      alert("Si el correo existe, enviamos un enlace de recuperación.");
    } catch (err) {
      alert("Error enviando el email.");
    }
  };

  return (
    <div style={{ width: 300, margin: "50px auto" }}>
      <h2>Recuperar contraseña</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Tu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit">Enviar enlace</button>
      </form>
    </div>
  );
}
