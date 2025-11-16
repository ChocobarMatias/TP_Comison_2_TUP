import { useEffect, useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import api from "../services/api";
import { eliminarTurno } from "../services/turnosService";

function MisTurnos() {
  const [turnos, setTurnos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mensaje, setMensaje] = useState('')
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

  if (loading) return <p>Cargando turnos...</p>;



    const handleEliminar = async (idTurno) => {
      const confirm = window.confirm('Estas a punto de elimnar este turno!')
      if(!confirm) return

      const resultado = await eliminarTurno(idTurno)
      if (resultado){
        setMensaje(resultado.message)
        setTurnos(turnos.filter(e => e.idTurno !== idTurno))

      } else{
        setMensaje('Error al cancelar turno')
      }
    }

  return (
    <div>
      <h2>Mis Turnos</h2>

      {turnos.length === 0 ? (
        <p>No tenés turnos registrados</p>
      ) : (
        <ul>
          {turnos.map((turno) => (
            <li key={turno.idTurno}>
              <strong>Fecha:</strong> {turno.FechaRequeridaTurno.slice(0, 10)} <br />
              <strong>Hora:</strong> {turno.HorarioRequeridoTurno.slice(11, 16)} <br />
              <strong>Estado:</strong> {turno.EstadoTurno}
              <button onClick={()=>handleEliminar(turno.idTurno)}>Cancelar turno</button>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MisTurnos;
