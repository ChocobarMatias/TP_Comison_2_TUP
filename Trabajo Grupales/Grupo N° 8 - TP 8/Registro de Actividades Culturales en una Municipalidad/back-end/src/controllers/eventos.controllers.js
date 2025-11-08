// controllers/eventosController.js
const connection = require("../config/bd");

// 🔹 Obtener todos los eventos activos con su lugar
const obtenerTodos = async (req, res) => {
  try {
    const [rows] = await connection.query(
      `SELECT e.*, 
              l.nombre_lugar, 
              l.tipo_lugar, 
              l.direccion_lugar, 
              l.capacidad_maxima_lugar
       FROM eventos e
       JOIN lugares l ON e.id_lugar = l.id_lugar
       WHERE e.estado_evento = 1`
    );
    res.json(rows);
  } catch (error) {
    console.error("Error al obtener eventos:", error);
    res.status(500).json({ error: "Error del servidor" });
  }
};

// 🔹 Obtener un evento por ID con su lugar
const obtenerUno = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await connection.query(
      `SELECT e.*, 
              l.nombre_lugar, 
              l.tipo_lugar, 
              l.direccion_lugar, 
              l.capacidad_maxima_lugar
       FROM eventos e
       JOIN lugares l ON e.id_lugar = l.id_lugar
       WHERE e.id_evento = ? AND e.estado_evento = 1`,
      [id]
    );

    if (rows.length === 0)
      return res.status(404).json({ message: "Evento no encontrado" });

    res.json(rows[0]);
  } catch (error) {
    console.error("Error al obtener evento:", error);
    res.status(500).json({ error: "Error del servidor" });
  }
};

// 🔹 Crear un nuevo evento
const crear = async (req, res) => {
  try {
    const {
      nombre_evento,
      fecha_evento,
      id_lugar,
      cupo_maximo_evento,
      precio_entrada_evento,
    } = req.body;

    const [result] = await connection.query(
      `INSERT INTO eventos (
        nombre_evento, fecha_evento, id_lugar, 
        cupo_maximo_evento, precio_entrada_evento
      ) VALUES (?, ?, ?, ?, ?)`,
      [
        nombre_evento,
        fecha_evento,
        id_lugar,
        cupo_maximo_evento,
        precio_entrada_evento,
      ]
    );

    res
      .status(201)
      .json({
        message: "Evento creado correctamente",
        id_evento: result.insertId,
      });
  } catch (error) {
    console.error("Error al crear evento:", error);
    res.status(500).json({ error: "Error del servidor" });
  }
};

// 🔹 Actualizar evento
const actualizar = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      nombre_evento,
      fecha_evento,
      id_lugar,
      cupo_maximo_evento,
      precio_entrada_evento,
    } = req.body;

    const [result] = await connection.query(
      `UPDATE eventos
       SET nombre_evento = ?, 
           fecha_evento = ?, 
           id_lugar = ?, 
           cupo_maximo_evento = ?, 
           precio_entrada_evento = ?
       WHERE id_evento = ? AND estado_evento = 1`,
      [
        nombre_evento,
        fecha_evento,
        id_lugar,
        cupo_maximo_evento,
        precio_entrada_evento,
        id,
      ]
    );

    if (result.affectedRows === 0)
      return res
        .status(404)
        .json({ message: "Evento no encontrado o inactivo" });

    res.json({ message: "Evento actualizado correctamente" });
  } catch (error) {
    console.error("Error al actualizar evento:", error);
    res.status(500).json({ error: "Error del servidor" });
  }
};

// 🔹 Eliminación lógica (borrado lógico)
const eliminar = async (req, res) => {
  try {
    const { id } = req.params;

    const [result] = await connection.query(
      `UPDATE eventos
       SET estado_evento = 0
       WHERE id_evento = ?`,
      [id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Evento no encontrado" });

    res.json({ message: "Evento eliminado correctamente" });
  } catch (error) {
    console.error("Error al eliminar evento:", error);
    res.status(500).json({ error: "Error del servidor" });
  }
};

// 🔹 Agregar artista a un evento (tabla intermedia)
const agregarArtistaEvento = async (req, res) => {
  try {
    const { id_evento, id_artista, rol } = req.body;

    const [verificar] = await connection.query(
      `SELECT * FROM artistas_eventos 
       WHERE id_evento = ? AND id_artista = ?`,
      [id_evento, id_artista]
    );

    if (verificar.length > 0)
      return res
        .status(400)
        .json({ message: "El artista ya está asignado a este evento" });

    await connection.query(
      `INSERT INTO artistas_eventos (id_evento, id_artista, rol) 
       VALUES (?, ?, ?)`,
      [id_evento, id_artista, rol || "principal"]
    );

    res
      .status(201)
      .json({ message: "Artista agregado al evento correctamente" });
  } catch (error) {
    console.error("Error al agregar artista al evento:", error);
    res.status(500).json({ error: "Error del servidor" });
  }
};

// Vender boleto (versión simplificada para TP)
const venderBoleto = async (req, res) => {
  try {
    const { id_evento, id_usuario, cantidad_boletos, metodo_pago } = req.body;
    const cantidad = Number(cantidad_boletos);

    if (!id_evento || !id_usuario || !cantidad || cantidad <= 0) {
      return res
        .status(400)
        .json({ error: "Faltan datos o cantidad inválida" });
    }

    // Obtener datos básicos del evento
    const [rows] = await connection.query(
      `SELECT cupo_maximo_evento, entradas_vendidas_evento, precio_entrada_evento 
       FROM eventos 
       WHERE id_evento = ? AND estado_evento = 1`,
      [id_evento]
    );

    if (rows.length === 0) {
      return res.status(404).json({ error: "Evento no encontrado o inactivo" });
    }

    const evento = rows[0];
    const disponibles =
      evento.cupo_maximo_evento - evento.entradas_vendidas_evento;

    // Validar disponibilidad
    if (disponibles <= 0 || cantidad > disponibles) {
      return res
        .status(400)
        .json({ error: "No hay cupos disponibles", disponibles });
    }

    // Actualizar entradas vendidas
    await connection.query(
      `UPDATE eventos 
       SET entradas_vendidas_evento = entradas_vendidas_evento + ? 
       WHERE id_evento = ?`,
      [cantidad, id_evento]
    );

    // Registrar la venta
    const total_venta = evento.precio_entrada_evento * cantidad;

    await connection.query(
      `INSERT INTO ventas_boletos (id_evento, id_usuario, cantidad_boletos, total_venta, metodo_pago)
       VALUES (?, ?, ?, ?, ?)`,
      [
        id_evento,
        id_usuario,
        cantidad,
        total_venta,
        metodo_pago || "No especificado",
      ]
    );

    return res.status(201).json({ message: "Venta registrada correctamente" });
  } catch (error) {
    console.error("Error en venta de boletos:", error);
    return res.status(500).json({ error: "Error del servidor" });
  }
};

module.exports = {
  obtenerTodos,
  obtenerUno,
  crear,
  actualizar,
  eliminar,
  agregarArtistaEvento,
  venderBoleto,
};
