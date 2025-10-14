const db = require("../config/DB");

exports.getAll = (req, res) => {
  db.query("SELECT * FROM prestamos", (err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows);
  });
};

exports.getById = (req, res) => {
  db.query(
    "SELECT * FROM prestamos WHERE id = ?",
    [req.params.id],
    (err, rows) => {
      if (err) return res.status(500).json(err);
      if (!rows.length) return res.status(404).json({ error: "No encontrado" });
      res.json(rows[0]);
    }
  );
};

exports.create = (req, res) => {
  const { id_alumno, id_libro, fecha_prestamo, fecha_devolucion } = req.body;
  db.query(
    "INSERT INTO prestamos (id_alumno, id_libro, fecha_prestamo, fecha_devolucion) VALUES (?, ?, ?, ?)",
    [id_alumno, id_libro, fecha_prestamo, fecha_devolucion],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.status(201).json({
        id: result.insertId,
        id_alumno,
        id_libro,
        fecha_prestamo,
        fecha_devolucion,
      });
    }
  );
};

exports.update = (req, res) => {
  const { id_alumno, id_libro, fecha_prestamo, fecha_devolucion } = req.body;
  db.query(
    "UPDATE prestamos SET id_alumno=?, id_libro=?, fecha_prestamo=?, fecha_devolucion=? WHERE id=?",
    [id_alumno, id_libro, fecha_prestamo, fecha_devolucion, req.params.id],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ ok: true });
    }
  );
};

exports.remove = (req, res) => {
  db.query("DELETE FROM prestamos WHERE id=?", [req.params.id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ ok: true });
  });
};
