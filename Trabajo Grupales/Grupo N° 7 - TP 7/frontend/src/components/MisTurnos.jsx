import { useEffect, useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import api from "../services/api";
import { eliminarTurno } from "../services/turnosService";
import "../styles/Turnos.css"; // Importar estilos

function MisTurnos() {
  const [turnos, setTurnos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mensaje, setMensaje] = useState('');
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    const fetchTurnos = async () => {
      try {
        const res = await api.get(`/turnos/por-paciente/${user.idPaciente}`);
        setTurnos(res.data);
      } catch (err) {
        console.error("Error al traer turnos:", err);
      } finally {
        setLoading(false);
      }
    };

    if (user?.idPaciente) fetchTurnos();
  }, [user]);

  const handleEliminar = async (idTurno) => {
    const confirmacion = window.confirm('Estas a punto de eliminar este turno!');
    if(!confirmacion) return;

    const resultado = await eliminarTurno(idTurno);
    if (resultado){
      setMensaje(resultado.message);
      setTurnos(turnos.filter(e => e.idTurno !== idTurno));
    } else{
      setMensaje('Error al cancelar turno');
    }
  }

  if (loading) return <p style={{textAlign: 'center', marginTop: '50px', color:'#bbb'}}>Cargando turnos...</p>;

  return (
    <div className="mis-turnos-container">
      <h2>Mis Turnos</h2>

      {turnos.length === 0 ? (
        <p style={{textAlign:'center', marginTop:'20px', color:'#bbb'}}>No tenés turnos registrados</p>
      ) : (
        <ul style={{padding:0}}>
          {turnos.map((turno) => (
            <li key={turno.idTurno} className="turno-card">
              <div className="turno-info">
                <p><strong>Fecha:</strong> {turno.FechaRequeridaTurno.slice(0, 10)}</p>
                <p><strong>Hora:</strong> {turno.HorarioRequeridoTurno.slice(11, 16)}</p>
                <p>
                  <strong>Estado:</strong> 
                  <span className={`estado ${turno.EstadoTurno.toLowerCase()}`}>
                    {turno.EstadoTurno}
                  </span>
                </p>
              </div>
              <button className="cancel-turno-btn" onClick={() => handleEliminar(turno.idTurno)}>Cancelar</button>
            </li>
          ))}
        </ul>
      )}

      {mensaje && <p style={{textAlign:'center', marginTop:'15px', color:'#ff9800', fontWeight:'bold'}}>{mensaje}</p>}
    </div>
  );
}

export default MisTurnos;
