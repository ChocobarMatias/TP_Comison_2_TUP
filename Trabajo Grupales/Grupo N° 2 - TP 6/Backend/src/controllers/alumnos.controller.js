const db = require("../config/DB");

// Obtener todos los alumnos con datos de usuario
const getAll = (req, res) => {
  const consulta = `
    SELECT 
      alumnos.alumno_id,
      alumnos.nombre,
      alumnos.curso,
      alumnos.dni,
      alumnos.usuario_id,
      usuarios.nombre_usuario,
      usuarios.email
    FROM alumnos
    INNER JOIN usuarios ON alumnos.usuario_id = usuarios.usuario_id
  `;

  db.query(consulta, (err, rows) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.json(rows);
  });
};

// Obtener un alumno por ID con datos de usuario
const getById = (req, res) => {
  const { id } = req.params;

  const consulta = `
    SELECT 
      alumnos.alumno_id,
      alumnos.nombre,
      alumnos.curso,
      alumnos.dni,
      alumnos.usuario_id,
      usuarios.nombre_usuario,
      usuarios.email
    FROM alumnos
    INNER JOIN usuarios ON alumnos.usuario_id = usuarios.usuario_id
    WHERE alumnos.alumno_id = ?
  `;

  db.query(consulta, [id], (err, rows) => {
    if (err) {
      return res.status(500).json(err);
    }
    if (!rows.length) {
      return res.status(404).json({ error: "Alumno no encontrado" });
    }
    return res.json(rows[0]);
  });
};

// Crear un nuevo alumno
const create = (req, res) => {
  const { nombre, curso, dni } = req.body;

  const consulta = "INSERT INTO alumnos (nombre, curso, dni) VALUES (?, ?, ?)";

  db.query(consulta, [nombre, curso || null, dni], (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    return res.status(201).json({ message: "Alumno creado con exito" });
  });
};

// Actualizar un alumno y su usuario asociado
const update = (req, res) => {
  const { id } = req.params;
  const { nombre, curso, dni, nombre_usuario, email } = req.body;

  // Primero, obtener el usuario_id asociado al alumno
  const getUsuarioIdQuery = "SELECT usuario_id FROM alumnos WHERE alumno_id = ?";
  db.query(getUsuarioIdQuery, [id], (err, rows) => {
    if (err) {
      return res.status(500).json(err);
    }
    if (!rows.length) {
      return res.status(404).json({ error: "Alumno no encontrado" });
    }
    const usuario_id = rows[0].usuario_id;

    // Actualizar datos del alumno
    const updateAlumno = "UPDATE alumnos SET nombre=?, curso=?, dni=? WHERE alumno_id=?";
    db.query(updateAlumno, [nombre, curso || null, dni, id], (errAlumno, resultAlumno) => {
      if (errAlumno) {
        return res.status(500).json(errAlumno);
      }
      // Actualizar datos del usuario asociado si se proveen
      if (nombre_usuario || email) {
        const updateUsuario = [];
        const params = [];
        if (nombre_usuario) {
          updateUsuario.push("nombre_usuario = ?");
          params.push(nombre_usuario);
        }
        if (email) {
          updateUsuario.push("email = ?");
          params.push(email);
        }
        params.push(usuario_id);
        const updateUsuarioQuery = `UPDATE usuarios SET ${updateUsuario.join(", ")} WHERE usuario_id = ?`;
        db.query(updateUsuarioQuery, params, (errUsuario, resultUsuario) => {
          if (errUsuario) {
            return res.status(500).json(errUsuario);
          }
          return res.json({ message: "Alumno y usuario actualizados con exito" });
        });
      } else {
        return res.json({ message: "Alumno actualizado con exito" });
      }
    });
  });
};

// Eliminar un alumno
const remove = (req, res) => {
  const { id } = req.params;

  const consulta = "DELETE FROM alumnos WHERE alumno_id=?";

  db.query(consulta, [id], (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "No encontrado" });
    }

    return res.json({ message: "Alumno eliminado con exito" });
  });
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
