import React, { useState, useEffect } from "react";
import CatMedicos from "./CatMedicos";
import { getMedicosPorCategoria } from "../services/medicosServices";
import '../index.css'
const Medicos = ({ idCategoria, setIdCategoria }) => {
  const [medicos, setMedicos] = useState([]);
  const [loading, setLoading] = useState(false); // estado de carga

  useEffect(() => {
    if (!idCategoria) {
      setMedicos([]);
      return;
    }

    const fetchMedicos = async () => {
      setLoading(true);
      const data = await getMedicosPorCategoria(idCategoria);
      setMedicos(data);
      setLoading(false);
    };

    fetchMedicos();
  }, [idCategoria]);

  return (
    <>
      <CatMedicos onSelectCategoria={setIdCategoria} />
<div className="titMedicos">
      <h3>Médicos</h3>

      {loading ? (
        <p>Cargando médicos...</p>
      ) : medicos.length > 0 ? (
        <ul>
          {medicos.map((med) => (
            <li key={med.idMedico}>
              {med.NombreMedico} {med.ApellidoMedico}
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay médicos para esta categoría</p>
      )}
      </div>
    </>
  );
};

export default Medicos;
