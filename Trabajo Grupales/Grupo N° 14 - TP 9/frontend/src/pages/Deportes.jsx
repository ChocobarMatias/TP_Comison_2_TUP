import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useAuthStore from "../store/useAuthStore";
import "../styles/deportes.css";

const Deportes = () => {
  const { token } = useAuthStore();
  const [deportes, setDeportes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalData, setModalData] = useState({ visible: false, action: '', deporte: null });

  useEffect(() => {
    fetchDeportes();
  }, []);

  const fetchDeportes = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/deportes', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setDeportes(response.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const fetchDeporteById = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/deportes/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert(`Deporte: ${JSON.stringify(response.data)}`);
    } catch (err) {
      alert(`Error: ${err.message}`);
    }
  };

  const openModal = (action, deporte = null) => {
    setModalData({ visible: true, action, deporte });
  };

  const closeModal = () => {
    setModalData({ visible: false, action: '', deporte: null });
  };

  const handleModalSubmit = async () => {
    const { action, deporte } = modalData;
    const nombre = document.getElementById('modal-nombre').value;
    const cuotaMensual = document.getElementById('modal-cuota').value;

    if (!nombre || !cuotaMensual) {
      alert('Nombre y cuota mensual son obligatorios.');
      return;
    }

    try {
      if (action === 'create') {
        await axios.post('http://localhost:3000/api/deportes', {
          nombre,
          cuota_mensual: parseFloat(cuotaMensual),
        }, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        alert('Deporte creado con éxito');
      } else if (action === 'update') {
        await axios.put(`http://localhost:3000/api/deportes/${deporte.id}`, {
          nombre,
          cuota_mensual: parseFloat(cuotaMensual),
        }, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        alert('Deporte actualizado con éxito');
      }
      fetchDeportes();
      closeModal();
    } catch (err) {
      console.error('Error al procesar el deporte:', err);
      alert(`Error: ${err.response?.data?.error || err.message}`);
    }
  };

  const deleteDeporte = async (id) => {
    if (!window.confirm('¿Está seguro de que desea eliminar este deporte?')) {
      return;
    }

    try {
      await axios.delete(`http://localhost:3000/api/deportes/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert('Deporte eliminado con éxito');
      setDeportes(deportes.filter((deporte) => deporte.id !== id));
    } catch (err) {
      console.error('Error al eliminar el deporte:', err);
      alert(`Error: ${err.response?.data?.error || err.message}`);
    }
  };

  if (loading) return <div>Cargando deportes...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="deportes-container">
      <div className="deportes-header">
        <h1>Lista de Deportes</h1>
        <button className="create-button" onClick={() => openModal('create')}>Crear Deporte</button>
      </div>
      <table className="deportes-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Cuota Mensual</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {deportes.map((deporte, index) => (
            <tr key={deporte.id || index}>
              <td>{deporte.id}</td>
              <td>{deporte.nombre}</td>
              <td>{deporte.cuota_mensual}</td>
              <td>
                <button className="action-button" onClick={() => fetchDeporteById(deporte.id)}>Ver</button>
                <button className="action-button" onClick={() => openModal('update', deporte)}>Modificar</button>
                <button className="action-button" onClick={() => deleteDeporte(deporte.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {modalData.visible && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>{modalData.action === 'create' ? 'Crear Deporte' : 'Modificar Deporte'}</h2>
            <label>Nombre:</label>
            <input id="modal-nombre" defaultValue={modalData.deporte?.nombre || ''} />
            <label>Cuota Mensual:</label>
            <input id="modal-cuota" defaultValue={modalData.deporte?.cuota_mensual || ''} />
            <div className="modal-actions">
              <button onClick={handleModalSubmit}>Guardar</button>
              <button onClick={closeModal}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Deportes;