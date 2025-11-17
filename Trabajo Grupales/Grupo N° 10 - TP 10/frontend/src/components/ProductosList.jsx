import React, { useCallback } from 'react'; // 1. Importa useCallback
import { useFetch } from '../hooks/useFetch';
import { productosService } from '../services/productosService';

const ProductosList = ({ refreshKey, onDelete, onEditar }) => {
  
  // 2. Envuelve la función del servicio en useCallback
  const getProductos = useCallback(() => {
    return productosService.getAll();
  }, []); // El [] significa que esta función NUNCA cambia

  // 3. Pasa la función "memorizada" a useFetch
  const { data: productos, loading, error } = useFetch(getProductos, refreshKey);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error.message}</p>;

  if (!productos || productos.length === 0) {
    return <p>No se encontraron productos.</p>;
  }
  
  // ... (el resto de tu <table> sigue igual) ...
  return (
    <div>
      <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Categoría</th>
            <th>Cantidad (Stock)</th>
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
              <td>
                <button 
                  onClick={() => onEditar(producto.id_producto)}
                  style={{ backgroundColor: '#aaeebb' }}
                >
                  Editar
                </button>
                <button 
                  onClick={() => onDelete(producto.id_producto)}
                  style={{ backgroundColor: '#ffaaaa', marginLeft: '5px' }}
                >
                  Borrar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductosList;