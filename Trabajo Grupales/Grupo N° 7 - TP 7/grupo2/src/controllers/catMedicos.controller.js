const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

// 📋 Obtener todas las categorías activas
const getAllCatMedicos = async (req, res) => {
  try {
    const categorias = await prisma.catMedicos.findMany({
      where: {
        IsActive: 1
      }
    });
    res.status(200).json(categorias);
  } catch (error) {
    console.error('Error al obtener categorías médicas:', error);
    res.status(500).json({ message: 'Error al obtener las categorías médicas' });
  }
};

// 📋 Mostrar categorías inactivas
const mostrarCatMedicosInactivos = async (req, res) => {
  try {
    const categoriasInactivas = await prisma.catMedicos.findMany({
      where: {
        IsActive: 0
      }
    });
    if (categoriasInactivas.length === 0) {
      return res.status(404).json({ message: 'No hay categorías inactivas' });
    }
    res.status(200).json(categoriasInactivas);
  } catch (error) {
    console.error('Error al obtener categorías inactivas:', error);
    res.status(500).json({ message: 'Error al obtener las categorías inactivas' });
  }
};

// 📋 Obtener una categoría por ID
const getOneCatMedico = async (req, res) => {
  const id = req.params.id;
  try {
    const categoria = await prisma.catMedicos.findUnique({
      where: {
        idCatMedico: Number(id)
      }
    });
    if (!categoria) {
      return res.status(404).json({ message: 'Categoría médica no encontrada' });
    }
    res.status(200).json(categoria);
  } catch (error) {
    console.error('Error al obtener la categoría médica:', error);
    res.status(500).json({ message: 'Error al obtener la categoría médica' });
  }
};

// 🆕 Crear nueva categoría
const crearCatMedico = async (req, res) => {
  const { NombreCat } = req.body;
  try {
    const nuevaCategoria = await prisma.catMedicos.create({
      data: {
        NombreCat
      }
    });
    res.status(201).json({ message: 'Categoría médica creada exitosamente', categoria: nuevaCategoria });
  } catch (error) {
    console.error('Error al crear la categoría médica:', error);
    res.status(500).json({ message: 'Error al crear la categoría médica' });
  }
};

// ✏️ Actualizar categoría
const updateCatMedico = async (req, res) => {
  const id = req.params.id;
  const { NombreCat, IsActive } = req.body;
  try {
    const categoriaActualizada = await prisma.catMedicos.update({
      where: { idCatMedico: Number(id) },
      data: { NombreCat, IsActive }
    });
    res.status(200).json({ message: 'Categoría médica actualizada exitosamente', categoria: categoriaActualizada });
  } catch (error) {
    console.error('Error al actualizar la categoría médica:', error);
    res.status(500).json({ message: 'Error al actualizar la categoría médica' });
  }
};

// ❌ Eliminar físicamente una categoría
const deleteCatMedico = async (req, res) => {
  const id = req.params.id;
  try {
    await prisma.catMedicos.delete({
      where: { idCatMedico: Number(id) }
    });
    res.status(200).json({ message: 'Categoría médica eliminada exitosamente' });
  } catch (error) {
    console.error('Error al eliminar la categoría médica:', error);
    res.status(500).json({ message: 'Error al eliminar la categoría médica' });
  }
};

// 🚫 Desactivar (eliminación lógica)
const logicDeleteCatMedico = async (req, res) => {
  const id = req.params.id;
  try {
    const categoriaDesactivada = await prisma.catMedicos.update({
      where: { idCatMedico: Number(id) },
      data: { IsActive: 0 }
    });
    res.status(200).json({ message: 'Categoría médica desactivada exitosamente', categoria: categoriaDesactivada });
  } catch (error) {
    console.error('Error al desactivar la categoría médica:', error);
    res.status(500).json({ message: 'Error al desactivar la categoría médica' });
  }
};

// ✅ Activar categoría
const activarCatMedico = async (req, res) => {
  const id = req.params.id;
  try {
    const categoriaActivada = await prisma.catMedicos.update({
      where: { idCatMedico: Number(id) },
      data: { IsActive: 1 }
    });
    res.status(200).json({ message: 'Categoría médica activada exitosamente', categoria: categoriaActivada });
  } catch (error) {
    console.error('Error al activar la categoría médica:', error);
    res.status(500).json({ message: 'Error al activar la categoría médica' });
  }
};

module.exports = {
  getAllCatMedicos,
  mostrarCatMedicosInactivos,
  getOneCatMedico,
  crearCatMedico,
  updateCatMedico,
  deleteCatMedico,
  logicDeleteCatMedico,
  activarCatMedico
};
