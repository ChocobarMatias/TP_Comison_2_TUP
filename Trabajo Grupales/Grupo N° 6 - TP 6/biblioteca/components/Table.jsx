// src/components/Table.jsx
export default function Table({ columns = [], data = [] }) {
  if (!data || data.length === 0) {
    return <p className="text-sm text-gray-500">No hay datos para mostrar.</p>;
  }

  return (
    <div className="overflow-x-auto border rounded-lg">
      <table className="min-w-full text-sm">
        <thead className="bg-gray-100">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className="text-left px-3 py-2 font-semibold text-gray-700"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={row.id || idx}
              className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              {columns.map((col) => (
                <td key={col.key} className="px-3 py-2">
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
