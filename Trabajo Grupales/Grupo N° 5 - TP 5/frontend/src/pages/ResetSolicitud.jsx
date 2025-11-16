import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import LoadingSpinner from "../components/LoadingSpinner";

function ResetSolicitud() {
  const [isLoading, setIsLoading] = useState(false);
  const [enviado, setEnviado] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const email = e.target.email.value;
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND}socios/recuperar`,
        { email: email }
      );
      toast(data);
      setEnviado(true)
    } catch (error) {
      toast.error(error?.response?.data?.error || "Hubo un error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {enviado ?
      <div className="flex flex-col flex-1 gap-2 items-center justify-center">
        <h2 className="text-3xl font-bold">¡Solicitud procesada con éxito!</h2>
        <p>Se ha enviado un correo electrónico con instrucciones para restablecer tu contraseña.</p>
      </div>
      :<div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800 tracking-wide">
          Olvide mi contraseña
        </h1>
        <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
          <h2 className="text-lg font-semibold text-gray-700 mb-6 text-center">
            Ingresa tu email
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Usuario */}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                required
                type="email"
                id="email"
                name="email"
                placeholder="tuemail@gmail.com"
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <button
              disabled={isLoading}
              type="submit"
              className="bg-blue-600 text-white font-semibold py-2 rounded-lg mt-4
                    hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              {isLoading ? <LoadingSpinner /> : 'Solicitar recuperación'}
            </button>
          </form>
        </div>
      </div>}
    </>
  );
}

export default ResetSolicitud;
