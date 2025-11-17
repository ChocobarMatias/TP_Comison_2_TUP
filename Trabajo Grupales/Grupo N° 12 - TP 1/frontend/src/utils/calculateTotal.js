/**
 * Calcular totales
 */

export const calculateTotal = (items, key = 'precio') => {
  if (!Array.isArray(items)) return 0;
  return items.reduce((total, item) => total + (parseFloat(item[key]) || 0), 0);
};

export const calculateSubtotal = (precio, cantidad) => {
  return parseFloat(precio) * parseInt(cantidad);
};
