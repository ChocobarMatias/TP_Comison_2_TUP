import React, { useState, useEffect } from "react";
import CatMedicos from "./CatMedicos";
import ModalTurno from "./ModalTurno";
import { getAllMedicos } from "../services/medicosServices";
import { crearTurno } from "../services/turnosService";
import { useAuthStore } from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";
import "../App.css"; // ✅ Importar estilos

const Medicos = ({ idCategoria, setIdCategoria }) => {
  const [medicos, setMedicos] = useState([]);
  const [allMedicos, setAllMedicos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMedico, setSelectedMedico] = useState(null);
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);

  // Traer todos los médicos al cargar
  useEffect(() => {
    const fetchMedicos = async () => {
      setLoading(true);
      const data = await getAllMedicos();
      setAllMedicos(data);
      setMedicos(data); // Inicialmente mostrar todos
      setLoading(false);
    };
    fetchMedicos();
  }, []);

  // Filtrar por categoría cuando cambie
  useEffect(() => {
    if (!idCategoria) {
      setMedicos(allMedicos);
    } else {
      const filtered = allMedicos.filter(
        (med) => med.idCatMedico === Number(idCategoria)
      );
      setMedicos(filtered);
    }
  }, [idCategoria, allMedicos]);

  const openModal = (medico) => setSelectedMedico(medico);
  const closeModal = () => setSelectedMedico(null);

  const handleCreateTurno = async ({ fecha, hora }) => {
    try {
      const fechaHoraISO = `${fecha}T${hora}:00.000Z`;

      await crearTurno({
        idMedico: selectedMedico.idMedico,
        idPaciente: user.idPaciente,
        FechaRequeridaTurno: fecha,
        HorarioRequeridoTurno: fechaHoraISO,
        EstadoTurno: "Pendiente",
      });

      alert("Turno creado correctamente");
      closeModal();
      navigate("/mis-turnos");
    } catch (err) {
      console.error(err);
      alert("Error al crear turno");
    }
  };

  return (
    <div className="medicos-container">
      <CatMedicos onSelectCategoria={setIdCategoria} />

      <h3 style={{ textAlign: "center" }}>Médicos</h3>

      {loading ? (
        <p style={{ textAlign: "center" }}>Cargando médicos...</p>
      ) : (
        <ul>
          {medicos.map((med) => (
            <li key={med.idMedico}>
              {med.NombreMedico} {med.ApellidoMedico}
              <button onClick={() => openModal(med)}>Sacar turno</button>
            </li>
          ))}
        </ul>
      )}

      {selectedMedico && (
        <ModalTurno
          medico={selectedMedico}
          onClose={closeModal}
          onSubmit={handleCreateTurno}
        />
      )}
    </div>
  );
};

export default Medicos;
