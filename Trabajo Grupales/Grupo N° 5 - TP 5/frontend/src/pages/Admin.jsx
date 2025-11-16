import { useState } from "react"
import PanelSocios from "../components/PanelSocios";
import PanelActividades from "../components/PanelActividades";
import PanelReservas from "../components/PanelReservas";
import { useSocioStore } from "../stores/socios.store";

function Admin() {
    const token = useSocioStore((state) => state.getToken())
    const [tabActiva, setTabActiva] = useState("socios");

    return (
        <>
            <div className="min-h-screen bg-gray-100 px-6 py-10">

                <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-10">
                    Panel de Administración
                </h1>

                <div className="bg-white shadow-md rounded-2xl p-4 max-w-5xl mx-auto mb-6">
                    <div className="flex justify-center gap-4">
                        <button onClick={() => setTabActiva("socios")}
                        className={"px-4 py-2 rounded-lg font-medium " +
                        (tabActiva === "socios"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300")}>
                            Socios
                        </button>

                        <button onClick={() => setTabActiva("actividades")}
                        className={
                            "px-4 py-2 rounded-lg font-medium " +
                            (tabActiva === "actividades"
                            ? "bg-blue-600 text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300")
                        }>
                            Actividades
                        </button>

                        <button onClick={() => setTabActiva("reservas")}
                        className={
                            "px-4 py-2 rounded-lg font-medium " +
                            (tabActiva === "reservas"
                            ? "bg-blue-600 text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300")
                        }>
                            Reservas
                        </button>
                    </div>
                </div>


                {tabActiva === "socios" && (<PanelSocios token={token}/>)}

        {tabActiva === "actividades" && (<PanelActividades token={token}/>)}

        {tabActiva === "reservas" && (<PanelReservas token={token}/>)}

        </div>
        </>
    )
}

export default Admin