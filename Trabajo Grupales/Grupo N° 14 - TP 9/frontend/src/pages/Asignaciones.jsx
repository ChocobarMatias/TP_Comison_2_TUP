import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Asignaciones.css";

const API = "http://localhost:3000/api/asignaciones"; // cambiá si usan otro puerto

export default function Asignaciones() {
  const navigate = useNavigate();
  const [asignaciones, setAsignaciones] = useState([]);
  const [socioIdBuscar, setSocioIdBuscar] = useState("");
  const [deportesSocio, setDeportesSocio] = useState([]);

  // para asignar
  const [socioId, setSocioId] = useState("");
  const [deporteId, setDeporteId] = useState("");

  const token = localStorage.getItem("token"); // porque tienen verificarToken

  const axiosConfig = {
    headers: { Authorization: `Bearer ${token}` }
  };

  const getAsignaciones = async () => {
    const res = await axios.get(API, axiosConfig);
    setAsignaciones(res.data);
  };

  const buscarDeportesDeSocio = async () => {
    const res = await axios.get(`${API}/socio/${socioIdBuscar}`, axiosConfig);
    setDeportesSocio(res.data);
  };

  const asignar = async () => {
    await axios.post(API, { socio_id: socioId, deporte_id: deporteId }, axiosConfig);
    getAsignaciones();
  };

  const desasignar = async () => {
    await axios.delete(API, { data: { socio_id: socioId, deporte_id: deporteId }, ...axiosConfig });
    getAsignaciones();
  };

  useEffect(() => {
    getAsignaciones();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="asignaciones-container">
      <div className="asignaciones-header">
        <h1>🔗 Asignaciones Socios - Deportes</h1>
        <button onClick={() => navigate("/dashboard")} className="back-button">
          ← Volver al Dashboard
        </button>
      </div>

      <div className="asignaciones-content">
        {/* Listado general */}
        <div className="asignaciones-card">
          <h2>📋 Todas las Asignaciones</h2>
          {asignaciones.length > 0 ? (
            <div className="table-wrapper">
              <table className="asignaciones-table">
                <thead>
                  <tr>
                    <th>Socio</th>
                    <th>DNI</th>
                    <th>Deporte</th>
                    <th>Cuota Mensual</th>
                  </tr>
                </thead>
                <tbody>
                  {asignaciones.map(a => (
                    <tr key={a.id}>
                      <td>{a.socio_nombre}</td>
                      <td>{a.dni}</td>
                      <td>{a.deporte_nombre}</td>
                      <td>${a.cuota_mensual}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="empty-message">No hay asignaciones registradas</p>
          )}
        </div>

        {/* deportes de un socio */}
        <div className="asignaciones-card">
          <h2>🔍 Buscar Deportes de un Socio</h2>
          <div className="search-section">
            <div className="search-controls">
              <input
                className="search-input"
                placeholder="Ingresa el ID del socio"
                value={socioIdBuscar}
                onChange={e => setSocioIdBuscar(e.target.value)}
              />
              <button onClick={buscarDeportesDeSocio} className="search-button">
                Buscar
              </button>
            </div>

            {deportesSocio.length > 0 && (
              <ul className="deportes-list">
                {deportesSocio.map(d => (
                  <li key={d.id}>
                    <strong>{d.nombre}</strong> - ${d.cuota_mensual}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* asignar o desasignar */}
        <div className="asignaciones-card">
          <h2>⚙️ Asignar / Desasignar Deportes</h2>
          <div className="action-section">
            <div className="action-controls">
              <input
                className="action-input"
                placeholder="ID del Socio"
                value={socioId}
                onChange={e => setSocioId(e.target.value)}
              />
              <input
                className="action-input"
                placeholder="ID del Deporte"
                value={deporteId}
                onChange={e => setDeporteId(e.target.value)}
              />
              <div className="action-buttons">
                <button onClick={asignar} className="assign-button">
                  ✓ Asignar
                </button>
                <button onClick={desasignar} className="unassign-button">
                  ✗ Desasignar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}