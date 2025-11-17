import React, { useState, useEffect } from 'react';
// Importamos TODOS los servicios que necesitamos
import { entregasService } from '../services/entregasService';
import { donadoresService } from '../services/donadoresService';
import { productosService } from '../services/productosService';
import { comedoresService } from '../services/comedoresService';

const EntregasList = ({ refreshKey, onDelete, onEditar }) => {
  // Estados para este componente
  const [entregas, setEntregas] = useState([]); // Guardará las entregas con nombres
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Usamos useEffect para cargar todos los datos cuando el componente se monta
  useEffect(() => {
    
    // Creamos una función async dentro de useEffect para cargar los datos
    const loadData = async () => {
      try {
        setLoading(true);
        
        // 1. Usamos Promise.all para cargar todo en paralelo
        const [
          dataEntregas, 
          dataDonantes, 
          dataProductos, 
          dataComedores
        ] = await Promise.all([
          entregasService.getAll(),
          donadoresService.getAll(),
          productosService.getAll(),
          comedoresService.getAll(),
        ]);

        // 2. Creamos "Mapas" para buscar nombres por ID (más eficiente)
        const donantesMap = new Map(dataDonantes.map(d => [d.id, `${d.nombre} ${d.apellido}`]));
        const productosMap = new Map(dataProductos.map(p => [p.id_producto, p.nombre]));
        const comedoresMap = new Map(dataComedores.map(c => [c.id, c.nombre]));

        // 3. "Resolvemos" las entregas: cambiamos IDs por nombres
        const entregasResueltas = dataEntregas.map(entrega => ({
          ...entrega,
          // Busca el nombre en el mapa, si no lo encuentra, pone '?'
          donanteNombre: donantesMap.get(entrega.id_donador) || 'Donante Desconocido',
          productoNombre: productosMap.get(entrega.id_producto) || 'Producto Desconocido',
          comedorNombre: comedoresMap.get(entrega.id_comedor) || 'Comedor Desconocido',
        }));

        setEntregas(entregasResueltas); // Guardamos los datos resueltos
        
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadData(); // Llamamos a la función
  }, [refreshKey]); // El array vacío [] significa "ejecutar solo una vez"

  // 4. Mismos estados de carga y error de siempre
  if (loading) return <p>Cargando entregas...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error.message}</p>;

  // 5. Renderizamos la tabla con los datos resueltos
  return (
    <div>
      <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>ID Entrega</th>
            <th>Donante</th>
            <th>Producto</th>
            <th>Comedor</th>
            <th>Cantidad</th>
            <th>Fecha</th>
            <th>Observaciones</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {entregas.map((entrega) => (
            <tr key={entrega.id}>
              <td>{entrega.id}</td>
              {/* Mostramos los nombres que resolvimos */}
              <td>{entrega.donanteNombre}</td>
              <td>{entrega.productoNombre}</td>
              <td>{entrega.comedorNombre}</td>
              <td>{entrega.cantidad}</td>
              <td>{new Date(entrega.fecha_donacion).toLocaleDateString()}</td>
              <td>{entrega.observaciones}</td>
              <td>
                <button 
                  onClick={() => onEditar(entrega.id)}
                  style={{ backgroundColor: '#aaeebb' }}
                >
                  Editar
                </button>
                <button 
                  onClick={() => onDelete(entrega.id)}
                  style={{ backgroundColor: '#ffaaaa' }}
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

export default EntregasList;