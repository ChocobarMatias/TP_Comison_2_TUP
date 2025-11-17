import React, { useState, useEffect } from 'react';
import { productosService } from '../services/productosService'; // Asegúrate de importar el servicio de productos

// Estilos
const formStyle = { border: '1px solid #ddd', padding: '20px', borderRadius: '8px', marginBottom: '20px', background: '#f9f9f9' };
const inputGroupStyle = { marginBottom: '15px' };
const labelStyle = { display: 'block', marginBottom: '5px', fontWeight: 'bold' };
const inputStyle = { width: '100%', padding: '8px', boxSizing: 'border-box' };

// 1. Aceptamos la prop 'idParaEditar'
const FormularioProducto = ({ idParaEditar, onFormularioCerrado, onClose }) => {
  
  // 2. Estado del formulario con los campos de Producto
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    categoria: '',
    cantidad: 0,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const modoEditar = idParaEditar != null;

  // 3. Este useEffect carga los datos del producto si estamos en modo "Editar"
  useEffect(() => {
    if (modoEditar) {
      const cargarDatosProducto = async () => {
        setLoading(true);
        try {
          // Usamos el ID de producto (id_producto)
          const producto = await productosService.getById(idParaEditar);
          // Rellenamos el formulario
          setFormData({
            nombre: producto.nombre,
            descripcion: producto.descripcion,
            categoria: producto.categoria,
            cantidad: producto.cantidad,
          });
          setError(null);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
      cargarDatosProducto();
    } else {
      // Modo "Crear": resetea el formulario
      setFormData({
        nombre: '',
        descripcion: '',
        categoria: '',
        cantidad: 0,
      });
    }
  }, [idParaEditar, modoEditar]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'number' ? parseInt(value) : value,
    }));
  };

  // 4. handleSubmit actualizado para 'create' o 'update'
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.nombre || !formData.categoria) {
      alert("Nombre y Categoría son obligatorios.");
      return;
    }
    
    setLoading(true);
    try {
      if (modoEditar) {
        await productosService.update(idParaEditar, formData);
      } else {
        await productosService.create(formData);
      }
      onFormularioCerrado(); // Avisa a la página padre
    } catch (err) {
      alert("Error al guardar el producto.");
    } finally {
      setLoading(false);
    }
  };

  if (loading && modoEditar) {
    return <p>Cargando datos del producto...</p>;
  }
  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      {/* 5. Título dinámico */}
      <h2>{modoEditar ? 'Editar Producto' : 'Agregar Nuevo Producto'}</h2>
      
      <div style={inputGroupStyle}>
        <label style={labelStyle}>Nombre:</label>
        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} style={inputStyle} required />
      </div>

      <div style={inputGroupStyle}>
        <label style={labelStyle}>Descripción:</label>
        <input type="text" name="descripcion" value={formData.descripcion} onChange={handleChange} style={inputStyle} />
      </div>

      <div style={inputGroupStyle}>
        <label style={labelStyle}>Categoría:</label>
        <input type="text" name="categoria" value={formData.categoria} onChange={handleChange} style={inputStyle} required />
      </div>

      <div style={inputGroupStyle}>
        <label style={labelStyle}>Cantidad (Stock):</label>
        <input type="number" name="cantidad" value={formData.cantidad} onChange={handleChange} style={inputStyle} min="0" />
      </div>

      <div>
        <button type="submit" disabled={loading}>
          {loading ? 'Guardando...' : 'Guardar Producto'}
        </button>
        <button type="button" onClick={onClose} style={{ marginLeft: '10px' }}>
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default FormularioProducto;