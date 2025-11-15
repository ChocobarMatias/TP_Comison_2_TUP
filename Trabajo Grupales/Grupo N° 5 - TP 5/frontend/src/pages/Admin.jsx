import sociosData from "../data/socios.json"
import { useState } from "react"
import CrearSocio from "../components/CrearSocio";
import EditarSocio from "../components/EditarSocio";

function Admin() {
    const [socios, setSocios] = useState(sociosData);
    const [abrir, setAbrir] = useState(false);
    const [abrirEditar, setAbrirEditar] = useState(false);
    const [socioActual, setSocioActual] = useState(null)

    const handleCrear = (nuevoSocio) => {
        nuevoSocio.id = socios.length + 1;
        setSocios([...socios, nuevoSocio]);
    };

    const handleEliminar = (id) => {
        const confirmacion = confirm("Quiere eliminar este socio??");
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
        s.id === socioEditado.id ? socioEditado : s);
        setSocios(nuevaLista);
    }
    return (
        <>
            <div className="min-h-screen bg-gray-100 px-6 py-10">

                <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-10">
                    Panel de Administración
                </h1>

                <div className="bg-white shadow-xl rounded-2xl p-8 max-w-5xl mx-auto">

                    {/* Botón para crear socio0 */}
                    <div className="flex justify-end mb-6">
                        <button
                            onClick={() => setAbrir(true)}
                            className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium
                            hover:bg-green-700 transition-all shadow-md hover:shadow-lg">
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

                                {/* editar dentro */}
                                <button
                                    onClick={() => handleEditar(socio)}
                                    className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition"
                                >
                                    Editar
                                </button>

                                {/*eliminar dentro*/}
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

        </div>
        {/* Modal para crear spcio */}
        {abrir && (
            <CrearSocio
            cerrar={() => setAbrir(false)}
            crear={handleCrear}
            />
        )}

        {/* Modal para editar un socio */}
        {abrirEditar && (
            <EditarSocio
            socio={socioActual}
            cerrar={() => setAbrirEditar(false)}
            editar={handleGuardarEditado}
            />
        )}

        </div>
        </>
    )
}

export default Admin