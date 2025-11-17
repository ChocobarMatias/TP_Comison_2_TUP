const {conection} = require ("../config/DB")
const { prisma } = require('../config/prisma');

const getActividades = async (req, res) => {


   try {
    const consulta = await prisma.actividades.findMany({
    
    })
    res.status(200).json({message: "Actividades traidas con exito", consulta})
   }
   catch (error) {
    console.log("Error al traer las actividades", error);
    res.status(500).json({ error: "Error al traer las actividades" });
   }
}

const getActividadesHoy = async (req, res) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Convertimos a YYYY-MM-DD porque la columna es DATE
    const hoy = today.toISOString().slice(0, 10);

    try {
        const actividades = await prisma.actividades.findMany({
            select: {
                id: true,
                nombre: true,
                cupo_maximo: true,
                reservas: {
                    where: {
                        fecha: new Date(hoy) 
                    },
                    select: { id: true }
                }
            },
            orderBy: { nombre: "asc" }
        });

        const resultado = actividades.map(a => {
            const cuposReservados = a.reservas.length;

            return {
                id: a.id,
                nombre: a.nombre,
                cupo_maximo: a.cupo_maximo,
                cupos_reservados: cuposReservados,
                cupos_disponibles: a.cupo_maximo - cuposReservados
            };
        });

        return res.status(200).json({
            message: "Actividades del día traídas con éxito",
            resultado
        });

    } catch (error) {
        console.error("Error al traer actividades", error);
        return res.status(500).json({ error: "Error al traer actividades" });
    }
};



const CreateAtividades = async(req, res) => {
    
    try{
    const { nombre, cupo_maximo } = req.body;
    const consulta = await prisma.actividades.create({
        data: {
            nombre: nombre,
            cupo_maximo: cupo_maximo
        }
    })
    res.status(200).json({message:"Actividad creada con exito"})
    }
    catch (error) {
        console.log("Error al crear la actividad", error)
        res.status(500).json({error:"Error al crear la actividad"})
    }
}



const updateActividades = async(req, res) => {
   const { id } = req.params;
    const { nombre, cupo_maximo } = req.body;
    try {
        const consulta = await prisma.actividades.update({
            where: { id: parseInt(id) },
            data: {
                nombre: nombre,
                cupo_maximo: cupo_maximo
            }
        })
        res.status(200).json({message:"Actividad actualizada con exito"})
    }
    catch (error) {
        console.log("Error al actualizar la actividad", error)
        res.status(500).json({error:"Error al actualizar la actividad"})
    }
}

const deleteActividades = async (req, res) => {
    const {id} = req.params


    try{
        const consulta = await prisma.actividades.delete({
            where: { id: parseInt(id) }
        })
        res.status(200).json({message:"Actividad borrada con exito"})
    }
    catch (error) {
        console.log("Error al borrar la actividad", error)
        res.status(500).json({error:"Error al borrar la actividad"})
    }
}

module.exports = {getActividades, getActividadesHoy, CreateAtividades, updateActividades, deleteActividades}



