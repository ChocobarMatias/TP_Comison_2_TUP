const db = require("../config/DB");

exports.getAll = (req, res) => {
  db.query("SELECT * FROM libros", (err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows);
  });
};

exports.getById = (req, res) => {
  db.query(
    "SELECT * FROM libros WHERE id = ?",
    [req.params.id],
    (err, rows) => {
      if (err) return res.status(500).json(err);
      if (!rows.length) return res.status(404).json({ error: "No encontrado" });
      res.json(rows[0]);
    }
  );
};

exports.create = (req, res) => {
  const { titulo, autor, anio } = req.body;
  db.query(
    "INSERT INTO libros (titulo, autor, anio) VALUES (?, ?, ?)",
    [titulo, autor, anio],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.status(201).json({ id: result.insertId, titulo, autor, anio });
    }
  );
};

exports.update = (req, res) => {
  const { titulo, autor, anio } = req.body;
  db.query(
    "UPDATE libros SET titulo=?, autor=?, anio=? WHERE id=?",
    [titulo, autor, anio, req.params.id],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ ok: true });
    }
  );
};

exports.remove = (req, res) => {
  db.query("DELETE FROM libros WHERE id=?", [req.params.id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ ok: true });
  });
};
