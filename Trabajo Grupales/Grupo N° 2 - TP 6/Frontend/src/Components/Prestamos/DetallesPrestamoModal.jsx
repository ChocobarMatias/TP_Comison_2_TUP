import React, { useEffect, useState } from "react";
import api from "../../Services/Api";

const DetallePrestamoModal = ({ prestamo, show, onClose }) => {
  const [alumno, setAlumno] = useState(null);
  const [libro, setLibro] = useState(null);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    if (!prestamo || !show) return;

    const cargarDatos = async () => {
      try {
        setLoading(true);
        const [alumnoRes, libroRes] = await Promise.all([
          api.get(`/alumnos/${prestamo.alumno_id}`),
          api.get(`/libros/${prestamo.libro_id}`)
        ]);
        setAlumno(alumnoRes.data);
        setLibro(libroRes.data);
      } catch (error) {
        console.error("Error cargando datos del préstamo:", error);
      } finally {
        setLoading(false);
      }
    };

    cargarDatos();
  }, [prestamo, show]);

  if (!show || !prestamo) return null;

  return (
    <div className="modal show d-block" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">

          {/* HEADER */}
          <div className="modal-header">
            <h5 className="modal-title">Detalle del Préstamo</h5>
            <button className="btn-close" onClick={onClose}></button>
          </div>

          {/* BODY */}
          <div className="modal-body">

            {loading && <p>Cargando información...</p>}

            {!loading && (
              <>
                <h6>Información del Préstamo</h6>
                <ul>
                  <li><strong>ID:</strong> {prestamo.prestamo_id}</li>
                  <li><strong>Fecha Préstamo:</strong> {prestamo.fecha_prestamo}</li>
                  <li><strong>Fecha Devolución:</strong> {prestamo.fecha_devolucion || "No devuelto"}</li>
                  <li><strong>Estado:</strong> {prestamo.estado}</li>
                </ul>

                <hr />

                <h6>Información del Alumno</h6>
                {alumno ? (
                  <ul>
                    <li><strong>Nombre:</strong> {alumno.nombre}</li>
                    <li><strong>Curso:</strong> {alumno.curso}</li>
                    <li><strong>DNI:</strong> {alumno.dni}</li>
                  </ul>
                ) : (
                  <p>No se pudo cargar la información del alumno.</p>
                )}

                <hr />

                <h6>Información del Libro</h6>
                {libro ? (
                  <ul>
                    <li><strong>Título:</strong> {libro.titulo}</li>
                    <li><strong>Autor:</strong> {libro.autor}</li>
                    <li><strong>Categoría:</strong> {libro.categoria}</li>
                    <li><strong>Ejemplares disponibles:</strong> {libro.ejemplares_disponibles}</li>
                  </ul>
                ) : (
                  <p>No se pudo cargar la información del libro.</p>
                )}
              </>
            )}
          </div>

          {/* FOOTER */}
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>Cerrar</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DetallePrestamoModal;