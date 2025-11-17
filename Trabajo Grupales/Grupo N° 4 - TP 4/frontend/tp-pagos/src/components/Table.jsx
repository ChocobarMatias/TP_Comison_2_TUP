import { Link } from "react-router-dom";



export default function Table({ data = [], columns = [], actions = [] }) {
  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.key}>{col.label}</th>
          ))}
          {actions.length > 0 && <th>Acciones</th>}
        </tr>
      </thead>

      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            {columns.map((col) => (
              <td key={col.key}>{row[col.key]}</td>
            ))}

            {actions.length > 0 && (
              <td>
                {actions.map((action, i) => {
                  if (action.to) {
                    return (
                      <Link
                        key={i}
                        to={typeof action.to === "function" ? action.to(row) : action.to}
                        className={`btn btn-${action.variant || "primary"}`}
                      >
                        {action.label}
                      </Link>
                    );
                  }

                  return (
                    <button
                      key={i}
                      onClick={() => action.onClick(row)}
                      className={`btn btn-${action.variant || "primary"}`}
                    >
                      {action.label}
                    </button>
                  );
                })}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
