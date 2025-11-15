const prisma = require('../config/prisma');

exports.crearPlanDePago = async (req, res) => {
  try {
    const { cliente_id, servicio_id, numero_cuotas } = req.body;

    if (![1, 3, 6].includes(numero_cuotas)) {
      return res.status(400).json({ error: 'El número de cuotas debe ser 1, 3 o 6.' });
    }

    // Verificar servicio y obtener precio
    const servicio = await prisma.servicios.findUnique({
      where: { id: servicio_id }
    });

    if (!servicio) {
      return res.status(404).json({ error: 'Servicio no encontrado' });
    }

    const monto_por_cuota = servicio.precio_total / numero_cuotas;

    // Crear planPago
    const plan = await prisma.planes_pago.create({
      data: {
        cliente_id,
        servicio_id,
        numero_cuotas
      }
    });

    // Crear cuotas automáticamente
    let cuotasData = [];
    for (let i = 1; i <= numero_cuotas; i++) {
      cuotasData.push({
        plan_pago_id: plan.id,
        numero_cuota: i,
        monto: monto_por_cuota,
        estado: "PENDIENTE"
      });
    }

    await prisma.cuotas.createMany({
      data: cuotasData
    });

    res.json({
      message: 'Plan de pago creado',
      plan,
      cuotas: cuotasData
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en crearPlanDePago' });
  }
};
exports.marcarCuotaComoPagada = async (req, res) => {
  try {
    const { id } = req.params;

    const cuota = await prisma.cuotas.update({
      where: { id: Number(id) },
      data: { estado: "PAGADO" }
    });

    res.json({ message: 'Cuota pagada', cuota });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en marcarCuotaComoPagada' });
  }
};
exports.generarReporteCliente = async (req, res) => {
  try {
    const { clienteId } = req.params;

    const planes = await prisma.planes_pago.findMany({
      where: { cliente_id: Number(clienteId) },
      include: {
        servicio: true,
        cuotas: true
      }
    });

    res.json({ clienteId, planes });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en generarReporteCliente' });
  }
};
