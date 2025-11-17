import axios from "axios";
import { useSearchParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from 'react';
import LoadingSpinner from "../components/LoadingSpinner";

function ResetPassword() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = async (event) => {
    setIsLoading(true);
    event.preventDefault();
    const password = event.target.elements.contraseña.value;
    const passwordRepeat = event.target.elements.contraseña_repetida.value;
    const id = searchParams.get("id");
    const token = searchParams.get("token");
    if(password !== passwordRepeat){
      toast("Las contraseñas no coinciden");
      return;
    }
    const dataForBack = { password, passwordRepeat, id, token };
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_BACKEND}auth/reset`, dataForBack);
      toast.success(data?.message || "Contraseña actualizada");
      navigate('/')
      //redirigirme a login

    }
    catch (error) {
      toast.error(error?.response?.data?.error || "Hubo un error");
    }
    finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800 tracking-wide">
          Reestablesca su contraseña
        </h1>
        <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
          <h2 className="text-lg font-semibold text-gray-700 mb-6 text-center"></h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col">
              <label
                htmlFor="contraseña"
                className="text-gray-700 font-medium mb-1"
              >
                Contraseña:
              </label>
              <input
                required
                minLength={4}
                maxLength={16}
                type="password"
                id="contraseña"
                name="contraseña"
                placeholder="••••••••"
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="contraseña_repetida"
                className="text-gray-700 font-medium mb-1"
              >
                Repita su contraseña:
              </label>
              <input
                required
                minLength={4}
                maxLength={16}
                type="password"
                id="contraseña_repetida"
                name="contraseña_repetida"
                placeholder="••••••••"
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="bg-blue-600 text-white font-semibold py-2 rounded-lg mt-4
                    hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              {isLoading ? <LoadingSpinner /> : 'Confirmar' }
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
