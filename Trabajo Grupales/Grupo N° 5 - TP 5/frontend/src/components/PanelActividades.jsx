import { useState } from "react";
import actividadesData from "../data/actividades.json";
import CrearActividad from "./CrearActividad";
import EditarActividad from "./EditarActividad";

function PanelActividades() {

    const [actividades, setActividades] = useState(actividadesData);
    const [abrir, setAbrir] = useState(false);
    const [editar, setEditar] = useState(false);
    const [actividadActual, setActividadActual] = useState(null);

    const handleCrear = (nuevaActividad) => {
        nuevaActividad.id = actividades.length + 1;
        setActividades([...actividades, nuevaActividad]);
    };

    const handleEliminar = (id) => {
        const c = confirm("Queres eliminar esta actividad?");
        if (!c) return;

        setActividades(actividades.filter(a => a.id !== id));
    };

    const handleEditar = (actividad) => {
        setActividadActual(actividad);
        setEditar(true);
    };

    const handleGuardarEditado = (actividadEditada) => {
        const nuevaLista = actividades.map(a =>
        a.id === actividadEditada.id ? actividadEditada : a
        );
        setActividades(nuevaLista);
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
                {actividades.map((actividad) => (
                <tr key={actividad.id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3">{actividad.id}</td>
                    <td className="px-4 py-3">{actividad.nombre}</td>
                    <td className="px-4 py-3">{actividad.cupo}</td>

                    <td className="px-4 py-3">
                    <div className="flex justify-center gap-3">

                        <button
                        onClick={() => handleEditar(actividad)}
                        className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition"
                        >
                        Editar
                        </button>

                        <button
                        onClick={() => handleEliminar(actividad.id)}
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
            crear={handleCrear}
            />
        )}

        {editar && (
            <EditarActividad
            actividad={actividadActual}
            cerrar={() => setEditar(false)}
            editar={handleGuardarEditado}
            />
        )}
    </div>
    );
}

export default PanelActividades