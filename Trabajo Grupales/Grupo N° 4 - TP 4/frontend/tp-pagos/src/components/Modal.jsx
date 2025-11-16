export default function Modal({ title, children, onClose, onConfirm }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{title}</h2>
        <div>{children}</div>

        <div className="modal-actions">
          <button className="btn btn-secondary" onClick={onClose}>
            Cancelar
          </button>

          <button className="btn btn-danger" onClick={onConfirm}>
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}
