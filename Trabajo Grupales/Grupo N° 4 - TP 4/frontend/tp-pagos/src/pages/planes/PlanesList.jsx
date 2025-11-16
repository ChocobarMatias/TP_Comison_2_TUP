import { useEffect, useState } from "react";
import { getPlanes } from "../../services/planesService";
import { Link } from "react-router-dom";

export default function PlanesList() {
  const [planes, setPlanes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    cargarPlanes();
  }, []);

  const cargarPlanes = async () => {
    try {
      const { data } = await getPlanes();
      setPlanes(data);
    } catch (err) {
      console.error("Error cargando planes:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Cargando...</p>;

  return (
    <div>
      <h1>Planes de Pago</h1>

      <Link to="/planes/nuevo" style={{ color: "#646cff" }}>
        + Nuevo Plan
      </Link>

      <table style={{ marginTop: "20px", width: "100%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Cliente</th>
            <th>Servicio</th>
            <th>Cuotas</th>
            <th>Ver Cuotas</th>
          </tr>
        </thead>

        <tbody>
          {planes.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.clientes?.nombre} {p.clientes?.apellido}</td>
              <td>{p.servicios?.nombre}</td>
              <td>{p.numero_cuotas}</td>

              <td>
                <Link to={`/planes/${p.id}/cuotas`} style={{ color: "#535bf2" }}>
                  Ver cuotas
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
