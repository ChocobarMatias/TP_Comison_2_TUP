import sociosData from "../data/socios.json";
import actividadesData from "../data/actividades.json";

function crearReserva({cerrar, crear}) {

    const handleSubmit = (e) => {
    e.preventDefault();

    const socio = e.target.socio.value;
    const actividad = e.target.actividad.value;
    const fecha = e.target.fecha.value;

    if (!socio || !actividad || !fecha) {
        alert("Todos los campos son obligatorios");
        return;
        }

        const nuevaReserva = {
        socio,
        actividad,
        fecha
        };

        crear(nuevaReserva);
        cerrar();
    };
    return(
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
                <option value="">Seleccione...</option>
                {sociosData.map((s) => (
                    <option key={s.id} value={s.nombre}>
                    {s.nombre}
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
                {actividadesData.map((a) => (
                    <option key={a.id} value={a.nombre}>
                    {a.nombre}
                    </option>
                ))}
                </select>
            </div>

            <div>
                <label className="font-medium text-gray-700">Fecha</label>
                <input
                type="date"
                name="fecha"
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                />
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
    )
}

export default crearReserva;