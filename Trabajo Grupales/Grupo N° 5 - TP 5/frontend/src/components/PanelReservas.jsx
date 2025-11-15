import { useState } from "react";
import reservasData from "../data/reservas.json";
import CrearReserva from "./CrearReserva";

function PanelReservas() {

    const [reservas, setReservas] = useState(reservasData);
    const [abrir, setAbrir] = useState(false);

    const handleCrear = (nuevaReserva) => {
        nuevaReserva.id = reservas.length + 1;
        setReservas([...reservas, nuevaReserva]);
    };

    const handleEliminar = (id) => {
        const c = confirm("¿Querés eliminar esta reserva?");
        if (!c) return;

        setReservas(reservas.filter((r) => r.id !== id));
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
                {reservas.map((r) => (
                <tr key={r.id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3">{r.id}</td>
                    <td className="px-4 py-3">{r.socio}</td>
                    <td className="px-4 py-3">{r.actividad}</td>
                    <td className="px-4 py-3">{r.fecha}</td>

                    <td className="px-4 py-3 text-center">
                    <button
                        onClick={() => handleEliminar(r.id)}
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

    </div>
    )
}

export default PanelReservas