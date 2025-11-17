/**
 * Componente Table reutilizable
 */

export const Table = ({ columns, data, onEdit, onDelete }) => {
  return (
    <div className="table-container">
      <table className="data-table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.label}</th>
            ))}
            {(onEdit || onDelete) && <th>Acciones</th>}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length + 1} className="empty-message">
                No hay datos para mostrar
              </td>
            </tr>
          ) : (
            data.map((row, index) => (
              <tr key={index}>
                {columns.map((column) => (
                  <td key={column.key}>{row[column.key]}</td>
                ))}
                {(onEdit || onDelete) && (
                  <td className="actions">
                    {onEdit && (
                      <button
                        className="btn btn-small btn-edit"
                        onClick={() => onEdit(row)}
                      >
                        Editar
                      </button>
                    )}
                    {onDelete && (
                      <button
                        className="btn btn-small btn-danger"
                        onClick={() => onDelete(row)}
                      >
                        Eliminar
                      </button>
                    )}
                  </td>
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
