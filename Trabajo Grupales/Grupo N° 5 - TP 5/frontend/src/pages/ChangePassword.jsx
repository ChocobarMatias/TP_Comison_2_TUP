import { useState } from "react";
import { useSocioStore } from "../stores/socios.store";
import { toast } from "react-toastify";


function ChangePassword() {
  const token = useSocioStore((state) => state.getToken())
  const logout = useSocioStore((state) => state.logout)
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");


  function decodeToken(token) {
    try {
      const part = token.split(".")[1];
      return JSON.parse(atob(part));
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (newPassword.length < 6) {
      setError('La nueva contraseña debe tener al menos 6 caracteres');
      return;
    }
    if (newPassword !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    if (!token) {
      setError('No estás logueado como Socio');
      return;
    }

    const payload = decodeToken(token);
    if (!payload || !payload.email || !payload.id) {
      setError('Token inválido. Volvé a iniciar sesión.');
      return;
    }

    setLoading(true);

    // Verificar contraseña actual
    try {
      const resp = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: payload.email, password: currentPassword })
      });

      if (!resp.ok) {
        setError('Contraseña actual incorrecta');
        setLoading(false);
        return;
      }

      // Pedimos al backend que resetee la contraseña usando el token de sesión
      const reset = await fetch('http://localhost:8080/api/auth/reset', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: newPassword, token: token, id: payload.id })
      });

      if (!reset.ok) {
        const txt = await reset.text();
        setError(txt || 'Error al actualizar la contraseña');
        setLoading(false);
        return;
      }

      setSuccess('Contraseña cambiada. Iniciá sesión de nuevo.');
      toast("Contraseña cambiada con exito, por favor vuelva a conectarse")
      logout()
      //setTimeout(() => navigate('/'), 1000);

    } catch (err) {
      console.log(err);
      setError('Error de red');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-gray-100 px-4 relative flex-1 flex justify-center pt-12">


      <div className="w-full h-fit max-w-md bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-lg font-semibold text-gray-700 mb-6 text-center">Cambiar contraseña</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Contraseña actual</label>
            <input type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Nueva contraseña</label>
            <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Confirmar nueva contraseña</label>
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
          </div>

          {error && <div className="text-red-600 text-sm">{error}</div>}
          {success && <div className="text-green-600 text-sm">{success}</div>}

          <button type="submit" disabled={loading} className="bg-blue-600 text-white font-semibold py-2 rounded-lg mt-4 hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-60">
            {loading ? 'Guardando...' : 'Cambiar contraseña'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
