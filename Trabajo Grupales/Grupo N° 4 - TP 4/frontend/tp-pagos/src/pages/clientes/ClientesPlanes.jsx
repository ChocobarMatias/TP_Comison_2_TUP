import { useParams, Link } from "react-router-dom";
import { usePlanesCliente } from "../../hooks/usePlanesCliente";

export default function ClientePlanes() {
  const { id } = useParams();
  const { planes, loading, pagarCuota } = usePlanesCliente(id);

  if (loading) return <p>Cargando planes...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Planes del Cliente #{id}</h1>

      <Link to="/clientes" style={{ color: "#61dafb" }}>← Volver</Link>

      {planes.length === 0 ? (
        <p>Este cliente no tiene planes asignados.</p>
      ) : (
        planes.map((plan) => (
          <div key={plan.id} style={{
            background: "#1f1f1f",
            padding: "20px",
            borderRadius: "10px",
            marginBottom: "20px"
          }}>
            <h2>{plan.servicios.nombre}</h2>
            <p>{plan.servicios.descripcion}</p>
            <p><b>Cuotas:</b> {plan.numero_cuotas}</p>
            <p><b>Inicio:</b> {plan.fecha_inicio.substring(0, 10)}</p>

            <h3>Detalle de Cuotas</h3>

            <table style={{ width: "100%", marginTop: "10px" }}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Monto</th>
                  <th>Vencimiento</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {plan.cuotas.map((c) => (
                  <tr key={c.id}>
                    <td>{c.numero_cuota}</td>
                    <td>${c.monto}</td>
                    <td>{c.fecha_vencimiento.substring(0, 10)}</td>
                    <td>{c.estado}</td>
                    <td>
                      {c.estado === "PENDIENTE" ? (
                        <button
                          onClick={() => pagarCuota(c.id)}
                          style={{ padding: "5px 10px" }}
                        >
                          Pagar
                        </button>
                      ) : (
                        "✔"
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))
      )}
    </div>
  );
}
