import React, { useState } from "react";
import useCustomLibros from "../Hooks/useCustomLibros";
import { crearNuevoPrestamo } from "../Hooks/CustomPrestamos";
import Navbar from "../Components/Common/Navbar";
import Swal from "sweetalert2";
import "../Styles/HomePage/Home.css";

const HomePage = () => {
  const { libros, loading, error } = useCustomLibros();
  const [prestamoData, setPrestamoData] = useState({
    alumno_id: null, // se puede traer del usuario logueado
    libro_id: null,
    fecha_prestamo: "",
    fecha_devolucion: ""
  });
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const usuarioLogueado = JSON.parse(localStorage.getItem("user"));

  const handleSolicitar = (libro_id) => {
    setPrestamoData({
      alumno_id: usuarioLogueado?.alumno_id || null,
      libro_id,
      fecha_prestamo: "",
      fecha_devolucion: ""
    });
    setMostrarFormulario(true);
  };

  const handleChange = (e) => {
    setPrestamoData({
      ...prestamoData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await crearNuevoPrestamo(prestamoData);
      Swal.fire({
        icon: "success",
        title: "Préstamo solicitado",
        text: "Tu solicitud fue registrada correctamente"
      });
      setMostrarFormulario(false);
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: err.response?.data?.message || "No se pudo registrar el préstamo"
      });
    }
  };

  if (loading) return <p>Cargando libros...</p>;
  if (error) return <p>Error al cargar los libros</p>;

  return (
    <>
      <Navbar />
      <div className="container" style={{ marginTop: "80px" }}>
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
                  required
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
