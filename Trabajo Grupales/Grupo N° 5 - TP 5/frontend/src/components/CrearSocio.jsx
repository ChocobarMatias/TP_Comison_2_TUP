import axios from "axios";
import { toast } from "react-toastify";

function CrearSocio({ cerrar, token, getSocios }) {

    const handleSubmit = async (e) => {
        e.preventDefault();

        const apellido = e.target.apellidoSocio.value;
        const nombre = e.target.nombreSocio.value;
        const email = e.target.emailSocio.value;
        const password = e.target.contraSocio.value;

        if (!nombre || !email || !password) {
        alert("Todos los campos son obligatorios");
        return;
        }

        const nuevoSocio = {
            apellidoSocio: apellido,
            nombreSocio: nombre,
            emailSocio: email,
            contraSocio: password
        };
        try {
            await axios.post(`${import.meta.env.VITE_BACKEND}socios/crear`, nuevoSocio, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            toast("Socio creado con éxito")
            await getSocios()
            cerrar();
        } catch (error) {
            toast("Hubo un error en la creacion, verifique el email y largos de nombre y apellido")
            console.log(error);
        }


        
        
    };

    return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex justify-center items-center" onClick={cerrar}>
        <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md relative animate-fadeIn"
        onClick={(e) => e.stopPropagation()}>

            <h2 className="text-xl font-bold mb-4 text-gray-800">
            Crear nuevo socio
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                <div>
                    <label className="font-medium text-gray-700">Apellido</label>
                    <input
                    type="text"
                    name="apellidoSocio"
                    className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                    placeholder="Pérez"
                    />
                </div>
                <div>
                    <label className="font-medium text-gray-700">Nombre</label>
                    <input
                    type="text"
                    name="nombreSocio"
                    className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                    placeholder="Juan"
                    />
                </div>

                <div>
                    <label className="font-medium text-gray-700">Email</label>
                    <input
                    type="email"
                    name="emailSocio"
                    className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                    placeholder="correo@gmail.com"
                    />
                </div>

                <div>
                    <label className="font-medium text-gray-700">Contraseña</label>
                    <input
                    type="password"
                    name="contraSocio"
                    className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 placeholder:text-neutral-200"
                    placeholder="••••••"
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
    );
}

export default CrearSocio;
