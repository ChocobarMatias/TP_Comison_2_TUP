import React, { useState } from 'react'
import Medicos from '../components/Medicos'
import { Link } from 'react-router-dom'
import '../index.css'
const HomePage = () => {
  const [idCategoria, setIdCategoria] = useState("")

  return (
    <>
      <Medicos idCategoria={idCategoria} setIdCategoria={setIdCategoria} />
     <div className="boton-container">
  
</div>
    </>
  )
}

export default HomePage
