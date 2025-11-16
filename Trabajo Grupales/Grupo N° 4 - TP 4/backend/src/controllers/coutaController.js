const prisma = require("../config/prisma");

exports.pagarCuota = async (req, res) => {
  try {
    const { id } = req.params;

    // Verificar si existe
    const cuota = await prisma.cuotas.findUnique({
      where: { id: Number(id) },
    });

    if (!cuota) {
      return res.status(404).json({ error: "Cuota no encontrada" });
    }

    if (cuota.estado === "PAGADO") {
      return res.status(400).json({ error: "La cuota ya está pagada" });
    }

    const pagada = await prisma.cuotas.update({
      where: { id: Number(id) },
      data: {
        estado: "PAGADO",
        fecha_pago: new Date(),
      },
    });

    res.json({
      message: "Cuota pagada correctamente",
      cuota: pagada,
    });

  } catch (error) {
    console.error("Error en pagarCuota:", error);
    res.status(500).json({ error: "Error interno" });
  }
};
