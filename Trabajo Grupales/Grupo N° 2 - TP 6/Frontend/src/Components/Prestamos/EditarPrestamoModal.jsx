import React, { useState, useEffect } from "react";
import Button from "../Prestamos/Button.jsx";
import { actualizarPrestamo } from "../../Hooks/CustomPrestamos.js";
import axios from "axios";
import { BASE_URL } from "../../Services/Api.js";

const EditarPrestamoModal = ({ show, onClose, prestamo, onSuccess }) => {
  const [alumnos, setAlumnos] = useState([]);
  const [libros, setLibros] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    alumno_id: "",
    libro_id: "",
    fecha_prestamo: "",
    fecha_devolucion: "",
    estado: "",
  });

  useEffect(() => {
    if (show && prestamo) {
      cargarAlumnos();
      cargarLibros();
      // Cargar datos del préstamo en el formulario
      setForm({
        alumno_id: prestamo.alumno_id,
        libro_id: prestamo.libro_id,
        fecha_prestamo: prestamo.fecha_prestamo
          ? prestamo.fecha_prestamo.slice(0, 10)
          : "",
        fecha_devolucion: prestamo.fecha_devolucion
          ? prestamo.fecha_devolucion.slice(0, 10)
          : "",
        estado: prestamo.estado,
      });
      setError("");
    }
  }, [show, prestamo]);

  const cargarAlumnos = async () => {
    const { data } = await axios.get(`${BASE_URL}alumnos/`);
    setAlumnos(data);
  };

  const cargarLibros = async () => {
    const { data } = await axios.get(`${BASE_URL}libros/`);
    setLibros(data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setError("");

    // Validaciones
    if (!form.alumno_id || !form.libro_id || !form.fecha_prestamo) {
      setError("Los campos alumno, libro y fecha de préstamo son obligatorios");
      return;
    }

    setLoading(true);
    try {
      await actualizarPrestamo(prestamo.prestamo_id, {
        alumno_id: parseInt(form.alumno_id),
        libro_id: parseInt(form.libro_id),
        fecha_prestamo: form.fecha_prestamo,
        fecha_devolucion: form.fecha_devolucion || null,
        estado: form.estado,
      });
      onSuccess();
      onClose();
    } catch (error) {
      setError(
        error.response?.data?.message || "Error al actualizar el préstamo"
      );
    } finally {
      setLoading(false);
    }
  };

  if (!show || !prestamo) return null;

  return (
    <div className="modal fade show d-block" role="dialog">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Editar Préstamo</h5>
            <button className="btn-close" onClick={onClose}></button>
          </div>

          <div className="modal-body">
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}

            <div className="mb-3">
              <label className="form-label">Alumno</label>
              <select
                name="alumno_id"
                className="form-select"
                value={form.alumno_id}
                onChange={handleChange}
              >
                <option value="">Seleccione un alumno</option>
                {alumnos.map((a) => (
                  <option key={a.alumno_id} value={a.alumno_id}>
                    {a.nombre} (DNI: {a.dni})
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Libro</label>
              <select
                name="libro_id"
                className="form-select"
                value={form.libro_id}
                onChange={handleChange}
              >
                <option value="">Seleccione un libro</option>
                {libros.map((l) => (
                  <option key={l.libro_id} value={l.libro_id}>
                    {l.titulo} — Ejemplares: {l.ejemplares_disponibles}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Fecha del préstamo</label>
              <input
                type="date"
                name="fecha_prestamo"
                className="form-control"
                value={form.fecha_prestamo}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Estado</label>
              <select
                name="estado"
                className="form-select"
                value={form.estado}
                onChange={handleChange}
              >
                <option value="prestado">Prestado</option>
                <option value="devuelto">Devuelto</option>
              </select>
            </div>

            {form.estado === "devuelto" && (
              <div className="mb-3">
                <label className="form-label">Fecha de devolución</label>
                <input
                  type="date"
                  name="fecha_devolucion"
                  className="form-control"
                  value={form.fecha_devolucion}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>

          <div className="modal-footer">
            <Button variant="secondary" onClick={onClose} disabled={loading}>
              Cancelar
            </Button>
            <Button onClick={handleSubmit} disabled={loading}>
              {loading ? "Actualizando..." : "Actualizar Préstamo"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditarPrestamoModal;
