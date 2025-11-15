import React, { useState, useEffect } from "react";
import Button from "../Prestamos/Button.jsx";
import { actualizarPrestamo } from "../../Hooks/CustomPrestamos.js";

const CambiarEstadoPrestamo = ({ show, onClose, prestamo, onSuccess }) => {
  const [estado, setEstado] = useState("");
  const [fechaDevolucion, setFechaDevolucion] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (prestamo) {
      setEstado(prestamo.estado);
      setFechaDevolucion(
        prestamo.fecha_devolucion ? prestamo.fecha_devolucion.slice(0, 10) : ""
      );
      setError("");
    }
  }, [prestamo]);

  const handleSubmit = async () => {
    setError("");
 

    // Validar que si el estado es devuelto, debe tener fecha de devolución
    if (estado === "devuelto" && !fechaDevolucion) {
      setError("Debe especificar la fecha de devolución");
      return;
    }

    setLoading(true);
    try {
      const dataToSend = {
        alumno_id: parseInt(prestamo.alumno_id),
        libro_id: parseInt(prestamo.libro_id),
        fecha_prestamo: prestamo.fecha_prestamo.slice(0, 10),
        fecha_devolucion: estado === "devuelto" ? fechaDevolucion : null,
        estado,
      };
  
      await actualizarPrestamo(prestamo.prestamo_id, dataToSend);

      onSuccess();
      onClose();
    } catch (error) {
      setError(
        error.response?.data?.message || "Error al actualizar el préstamo"
      );
    } finally {
      setLoading(false);
    }
  };

  if (!show || !prestamo) return null;

  return (
    <div className="modal fade show d-block" role="dialog">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Cambiar estado del préstamo</h5>
            <button className="btn-close" onClick={onClose}></button>
          </div>

          <div className="modal-body">
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}

            <div className="mb-3">
              <label className="form-label">Estado</label>
              <select
                className="form-select"
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
              >
                <option value="prestado">Prestado</option>
                <option value="devuelto">Devuelto</option>
              </select>
            </div>

            {estado === "devuelto" && (
              <div className="mb-3">
                <label className="form-label">Fecha de devolución</label>
                <input
                  type="date"
                  className="form-control"
                  value={fechaDevolucion}
                  onChange={(e) => setFechaDevolucion(e.target.value)}
                />
              </div>
            )}
          </div>

          <div className="modal-footer">
            <Button variant="secondary" onClick={onClose} disabled={loading}>
              Cancelar
            </Button>

            <Button onClick={handleSubmit} disabled={loading}>
              {loading ? "Guardando..." : "Guardar cambios"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CambiarEstadoPrestamo;
