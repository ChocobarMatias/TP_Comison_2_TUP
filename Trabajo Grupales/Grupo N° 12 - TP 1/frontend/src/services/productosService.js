/**
 * Servicio para interactuar con el endpoint de productos
 */

import api from './api.js';

// Obtener todos los productos
export const getAllProductos = async () => {
  const response = await api.get('/productos');
  return response.data;
};

// Obtener un producto por ID
export const getProductoById = async (id) => {
  const response = await api.get(`/productos/${id}`);
  return response.data;
};

// Crear un nuevo producto
export const createProducto = async (productoData) => {
  const response = await api.post('/productos', productoData);
  return response.data;
};

// Actualizar un producto existente
export const updateProducto = async (id, productoData) => {
  const response = await api.put(`/productos/${id}`, productoData);
  return response.data;
};

// Eliminar un producto
export const deleteProducto = async (id) => {
  const response = await api.delete(`/productos/${id}`);
  return response.data;
};
