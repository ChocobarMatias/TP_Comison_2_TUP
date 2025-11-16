import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../Services/Api.js";
import Button from "../Prestamos/Button.jsx";

const FiltroPrestamos = ({ onFilter }) => {
  const [alumnos, setAlumnos] = useState([]);
  const [libros, setLibros] = useState([]);

  const [filters, setFilters] = useState({
    alumno_id: "",
    libro_id: "",
    estado: "",
    fecha: "",
  });

  useEffect(() => {
    cargarAlumnos();
    cargarLibros();
  }, []);

  const cargarAlumnos = async () => {
    const { data } = await axios.get(`${BASE_URL}alumnos/`);
    setAlumnos(data);
  };

  const cargarLibros = async () => {
    const { data } = await axios.get(`${BASE_URL}libros/`);
    setLibros(data);
  };

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const aplicarFiltro = () => {
    onFilter(filters);
  };

  const limpiar = () => {
    const limpio = { alumno_id: "", libro_id: "", estado: "", fecha: "" };
    setFilters(limpio);
    onFilter(limpio);
  };

  return (
    <div className="card mb-3">
      <div className="card-body">

        <div className="row g-3">

          <div className="col-md-3">
            <label className="form-label">Alumno</label>
            <select
              name="alumno_id"
              className="form-select"
              value={filters.alumno_id}
              onChange={handleChange}
            >
              <option value="">Todos</option>
              {alumnos.map((a) => (
                <option key={a.alumno_id} value={a.alumno_id}>
                  {a.nombre}
                </option>
              ))}
            </select>
          </div>

          <div className="col-md-3">
            <label className="form-label">Libro</label>
            <select
              name="libro_id"
              className="form-select"
              value={filters.libro_id}
              onChange={handleChange}
            >
              <option value="">Todos</option>
              {libros.map((l) => (
                <option key={l.libro_id} value={l.libro_id}>
                  {l.titulo}
                </option>
              ))}
            </select>
          </div>

          <div className="col-md-2">
            <label className="form-label">Estado</label>
            <select
              name="estado"
              className="form-select"
              value={filters.estado}
              onChange={handleChange}
            >
              <option value="">Todos</option>
              <option value="prestado">Prestado</option>
              <option value="devuelto">Devuelto</option>
            </select>
          </div>

          <div className="col-md-2">
            <label className="form-label">Fecha préstamo</label>
            <input
              type="date"
              name="fecha"
              className="form-control"
              value={filters.fecha}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-2 d-flex align-items-end">
            <Button className="me-2" onClick={aplicarFiltro}>Filtrar</Button>
            <Button variant="secondary" onClick={limpiar}>Limpiar</Button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default FiltroPrestamos;