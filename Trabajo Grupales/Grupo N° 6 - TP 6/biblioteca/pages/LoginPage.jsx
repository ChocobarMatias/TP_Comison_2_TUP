// src/pages/LoginPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { loginRequest } from "../services/authService";
import { useAuthStore } from "../store/useAuthStore";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const setUser = useAuthStore((state) => state.setUser);
  const setToken = useAuthStore((state) => state.setToken);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = await loginRequest(form);
      setUser(data.user);
      setToken(data.token);
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      setError("Credenciales inválidas o error en el servidor.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="bg-white rounded-lg shadow-md w-full max-w-md p-6">
        <h1 className="text-2xl font-semibold mb-4 text-center">
          Iniciar sesión
        </h1>

        <form onSubmit={handleSubmit}>
          <InputField
            label="Correo electrónico"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="bibliotecario@ejemplo.com"
          />
          <InputField
            label="Contraseña"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="********"
          />

          {error && (
            <p className="text-red-600 text-sm mb-2 text-center">{error}</p>
          )}

          <Button className="w-full" type="submit" disabled={loading}>
            {loading ? "Ingresando..." : "Ingresar"}
          </Button>
        </form>
      </div>
    </main>
  );
}
