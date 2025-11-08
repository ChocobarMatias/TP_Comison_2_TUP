// controllers/ventasController.js
const connection = require('../config/db');

/**
 * Obtener todas las ventas (activas)
 */
const obtenerTodas = async (req, res) => {
  try {
    const [rows] = await connection.query(
      `SELECT * FROM ventas_boletos WHERE estado_venta_boleto = 1 ORDER BY fecha_creacion_venta_boleto DESC`
    );
    return res.json(rows);
  } catch (error) {
    console.error('Error obtenerTodas ventas:', error);
    return res.status(500).json({ error: 'Error del servidor' });
  }
};

/**
 * Obtener una venta por id_venta_boleto
 */
const obtenerUna = async (req, res) => {
  try {
    const { id_venta_boleto } = req.params;
    const [rows] = await connection.query(
      `SELECT * FROM ventas_boletos WHERE id_venta_boleto = ? AND estado_venta_boleto = 1 LIMIT 1`,
      [id_venta_boleto]
    );
    if (rows.length === 0) return res.status(404).json({ error: 'Venta no encontrada' });
    return res.json(rows[0]);
  } catch (error) {
    console.error('Error obtenerUna venta:', error);
    return res.status(500).json({ error: 'Error del servidor' });
  }
};

/**
 * Obtener ventas por evento (id_evento)
 */
const obtenerPorEvento = async (req, res) => {
  try {
    const { id_evento } = req.params;
    const [rows] = await connection.query(
      `SELECT * FROM ventas_boletos WHERE id_evento = ? AND estado_venta_boleto = 1 ORDER BY fecha_creacion_venta_boleto DESC`,
      [id_evento]
    );
    return res.json(rows);
  } catch (error) {
    console.error('Error obtenerPorEvento ventas:', error);
    return res.status(500).json({ error: 'Error del servidor' });
  }
};

/**
 * Crear una venta (comprueba cupo usando cupo_maximo_evento - entradas_vendidas_evento)
 * Body: { id_evento, id_usuario, cantidad_boletos, metodo_pago }
 * Responde solo mensaje; si no hay cupo devuelve disponibles.
 */
const crearVenta = async (req, res) => {
  try {
    const { id_evento, id_usuario, cantidad_boletos, metodo_pago } = req.body;
    const cantidad = Number(cantidad_boletos);

    if (!id_evento || !id_usuario || !cantidad || cantidad <= 0) {
      return res.status(400).json({ error: 'Faltan datos o cantidad inválida' });
    }

    // Obtener cupo y vendidos del evento
    const [eventRows] = await connection.query(
      `SELECT cupo_maximo_evento, entradas_vendidas_evento, precio_entrada_evento
       FROM eventos
       WHERE id_evento = ? AND estado_evento = 1
       LIMIT 1`,
      [id_evento]
    );

    if (eventRows.length === 0) {
      return res.status(404).json({ error: 'Evento no encontrado o inactivo' });
    }

    const evento = eventRows[0];
    const cupo = Number(evento.cupo_maximo_evento) || 0;
    const vendidos = Number(evento.entradas_vendidas_evento) || 0;
    const disponibles = Math.max(0, cupo - vendidos);

    if (disponibles <= 0 || cantidad > disponibles) {
      return res.status(400).json({ error: 'No hay cupos disponibles', disponibles });
    }

    // Actualizar entradas vendidas
    await connection.query(
      `UPDATE eventos SET entradas_vendidas_evento = entradas_vendidas_evento + ? WHERE id_evento = ?`,
      [cantidad, id_evento]
    );

    // Insertar venta
    const precio = Number(evento.precio_entrada_evento) || 0;
    const total_venta = precio * cantidad;

    const [insertResult] = await connection.query(
      `INSERT INTO ventas_boletos (id_evento, id_usuario, cantidad_boletos, total_venta, metodo_pago)
       VALUES (?, ?, ?, ?, ?)`,
      [id_evento, id_usuario, cantidad, total_venta, metodo_pago || null]
    );

    return res.status(201).json({ message: 'Venta registrada correctamente' });
  } catch (error) {
    console.error('Error crearVenta:', error);
    return res.status(500).json({ error: 'Error del servidor' });
  }
};

/**
 * Total de ventas por todos los eventos (agregado por evento)
 * Retorna array de { id_evento, total_ventas, total_boletos }
 */
const totalVentasPorEventos = async (req, res) => {
  try {
    const [rows] = await connection.query(
      `SELECT id_evento,
              COALESCE(SUM(total_venta),0) AS total_ventas,
              COALESCE(SUM(cantidad_boletos),0) AS total_boletos
       FROM ventas_boletos
       WHERE estado_venta_boleto = 1
       GROUP BY id_evento`
    );
    return res.json(rows);
  } catch (error) {
    console.error('Error totalVentasPorEventos:', error);
    return res.status(500).json({ error: 'Error del servidor' });
  }
};

/**
 * Total de ventas para un solo evento
 * Retorna { id_evento, total_ventas, total_boletos }
 */
const totalVentasPorEvento = async (req, res) => {
  try {
    const { id_evento } = req.params;
    const [rows] = await connection.query(
      `SELECT id_evento,
              COALESCE(SUM(total_venta),0) AS total_ventas,
              COALESCE(SUM(cantidad_boletos),0) AS total_boletos
       FROM ventas_boletos
       WHERE estado_venta_boleto = 1 AND id_evento = ?
       GROUP BY id_evento`,
      [id_evento]
    );

    if (rows.length === 0) {
      // Si no hay ventas, devolver zeros consistentes
      return res.json({ id_evento: Number(id_evento), total_ventas: 0, total_boletos: 0 });
    }

    return res.json(rows[0]);
  } catch (error) {
    console.error('Error totalVentasPorEvento:', error);
    return res.status(500).json({ error: 'Error del servidor' });
  }
};

module.exports = {
  obtenerTodas,
  obtenerUna,
  obtenerPorEvento,
  crearVenta,
  totalVentasPorEventos,
  totalVentasPorEvento
};
