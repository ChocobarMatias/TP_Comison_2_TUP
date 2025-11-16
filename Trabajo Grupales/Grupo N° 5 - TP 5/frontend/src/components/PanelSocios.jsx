import { useCallback, useEffect, useState } from "react"
import EditarSocio from "./EditarSocio"
import CrearSocio from "./CrearSocio"
import axios from "axios";
import { toast } from "react-toastify";

function PanelSocios({token}) {

    const [socios, setSocios] = useState(null);
    const [eliminar, setEliminar] = useState(false);
    const [abrir, setAbrir] = useState(false);
    const [abrirEditar, setAbrirEditar] = useState(false);
    const [socioActual, setSocioActual] = useState(null);

    const getSocios = useCallback(async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_BACKEND}socios/getAll`, {
            headers: {
                Authorization: `Bearer ${token}`
            }})
        
        setSocios(data.socios)
      } catch (error) {
        console.log(error);
      }
    },[token])

  
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getSocios()
  }, [getSocios])



    const handleEliminar = async () => {
        try {
            await axios.delete(`${import.meta.env.VITE_BACKEND}socios/eliminar/${socioActual.idSocio}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            toast("Socio eliminado con exito");
            getSocios();
        }
        catch (error) {
            console.log(error);
        }
    };

    const handleEditar = (socio) => {
        setSocioActual(socio);
        setAbrirEditar(true);
    };

    const handleAlataBaja = async (socio) => {
        try {
            if (socio?.activo) {
                await axios.put(`${import.meta.env.VITE_BACKEND}socios/darBaja/${socio.idSocio}`, {}, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                toast("Socio dado de baja");
            } else {
                await axios.put(`${import.meta.env.VITE_BACKEND}socios/reactivar/${socio.idSocio}`, {}, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                toast("Socio reactivado");
            }
            getSocios();
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className="bg-white shadow-xl rounded-2xl p-8 max-w-5xl mx-auto">

        {/* Botón crear socio */}
        <div className="flex justify-end mb-6">
            <button
            onClick={() => setAbrir(true)}
            className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium
            hover:bg-green-700 transition-all shadow-md hover:shadow-lg"
            >
            Crear socio
            </button>
        </div>

        <div className="overflow-x-auto">
            <table className="min-w-full text-left border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-200 text-gray-700">
                <tr>
                <th className="px-4 py-3">ID</th>
                <th className="px-4 py-3">Apellido</th>
                <th className="px-4 py-3">Nombre</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Estado</th>
                <th className="px-4 py-3 text-center">Acciones</th>
                </tr>
            </thead>

            <tbody>
                {socios?.map((socio) => (
                <tr key={socio.id+socio.nombreSocio} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3">{socio.idSocio}</td>
                    <td className="px-4 py-3">{socio.apellidoSocio}</td>
                    <td className="px-4 py-3">{socio.nombreSocio}</td>
                    <td className="px-4 py-3">{socio.emailSocio}</td>
                    <td className="px-4 py-3">{socio.activo ? "ok" : "baja"}</td>

                    <td className="px-4 py-3">
                    <div className="flex justify-center gap-3">

                        <button
                        onClick={() => handleAlataBaja(socio)}
                        className={`${socio?.activo ? 'bg-pink-700' : 'bg-green-600'} text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition`}
                        >
                        {socio.activo ? 'Baja' : 'Alta'}
                        </button>

                        <button
                        onClick={() => handleEditar(socio)}
                        className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition"
                        >
                        Editar
                        </button>

                        <button
                        onClick={() => {
                            setSocioActual(socio);
                            setEliminar(true);
                        }}
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

        {/* Modal crear */}
        {abrir && (
            <CrearSocio
            token={token}
            cerrar={() => setAbrir(false)}
            getSocios={getSocios}
            />
        )}

        {/* Modal editar */}
        {abrirEditar && (
            <EditarSocio
            token={token}
            socio={socioActual}
            cerrar={() => setAbrirEditar(false)}
            getSocios={getSocios}
            />
        )}

                 {eliminar && socioActual && (
            <div className="fixed inset-0 bg-black/50" onClick={() => setEliminar(false)}>
            <div className="bg-white p-6 rounded-lg max-w-md mx-auto mt-40 shadow-lg" onClick={(e) => e.stopPropagation()}>
                <h2 className="text-xl font-semibold mb-4">Confirmar eliminación</h2>
                <p className="mb-6">¿Estás seguro de que deseas eliminar este socio/a <strong>{socioActual?.nombreSocio + " " + socioActual.apellidoSocio}</strong>?</p>
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

export default PanelSocios