import { toast } from "react-toastify";
import axios from "axios";
import { useCallback, useState, useEffect } from "react";

function CrearReserva({ cerrar, token, getReservas }) {
  const [socios, setSocios] = useState(null);
  const [actividades, setActividades] = useState(null);

  const getSocios = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND}socios`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSocios(data.socios);
    } catch (error) {
      console.log(error);
    }
  }, [token]);

  const getActividades = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND}actividades`
      );
      setActividades(data.consulta);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getSocios();
    getActividades();
  }, [getSocios, getActividades]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id_socio = e.target.socio.value;
    const id_actividad = e.target.actividad.value;

    const dataForDB = {
      socio_id: id_socio,
      actividad_id: id_actividad,
    };

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND}reservas/admin`,
        dataForDB,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success(data?.mensaje || "Reserva realizada con éxito");
      getReservas();
      cerrar();
    } catch (error) {
      console.log(error, "error");
      toast.error(error?.response?.data?.error || "Hubo un error");
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/20 backdrop-blur-sm flex justify-center items-center"
      onClick={cerrar}
    >
      <div
        className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md relative animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-4 text-gray-800">Crear reserva</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="font-medium text-gray-700">Socio</label>
            <select
              name="socio"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>
                Seleccione...
              </option>
              {socios?.map((s) => (
                <option key={s.id+s.apellidoSocio} value={s.idSocio}>
                  {s.apellidoSocio + " " + s.nombreSocio}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="font-medium text-gray-700">Actividad</label>
            <select
              name="actividad"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Seleccione...</option>
              {actividades?.map((a) => (
                <option key={a.id+a.nombre} value={a.id}>
                  {a.nombre}
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={cerrar}
              className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition"
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Crear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CrearReserva;
