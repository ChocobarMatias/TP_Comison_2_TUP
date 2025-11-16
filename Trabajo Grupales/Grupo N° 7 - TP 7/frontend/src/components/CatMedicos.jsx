import React, { useEffect, useState } from 'react'
import { getCatMedicos } from '../services/catMedicos'
import '../index.css'
const CatMedicos = ({ onSelectCategoria }) => {
  const [categoria, setCategoria] = useState([])

  useEffect(() => {
    const fetchCategorias = async () => {
      const res = await getCatMedicos()
      setCategoria(res.data)
    }
    fetchCategorias()
  }, [])

  return (
    <> <div className='categoria'>
      <select onChange={(e) => onSelectCategoria(e.target.value)} className='cat'>
        <option value="">Seleccione una categoría</option>
        {categoria.map((cat) => (
          <option key={cat.idCatMedico} value={cat.idCatMedico}>
            {cat.NombreCat}
          </option>
        ))}
      </select>
      </div>
    </>
  )
}

export default CatMedicos
