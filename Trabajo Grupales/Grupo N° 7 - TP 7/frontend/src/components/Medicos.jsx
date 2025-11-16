import React, { useState, useEffect } from "react";
import CatMedicos from "./CatMedicos";
import ModalTurno from "./ModalTurno";
import { getMedicosPorCategoria } from "../services/medicosServices";
import { crearTurno } from "../services/turnosService";
import { useAuthStore } from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";

const Medicos = ({ idCategoria, setIdCategoria }) => {
  const [medicos, setMedicos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedMedico, setSelectedMedico] = useState(null);
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    if (!idCategoria) return setMedicos([]);

    const fetchMedicos = async () => {
      setLoading(true);
      const data = await getMedicosPorCategoria(idCategoria);
      setMedicos(data);
      setLoading(false);
    };

    fetchMedicos();
  }, [idCategoria]);

  const openModal = (medico) => setSelectedMedico(medico);
  const closeModal = () => setSelectedMedico(null);

  const handleCreateTurno = async ({ fecha, hora }) => {
  try {
    // 👉 Unimos fecha + hora para generar un DATETIME válido
    const fechaHoraISO = `${fecha}T${hora}:00.000Z`;

   await crearTurno({
  idMedico: selectedMedico.idMedico,
  idPaciente: user.idPaciente,   // ✅ AHORA SÍ
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






console.log("USUARIO LOGEADO -> ", user);

  return (
    <>
      <CatMedicos onSelectCategoria={setIdCategoria} />

      <h3>Médicos</h3>

      {loading ? (
        <p>Cargando médicos...</p>
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
    </>
  );
};

export default Medicos;
