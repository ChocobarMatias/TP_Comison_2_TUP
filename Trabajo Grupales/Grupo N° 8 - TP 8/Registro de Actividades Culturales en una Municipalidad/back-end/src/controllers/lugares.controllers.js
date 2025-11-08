// controllers/lugaresController.js
const connection = require("../config/db");

// Obtener todos los lugares activos
const obtenerTodos = async (req, res) => {
  try {
    const [rows] = await connection.query(
      `SELECT * FROM lugares WHERE estado_lugar = 1`
    );
    return res.json(rows);
  } catch (error) {
    console.error("Error obtener todos los lugares:", error);
    return res.status(500).json({ error: "Error del servidor" });
  }
};

// Obtener un lugar por id_lugar
const obtenerUno = async (req, res) => {
  try {
    const { id_lugar } = req.params;
    const [rows] = await connection.query(
      `SELECT * FROM lugares WHERE id_lugar = ? AND estado_lugar = 1 LIMIT 1`,
      [id_lugar]
    );

    if (rows.length === 0) {
      return res.status(404).json({ error: "Lugar no encontrado" });
    }

    return res.json(rows[0]);
  } catch (error) {
    console.error("Error obtener lugar:", error);
    return res.status(500).json({ error: "Error del servidor" });
  }
};

// Crear un nuevo lugar
const crear = async (req, res) => {
  try {
    const {
      nombre_lugar,
      tipo_lugar,
      direccion_lugar,
      contacto_nombre_lugar,
      contacto_telefono_lugar,
      contacto_email_lugar,
      equipamiento_lugar,
      capacidad_maxima_lugar,
    } = req.body;

    const [result] = await connection.query(
      `INSERT INTO lugares 
        (nombre_lugar, tipo_lugar, direccion_lugar, contacto_nombre_lugar, contacto_telefono_lugar, contacto_email_lugar, equipamiento_lugar, capacidad_maxima_lugar)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        nombre_lugar,
        tipo_lugar || null,
        direccion_lugar || null,
        contacto_nombre_lugar || null,
        contacto_telefono_lugar || null,
        contacto_email_lugar || null,
        equipamiento_lugar || null,
        capacidad_maxima_lugar != null ? capacidad_maxima_lugar : null,
      ]
    );

    return res
      .status(201)
      .json({ message: "Lugar creado", id_lugar: result.insertId });
  } catch (error) {
    console.error("Error crear lugar:", error);
    return res.status(500).json({ error: "Error del servidor" });
  }
};

// Actualizar lugar (solo si está activo)
const actualizar = async (req, res) => {
  try {
    const { id_lugar } = req.params;
    const {
      nombre_lugar,
      tipo_lugar,
      direccion_lugar,
      contacto_nombre_lugar,
      contacto_telefono_lugar,
      contacto_email_lugar,
      equipamiento_lugar,
      capacidad_maxima_lugar,
    } = req.body;

    const [result] = await connection.query(
      `UPDATE lugares
       SET nombre_lugar = ?, tipo_lugar = ?, direccion_lugar = ?, contacto_nombre_lugar = ?, contacto_telefono_lugar = ?, contacto_email_lugar = ?, equipamiento_lugar = ?, capacidad_maxima_lugar = ?
       WHERE id_lugar = ? AND estado_lugar = 1`,
      [
        nombre_lugar,
        tipo_lugar || null,
        direccion_lugar || null,
        contacto_nombre_lugar || null,
        contacto_telefono_lugar || null,
        contacto_email_lugar || null,
        equipamiento_lugar || null,
        capacidad_maxima_lugar != null ? capacidad_maxima_lugar : null,
        id_lugar,
      ]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Lugar no encontrado o inactivo" });
    }

    return res.json({ message: "Lugar actualizado" });
  } catch (error) {
    console.error("Error actualizar lugar:", error);
    return res.status(500).json({ error: "Error del servidor" });
  }
};

// Borrado lógico de lugar
const eliminar = async (req, res) => {
  try {
    const { id_lugar } = req.params;
    const [result] = await connection.query(
      `UPDATE lugares SET estado_lugar = 0 WHERE id_lugar = ?`,
      [id_lugar]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Lugar no encontrado" });
    }

    return res.json({ message: "Lugar eliminado (borrado lógico)" });
  } catch (error) {
    console.error("Error eliminar lugar:", error);
    return res.status(500).json({ error: "Error del servidor" });
  }
};

module.exports = {
  obtenerTodos,
  obtenerUno,
  crear,
  actualizar,
  eliminar,
};
