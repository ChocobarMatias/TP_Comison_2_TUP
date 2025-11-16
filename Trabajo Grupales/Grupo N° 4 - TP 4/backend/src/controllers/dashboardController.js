const prisma = require("../config/prisma");

exports.obtenerResumen = async (req, res) => {
  try {
    const clientes = await prisma.clientes.count();
    const servicios = await prisma.servicios.count();
    const planes = await prisma.planes_pago.count();

    const cuotasPagadas = await prisma.cuotas.count({
      where: { estado: "PAGADO" },
    });

    const cuotasPendientes = await prisma.cuotas.count({
      where: { estado: "PENDIENTE" },
    });

    const totalRecaudado = await prisma.cuotas.aggregate({
      _sum: { monto: true },
      where: { estado: "PAGADO" },
    });

    res.json({
      clientes,
      servicios,
      planes,
      cuotasPagadas,
      cuotasPendientes,
      recaudado: totalRecaudado._sum.monto || 0,
    });

  } catch (error) {
    console.error("Error en obtenerResumen:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};