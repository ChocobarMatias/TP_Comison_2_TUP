import axios from "axios"
import { useCallback, useEffect, useState } from "react"
import { CgGym } from "react-icons/cg";
import ReservarClase from "../components/ReservarClase";
import NavBar from "../components/NavBar";
export default function ActividadesHoy() {
  const idSocio = 3
  const [actividades, setActividades] = useState(null)
  const [actividad, setActividad] = useState(null)
  const [showModal, setShowModal]  = useState(false)

  //el usecallback se usa para decir que la funcion no cambiara entre renders
  const getActividades = useCallback(async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_BACKEND}actividades/hoy`)
        setActividades(data?.resultado)
      } catch (error) {
        console.log(error);
      }
    },[])

  
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getActividades()
  }, [getActividades])


  return (
            <>
            <NavBar />
            <div className="min-h-screen bg-gray-100 px-6 py-10">
                {/* Título */}
                <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-10">
                    Lista de Actividades del día
                </h1>

                {/* Contenedor GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {actividades?.map((item) => (
                    <div
                        key={item.id}
                        className="relative bg-white rounded-xl shadow-md p-6 flex border border-transparent flex-col items-center text-center overflow-clip hover:border-black duration-200 cursor-pointer"
                        onClick={() => {
                          setShowModal(true)
                          setActividad(item)}}
                    >

                        <div className="flex items-center w-full gap-2">
                          <div>
                            <CgGym className="min-h-10 min-w-10 bg-blue-500 p-2 text-white rounded-xl"/>
                            </div>
                          <h2 className="text-2xl font-bold text-gray-700 mb-2 first-letter:capitalize">{item.nombre}</h2>
                        </div>
                        <div className="w-full border-t border-blue-200 my-2"/>
                        <div className="flex flex-col w-full">
                          <div className="grid grid-cols-2">
                            <p className="col-span-1 w-full text-start">Cupos:</p>
                            <p className="text-end font-medium text-blue-500">{item.cupos_disponibles} disponibles</p>
                          </div>
                          <progress className="w-full rounded-full overflow-clip h-2 my-1" value={item.cupo_maximo - item.cupos_disponibles} max={item.cupo_maximo}/>
                          <p className="text-start text-sm">{item.cupo_maximo - item.cupos_disponibles} / {item.cupo_maximo} inscriptos</p>
                        </div>
                       
                    </div>
                    ))}

                </div>
                {showModal && actividad && <ReservarClase id_socio={idSocio} actividad={actividad} getActividades={getActividades}
                  closeModal={() => {
                    setShowModal(false)
                    setActividad(null)
                    }
                  } /> }
                </div>
        </>
  )
}
// "cupo_maximo": 25,
//       "cupos_disponibles": 25