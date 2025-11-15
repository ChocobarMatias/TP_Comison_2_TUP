import React from 'react'
import Prestamos from '../Components/Prestamos/Prestamos.jsx'

const PrestamosPage = () => {
  return (
     <div className="container">
      <h1 className="text-3xl font-bold mb-2">Gestión de Préstamos</h1>
      <p className="text-gray-600 mb-6">
        Desde esta sección puedes administrar los préstamos activos, ver su historial,
        y gestionar devoluciones.
      </p>
      <Prestamos />
    </div>
  )
}

export default PrestamosPage