const db = require("../config/DB");

exports.getAll = (req, res) => {
  db.query("SELECT * FROM alumnos", (err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows);
  });
};

exports.getById = (req, res) => {
  db.query(
    "SELECT * FROM alumnos WHERE id = ?",
    [req.params.id],
    (err, rows) => {
      if (err) return res.status(500).json(err);
      if (!rows.length) return res.status(404).json({ error: "No encontrado" });
      res.json(rows[0]);
    }
  );
};

exports.create = (req, res) => {
  const { nombre, apellido, email } = req.body;
  db.query(
    "INSERT INTO alumnos (nombre, apellido, email) VALUES (?, ?, ?)",
    [nombre, apellido, email],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.status(201).json({ id: result.insertId, nombre, apellido, email });
    }
  );
};

exports.update = (req, res) => {
  const { nombre, apellido, email } = req.body;
  db.query(
    "UPDATE alumnos SET nombre=?, apellido=?, email=? WHERE id=?",
    [nombre, apellido, email, req.params.id],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ ok: true });
    }
  );
};

exports.remove = (req, res) => {
  db.query("DELETE FROM alumnos WHERE id=?", [req.params.id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ ok: true });
  });
};
