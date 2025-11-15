import React from 'react';
import useCustomRegister from '../../Hooks/UseCustomRegister';
import "../../Styles/Registro/Registro.css";

const Registro = () => {
  const {
    usuario,
    setUsuario,
    password,
    setPassword,
    email,
    setEmail,
    loading,
    mensaje,
    error,
    registrarUsuario
  } = useCustomRegister();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await registrarUsuario();
  };

  return (
    <div className="registro-container d-flex align-items-center justify-content-center">
      <div className="card shadow-sm registro-card">
        <div className="card-body">
          <h1 className="h4 mb-3 text-center">Registro de Usuario</h1>
          <form onSubmit={handleSubmit} noValidate>
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
              <div className="form-text">Mínimo 6 caracteres.</div>
            </div>
            {error && <div className="alert alert-danger py-2" role="alert">{error}</div>}
            {mensaje && <div className="alert alert-success py-2" role="alert">{mensaje}</div>}
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
