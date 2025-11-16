import { useState } from "react";

const ModalTurno = ({ medico, onClose, onSubmit }) => {
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ fecha, hora });
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Sacar turno con {medico.NombreMedico} {medico.ApellidoMedico}</h3>

        <form onSubmit={handleSubmit}>
          <label>Fecha:</label>
          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            required
          />

          <label>Hora:</label>
          <input
            type="time"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
            required
          />

          <button type="submit">Confirmar turno</button>
          <button type="button" onClick={onClose}>Cancelar</button>
        </form>
      </div>
    </div>
  );
};

export default ModalTurno;
