import { useState } from "react";
import CrearActividad from "./CrearActividad";
import EditarActividad from "./EditarActividad";
import { useCallback } from "react";
import { useEffect } from "react";
import axios from 'axios';
import { toast } from "react-toastify";
import { useSocioStore } from "../stores/socios.store";

function PanelActividades() {
    const token = useSocioStore((state) => state.getSocio())
    const [actividades, setActividades] = useState(null);
    const [abrir, setAbrir] = useState(false);
    const [editar, setEditar] = useState(false);
    const [eliminar, setEliminar] = useState(false);
    const [actividadActual, setActividadActual] = useState(null);

      const getActividades = useCallback(async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_BACKEND}actividades`)
        setActividades(data.consulta)
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },[])

  
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getActividades()
  }, [getActividades])


    const handleEditar = (actividad) => {
        setActividadActual(actividad);
        setEditar(true);
    };

     const handleEliminar = async () => {
        try {
            const { data } = await axios.delete(`${import.meta.env.VITE_BACKEND}actividades/${actividadActual?.id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            toast(data?.message || "Actividad eliminada")
            await getActividades()
            setActividadActual(null)
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
            Crear actividad
            </button>
        </div>

        <div className="overflow-x-auto">
            <table className="min-w-full text-left border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-200 text-gray-700">
                <tr>
                <th className="px-4 py-3">ID</th>
                <th className="px-4 py-3">Nombre</th>
                <th className="px-4 py-3">Cupo máximo</th>
                <th className="px-4 py-3 text-center">Acciones</th>
                </tr>
            </thead>

            <tbody>
                {actividades?.map((actividad) => (
                <tr key={actividad.id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3">{actividad.id}</td>
                    <td className="px-4 py-3">{actividad.nombre}</td>
                    <td className="px-4 py-3">{actividad.cupo_maximo}</td>

                    <td className="px-4 py-3">
                    <div className="flex justify-center gap-3">

                        <button
                        onClick={() => handleEditar(actividad)}
                        className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition"
                        >
                        Editar
                        </button>

                        <button
                        onClick={() => {
                            setActividadActual(actividad)
                            setEliminar(true)}

                        }
                        className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition"
                        >
                        Eliminar
                        </button>

                    </div>
                    </td>

                </tr>
                ))}
            </tbody>
            </table>
        </div>

        {/* Modales */}
        {abrir && (
            <CrearActividad
            cerrar={() => setAbrir(false)}
            getActividades={getActividades}
            token={token}
            //crear={handleCrear}
            />
        )}

        {editar && (
            <EditarActividad
            actividad={actividadActual}
            getActividades={getActividades}
            token={token}
            setActividadActual={() => setActividadActual(null)}
            cerrar={() => setEditar(false)}
            />
        )}

         {eliminar && actividadActual && (
            <div className="fixed inset-0 bg-black/50" onClick={() => setEliminar(false)}>
            <div className="bg-white p-6 rounded-lg max-w-md mx-auto mt-40 shadow-lg" onClick={(e) => e.stopPropagation()}>
                <h2 className="text-xl font-semibold mb-4">Confirmar eliminación</h2>
                <p className="mb-6">¿Estás seguro de que deseas eliminar esta reserva {actividadActual?.id}?</p>
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
    );
}

export default PanelActividades