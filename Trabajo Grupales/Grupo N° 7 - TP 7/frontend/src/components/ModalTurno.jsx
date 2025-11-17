import { useState } from "react";
import "../styles/Turnos.css"; 

const ModalTurno = ({ medico, onClose, onSubmit }) => {
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fecha || !hora) {
      alert("Por favor selecciona fecha y hora");
      return;
    }
    onSubmit({ fecha, hora });
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Sacar turno con {medico.NombreMedico} {medico.ApellidoMedico}</h3>

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-group">
            <label>Fecha:</label>
            <input
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Hora:</label>
            <input
              type="time"
              value={hora}
              onChange={(e) => setHora(e.target.value)}
              required
            />
          </div>

          <div className="modal-buttons">
            <button type="submit" className="confirm-btn">Confirmar turno</button>
            <button type="button" className="cancel-btn" onClick={onClose}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalTurno;
