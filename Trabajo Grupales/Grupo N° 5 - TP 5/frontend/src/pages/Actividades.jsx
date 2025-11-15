import actividades from "../data/actividades.json"

function Actividades() {
    return (
        <>
            <div className="min-h-screen bg-gray-100 px-6 py-10">
                {/* Título */}
                <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-10">
                    Lista de Actividades
                </h1>

                {/* Contenedor GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {actividades.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center"
                    >
                        {/* Nombre y cupos */}
                        <h2 className="text-2xl font-bold text-gray-700 mb-2">
                        {item.nombre}
                        </h2>
                        <p className="text-gray-600 mb-5">
                        Cupo máximo:{" "}
                        <span className="font-semibold">{item.cupo_maximo}</span>
                        </p>
                        {/*Boton para hacer reserva*/}
                        <button
                        className="bg-blue-600 text-white w-full py-2 rounded-lg font-medium 
                        hover:bg-blue-700 transition-all duration-200 shadow hover:shadow-lg"
                        >
                        Reservar
                        </button>
                    </div>
                    ))}

                </div>
                </div>
        </>
    )
}

export default Actividades