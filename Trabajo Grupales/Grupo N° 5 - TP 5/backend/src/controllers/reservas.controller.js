const { conection } = require("../config/DB")
const { prisma } = require("../config/prisma")

//Traer todas las reservas
const getReservas = async (req, res) => {
    try {
        const reservas = await prisma.reservas.findMany()
        res.json(reservas)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Error al traer las reservas" })
    }
}

//Crer una reserca
const addReserva = async (req, res) => {
    const { socio_id, actividad_id, fecha, hora } = req.body

    if (!socio_id || !actividad_id || !fecha) {
        return res.status(400).send({ mensaje: "Faltan datos obligatorios" })
    }

    try {
        const actividad = await prisma.actividades.findUnique({
            where: { id: Number(actividad_id)},
            include: {
                reservas: {
                    where: {fecha: new Date(fecha)}
                }
            }
        });

        //Validar si la actividad existe
        if (!actividad) {
            return res.status(404).send({ mensaje: "Actividad no encontrada" })
        }

        //Validar si hay cupos disponibles
        const cantidad = actividad.reservas.length;
        const cupoMax = actividad.cupo_maximo;

        if (cantidad >= cupoMax) {
            return res.status(400).send({ mensaje: "No hay cupos disponibles" })
        }

        //Crear la reserva
        await prisma.reservas.create({
            data: {
                socio_id: Number(socio_id),
                actividad_id: Number(actividad_id),
                fecha: new Date(fecha),
            }
        })

        res.status(201).send({ mensaje: "Reserva creada correctamente" })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Error al crear la reserva" })
    }
}

const deleteReserva = async (req, res) => {
    const id = Number(req.params.id)
        try {
            const reserva = await prisma.reservas.findUnique({
                where: { id }
            })

            if (!reserva) {
                return res.status(404).send({ mensaje: "Reserva no encontrada" })
            }

            await prisma.reservas.delete({
                where: { id }
            })

            res.send({ mensaje: "Reserva eliminada correctamente" })

    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Error al eliminar la reserva" })
    }
}

module.exports = { getReservas, addReserva, deleteReserva }

