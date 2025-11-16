import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

function MisActividades() {
  const [reservas, setReservas] = useState([]);
  const [actividadesMap, setActividadesMap] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function decodeToken(token) {
    if (!token) return null;
    try {
      const part = token.split('.')[1];
      return JSON.parse(atob(part));
    } catch (e) {
      return null;
    }
  }

  function formatDate(dateStr) {
    if (!dateStr) return 'Sin fecha';
    // dateStr esperado en formato YYYY-MM-DD
    const parts = String(dateStr).split('-');
    if (parts.length === 3) {
      // parts[2] puede incluir tiempo (p. ej. "20T00:00:00.000Z"), por eso se elimina la parte de tiempo
      const dayPart = String(parts[2]).split('T')[0];
      return `${dayPart}/${parts[1]}/${parts[0]}`;
    }
    try {
      return new Date(dateStr).toLocaleDateString();
    } catch (e) {
      return dateStr;
    }
  }

  useEffect(() => {
    let mounted = true;
    async function load() {
      setLoading(true);
      setError('');

      const token = localStorage.getItem('tokenSocio');
      if (!token) {
        setError('Debes iniciar sesión como socio para ver tus actividades.');
        setLoading(false);
        return;
      }

      const payload = decodeToken(token);
      const socioId = payload?.id;
      if (!socioId) {
        setError('Token inválido. Iniciá sesión de nuevo.');
        setLoading(false);
        return;
      }

      try {
        const resReservas = await fetch('http://localhost:8080/api/reservas');
        if (!resReservas.ok) throw new Error('Error al obtener reservas');
        const allReservas = await resReservas.json();

        const my = allReservas.filter(r => Number(r.socio_id) === Number(socioId));

        let map = {};

        if (my.length > 0) {
          const resActividades = await fetch('http://localhost:8080/api/actividades');
          if (resActividades.ok) {
            const ad = await resActividades.json();
            const actividades = ad?.consulta || ad || [];
            map = actividades.reduce((acc, act) => { acc[act.id] = act; return acc; }, {});
          }
        }

        if (mounted) {
          setActividadesMap(map);
          setReservas(my);
          setLoading(false);
        }
      } catch (err) {
        if (mounted) {
          setError('Error al cargar tus actividades');
          setLoading(false);
        }
      }
    }

    load();
    return () => { mounted = false; };
  }, []);

  return (
    <>
    <NavBar />
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold">Mis Actividades</h1>
          <button onClick={() => navigate('/actividades')} className="text-sm text-blue-600 hover:underline">Ver todas</button>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          {loading && <div className="text-gray-500">Cargando...</div>}
          {error && <div className="text-red-600">{error}</div>}

          {!loading && !error && reservas.length === 0 && (
            <div className="text-gray-600">No tenés actividades reservadas.</div>
          )}

          <ul className="space-y-3">
            {reservas.map((r) => (
              <li key={r.id} className="flex items-center justify-between p-3 border rounded hover:shadow">
                <div>
                  <div className="font-semibold text-gray-800">{actividadesMap[r.actividad_id]?.nombre || `Actividad ${r.actividad_id}`}</div>
                  <div className="text-sm text-gray-500">{formatDate(r.fecha)}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </>
  );
}

export default MisActividades;
