function EditarActividad({ cerrar, editar, actividad }) {

    if (!actividad) return null;

    const handleSubmit = (e) => {
        e.preventDefault();

        const nombre = e.target.nombre.value;
        const cupo = e.target.cupo.value;

        if (!nombre || !cupo) {
        alert("Todos los campos son obligatorios");
        return;
        }

        const actividadEditada = {
        id: actividad.id,
        nombre,
        cupo: Number(cupo)
        };

        editar(actividadEditada);
        cerrar();
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

            <h2 className="text-xl font-bold mb-4 text-gray-800">Editar actividad</h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            <div>
                <label className="font-medium text-gray-700">Nombre</label>
                <input
                type="text"
                name="nombre"
                defaultValue={actividad.nombre}
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div>
                <label className="font-medium text-gray-700">Cupo máximo</label>
                <input
                type="number"
                name="cupo"
                defaultValue={actividad.cupo}
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
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                Guardar cambios
                </button>

            </div>

            </form>

        </div>
        </div>
    );
}

export default EditarActividad;
