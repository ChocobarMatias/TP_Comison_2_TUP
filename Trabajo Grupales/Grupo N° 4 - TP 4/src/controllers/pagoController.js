exports.crearPlanDePago = async (req, res) => {
  try {
    const { cliente_id, servicio_id, numero_cuotas } = req.body;

    if (![1, 3, 6].includes(numero_cuotas)) {
      return res.status(400).json({ error: 'El número de cuotas debe ser 1, 3 o 6.' });
    }

    // Aquí luego irá la lógica con Prisma:
    // - buscar servicio
    // - calcular cuotas
    // - crear planPago
    // - crear cuotas en batch

    res.json({
      message: 'Controlador listo para Prisma (crear plan de pago)'
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en crearPlanDePago' });
  }
};

exports.marcarCuotaComoPagada = async (req, res) => {
  try {
    const { id } = req.params;

    // Aquí luego irá:
    // prisma.cuota.update()

    res.json({
      message: 'Controlador listo para Prisma (marcar cuota como pagada)'
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en marcarCuotaComoPagada' });
  }
};

exports.generarReporteCliente = async (req, res) => {
  try {
    const { clienteId } = req.params;

    // Aquí luego irá:
    // prisma.cliente.findMany({ include: ... })

    res.json({
      message: 'Controlador listo para Prisma (reporte cliente)'
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en generarReporteCliente' });
  }
};