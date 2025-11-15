import React, { useEffect, useState } from "react";
import { obtenerTodosLosPrestamos, eliminarPrestamo } from "../../Hooks/CustomPrestamos.js";
import "../../Styles/Prestamos/Prestamos.css";

// Componentes importados
import FiltroPrestamos from "./FiltroPrestamo.jsx";
import CrearPrestamoModal from "./CrearPrestamoModal.jsx";
import CambiarEstadoPrestamo from "./CambiarEstadoPrestamo.jsx";
import DetallesPrestamoModal from "./DetallesPrestamoModal.jsx";
import EliminarPrestamoModal from "./EliminarPrestamoModal.jsx";
import Button from "./Button.jsx";

const Prestamos = () => {
  const [prestamos, setPrestamos] = useState([]);
  const [prestamoSeleccionado, setPrestamoSeleccionado] = useState(null);
  const [showDetalles, setShowDetalles] = useState(false);

  // Estados para modales
  const [showCrear, setShowCrear] = useState(false);
  const [showEstado, setShowEstado] = useState(false);
  const [showEliminar, setShowEliminar] = useState(false);

  // Filtros
  const [filters, setFilters] = useState({
    alumno_id: "",
    libro_id: "",
    estado: "",
    fecha: "",
  });

  // Cargar préstamos del backend
  const cargarPrestamos = async () => {
    try {
      const data = await obtenerTodosLosPrestamos();
      setPrestamos(data);
    } catch (error) {
      console.error("Error al cargar préstamos:", error);
    }
  };

  useEffect(() => {
    cargarPrestamos();
  }, []);

  // Filtrar en frontend
  const prestamosFiltrados = prestamos.filter((p) => {
    return (
      (filters.alumno_id ? p.alumno_id == filters.alumno_id : true) &&
      (filters.libro_id ? p.libro_id == filters.libro_id : true) &&
      (filters.estado ? p.estado === filters.estado : true) &&
      (filters.fecha ? p.fecha_prestamo.slice(0, 10) === filters.fecha : true)
    );
  });

  return (
    <div className="container mt-4">

      {/* TÍTULO */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Gestión de Préstamos</h2>
        <Button onClick={() => setShowCrear(true)}>Nuevo Préstamo</Button>
      </div>

      {/* FILTRO */}
      <FiltroPrestamos onFilter={setFilters} />

      {/* TABLA */}
      <div className="card">
        <div className="card-body table-responsive">

          <table className="table table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Alumno</th>
                <th>Libro</th>
                <th>Fecha Préstamo</th>
                <th>Fecha Devolución</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>

            <tbody>
              {prestamosFiltrados.length === 0 && (
                <tr>
                  <td colSpan="7" className="text-center">
                    No hay resultados.
                  </td>
                </tr>
              )}

              {prestamosFiltrados.map((p) => (
                <tr key={p.prestamo_id}>
                  <td>{p.prestamo_id}</td>
                  <td>
                    {p.alumno_nombre || `ID: ${p.alumno_id}`}
                    {p.alumno_dni && <><br/><small className="text-muted">DNI: {p.alumno_dni}</small></>}
                  </td>
                  <td>
                    {p.libro_titulo || `ID: ${p.libro_id}`}
                    {p.libro_autor && <><br/><small className="text-muted">{p.libro_autor}</small></>}
                  </td>
                  <td>{p.fecha_prestamo.slice(0, 10)}</td>
                  <td>{p.fecha_devolucion ? p.fecha_devolucion.slice(0, 10) : "—"}</td>

                  <td>
                    <span
                      className={`badge ${
                        p.estado === "prestado" ? "bg-warning" : "bg-success"
                      }`}
                    >
                      {p.estado}
                    </span>
                  </td>

                  <td>
                    <Button
                      size="sm"
                      variant="info"
                      className="me-1"
                      onClick={() => {
                        setPrestamoSeleccionado(p);
                        setShowEstado(true);
                      }}
                    >
                      Estado
                    </Button>

                    <Button
                      size="sm"
                      variant="secondary"
                      className="me-1"
                      onClick={() => {
                        setPrestamoSeleccionado(p);
                        setShowDetalles(true);
                      }}
                    >
                      Ver detalles
                    </Button>
                    <Button
                      size="sm"
                      variant="danger"
                      onClick={() => {
                        setPrestamoSeleccionado(p);
                        setShowEliminar(true);
                      }}
                    >
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>

        </div>
      </div>

      {/* MODALES */}
      <CrearPrestamoModal
        show={showCrear}
        onClose={() => setShowCrear(false)}
        onSuccess={cargarPrestamos}
      />

      <CambiarEstadoPrestamo
        show={showEstado}
        onClose={() => setShowEstado(false)}
        prestamo={prestamoSeleccionado}
        onSuccess={cargarPrestamos}
      />

        <DetallesPrestamoModal
          show={showDetalles}
          onClose={() => setShowDetalles(false)}
          prestamo={prestamoSeleccionado}
        />
      <EliminarPrestamoModal
        show={showEliminar}
        onClose={() => setShowEliminar(false)}
        prestamo={prestamoSeleccionado}
        onConfirm={async () => {
          try {
            await eliminarPrestamo(prestamoSeleccionado.prestamo_id);
            setShowEliminar(false);
            cargarPrestamos();
          } catch (error) {
            console.error("Error eliminando préstamo:", error);
          }
        }}
      />

    </div>
  );
};

export default Prestamos;