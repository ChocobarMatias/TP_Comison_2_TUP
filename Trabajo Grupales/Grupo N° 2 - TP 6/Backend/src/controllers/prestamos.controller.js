const db = require("../config/DB");

// Obtener todos los préstamos
const getAll = (req, res) => {
  const consulta = `
    SELECT 
      p.*,
      a.nombre as alumno_nombre,
      a.dni as alumno_dni,
      l.titulo as libro_titulo,
      l.autor as libro_autor
    FROM prestamos p
    LEFT JOIN alumnos a ON p.alumno_id = a.alumno_id
    LEFT JOIN libros l ON p.libro_id = l.libro_id
  `;

  db.query(consulta, (err, rows) => {
    if (err) {
      return res
        .status(500)
        .json({ message: err.message || "Error al obtener los préstamos" });
    }

    return res.json(rows);
  });
};

// Obtener un préstamo por ID
const getById = (req, res) => {
  const { id } = req.params;

  const consulta = "SELECT * FROM prestamos WHERE prestamo_id = ?";

  db.query(consulta, [id], (err, rows) => {
    if (err) {
      return res
        .status(500)
        .json({ message: err.message || "Error al buscar el préstamo" });
    }

    if (!rows.length) {
      return res.status(404).json({ message: "Préstamo no encontrado" });
    }

    return res.json(rows[0]);
  });
};

// Crear un nuevo préstamo
const create = (req, res) => {
  const { alumno_id, libro_id, fecha_prestamo, fecha_devolucion, estado } =
    req.body;

  // Validaciones básicas
  if (!alumno_id || !libro_id || !fecha_prestamo) {
    return res.status(400).json({
      message:
        "Los campos alumno_id, libro_id y fecha_prestamo son obligatorios",
    });
  }

  // Verificar que el alumno existe
  const verificarAlumno = "SELECT alumno_id FROM alumnos WHERE alumno_id = ?";

  db.query(verificarAlumno, [alumno_id], (errAlumno, resultsAlumno) => {
    if (errAlumno) {
      return res.status(500).json({ message: "Error al verificar alumno" });
    }

    if (!resultsAlumno.length) {
      return res.status(404).json({ message: "El alumno no existe" });
    }

    // Verificar que el libro existe
    const verificarLibro = "SELECT libro_id FROM libros WHERE libro_id = ?";

    db.query(verificarLibro, [libro_id], (errLibro, resultsLibro) => {
      if (errLibro) {
        return res.status(500).json({ message: "Error al verificar libro" });
      }

      if (!resultsLibro.length) {
        return res.status(404).json({ message: "El libro no existe" });
      }

      // Si ambas validaciones pasaron, crear el préstamo
      const consulta =
        "INSERT INTO prestamos (alumno_id, libro_id, fecha_prestamo, fecha_devolucion, estado) VALUES (?, ?, ?, ?, ?)";

      db.query(
        consulta,
        [
          alumno_id,
          libro_id,
          fecha_prestamo,
          fecha_devolucion || null,
          estado || "prestado",
        ],
        (err, result) => {
          if (err) {
            return res
              .status(500)
              .json({ message: err.message || "Error al crear el préstamo" });
          }

          return res.status(201).json({
            message: "Préstamo creado con éxito",
            prestamo_id: result.insertId,
          });
        }
      );
    });
  });
};

// Actualizar un préstamo
const update = (req, res) => {
  const { id } = req.params;

  const { alumno_id, libro_id, fecha_prestamo, fecha_devolucion, estado } =
    req.body;

  // Validaciones básicas
  if (!alumno_id || !libro_id || !fecha_prestamo) {
    return res.status(400).json({
      message:
        "Los campos alumno_id, libro_id y fecha_prestamo son obligatorios",
    });
  }

  const consulta =
    "UPDATE prestamos SET alumno_id=?, libro_id=?, fecha_prestamo=?, fecha_devolucion=?, estado=? WHERE prestamo_id=?";

  db.query(
    consulta,
    [
      alumno_id,
      libro_id,
      fecha_prestamo,
      fecha_devolucion || null,
      estado || "prestado",
      id,
    ],
    (err, result) => {
      if (err) {
        return res
          .status(500)
          .json({ message: err.message || "Error al actualizar el préstamo" });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Préstamo no encontrado" });
      }

      return res.json({ message: "Préstamo actualizado con éxito" });
    }
  );
};

// Eliminar un préstamo
const remove = (req, res) => {
  const { id } = req.params;

  const consulta = "DELETE FROM prestamos WHERE prestamo_id=?";

  db.query(consulta, [id], (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ message: err.message || "Error al eliminar el préstamo" });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Préstamo no encontrado" });
    }

    return res.json({ message: "Préstamo eliminado con éxito" });
  });
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
