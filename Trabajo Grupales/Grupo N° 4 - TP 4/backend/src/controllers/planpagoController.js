const prisma = require("../config/prisma");
const { addMonths } = require("date-fns");

// =======================================
// POST /planes-pago
// =======================================
exports.crearPlanPago = async (req, res) => {
  try {
    const { cliente_id, servicio_id, numero_cuotas, fecha_inicio } = req.body;

    if (!cliente_id || !servicio_id || !numero_cuotas || !fecha_inicio) {
      return res.status(400).json({ error: "Faltan datos obligatorios" });
    }

    // 1. Obtener el servicio y su precio
    const servicio = await prisma.servicios.findUnique({
      where: { id: servicio_id },
    });

    if (!servicio) {
      return res.status(404).json({ error: "Servicio no encontrado" });
    }

    const precioTotal = Number(servicio.precio_total);
    const montoPorCuota = precioTotal / numero_cuotas;

    // 2. Crear plan de pago
    const plan = await prisma.planes_pago.create({
      data: {
        cliente_id,
        servicio_id,
        numero_cuotas,
        fecha_inicio: new Date(fecha_inicio),
      },
    });

    // 3. Generar cuotas automáticamente
    const cuotas = [];

    for (let i = 1; i <= numero_cuotas; i++) {
      cuotas.push({
        plan_pago_id: plan.id,
        numero_cuota: i,
        monto: montoPorCuota.toFixed(2),
        fecha_vencimiento: addMonths(new Date(fecha_inicio), i - 1),
        estado: "PENDIENTE",
      });
    }

    // Crear todas las cuotas en una sola operación
    await prisma.cuotas.createMany({
      data: cuotas,
    });

    res.json({
      message: "Plan de pago creado con éxito",
      plan,
      cuotas,
    });

  } catch (error) {
    console.error("Error en crearPlanPago:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};


// =======================================
// GET /planes-pago
// =======================================
exports.obtenerPlanesPago = async (req, res) => {
  try {
    const planes = await prisma.planes_pago.findMany({
      include: {
        clientes: true,
        servicios: true,
      },
    });
    res.json(planes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en obtenerPlanesPago" });
  }
};


// =======================================
// GET /planes-pago/:id
// =======================================
exports.obtenerPlanPagoPorId = async (req, res) => {
  try {
    const { id } = req.params;

    const plan = await prisma.planes_pago.findUnique({
      where: { id: Number(id) },
      include: {
        clientes: true,
        servicios: true,
      },
    });

    if (!plan) {
      return res.status(404).json({ error: "Plan no encontrado" });
    }

    res.json(plan);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en obtenerPlanPagoPorId" });
  }
};


// =======================================
// GET /planes-pago/:id/cuotas
// =======================================
exports.obtenerCuotasPorPlan = async (req, res) => {
  try {
    const { id } = req.params;

    const cuotas = await prisma.cuotas.findMany({
      where: { plan_pago_id: Number(id) },
      orderBy: { numero_cuota: "asc" },
    });

    res.json(cuotas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en obtenerCuotasPorPlan" });
  }
};