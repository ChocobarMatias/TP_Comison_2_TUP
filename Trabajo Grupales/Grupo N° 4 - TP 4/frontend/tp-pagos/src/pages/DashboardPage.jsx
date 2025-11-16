import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import "../styles/DashboardPage.css";

export default function DashboardPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchDashboard = async () => {
    try {
      const res = await api.get("/dashboard/resumen");
      setData(res.data);
    } catch (err) {
      console.error("Error cargando dashboard:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  if (loading) return <p>Cargando dashboard...</p>;

  return (
    <div className="dash-container">

      <h1 className="dash-title">Panel de Control</h1>
      <p className="dash-subtitle">Resumen general del sistema</p>

      {/* 📌 CARDS DEL RESUMEN */}
      <div className="stats-grid">
        <Card title="Clientes" value={data.clientes} />
        <Card title="Servicios" value={data.servicios} />
        <Card title="Planes de pago" value={data.planes} />
        <Card title="Cuotas Pagadas" value={data.cuotasPagadas} />
        <Card title="Cuotas Pendientes" value={data.cuotasPendientes} />
        <Card title="Total Recaudado" value={`$${data.recaudado}`} />
      </div>

      <h2 className="dash-section-title">Gestión del Sistema</h2>

      {/* 📌 CARDS DE NAVEGACIÓN */}
      <div className="menu-grid">

        <Link to="/clientes" className="menu-card">
          <h3>Clientes</h3>
          <p>Administrar clientes</p>
        </Link>

        <Link to="/servicios" className="menu-card">
          <h3>Servicios</h3>
          <p>Gestionar servicios ofrecidos</p>
        </Link>

        <Link to="/planes" className="menu-card">
          <h3>Planes de Pago</h3>
          <p>Crear y revisar planes</p>
        </Link>

        <Link to="/cuotas" className="menu-card">
          <h3>Cuotas</h3>
          <p>Revisar estados de pago</p>
        </Link>

      </div>

    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="stat-card">
      <h3>{title}</h3>
      <p className="stat-value">{value}</p>
    </div>
  );
}