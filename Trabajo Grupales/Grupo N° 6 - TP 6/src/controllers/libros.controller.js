// const db = require("../config/DB");

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




const prisma = require("../config/prisma");

// 📚 Obtener todos los libros
const getAll = async (req, res) => {
  try {
    const libros = await prisma.libros.findMany();
    return res.json(libros);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error al obtener los libros" });
  }
};

// 📘 Obtener un libro por ID
const getById = async (req, res) => {
  try {
    const { id } = req.params;

    const libro = await prisma.libros.findUnique({
      where: { libro_id: Number(id) },
    });

    if (!libro) {
      return res.status(404).json({ error: "Libro no encontrado" });
    }

    return res.json(libro);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error al obtener el libro" });
  }
};

// ➕ Crear un nuevo libro
const create = async (req, res) => {
  try {
    const { titulo, autor, categoria, ejemplares_disponibles } = req.body;

    await prisma.libros.create({
      data: {
        titulo,
        autor,
        categoria: categoria || null,
        ejemplares_disponibles: ejemplares_disponibles ? Number(ejemplares_disponibles) : 0,
      },
    });

    return res.status(201).json({ message: "Libro creado correctamente" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error al crear el libro" });
  }
};

// ✏ Actualizar un libro
const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, autor, categoria, ejemplares_disponibles } = req.body;

    const libroActualizado = await prisma.libros.update({
      where: { libro_id: Number(id) },
      data: {
        titulo,
        autor,
        categoria: categoria || null,
        ejemplares_disponibles: ejemplares_disponibles ? Number(ejemplares_disponibles) : 0,
      },
    });

    return res.json({ message: "Libro actualizado con éxito", libro: libroActualizado });
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ error: "Libro no encontrado" });
    }
    console.error(error);
    return res.status(500).json({ error: "Error al actualizar el libro" });
  }
};

// ❌ Eliminar un libro
const remove = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.libros.delete({
      where: { libro_id: Number(id) },
    });

    return res.json({ message: "Libro eliminado con éxito" });
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ error: "Libro no encontrado" });
    }
    console.error(error);
    return res.status(500).json({ error: "Error al eliminar el libro" });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
}