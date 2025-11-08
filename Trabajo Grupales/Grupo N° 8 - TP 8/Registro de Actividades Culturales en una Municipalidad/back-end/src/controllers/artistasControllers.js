const prisma = require("../config/prisma") // utilizo prisma

// Obtener todos los artistas activos
const obtenerTodos = async (req, res) => {
  try {
    const artistas = await prisma.artistas.findMany({
      where: { estado_artista: 1 },
    });
    res.json(artistas);
  } catch (error) {
    console.error("Error al obtener artistas:", error);
    res.status(500).json({ error: "Error del servidor" });
  }
};

// Obtener artistas de un evento específico
const obtenerPorEvento = async (req, res) => {
  const { id_evento } = req.params;

  try {
    const artistas = await prisma.artistas.findMany({
      where: {
        estado_artista: 1,
        artistas_eventos: {
          some: { id_evento: parseInt(id_evento) },
        },
      },
      include: {
        artistas_eventos: true,
      },
    });

    res.json(artistas);
  } catch (error) {
    console.error("Error al obtener artistas por evento:", error);
    res.status(500).json({ error: "Error del servidor" });
  }
};

// Obtener un artista por id
const obtenerUno = async (req, res) => {
  const { id } = req.params;

  try {
    const artista = await prisma.artistas.findFirst({
      where: {
        id_artista: parseInt(id),
        estado_artista: 1,
      },
    });

    if (!artista) {
      return res.status(404).json({ error: "Artista no encontrado" });
    }

    res.json(artista);
  } catch (error) {
    console.error("Error al obtener artista:", error);
    res.status(500).json({ error: "Error del servidor" });
  }
};

// Crear un nuevo artista
const crear = async (req, res) => {
  const {
    nombre_artista,
    tipo_arte_artista,
    biografia_artista,
    email_artista,
    contra_artista,
    telefono_artista,
  } = req.body;

  try {
    const nuevoArtista = await prisma.artistas.create({
      data: {
        nombre_artista,
        tipo_arte_artista,
        biografia_artista,
        email_artista,
        contra_artista,
        telefono_artista,
      },
    });

    res.status(201).json({
      message: "Artista creado",
      id_artista: nuevoArtista.id_artista,
    });
  } catch (error) {
    console.error("Error al crear artista:", error);
    res.status(500).json({ error: "Error del servidor" });
  }
};

// Actualizar artista
const actualizar = async (req, res) => {
  const { id } = req.params;
  const {
    nombre_artista,
    tipo_arte_artista,
    biografia_artista,
    email_artista,
    contra_artista,
    telefono_artista,
  } = req.body;

  try {
    const actualizado = await prisma.artistas.updateMany({
      where: {
        id_artista: parseInt(id),
        estado_artista: 1,
      },
      data: {
        nombre_artista,
        tipo_arte_artista,
        biografia_artista,
        email_artista,
        contra_artista,
        telefono_artista,
      },
    });

    if (actualizado.count === 0) {
      return res
        .status(404)
        .json({ error: "Artista no encontrado o inactivo" });
    }

    res.json({ message: "Artista actualizado" });
  } catch (error) {
    console.error("Error al actualizar artista:", error);
    res.status(500).json({ error: "Error del servidor" });
  }
};

// Borrado lógico de artista
const eliminar = async (req, res) => {
  const { id } = req.params;

  try {
    const eliminado = await prisma.artistas.updateMany({
      where: { id_artista: parseInt(id) },
      data: { estado_artista: 0 },
    });

    if (eliminado.count === 0) {
      return res.status(404).json({ error: "Artista no encontrado" });
    }

    res.json({ message: "Artista eliminado (borrado lógico)" });
  } catch (error) {
    console.error("Error al eliminar artista:", error);
    res.status(500).json({ error: "Error del servidor" });
  }
};

module.exports = {
  obtenerTodos,
  obtenerPorEvento,
  obtenerUno,
  crear,
  actualizar,
  eliminar,
};