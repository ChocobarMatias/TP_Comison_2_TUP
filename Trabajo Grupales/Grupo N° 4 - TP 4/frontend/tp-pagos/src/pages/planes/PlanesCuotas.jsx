import { useEffect, useState } from "react";
import { getCuotasByPlan, pagarCuota, getPlanById } from "../../services/planesService";
import { useParams } from "react-router-dom";

export default function PlanesCuotas() {
  const { id } = useParams();

  const [plan, setPlan] = useState(null);
  const [cuotas, setCuotas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    cargarDatos();
  }, [id]);

  const cargarDatos = async () => {
    try {
      const planRes = await getPlanById(id);
      const cuotasRes = await getCuotasByPlan(id);

      setPlan(planRes.data);

      if (Array.isArray(cuotasRes.data)) {
        setCuotas(cuotasRes.data);
      } else if (Array.isArray(cuotasRes.data.cuotas)) {
        setCuotas(cuotasRes.data.cuotas);
      } else {
        setCuotas([]);
      }

    } catch (error) {
      console.error("Error cargando datos:", error);
      setErrorMsg("No se pudieron cargar los datos del plan.");
    } finally {
      setLoading(false);
    }
  };

  const handlePagar = async (idCuota) => {
    try {
      await pagarCuota(idCuota);
      cargarDatos();
    } catch (error) {
      console.error("Error pagando cuota:", error);
      setErrorMsg("No se pudo pagar la cuota.");
    }
  };

  const formatearFecha = (fecha) => {
    if (!fecha) return "";
    return new Date(fecha).toLocaleDateString("es-AR");
  };

  if (loading) return <p>Cargando cuotas...</p>;

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "left" }}>
      
      <h1>Cuotas del Plan #{id}</h1>

      {plan && (
        <div style={{
          background: "#1b1b1b",
          padding: "15px",
          borderRadius: "8px",
          marginBottom: "20px",
          color: "#ddd"
        }}>
          <p><strong>Cliente:</strong> {plan.clientes.nombre} {plan.clientes.apellido}</p>
          <p><strong>Servicio:</strong> {plan.servicios.nombre}</p>
          <p><strong>Cantidad de cuotas:</strong> {plan.numero_cuotas}</p>
          <p><strong>Fecha inicio:</strong> {formatearFecha(plan.fecha_inicio)}</p>
        </div>
      )}

      {errorMsg && (
        <div style={{
          backgroundColor: "#ff4d4d",
          padding: "10px",
          borderRadius: "5px",
          marginBottom: "15px"
        }}>
          {errorMsg}
        </div>
      )}

      {cuotas.length === 0 ? (
        <p>No hay cuotas para este plan.</p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>N°</th>
              <th>Monto</th>
              <th>Vencimiento</th>
              <th>Estado</th>
              <th>Acción</th>
            </tr>
          </thead>

          <tbody>
            {cuotas.map((c) => (
              <tr key={c.id}>
                <td>{c.numero_cuota}</td>
                <td>${Number(c.monto)}</td>
                <td>{formatearFecha(c.fecha_vencimiento)}</td>

                <td>
                  <span
                    style={{
                      color: c.estado === "PAGADO" ? "lightgreen" : "#ffae42",
                      fontWeight: "bold"
                    }}
                  >
                    {c.estado}
                  </span>
                </td>

                <td>
                  {c.estado === "PENDIENTE" ? (
                    <button
                      onClick={() => handlePagar(c.id)}
                      className="btn btn-primary"
                    >
                      Pagar
                    </button>
                  ) : (
                    <span style={{ color: "green", fontWeight: "bold" }}>✔ Pagado</span>
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
