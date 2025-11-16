import React, { useState, useEffect } from "react";
import useCustomLibros from "../Hooks/useCustomLibros";
import {
  crearNuevoPrestamo,
  obtenerTodosLosPrestamos,
} from "../Hooks/CustomPrestamos";
import Navbar from "../Components/Common/Navbar";
import Swal from "sweetalert2";
import "../Styles/HomePage/Home.css";

const HomePage = () => {
  const { libros, loading, error } = useCustomLibros();
  const [prestamoData, setPrestamoData] = useState({
    alumno_id: null, // se puede traer del usuario logueado
    libro_id: null,
    fecha_prestamo: "",
    fecha_devolucion: "",
  });
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [prestamosAlumno, setPrestamosAlumno] = useState([]);
  const [loadingPrestamos, setLoadingPrestamos] = useState(false);

  const usuarioLogueado = JSON.parse(localStorage.getItem("user"));

  // Log para debugear
  console.log(
    "📝 HomePage - Usuario completo en localStorage:",
    usuarioLogueado
  );
  console.log(
    "📝 HomePage - Campos disponibles en usuario:",
    Object.keys(usuarioLogueado || {})
  );

  // Obtener alumno_id del usuario logueado
  const alumnoId = usuarioLogueado?.alumno_id || usuarioLogueado?.id || null;

  // Cargar préstamos del alumno al montar el componente
  useEffect(() => {
    if (alumnoId) {
      cargarPrestamosAlumno();
    }
  }, [alumnoId]);

  const cargarPrestamosAlumno = async () => {
    setLoadingPrestamos(true);
    try {
      const allPrestamos = await obtenerTodosLosPrestamos();
      console.log("📚 Todos los préstamos:", allPrestamos);

      // Filtrar por el alumno logueado
      const prestamosFiltrados = allPrestamos.filter(
        (p) => p.alumno_id === parseInt(alumnoId)
      );
      console.log("🔍 Préstamos del alumno", alumnoId, ":", prestamosFiltrados);

      setPrestamosAlumno(prestamosFiltrados);
    } catch (error) {
      console.error("❌ Error al cargar préstamos del alumno:", error);
    } finally {
      setLoadingPrestamos(false);
    }
  };

  const handleSolicitar = (libro_id) => {
    // Intentar obtener el alumno_id de diferentes formas
    const alumno_id = usuarioLogueado?.alumno_id || usuarioLogueado?.id || null;

    console.log("🎯 Intentando obtener alumno_id:");
    console.log("  - usuarioLogueado?.alumno_id:", usuarioLogueado?.alumno_id);
    console.log("  - usuarioLogueado?.id:", usuarioLogueado?.id);
    console.log("  - alumno_id final:", alumno_id);

    setPrestamoData({
      alumno_id: alumno_id,
      libro_id,
      fecha_prestamo: "",
      fecha_devolucion: "",
    });
    setMostrarFormulario(true);
  };

  const handleChange = (e) => {
    setPrestamoData({
      ...prestamoData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar que los campos obligatorios estén completos
    if (
      !prestamoData.alumno_id ||
      !prestamoData.libro_id ||
      !prestamoData.fecha_prestamo
    ) {
      console.error(
        "Validación fallida en HomePage. alumno_id:",
        prestamoData.alumno_id,
        "libro_id:",
        prestamoData.libro_id,
        "fecha_prestamo:",
        prestamoData.fecha_prestamo
      );
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Faltan datos obligatorios para crear el préstamo",
      });
      return;
    }

    try {
      // Preparar los datos con los tipos correctos
      const dataToSend = {
        alumno_id: parseInt(prestamoData.alumno_id),
        libro_id: parseInt(prestamoData.libro_id),
        fecha_prestamo: prestamoData.fecha_prestamo,
        estado: "prestado",
      };

      // Solo agregar fecha_devolucion si existe
      if (prestamoData.fecha_devolucion) {
        dataToSend.fecha_devolucion = prestamoData.fecha_devolucion;
      }

      await crearNuevoPrestamo(dataToSend);
      Swal.fire({
        icon: "success",
        title: "Préstamo solicitado",
        text: "Tu solicitud fue registrada correctamente",
      });
      setMostrarFormulario(false);
      // Recargar préstamos después de crear uno nuevo
      cargarPrestamosAlumno();
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: err.response?.data?.message || "No se pudo registrar el préstamo",
      });
    }
  };

  if (loading) return <p>Cargando libros...</p>;
  if (error) return <p>Error al cargar los libros</p>;

  return (
    <>
      <Navbar />
      <div className="container" style={{ marginTop: "80px" }}>
        {/* SECCIÓN DE MIS PRÉSTAMOS */}
        <div style={{ marginBottom: "50px" }}>
          <h2>Mis Préstamos</h2>
          {loadingPrestamos ? (
            <p>Cargando préstamos...</p>
          ) : prestamosAlumno.length === 0 ? (
            <p>No tienes préstamos registrados</p>
          ) : (
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Libro</th>
                    <th>Fecha Préstamo</th>
                    <th>Fecha Devolución</th>
                    <th>Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {prestamosAlumno.map((p) => (
                    <tr key={p.prestamo_id}>
                      <td>{p.prestamo_id}</td>
                      <td>
                        {p.libro_titulo || `ID: ${p.libro_id}`}
                        {p.libro_autor && (
                          <>
                            <br />
                            <small className="text-muted">
                              {p.libro_autor}
                            </small>
                          </>
                        )}
                      </td>
                      <td>{p.fecha_prestamo.slice(0, 10)}</td>
                      <td>
                        {p.fecha_devolucion
                          ? p.fecha_devolucion.slice(0, 10)
                          : "—"}
                      </td>
                      <td>
                        <span
                          className={`badge ${
                            p.estado === "prestado"
                              ? "bg-warning"
                              : "bg-success"
                          }`}
                        >
                          {p.estado}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* SECCIÓN DE LIBROS DISPONIBLES */}
        <hr />
        <h1>Libros disponibles</h1>
        <div className="libros-grid">
          {libros.map((libro) => (
            <div key={libro.libro_id} className="libro-card">
              <h3>{libro.titulo}</h3>
              <p>Autor: {libro.autor}</p>
              <p>Categoría: {libro.categoria}</p>
              <p>Ejemplares disponibles: {libro.ejemplares_disponibles}</p>
              <button onClick={() => handleSolicitar(libro.libro_id)}>
                Solicitar
              </button>
            </div>
          ))}
        </div>

        {mostrarFormulario && (
          <div className="form-prestamo">
            <h2>Solicitar préstamo</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Fecha de préstamo:
                <input
                  type="date"
                  name="fecha_prestamo"
                  value={prestamoData.fecha_prestamo}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Fecha de devolución:
                <input
                  type="date"
                  name="fecha_devolucion"
                  value={prestamoData.fecha_devolucion}
                  onChange={handleChange}
                />
              </label>
              <button type="submit">Confirmar préstamo</button>
              <button type="button" onClick={() => setMostrarFormulario(false)}>
                Cancelar
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default HomePage;
