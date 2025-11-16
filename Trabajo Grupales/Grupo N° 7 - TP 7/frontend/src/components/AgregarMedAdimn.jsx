import React, { useState, useEffect } from "react";
import { crearMedico, getMedicosPorCategoria, eliminarMedico } from "../services/medicosServices";
import CatMedicos from "./CatMedicos";
import '../index.css';

const AgregarMedAdmin = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [idCategoria, setIdCategoria] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [medicos, setMedicos] = useState([]);

  // ===============================
  // Traer médicos al cambiar categoría
  // ===============================
  useEffect(() => {
    const fetchMedicos = async () => {
      if (idCategoria) {
        const lista = await getMedicosPorCategoria(idCategoria);
        setMedicos(lista);
      }
    };
    fetchMedicos();
  }, [idCategoria]);

  // ===============================
  // Crear nuevo médico
  // ===============================
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nombre || !apellido || !idCategoria) {
      setMensaje("Nombre, Apellido y Categoría son obligatorios");
      return;
    }

    const data = {
      NombreMedico: nombre,
      ApellidoMedico: apellido,
      TelefonoMedico: telefono || "0000-000000",
      DireccionMedico: direccion || "Sin Dirección",
      idCatMedico: Number(idCategoria),
      idUsuario: null
    };

    const nuevoMedico = await crearMedico(data);

    if (nuevoMedico) {
      setMensaje(`Médico ${nuevoMedico.NombreMedico} creado correctamente`);
      // Limpiar formulario
      setNombre("");
      setApellido("");
      setTelefono("");
      setDireccion("");
      // Actualizar lista de médicos
      setMedicos([...medicos, nuevoMedico]);
    } else {
      setMensaje("Error al crear médico");
    }
  };

  // ===============================
  // Eliminar médico
  // ===============================
  const handleEliminar = async (id) => {
    const confirm = window.confirm("¿Estás seguro que deseas eliminar este médico?");
    if (!confirm) return;

    const resultado = await eliminarMedico(id);
    if (resultado) {
      setMensaje(resultado.message);
      // Actualizar lista de médicos
      setMedicos(medicos.filter(m => m.idMedico !== id));
    } else {
      setMensaje("Error al eliminar médico");
    }
  };

  return (
    <div className="agregar-medico">
      <h3 className="">Agregar Médico</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="text"
          placeholder="Apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
        <input
          type="text"
          placeholder="Teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
        <input
          type="text"
          placeholder="Dirección"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
        />

        {/* Select de categoría */}
        <CatMedicos onSelectCategoria={setIdCategoria} />

        <button type="submit" className="btn-crear">Crear</button>
      </form>

      {mensaje && <p>{mensaje}</p>}

      {/* ===============================
          Lista de médicos de la categoría
          =============================== */}
      {medicos.length > 0 && (
        <div>
          <h4>Médicos de esta categoría:</h4>
          <ul>
            {medicos.map(medico => (
              <li key={medico.idMedico}>
                {medico.NombreMedico} {medico.ApellidoMedico} - {medico.TelefonoMedico}
                <button  className="btn-delete"  onClick={() => handleEliminar(medico.idMedico)} style={{ marginLeft: "10px" }}>
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AgregarMedAdmin;
