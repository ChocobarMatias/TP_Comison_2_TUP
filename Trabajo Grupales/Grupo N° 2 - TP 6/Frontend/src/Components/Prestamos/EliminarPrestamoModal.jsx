import React from "react";
import Button from "../Prestamos/Button.jsx"; // tu botón reutilizable

const EliminarPrestamoModal = ({ show, onClose, onConfirm, prestamo }) => {
  if (!show || !prestamo) return null;

  return (
    <div className="modal fade show d-block" tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title">Eliminar préstamo</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>

          <div className="modal-body">
            <p>¿Estás seguro que deseas eliminar el préstamo <strong>#{prestamo.prestamo_id}</strong>?</p>
            <p>Esta acción no se puede deshacer.</p>
          </div>

          <div className="modal-footer">
            <Button variant="secondary" onClick={onClose}>
              Cancelar
            </Button>

            <Button variant="danger" onClick={onConfirm}>
              Eliminar
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EliminarPrestamoModal;