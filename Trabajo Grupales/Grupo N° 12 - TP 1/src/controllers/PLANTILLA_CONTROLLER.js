/**
 * PLANTILLA DE CONTROLADORES CON PRISMA ORM
 * 
 * Copiar y adaptar para cada modelo (donadores, comedores, entregas, etc.)
 * 
 * Métodos incluidos:
 * - getAll        (SELECT *)
 * - getById       (SELECT WHERE id)
 * - create        (INSERT)
 * - update        (UPDATE)
 * - delete        (DELETE)
 */

import prisma from '../config/prisma.js';

// ============================================
// 🔍 GET ALL - Obtener todos los registros
// ============================================
export const getAll = async (req, res) => {
    try {
        // Cambiar 'modelo' por: productos, donadores, comedores, entregas
        const items = await prisma.modelo.findMany({
            // Opcional: ordenar resultados
            orderBy: { id: 'desc' },
            
            // Opcional: incluir relaciones
            // include: {
            //     relacion: true
            // }
        });
        
        res.json(items);
    } catch (error) {
        console.error('Error en getAll:', error);
        return res.status(500).json({ 
            error: 'Error al obtener los registros',
            details: error.message 
        });
    }
};

// ============================================
// 🔍 GET BY ID - Obtener un registro por ID
// ============================================
export const getById = async (req, res) => {
    try {
        const { id } = req.params;
        
        // Cambiar 'modelo' e 'id_campo' según corresponda
        const item = await prisma.modelo.findUnique({
            where: { 
                id_campo: parseInt(id) 
            },
            
            // Opcional: incluir relaciones
            // include: {
            //     relacion: true
            // }
        });
        
        if (!item) {
            return res.status(404).json({ 
                message: 'Registro no encontrado' 
            });
        }
        
        res.json(item);
    } catch (error) {
        console.error('Error en getById:', error);
        return res.status(500).json({ 
            error: 'Error al obtener el registro',
            details: error.message 
        });
    }
};

// ============================================
// ➕ CREATE - Crear un nuevo registro
// ============================================
export const create = async (req, res) => {
    try {
        // Extraer campos del body
        const { campo1, campo2, campo3 } = req.body;
        
        // Validaciones básicas (opcional pero recomendado)
        if (!campo1 || !campo2) {
            return res.status(400).json({ 
                error: 'Campos requeridos faltantes' 
            });
        }
        
        // Crear registro
        const nuevoItem = await prisma.modelo.create({
            data: {
                campo1,
                campo2,
                campo3
                // agregar todos los campos necesarios
            }
        });
        
        res.status(201).json({
            message: 'Registro creado exitosamente',
            data: nuevoItem
        });
    } catch (error) {
        console.error('Error en create:', error);
        
        // Manejar errores específicos de Prisma
        if (error.code === 'P2002') {
            return res.status(409).json({ 
                error: 'Ya existe un registro con esos datos únicos' 
            });
        }
        
        return res.status(500).json({ 
            error: 'Error al crear el registro',
            details: error.message 
        });
    }
};

// ============================================
// ✏️ UPDATE - Actualizar un registro
// ============================================
export const update = async (req, res) => {
    try {
        const { id } = req.params;
        const { campo1, campo2, campo3 } = req.body;
        
        // Actualizar registro
        const itemActualizado = await prisma.modelo.update({
            where: { 
                id_campo: parseInt(id) 
            },
            data: {
                campo1,
                campo2,
                campo3
                // solo incluir campos que quieras actualizar
            }
        });
        
        res.json({
            message: 'Registro actualizado exitosamente',
            data: itemActualizado
        });
    } catch (error) {
        console.error('Error en update:', error);
        
        // Manejar error de registro no encontrado
        if (error.code === 'P2025') {
            return res.status(404).json({ 
                error: 'Registro no encontrado' 
            });
        }
        
        // Manejar error de clave única duplicada
        if (error.code === 'P2002') {
            return res.status(409).json({ 
                error: 'Ya existe un registro con esos datos' 
            });
        }
        
        return res.status(500).json({ 
            error: 'Error al actualizar el registro',
            details: error.message 
        });
    }
};

// ============================================
// 🗑️ DELETE - Eliminar un registro
// ============================================
export const deleteItem = async (req, res) => {
    try {
        const { id } = req.params;
        
        // Eliminar registro
        await prisma.modelo.delete({
            where: { 
                id_campo: parseInt(id) 
            }
        });
        
        res.json({ 
            message: 'Registro eliminado exitosamente' 
        });
    } catch (error) {
        console.error('Error en delete:', error);
        
        // Manejar error de registro no encontrado
        if (error.code === 'P2025') {
            return res.status(404).json({ 
                error: 'Registro no encontrado' 
            });
        }
        
        // Manejar error de restricción de clave foránea
        if (error.code === 'P2003') {
            return res.status(409).json({ 
                error: 'No se puede eliminar porque tiene registros relacionados' 
            });
        }
        
        return res.status(500).json({ 
            error: 'Error al eliminar el registro',
            details: error.message 
        });
    }
};

// ============================================
// 🔍 BÚSQUEDA AVANZADA (Opcional)
// ============================================
export const search = async (req, res) => {
    try {
        const { query } = req.query;
        
        const items = await prisma.modelo.findMany({
            where: {
                OR: [
                    { campo1: { contains: query } },
                    { campo2: { contains: query } }
                ]
            }
        });
        
        res.json(items);
    } catch (error) {
        console.error('Error en search:', error);
        return res.status(500).json({ 
            error: 'Error en la búsqueda',
            details: error.message 
        });
    }
};

// ============================================
// 📊 PAGINACIÓN (Opcional)
// ============================================
export const getPaginated = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;
        
        const [items, total] = await Promise.all([
            prisma.modelo.findMany({
                skip,
                take: limit,
                orderBy: { id: 'desc' }
            }),
            prisma.modelo.count()
        ]);
        
        res.json({
            data: items,
            pagination: {
                page,
                limit,
                total,
                totalPages: Math.ceil(total / limit)
            }
        });
    } catch (error) {
        console.error('Error en getPaginated:', error);
        return res.status(500).json({ 
            error: 'Error al obtener registros paginados',
            details: error.message 
        });
    }
};

// ============================================
// 📋 CÓDIGOS DE ERROR COMUNES DE PRISMA
// ============================================
/*
P2000: El valor es demasiado largo
P2001: Registro no existe
P2002: Restricción única violada (duplicado)
P2003: Violación de clave foránea
P2025: Registro a actualizar/eliminar no encontrado
*/
