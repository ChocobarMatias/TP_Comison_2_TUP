import { useState } from "react"
import EditarSocio from "./EditarSocio"
import CrearSocio from "./CrearSocio"
import sociosData from "../data/socios.json";

function PanelSocios() {

    const [socios, setSocios] = useState(sociosData);
    const [abrir, setAbrir] = useState(false);
    const [abrirEditar, setAbrirEditar] = useState(false);
    const [socioActual, setSocioActual] = useState(null);

    const handleCrear = (nuevoSocio) => {
        nuevoSocio.id = socios.length + 1;
        setSocios([...socios, nuevoSocio]);
    };

    const handleEliminar = (id) => {
        const confirmacion = confirm("Seguro que queres eliminar este socio?");
        if (!confirmacion) return;

        const nuevaLista = socios.filter((s) => s.id !== id);
        setSocios(nuevaLista);
    };

    const handleEditar = (socio) => {
        setSocioActual(socio);
        setAbrirEditar(true);
    };

    const handleGuardarEditado = (socioEditado) => {
        const nuevaLista = socios.map((s) =>
        s.id === socioEditado.id ? socioEditado : s
        );
        setSocios(nuevaLista);
    };
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
                <th className="px-4 py-3">Nombre</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3 text-center">Acciones</th>
                </tr>
            </thead>

            <tbody>
                {socios.map((socio) => (
                <tr key={socio.id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3">{socio.id}</td>
                    <td className="px-4 py-3">{socio.nombre}</td>
                    <td className="px-4 py-3">{socio.email}</td>

                    <td className="px-4 py-3">
                    <div className="flex justify-center gap-3">

                        <button
                        onClick={() => handleEditar(socio)}
                        className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition"
                        >
                        Editar
                        </button>

                        <button
                        onClick={() => handleEliminar(socio.id)}
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
            cerrar={() => setAbrir(false)}
            crear={handleCrear}
            />
        )}

        {/* Modal editar */}
        {abrirEditar && (
            <EditarSocio
            socio={socioActual}
            cerrar={() => setAbrirEditar(false)}
            editar={handleGuardarEditado}
            />
        )}

    </div>
    )
}

export default PanelSocios