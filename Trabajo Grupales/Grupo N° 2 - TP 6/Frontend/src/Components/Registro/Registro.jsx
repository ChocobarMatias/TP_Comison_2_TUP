import React from 'react';
import useCustomRegister from '../../Hooks/UseCustomRegister';
import { useNavigate } from 'react-router-dom'; 
import Swal from 'sweetalert2'; 
import "../../Styles/Registro/Registro.css";

const Registro = () => {
  const navigate = useNavigate(); 
  const {
    usuario,
    setUsuario,
    password,
    setPassword,
    email,
    setEmail,
    nombreAlumno,
    setNombreAlumno,
    curso,
    setCurso,
    dni,
    setDni,
    loading,
    mensaje,
    error,
    registrarUsuario
  } = useCustomRegister();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resultado = await registrarUsuario();

    
    if (resultado.success) {
      Swal.fire({
        icon: 'success',
        title: 'Registro exitoso',
        text: 'Tu cuenta ha sido creada correctamente',
        confirmButtonText: 'Ir al login'
      }).then(() => {
        navigate('/login'); 
      });
    }
  };

  return (
    <div className="registro-container d-flex align-items-center justify-content-center">
      <div className="card shadow-sm registro-card">
        <div className="card-body">
          <h1 className="h4 mb-4 text-center">Registro</h1>

          <form onSubmit={handleSubmit} noValidate>
            {/* Nombre de usuario */}
            <div className="mb-3">
              <label htmlFor="usuario" className="form-label">Nombre de usuario</label>
              <input
                type="text"
                id="usuario"
                className="form-control"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                maxLength={50}
                required
              />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Contraseña */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <input
                type="password"
                id="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
              />
            </div>

            {/* Nombre completo */}
            <div className="mb-3">
              <label htmlFor="nombreAlumno" className="form-label">Nombre completo</label>
              <input
                type="text"
                id="nombreAlumno"
                className="form-control"
                value={nombreAlumno}
                onChange={(e) => setNombreAlumno(e.target.value)}
                required
              />
            </div>

            {/* Curso */}
            <div className="mb-3">
              <label htmlFor="curso" className="form-label">Curso</label>
              <input
                type="text"
                id="curso"
                className="form-control"
                value={curso}
                onChange={(e) => setCurso(e.target.value)}
                required
              />
            </div>

            {/* DNI */}
            <div className="mb-3">
              <label htmlFor="dni" className="form-label">DNI</label>
              <input
                type="text"
                id="dni"
                className="form-control"
                value={dni}
                onChange={(e) => setDni(e.target.value)}
                required
                maxLength={20}
              />
            </div>

            {/* Mensajes */}
            {error && <div className="alert alert-danger py-2" role="alert">{error}</div>}
            {mensaje && <div className="alert alert-success py-2" role="alert">{mensaje}</div>}

            {/* Botón */}
            <button type="submit" className="btn btn-primary w-100" disabled={loading}>
              {loading ? 'Registrando...' : 'Registrarme'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registro;
