const prisma = require("../config/prisma"); //utilizo prisma

// Obtener todos los eventos activos con su lugar
const obtenerTodos = async (req, res) => {
  try {
    const eventos = await prisma.eventos.findMany({
      where: { estado_evento: 1 },
      include: {
        lugares: {
          select: {
            nombre_lugar: true,
            tipo_lugar: true,
            direccion_lugar: true,
            capacidad_maxima_lugar: true,
          },
        },
      },
    });

    res.json(eventos);
  } catch (error) {
    console.error("Error al obtener eventos:", error);
    res.status(500).json({ error: "Error del servidor" });
  }
};

// Obtener un evento por ID con su lugar
const obtenerUno = async (req, res) => {
  try {
    const { id } = req.params;

    const evento = await prisma.eventos.findFirst({
      where: { id_evento: parseInt(id), estado_evento: 1 },
      include: {
        lugares: {
          select: {
            nombre_lugar: true,
            tipo_lugar: true,
            direccion_lugar: true,
            capacidad_maxima_lugar: true,
          },
        },
      },
    });

    if (!evento)
      return res.status(404).json({ message: "Evento no encontrado" });

    res.json(evento);
  } catch (error) {
    console.error("Error al obtener evento:", error);
    res.status(500).json({ error: "Error del servidor" });
  }
};

// Crear un nuevo evento
const crear = async (req, res) => {
  try {
    const {
      nombre_evento,
      fecha_inicio_evento,
      fecha_fin_evento,
      id_lugar,
      precio_entrada_evento,
      cupo_maximo_evento,
    } = req.body;

    const nuevoEvento = await prisma.eventos.create({
      data: {
        nombre_evento,
        fecha_inicio_evento: new Date(fecha_inicio_evento),
        fecha_fin_evento: new Date(fecha_fin_evento),
        id_lugar: parseInt(id_lugar),
        precio_entrada_evento: parseFloat(precio_entrada_evento),
        entradas_vendidas_evento: 0,
        // cupo_maximo_evento no existe como campo, pero podés agregarlo si lo definiste en tu DB
      },
    });

    res.status(201).json({
      message: "Evento creado correctamente",
      id_evento: nuevoEvento.id_evento,
    });
  } catch (error) {
    console.error("Error al crear evento:", error);
    res.status(500).json({ error: "Error del servidor" });
  }
};

// Actualizar evento
const actualizar = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      nombre_evento,
      fecha_inicio_evento,
      fecha_fin_evento,
      id_lugar,
      precio_entrada_evento,
    } = req.body;

    const actualizado = await prisma.eventos.updateMany({
      where: { id_evento: parseInt(id), estado_evento: 1 },
      data: {
        nombre_evento,
        fecha_inicio_evento: new Date(fecha_inicio_evento),
        fecha_fin_evento: new Date(fecha_fin_evento),
        id_lugar: parseInt(id_lugar),
        precio_entrada_evento: parseFloat(precio_entrada_evento),
      },
    });

    if (actualizado.count === 0)
      return res
        .status(404)
        .json({ message: "Evento no encontrado o inactivo" });

    res.json({ message: "Evento actualizado correctamente" });
  } catch (error) {
    console.error("Error al actualizar evento:", error);
    res.status(500).json({ error: "Error del servidor" });
  }
};

// Eliminación lógica (borrado lógico)
const eliminar = async (req, res) => {
  try {
    const { id } = req.params;

    const eliminado = await prisma.eventos.updateMany({
      where: { id_evento: parseInt(id) },
      data: { estado_evento: 0 },
    });

    if (eliminado.count === 0)
      return res.status(404).json({ message: "Evento no encontrado" });

    res.json({ message: "Evento eliminado correctamente" });
  } catch (error) {
    console.error("Error al eliminar evento:", error);
    res.status(500).json({ error: "Error del servidor" });
  }
};

// Agregar artista a un evento (tabla intermedia)
const agregarArtistaEvento = async (req, res) => {
  try {
    const { id_evento, id_artista, rol_artista_evento } = req.body;

    // Verificar si ya existe la relación
    const existe = await prisma.artistas_eventos.findFirst({
      where: {
        id_evento: parseInt(id_evento),
        id_artista: parseInt(id_artista),
      },
    });

    if (existe)
      return res
        .status(400)
        .json({ message: "El artista ya está asignado a este evento" });

    await prisma.artistas_eventos.create({
      data: {
        id_evento: parseInt(id_evento),
        id_artista: parseInt(id_artista),
        rol_artista_evento: rol_artista_evento || "principal",
      },
    });

    res
      .status(201)
      .json({ message: "Artista agregado al evento correctamente" });
  } catch (error) {
    console.error("Error al agregar artista al evento:", error);
    res.status(500).json({ error: "Error del servidor" });
  }
};

// Vender boleto
const venderBoleto = async (req, res) => {
  try {
    const { id_evento, id_usuario, cantidad_boletos, metodo_pago } = req.body;
    const cantidad = Number(cantidad_boletos);

    if (!id_evento || !id_usuario || !cantidad || cantidad <= 0) {
      return res
        .status(400)
        .json({ error: "Faltan datos o cantidad inválida" });
    }

    // Buscar evento activo
    const evento = await prisma.eventos.findFirst({
      where: { id_evento: parseInt(id_evento), estado_evento: 1 },
    });

    if (!evento)
      return res.status(404).json({ error: "Evento no encontrado o inactivo" });

    const disponibles =
      evento.cupo_maximo_evento - evento.entradas_vendidas_evento;

    if (disponibles <= 0 || cantidad > disponibles) {
      return res
        .status(400)
        .json({ error: "No hay cupos disponibles", disponibles });
    }

    // Actualizar entradas vendidas
    await prisma.eventos.update({
      where: { id_evento: parseInt(id_evento) },
      data: {
        entradas_vendidas_evento: {
          increment: cantidad,
        },
      },
    });

    // Registrar la venta
    const total_venta =
      parseFloat(evento.precio_entrada_evento) * cantidad;

    await prisma.ventas_boletos.create({
      data: {
        id_evento: parseInt(id_evento),
        id_usuario: parseInt(id_usuario),
        cantidad_boletos: cantidad,
        total_venta,
        metodo_pago: metodo_pago || "No especificado",
      },
    });

    res.status(201).json({ message: "Venta registrada correctamente" });
  } catch (error) {
    console.error("Error en venta de boletos:", error);
    res.status(500).json({ error: "Error del servidor" });
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
