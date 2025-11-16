import { useEffect, useState } from "react";
import { getCuotasByPlan, pagarCuota } from "../../services/planesService";
import { useParams } from "react-router-dom";

export default function PlanesCuotas() {
  const { id } = useParams();

  const [cuotas, setCuotas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    cargarCuotas();
  }, [id]);

  const cargarCuotas = async () => {
    try {
      const { data } = await getCuotasByPlan(id);

      // si backend devuelve { cuotas: [...] }
      if (Array.isArray(data)) {
        setCuotas(data);
      } else if (Array.isArray(data.cuotas)) {
        setCuotas(data.cuotas);
      } else {
        setCuotas([]);
      }

    } catch (error) {
      console.error("Error cargando cuotas:", error);
      setErrorMsg("No se pudieron cargar las cuotas.");
    } finally {
      setLoading(false);
    }
  };

  const handlePagar = async (idCuota) => {
    try {
      await pagarCuota(idCuota);
      cargarCuotas();
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
    <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "left" }}>
      <h1>Cuotas del Plan #{id}</h1>

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
                <td>{c.estado}</td>

                <td>
                  {c.estado === "PENDIENTE" ? (
                    <button
                      onClick={() => handlePagar(c.id)}
                      style={{
                        padding: "6px 12px",
                        backgroundColor: "#535bf2",
                        color: "white",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer"
                      }}
                    >
                      Pagar
                    </button>
                  ) : (
                    <span style={{ color: "green" }}>✔ Pagado</span>
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
