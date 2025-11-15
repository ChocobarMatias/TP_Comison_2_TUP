import { useCallback, useEffect, useState } from "react";
//import reservasData from "../data/reservas.json";
import CrearReserva from "./CrearReserva";
import axios from "axios";
import {toast} from 'react-toastify'

function PanelReservas() {

    const [reservas, setReservas] = useState(null);
    const [reservaSeleccionada, setReservaSeleccionada] = useState(null)
    const [abrir, setAbrir] = useState(false);
    const [eliminar, setEliminar] = useState(false);

      const getReservas = useCallback(async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_BACKEND}reservas`)
        setReservas(data)
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },[])

  
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getReservas()
  }, [getReservas])



    const handleCrear = (nuevaReserva) => {
        nuevaReserva.id = reservas.length + 1;
        setReservas([...reservas, nuevaReserva]);
    };

    const handleEliminar = async () => {
        try {
            const { data } = await axios.delete(`${import.meta.env.VITE_BACKEND}reservas/${reservaSeleccionada?.id}`)
            toast(data?.mensaje || "Reserva eliminada")
            await getReservas()
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.error || "Hubo un error")
        }
    };

    return(
        <div className="bg-white shadow-xl rounded-2xl p-8 max-w-5xl mx-auto">

        <div className="flex justify-end mb-6">
            <button
            onClick={() => setAbrir(true)}
            className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 shadow-md hover:shadow-lg"
            >
            Crear reserva
            </button>
        </div>

        <div className="overflow-x-auto">
            <table className="min-w-full text-left border border-gray-200 rounded-lg overflow-hidden">

            <thead className="bg-gray-200 text-gray-700">
                <tr>
                <th className="px-4 py-3">ID</th>
                <th className="px-4 py-3">Socio</th>
                <th className="px-4 py-3">Actividad</th>
                <th className="px-4 py-3">Fecha</th>
                <th className="px-4 py-3 text-center">Acciones</th>
                </tr>
            </thead>

            <tbody>
                {reservas?.map((r) => (
                <tr key={r?.id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3">{r?.id}</td>
                    <td className="px-4 py-3">{r?.socios?.apellidoSocio + " " + r?.socios?.nombreSocio}</td>
                    <td className="px-4 py-3">{r?.actividades?.nombre}</td>
                    <td className="px-4 py-3">{r?.fecha?.slice(0,10)}</td>
                    <td className="px-4 py-3 text-center">
                    <button
                        onClick={() => {
                            setReservaSeleccionada(r)
                            setEliminar(true)}}
                        className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition"
                    >
                        Eliminar
                    </button>
                    </td>

                </tr>
                ))}
            </tbody>

            </table>
        </div>

        {/*Modal p/ crear */}
        {abrir && (
            <CrearReserva
            cerrar={() => setAbrir(false)}
            crear={handleCrear}
            />
        )}
        {eliminar && reservaSeleccionada && (
            <div className="fixed inset-0 bg-black/50" onClick={() => setEliminar(false)}>
            <div className="bg-white p-6 rounded-lg max-w-md mx-auto mt-40 shadow-lg" onClick={(e) => e.stopPropagation()}>
                <h2 className="text-xl font-semibold mb-4">Confirmar eliminación</h2>
                <p className="mb-6">¿Estás seguro de que deseas eliminar esta reserva {reservaSeleccionada?.id}?</p>
                <div className="flex justify-end space-x-4">
                <button
                    onClick={() => setEliminar(false)}
                    className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
                >
                    Cancelar
                </button>
                <button
                    onClick={() => {
                        // Aquí deberías llamar a la función para eliminar la reserva
                        handleEliminar()
                        setEliminar(false);
                    }}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                >
                    Eliminar
                </button>
                </div>

                </div>
            </div>
        )}

    </div>
    )
}

export default PanelReservas