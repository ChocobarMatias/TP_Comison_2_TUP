import React, { useState, useEffect } from "react";
import Button from "../Prestamos/Button.jsx";
import { crearNuevoPrestamo } from "../../Hooks/CustomPrestamos.js";
import axios from "axios";
import { BASE_URL } from "../../Services/Api.js";

const CrearPrestamoModal = ({ show, onClose, onSuccess }) => {
  const [alumnos, setAlumnos] = useState([]);
  const [libros, setLibros] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    alumno_id: "",
    libro_id: "",
    fecha_prestamo: "",
  });

  useEffect(() => {
    if (show) {
      cargarAlumnos();
      cargarLibros();
      // Resetear formulario y errores
      setForm({ alumno_id: "", libro_id: "", fecha_prestamo: "" });
      setError("");
    }
  }, [show]);

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
      setError("Todos los campos son obligatorios");
      return;
    }

    setLoading(true);
    try {
      await crearNuevoPrestamo({
        ...form,
        estado: "prestado"
      });
      setForm({ alumno_id: "", libro_id: "", fecha_prestamo: "" });
      onSuccess();
      onClose();
    } catch (error) {
      setError(error.response?.data?.message || "Error al crear el préstamo");
    } finally {
      setLoading(false);
    }
  };

  if (!show) return null;

  return (
    <div className="modal fade show d-block" role="dialog">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title">Crear Nuevo Préstamo</h5>
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
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="modal-footer">
            <Button variant="secondary" onClick={onClose} disabled={loading}>
              Cancelar
            </Button>
            <Button onClick={handleSubmit} disabled={loading}>
              {loading ? "Creando..." : "Crear Préstamo"}
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CrearPrestamoModal;