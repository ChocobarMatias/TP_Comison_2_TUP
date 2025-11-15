function EditarSocio ({cerrar, editar, socio}) {

    const handleSubmit = (e) => {
        e.preventDefault();

        const nombre = e.target.nombre.value;
        const email = e.target.email.value;

        if (!nombre || !email) {
            alert("Todos los campos son obligatorios");
            return;
        }

        const socioEditado = {
            id: socio.id,
            nombre,
            email
        };

        editar(socioEditado);
        cerrar();
    };

    return (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex justify-center items-center"
        onClick={cerrar}>
            <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md relative animate-fadeIn"
            onClick={(e) => e.stopPropagation()}>

                <h2 className="text-xl font-bold mb-4 text-gray-800">Editar socio</h2>

                <form action="" onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                        <label htmlFor="" className="font-medium text-gray-700">Nombre</label>
                        <input type="text" name="nombre" defaultValue={socio.nombre}
                        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"/>
                    </div>
                    <div>
                        <label htmlFor="" className="font-medium text-gray-700">Email</label>
                        <input type="email" name="email" defaultValue={socio.email}
                        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"/>
                    </div>
                    <div className="flex justify-end gap-3 mt-4">
                        <button
                        type="button" onClick={cerrar}
                        className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition">
                            Cancelar
                        </button>

                        <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                            Guardar cambios
                        </button>
                    </div>
                </form>

            </div>

        </div>
    )
}

export default EditarSocio