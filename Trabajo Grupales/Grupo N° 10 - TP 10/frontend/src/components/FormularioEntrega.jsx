import React, { useState, useEffect } from 'react';
import { donadoresService } from '../services/donadoresService';
import { productosService } from '../services/productosService';
import { comedoresService } from '../services/comedoresService';
import { entregasService } from '../services/entregasService';

// ... (Estilos formStyle, inputGroupStyle, etc. van aquí) ...
const formStyle = { border: '1px solid #ddd', padding: '20px', borderRadius: '8px', marginBottom: '20px', background: '#f9f9f9' };
const inputGroupStyle = { marginBottom: '15px' };
const labelStyle = { display: 'block', marginBottom: '5px', fontWeight: 'bold' };
const inputStyle = { width: '100%', padding: '8px', boxSizing: 'border-box' };


// 1. Aceptamos 'idParaEditar'
const FormularioEntrega = ({ idParaEditar, onFormularioCerrado, onClose }) => {
  
  // Estados para los dropdowns
  const [donantes, setDonantes] = useState([]);
  const [productos, setProductos] = useState([]);
  const [comedores, setComedores] = useState([]);

  // Estado del formulario
  const [formData, setFormData] = useState({
    id_donador: '',
    id_producto: '',
    id_comedor: '',
    cantidad: 1,
    observaciones: '',
  });

  const [loading, setLoading] = useState(true); // Inicia en true para cargar dropdowns
  const [error, setError] = useState(null);

  const modoEditar = idParaEditar != null;

  // 2. PRIMER EFFECT: Cargar los datos de los Dropdowns (se ejecuta 1 vez)
  useEffect(() => {
    const cargarDropdowns = async () => {
      setLoading(true);
      try {
        const [dataDonantes, dataProductos, dataComedores] = await Promise.all([
          donadoresService.getAll(),
          productosService.getAll(),
          comedoresService.getAll(),
        ]);
        
        setDonantes(dataDonantes);
        setProductos(dataProductos);
        setComedores(dataComedores);
        setError(null);
      } catch (err) {
        setError("Error al cargar los datos para el formulario.");
      } finally {
        // No ponemos setLoading(false) aquí, esperamos al segundo effect
      }
    };
    cargarDropdowns();
  }, []); // Array vacío = se ejecuta solo al inicio

  // 3. SEGUNDO EFFECT: Cargar datos de la Entrega (si estamos en modo editar)
  useEffect(() => {
    // Solo se ejecuta si estamos en modoEditar Y si los dropdowns ya cargaron
    if (modoEditar && donantes.length > 0) {
      const cargarDatosEntrega = async () => {
        setLoading(true);
        try {
          const entrega = await entregasService.getById(idParaEditar);
          // Rellenamos el formulario
          setFormData({
            id_donador: entrega.id_donador,
            id_producto: entrega.id_producto,
            id_comedor: entrega.id_comedor,
            cantidad: entrega.cantidad,
            observaciones: entrega.observaciones || '',
          });
          setError(null);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
      cargarDatosEntrega();
    } else if (!modoEditar) {
      // Si es modo "Crear", reseteamos y terminamos la carga
      setFormData({
        id_donador: '',
        id_producto: '',
        id_comedor: '',
        cantidad: 1,
        observaciones: '',
      });
      setLoading(false); // Termina la carga
    }
  }, [idParaEditar, modoEditar, donantes]); // Depende de estas variables

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  // 4. handleSubmit actualizado para 'create' o 'update'
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.id_donador || !formData.id_producto || !formData.id_comedor || formData.cantidad <= 0) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    setLoading(true);
    try {
      if (modoEditar) {
        await entregasService.update(idParaEditar, formData);
      } else {
        await entregasService.create(formData);
      }
      onFormularioCerrado(); // Avisa a la página padre
    } catch (err) {
      alert("Error al guardar la entrega.");
    } finally {
      setLoading(false);
    }
  };
  
  if (loading) {
    return <p>Cargando formulario...</p>;
  }
  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      {/* 5. Título dinámico */}
      <h2>{modoEditar ? 'Editar Entrega' : 'Registrar Nueva Entrega'}</h2>
      
      {/* ... (Todos los <div style={inputGroupStyle}>...</div> van aquí) ... */}
      <div style={inputGroupStyle}>
        <label style={labelStyle}>Donante:</label>
        <select name="id_donador" value={formData.id_donador} onChange={handleChange} style={inputStyle} required>
          <option value="">-- Selecciona un donante --</option>
          {donantes.map(d => (
            <option key={d.id} value={d.id}>{d.nombre} {d.apellido}</option>
          ))}
        </select>
      </div>
      
      <div style={inputGroupStyle}>
        <label style={labelStyle}>Producto:</label>
        <select name="id_producto" value={formData.id_producto} onChange={handleChange} style={inputStyle} required>
          <option value="">-- Selecciona un producto --</option>
          {productos.map(p => (
            <option key={p.id_producto} value={p.id_producto}>{p.nombre} (Stock: {p.cantidad})</option>
          ))}
        </select>
      </div>

      <div style={inputGroupStyle}>
        <label style={labelStyle}>Comedor:</label>
        <select name="id_comedor" value={formData.id_comedor} onChange={handleChange} style={inputStyle} required>
          <option value="">-- Selecciona un comedor --</option>
          {comedores.map(c => (
            <option key={c.id} value={c.id}>{c.nombre}</option>
          ))}
        </select>
      </div>

      <div style={inputGroupStyle}>
        <label style={labelStyle}>Cantidad:</label>
        <input type="number" name="cantidad" value={formData.cantidad} onChange={handleChange} style={inputStyle} min="1" required />
      </div>

      <div style={inputGroupStyle}>
        <label style={labelStyle}>Observaciones:</label>
        <textarea name="observaciones" value={formData.observaciones} onChange={handleChange} style={inputStyle} />
      </div>

      <div>
        <button type="submit" disabled={loading}>
          {loading ? 'Guardando...' : 'Guardar Entrega'}
        </button>
        <button type="button" onClick={onClose} style={{ marginLeft: '10px' }}>
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default FormularioEntrega;