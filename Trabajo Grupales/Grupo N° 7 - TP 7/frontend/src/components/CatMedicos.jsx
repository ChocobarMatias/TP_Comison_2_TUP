import { useEffect, useState } from 'react';
import { getCatMedicos } from '../services/catMedicos';
import "../App.css"; // ✅ Importar estilos

const CatMedicos = ({ onSelectCategoria }) => {
  const [categoria, setCategoria] = useState([]);

  useEffect(() => {
    const fetchCategorias = async () => {
      const data = await getCatMedicos();
      setCategoria(data); 
    };
    fetchCategorias();
  }, []);

  return (
    <div className='categoria'>
      <select onChange={(e) => onSelectCategoria(e.target.value)} className='cat'>
        <option value="">Seleccione una categoría</option>
        {categoria.map((cat) => (
          <option key={cat.idCatMedico} value={cat.idCatMedico}>
            {cat.NombreCat}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CatMedicos;
