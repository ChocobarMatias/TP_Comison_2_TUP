import axios from "axios";
import { toast } from "react-toastify";

function ReservarClase({ id_socio, actividad, getActividades, closeModal }) {

    const handleReserva = async () => {
        
        const dataForDB = {
            socio_id: id_socio,
            actividad_id: actividad.id
        }
        try {
            const {data} = await axios.post(`${import.meta.env.VITE_BACKEND}reservas/`, dataForDB)
            console.log(data);
            await getActividades()
            toast.success(data?.mensaje || "Reserva realizada con 2exito")
            closeModal()
        } catch (error) {
            console.log(error, "error");
            toast.error(error?.response?.data?.error || "Hubo un error")
        }
    };

    return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex justify-center items-center" onClick={closeModal}>
        <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md relative animate-fadeIn"
        onClick={(e) => e.stopPropagation()}>

            <h2 className="text-xl font-bold mb-4 text-gray-800">
            ¿Desea reservar una clase para <strong>{actividad.nombre}</strong>?
            </h2>

                    <button
                    type="button"
                    onClick={closeModal}
                    className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition"
                    >
                    Cancelar
                    </button>

                    <button
                    type="button"
                    onClick={handleReserva}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                    >
                        Reservar
                    </button>

            
            
        </div>
    </div>
    );
}

export default ReservarClase;
