// const db = require("../config/prisma");

// // Obtener todos los libros
// const getAll = (req, res) => {
//   const consulta = "SELECT * FROM libros";

//   db.query(consulta, (err, rows) => {
//     if (err) {
//       return res.status(500).json(err);
//     }
//     return res.json(rows);
//   });
// };

// // Obtener un libro por ID
// const getById = (req, res) => {
//   const { id } = req.params;

//   const consulta = "SELECT * FROM libros WHERE libro_id = ?";

//   db.query(consulta, id, (err, rows) => {
//     if (err) {
//       return res.status(500).json(err);
//     }
//     if (!rows.length) {
//       return res.status(404).json({ error: "No encontrado" });
//     }
//     return res.json(rows[0]);
//   });
// };

// // Crear un nuevo libro
// const create = (req, res) => {
//   const { titulo, autor, categoria, ejemplares_disponibles } = req.body;

//   const consulta =
//     "INSERT INTO libros (titulo, autor, categoria, ejemplares_disponibles) VALUES (?, ?, ?, ?)";

//   db.query(
//     consulta,
//     [titulo, autor, categoria || null, ejemplares_disponibles || 0],
//     (err, result) => {
//       if (err) {
//         return res.status(500).json(err);
//       }

//       return res.status(201).json({ message: "Libro creado correctamente" });
//     }
//   );
// };

// // Actualizar un libro
// const update = (req, res) => {
//   const { id } = req.params;

//   const { titulo, autor, categoria, ejemplares_disponibles } = req.body;

//   const consulta =
//     "UPDATE libros SET titulo=?, autor=?, categoria=?, ejemplares_disponibles=? WHERE libro_id=?";

//   db.query(
//     consulta,
//     [titulo, autor, categoria || null, ejemplares_disponibles || 0, id],
//     (err, result) => {
//       if (err) {
//         return res.status(500).json(err);
//       }
//       if (result.affectedRows === 0) {
//         return res.status(404).json({ error: "Libro no encontrado" });
//       }
//       return res.json({ message: "Libro actualizado con exito" });
//     }
//   );
// };

// // Eliminar un libro
// const remove = (req, res) => {
//   const { id } = req.params;

//   const consulta = "DELETE FROM libros WHERE libro_id=?";

//   db.query(consulta, [id], (err, result) => {
//     if (err) {
//       return res.status(500).json(err);
//     }
//     if (result.affectedRows === 0) {
//       return res.status(404).json({ error: "No encontrado" });
//     }
//     return res.json({ message: "Libro eliminado con exito" });
//   });
// };

// module.exports = {
//   getAll,
//   getById,
//   create,
//   update,
//   remove
// };
const db = require("../config/prisma");

// Obtener todos los libros
const getAll = async (req, res) => {
  try {
    const rows = await db.libros.findMany();
    return res.json(rows);
  } catch (err) {
    return res.status(500).json(err);
  }
};

// Obtener un libro por ID
const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const rows = await db.$queryRaw`SELECT * FROM libros WHERE libro_id = ${Number(id)}`;
    if (!rows || rows.length === 0) {
      return res.status(404).json({ error: "Libro no encontrado" });
    }
    return res.json(rows[0]);
  } catch (err) {
    return res.status(500).json(err);
  }
};

// Crear un nuevo libro
const create = async (req, res) => {
  const { titulo, autor, categoria, ejemplares_disponibles } = req.body;
  try {
    await db.$executeRaw`
      INSERT INTO libros (titulo, autor, categoria, ejemplares_disponibles)
      VALUES (${titulo}, ${autor}, ${categoria || null}, ${ejemplares_disponibles || 0})
    `;
    return res.status(201).json({ message: "Libro creado correctamente" });
  } catch (err) {
    return res.status(500).json(err);
  }
};

// Actualizar un libro
const update = async (req, res) => {
  const { id } = req.params;
  const { titulo, autor, categoria, ejemplares_disponibles } = req.body;
  try {
    const result = await db.$executeRaw`
      UPDATE libros
      SET titulo=${titulo}, autor=${autor}, categoria=${categoria || null}, ejemplares_disponibles=${ejemplares_disponibles || 0}
      WHERE libro_id=${Number(id)}
    `;
    // Prisma $executeRaw devuelve la cantidad de filas afectadas (dependiendo del driver)
    return res.json({ message: "Libro actualizado con éxito" });
  } catch (err) {
    return res.status(500).json(err);
  }
};

// Eliminar un libro
const remove = async (req, res) => {
  const { id } = req.params;
  try {
    await db.$executeRaw`DELETE FROM libros WHERE libro_id=${Number(id)}`;
    return res.json({ message: "Libro eliminado con éxito" });
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
