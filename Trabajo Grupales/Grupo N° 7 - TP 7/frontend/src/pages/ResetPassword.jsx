import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { resetearPassword } from "../services/authService";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmar, setConfirmar] = useState("");
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await resetearPassword(token, password, confirmar);
      alert("Contraseña cambiada correctamente.");
      navigate("/login");
    } catch (err) {
      alert("No se pudo cambiar la contraseña.");
    }
  };

  return (
    <div style={{ width: 300, margin: "50px auto" }}>
      <h2>Cambiar contraseña</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Nueva contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Confirmar contraseña"
          value={confirmar}
          onChange={(e) => setConfirmar(e.target.value)}
          required
        />

        <button type="submit">Cambiar</button>
      </form>
    </div>
  );
}
