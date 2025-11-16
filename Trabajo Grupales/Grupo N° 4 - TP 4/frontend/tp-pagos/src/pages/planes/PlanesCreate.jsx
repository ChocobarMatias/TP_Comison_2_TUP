import { useEffect, useState } from "react";
import { createPlan } from "../../services/planesService";
import { clientesService } from "../../services/clienteService";
import { serviciosService } from "../../services/servicioService";
import { useNavigate } from "react-router-dom";

export default function PlanesCreate() {
  const navigate = useNavigate();

  const [clientes, setClientes] = useState([]);
  const [servicios, setServicios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  const [form, setForm] = useState({
    cliente_id: "",
    servicio_id: "",
    numero_cuotas: 1,
    fecha_inicio: "",
  });

  useEffect(() => {
    cargarData();
  }, []);

  const cargarData = async () => {
    try {
      const cli = await clientesService.getAll();
const srv = await serviciosService.getAll();

      setClientes(cli.data);
      setServicios(srv.data);
    } catch (error) {
      console.error("Error cargando datos:", error);
      setErrorMsg("No se pudieron cargar clientes o servicios.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.cliente_id || !form.servicio_id || !form.fecha_inicio) {
      setErrorMsg("Todos los campos son obligatorios.");
      return;
    }

    try {
      await createPlan(form);
      navigate("/planes");
    } catch (error) {
      console.error("Error creando el plan:", error);
      setErrorMsg("No se pudo crear el plan. Verifica los datos.");
    }
  };

  if (loading) return <p>Cargando datos...</p>;

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", textAlign: "left" }}>
      <h1>Nuevo Plan de Pago</h1>

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

      <form onSubmit={handleSubmit}>
        {/* Cliente */}
        <label>Cliente:</label>
        <select
          name="cliente_id"
          value={form.cliente_id}
          onChange={handleChange}
          style={{ width: "100%", padding: "8px", marginBottom: "15px" }}
        >
          <option value="">Seleccione</option>
          {clientes.map((c) => (
            <option key={c.id} value={c.id}>
              {c.nombre} {c.apellido}
            </option>
          ))}
        </select>

        {/* Servicio */}
        <label>Servicio:</label>
        <select
          name="servicio_id"
          value={form.servicio_id}
          onChange={handleChange}
          style={{ width: "100%", padding: "8px", marginBottom: "15px" }}
        >
          <option value="">Seleccione</option>
          {servicios.map((s) => (
            <option key={s.id} value={s.id}>
              {s.nombre}
            </option>
          ))}
        </select>

        {/* Número de cuotas */}
        <label>Número de cuotas:</label>
        <select
          name="numero_cuotas"
          value={form.numero_cuotas}
          onChange={handleChange}
          style={{ width: "100%", padding: "8px", marginBottom: "15px" }}
        >
          <option value="1">1 cuota</option>
          <option value="3">3 cuotas</option>
          <option value="6">6 cuotas</option>
        </select>

        {/* Fecha inicial */}
        <label>Fecha inicio:</label>
        <input
          type="date"
          name="fecha_inicio"
          value={form.fecha_inicio}
          onChange={handleChange}
          style={{ width: "100%", padding: "8px", marginBottom: "15px" }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#646cff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Crear Plan
        </button>
      </form>
    </div>
  );
}
