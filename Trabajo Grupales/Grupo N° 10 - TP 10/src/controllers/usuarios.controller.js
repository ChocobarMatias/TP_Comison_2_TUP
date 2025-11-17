// 1. ¡Adiós 'pool', hola 'prisma'!
import prisma from '../config/prisma.js';

// ¡Estos 'utils' los seguimos necesitando! ¡Están perfectos!
import { hashPassword } from '../utils/hashPassword.js';
import enviarEmailDeBievenida from '../utils/servicioDeEmail.js';

// POST (Crear) Un Usuario
export const crearUsuario = async (req, res) => {
  try {
    const { correoUsuario, contraseñaUsuario } = req.body;

    // 1 a 3- Validaciones (¡Las tuyas estaban perfectas!)
    if (!correoUsuario || !contraseñaUsuario) {
      return res.status(400).json({ error: 'Correo y contraseña son requeridos' });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correoUsuario)) {
      return res.status(400).json({ error: 'Formato de correo inválido' });
    }
    if (contraseñaUsuario.length < 4) {
      return res.status(400).json({ error: 'La contraseña debe tener al menos 4 caracteres' });
    }

    // 4- Verificar si el usuario ya existe (¡con Prisma!)
    // ANTES: pool.query('SELECT idUsuario FROM usuarios WHERE correoUsuario = ?')
    // AHORA:
    const usuarioExistente = await prisma.usuarios.findUnique({
      where: { correoUsuario },
    });

    if (usuarioExistente) {
      return res.status(400).json({ error: 'Ya existe un usuario con este correo electrónico' });
    }

    // 5- Hashear la contraseña (¡Igual que antes!)
    const hasheadContraseña = await hashPassword(contraseñaUsuario);

    // 6- Insertar el nuevo usuario (¡con Prisma!)
    // ANTES: pool.query('INSERT INTO usuarios (...) VALUES (?, ?)')
    // AHORA:
    const nuevoUsuario = await prisma.usuarios.create({
      data: {
        correoUsuario,
        // ¡Gracias a que arreglamos el schema, esto SÍ va a funcionar!
        contraseñaUsuario: hasheadContraseña,
      },
    });

    // 7- Enviar email de bienvenida (¡Igual que antes!)
    await enviarEmailDeBievenida(correoUsuario);

    res.status(201).json({
      message: 'Usuario creado exitosamente',
      userId: nuevoUsuario.idUsuario,
    });
  } catch (error) {
    console.error('Error en crear Usuario:', error);
    res.status(500).json({ error: 'Error en crear usuario' });
  }
};

// PUT (Actualizar) Un Usuario
export const modificarUsuario = async (req, res) => {
  try {
    const idUsuarioNum = parseInt(req.params.idUsuario);
    const { correoUsuario, contraseñaUsuario } = req.body;

    // 1 a 4 - Validaciones (¡Perfectas!)
    if (!idUsuarioNum || isNaN(idUsuarioNum)) {
      return res.status(400).json({ error: 'ID de usuario válido es requerido' });
    }
    // ... (el resto de validaciones de email y pass) ...

    // 5- Verificar si el usuario existe (¡con Prisma!)
    // ANTES: pool.query('SELECT idUsuario FROM usuarios WHERE idUsuario = ?')
    // AHORA:
    const usuarioExiste = await prisma.usuarios.findUnique({
      where: { idUsuario: idUsuarioNum },
    });
    if (!usuarioExiste) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    // 6- Verificar si el nuevo correo ya está en uso por OTRO usuario
    // ANTES: pool.query('SELECT ... WHERE correoUsuario = ? AND idUsuario != ?')
    // AHORA:
    const emailExistente = await prisma.usuarios.findFirst({
      where: {
        correoUsuario,
        idUsuario: {
          not: idUsuarioNum, // ¡Así se hace un "!= ?" en Prisma!
        },
      },
    });

    if (emailExistente) {
      return res.status(400).json({ error: 'Ya existe otro usuario con este correo electrónico' });
    }

    // 7- Hashear la nueva contraseña
    const hasheadContraseña = await hashPassword(contraseñaUsuario);

    // 8- Actualizar (¡con Prisma!)
    // ANTES: pool.query('UPDATE usuarios SET ... WHERE idUsuario = ?')
    // AHORA:
    await prisma.usuarios.update({
      where: {
        idUsuario: idUsuarioNum,
      },
      data: {
        correoUsuario,
        contraseñaUsuario: hasheadContraseña,
      },
    });

    res.status(200).json({ message: 'Usuario modificado exitosamente' });
  } catch (error) {
    console.error('Error en modificar Usuario:', error);
    if (error.code === 'P2025') {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.status(500).json({ error: 'Error en modificar usuario' });
  }
};

// GET Todos los Usuarios (¡¡¡SEGURO!!!)
export const obtenerUsuarios = async (req, res) => {
  try {
    // ANTES: pool.query('SELECT ..., contraseñaUsuario FROM ...') ¡¡¡MAL!!!
    // AHORA: ¡Usamos "select" para ELEGIR qué campos devolver!
    const usuarios = await prisma.usuarios.findMany({
      select: {
        idUsuario: true,
        correoUsuario: true,
        // ¡¡¡NO DEVOLVEMOS 'contraseñaUsuario'!!!
      },
    });
    res.status(200).json({ status: 200, payload: usuarios });
  } catch (error) {
    console.error('Error en obtener Usuarios:', error);
    res.status(500).json({ error: 'Error en obtener usuarios' });
  }
};

// GET Un Usuario por ID (¡¡¡SEGURO!!!)
export const obtenerUsuarioPorId = async (req, res) => {
  try {
    const idUsuarioNum = parseInt(req.params.idUsuario);

    // ANTES: pool.query('SELECT ..., contraseñaUsuario FROM ...') ¡¡¡MAL!!!
    // AHORA:
    const usuario = await prisma.usuarios.findUnique({
      where: {
        idUsuario: idUsuarioNum,
      },
      select: {
        idUsuario: true,
        correoUsuario: true,
        // ¡¡¡NO DEVOLVEMOS 'contraseñaUsuario'!!!
      },
    });

    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.status(200).json({ status: 200, payload: usuario });
  } catch (error) {
    console.error('Error en obtener Usuario por ID:', error);
    res.status(500).json({ error: 'Error en obtener usuario por ID' });
  }
};