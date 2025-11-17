/**
 * Página de Productos con CRUD completo
 */

import { useState, useEffect } from 'react';
import { getAllProductos, deleteProducto } from '../services/productosService';
import { useModal } from '../hooks/useModal';

const ProductosPage = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { isOpen, openModal, closeModal } = useModal();

  useEffect(() => {
    fetchProductos();
  }, []);

  const fetchProductos = async () => {
    try {
      setLoading(true);
      const data = await getAllProductos();
      setProductos(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de eliminar este producto?')) {
      try {
        await deleteProducto(id);
        fetchProductos(); // Recargar lista
      } catch (err) {
        alert('Error al eliminar producto');
      }
    }
  };

  if (loading) return <div className="loading">Cargando productos...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="productos-page">
      <header className="page-header">
        <h1>Gestión de Productos</h1>
        <button onClick={openModal} className="btn btn-primary">
          Nuevo Producto
        </button>
      </header>

      <div className="productos-list">
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Categoría</th>
              <th>Cantidad</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
              <tr key={producto.id_producto}>
                <td>{producto.id_producto}</td>
                <td>{producto.nombre}</td>
                <td>{producto.descripcion}</td>
                <td>{producto.categoria}</td>
                <td>{producto.cantidad}</td>
                <td className="actions">
                  <button className="btn btn-small btn-edit">Editar</button>
                  <button
                    className="btn btn-small btn-danger"
                    onClick={() => handleDelete(producto.id_producto)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal para crear/editar productos */}
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Formulario de Producto</h2>
            <p>Aquí iría el formulario completo...</p>
            <button onClick={closeModal} className="btn btn-secondary">
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductosPage;
