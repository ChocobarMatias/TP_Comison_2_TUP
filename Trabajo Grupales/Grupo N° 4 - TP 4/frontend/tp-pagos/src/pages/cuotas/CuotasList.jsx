import { useEffect, useState } from "react";
import api from "../../services/api";
import { pagarCuota } from "../../services/planesService";

export default function CuotasList() {
  const [cuotas, setCuotas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    cargarCuotas();
  }, []);

  const cargarCuotas = async () => {
    try {
      const res = await api.get("/cuotas");
      setCuotas(res.data);
    } catch (err) {
      console.error("Error cargando cuotas:", err);
      setErrorMsg("No se pudieron cargar las cuotas.");
    } finally {
      setLoading(false);
    }
  };

  const handlePagar = async (idCuota) => {
    try {
      await pagarCuota(idCuota);
      cargarCuotas(); // refrescar
    } catch (error) {
      console.error("Error pagando cuota:", error);
      setErrorMsg("No se pudo pagar la cuota.");
    }
  };

  const formatearFecha = (fecha) =>
    fecha ? new Date(fecha).toLocaleDateString("es-AR") : "";

  if (loading) return <p>Cargando cuotas...</p>;

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "left" }}>
      <h1>Cuotas del Sistema</h1>

      {errorMsg && (
        <div
          style={{
            backgroundColor: "#ff4d4d",
            padding: "10px",
            borderRadius: "5px",
            marginBottom: "15px",
          }}
        >
          {errorMsg}
        </div>
      )}

      {cuotas.length === 0 ? (
        <p>No hay cuotas registradas.</p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Cliente</th>
              <th>Servicio</th>
              <th>Cuota</th>
              <th>Monto</th>
              <th>Vencimiento</th>
              <th>Estado</th>
              <th>Acción</th>
            </tr>
          </thead>

          <tbody>
            {cuotas.map((c) => (
              <tr key={c.id}>
                <td>{c.id}</td>

                <td>
                  {c.planes_pago?.clientes?.nombre}{" "}
                  {c.planes_pago?.clientes?.apellido}
                </td>

                <td>{c.planes_pago?.servicios?.nombre}</td>

                <td>{c.numero_cuota}</td>

                <td>${Number(c.monto)}</td>

                <td>{formatearFecha(c.fecha_vencimiento)}</td>

                <td>
                  <span
                    style={{
                      color: c.estado === "PAGADO" ? "lightgreen" : "#ffae42",
                      fontWeight: "bold",
                    }}
                  >
                    {c.estado}
                  </span>
                </td>

                <td>
                  {c.estado === "PENDIENTE" ? (
                    <button className="btn btn-primary" onClick={() => handlePagar(c.id)}>
                      Pagar
                    </button>
                  ) : (
                    <span style={{ color: "green", fontWeight: "bold" }}>
                      ✔ Pagado
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
