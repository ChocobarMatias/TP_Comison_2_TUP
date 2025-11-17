import React, { useState, useEffect } from 'react';
import { donadoresService } from '../services/donadoresService';

// ... (Estilos formStyle, inputGroupStyle, etc. van aquí) ...
const formStyle = { border: '1px solid #ddd', padding: '20px', borderRadius: '8px', marginBottom: '20px', background: '#f9f9f9' };
const inputGroupStyle = { marginBottom: '15px' };
const labelStyle = { display: 'block', marginBottom: '5px', fontWeight: 'bold' };
const inputStyle = { width: '100%', padding: '8px', boxSizing: 'border-box' };

// 1. Aceptamos una nueva prop: 'idParaEditar'
const FormularioDonante = ({ idParaEditar, onFormularioCerrado, onClose }) => {
  
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    contacto: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 2. Determina si estamos en modo "Editar"
  const modoEditar = idParaEditar != null;

  // 3. --- ¡NUEVO EFFECT AQUÍ! ---
  // Este useEffect se ejecuta si 'idParaEditar' cambia.
  // Su trabajo es rellenar el formulario con los datos existentes.
  useEffect(() => {
    if (modoEditar) {
      // Si estamos en modo Editar, buscamos los datos del donante
      const cargarDatosDonante = async () => {
        setLoading(true);
        try {
          const donante = await donadoresService.getById(idParaEditar);
          // Rellenamos el estado del formulario con los datos
          setFormData({
            nombre: donante.nombre,
            apellido: donante.apellido,
            contacto: donante.contacto,
          });
          setError(null);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
      cargarDatosDonante();
    } else {
      // Si no estamos en modo Editar (es "Crear"), resetea el formulario
      setFormData({
        nombre: '',
        apellido: '',
        contacto: '',
      });
    }
  }, [idParaEditar, modoEditar]); // Se ejecuta cuando estas props cambian

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  // 4. --- ¡HANDLESUBMIT ACTUALIZADO! ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.nombre || !formData.apellido || !formData.contacto) {
      alert("Por favor, completa todos los campos.");
      return;
    }
    
    setLoading(true);
    try {
      if (modoEditar) {
        // Si estamos editando, llamamos a 'update'
        await donadoresService.update(idParaEditar, formData);
      } else {
        // Si estamos creando, llamamos a 'create'
        await donadoresService.create(formData);
      }
      onFormularioCerrado(); // Avisa a la página padre
    } catch (err) {
      alert("Error al guardar el donante.");
    } finally {
      setLoading(false);
    }
  };

  if (loading && modoEditar) {
    return <p>Cargando datos del donante...</p>;
  }
  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      {/* 5. Título dinámico */}
      <h2>{modoEditar ? 'Editar Donante' : 'Agregar Nuevo Donante'}</h2>
      
      {/* ... (el resto del formulario <div.../> es exactamente igual) ... */}
      <div style={inputGroupStyle}>
        <label style={labelStyle}>Nombre:</label>
        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} style={inputStyle} required />
      </div>
      <div style={inputGroupStyle}>
        <label style={labelStyle}>Apellido:</label>
        <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} style={inputStyle} required />
      </div>
      <div style={inputGroupStyle}>
        <label style={labelStyle}>Contacto (Tel/Email):</label>
        <input type="text" name="contacto" value={formData.contacto} onChange={handleChange} style={inputStyle} required />
      </div>
      <div>
        <button type="submit" disabled={loading}>
          {loading ? 'Guardando...' : 'Guardar Donante'}
        </button>
        <button type="button" onClick={onClose} style={{ marginLeft: '10px' }}>
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default FormularioDonante;