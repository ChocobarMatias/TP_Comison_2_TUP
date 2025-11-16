import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <nav>
      <Link to="/medic" className="medicos">Medicos</Link>
    </nav>
    </>
  )
}

export default Navbar