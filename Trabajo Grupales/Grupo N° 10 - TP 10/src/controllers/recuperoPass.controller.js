// 1. ¡Adiós 'pool', hola 'prisma'!
import prisma from '../config/prisma.js';

// 2. ¡El resto de imports son nuestros amigos! ¡Se quedan!
import dotenv from 'dotenv';
import jsonwebtoken from 'jsonwebtoken';
// ¡OJO! Asumo que tu 'nodemailer.js' está en 'src/config/'
import { recuperarContraseña } from '../config/nodemailer.js'; 
// ¡OJO! Asumo que tu 'hashPassword.js' está en 'src/utils/'
import { hashPassword } from '../utils/hashPassword.js'; 

dotenv.config();

// Controlador para iniciar el proceso de recuperación de contraseña
export const iniciarRecuperoContraseña = async (req, res) => {
  try {
    const { correoUsuario } = req.body;

    // 1 & 2 - Validaciones (¡Perfectas!)
    if (!correoUsuario) {
      return res.status(400).json({ error: 'El correo electrónico es requerido' });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correoUsuario)) {
      return res.status(400).json({ error: 'Formato de correo inválido' });
    }

    // 3. Verificar si el usuario existe (¡con Prisma!)
    // ANTES: pool.query("SELECT * FROM usuarios WHERE correoUsuario = ?")
    // AHORA:
    const usuario = await prisma.usuarios.findUnique({
      where: { correoUsuario },
    });

    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    // 4. Generar un token JWT (¡Igual que antes!)
    const token = jsonwebtoken.sign(
      {
        idUsuario: usuario.idUsuario,
        correoUsuario: usuario.correoUsuario,
        purpose: 'password-reset',
      },
      process.env.SECRET_JWT, // ¡Asegurate de tener SECRET_JWT en tu .env!
      { expiresIn: '1h' }
    );

    // 5. Enviar el correo electrónico (¡Igual que antes!)
    const link = `http://localhost:3000/api/pass/recuperar?token=${token}`; // ¡Ojo! Esta es la URL del API, ¿debería ser la del FRONTEND?
    await recuperarContraseña(correoUsuario, link);

    return res.status(200).json({
      message: 'Correo de recuperación enviado exitosamente',
    });
  } catch (error) {
    console.error(`Error al recuperar contraseña: ${error}`);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Controlador para resetear la contraseña
export const resetPass = async (req, res) => {
  try {
    const { token } = req.query;
    const { contraseñaUsuario } = req.body;

    // 1, 2 & 3 - Validaciones (¡Perfectas!)
    if (!token) {
      return res.status(400).json({ error: 'Token de recuperación requerido' });
    }
    if (!contraseñaUsuario) {
      return res.status(400).json({ error: 'Nueva contraseña requerida' });
    }
    if (contraseñaUsuario.length < 4) {
      return res.status(400).json({ error: 'La contraseña debe tener al menos 4 caracteres' });
    }

    // 4. Verificar y decodificar el token JWT (¡Igual que antes!)
    let decodedToken;
    try {
      decodedToken = jsonwebtoken.verify(token, process.env.SECRET_JWT);
    } catch (error) {
      return res.status(401).json({ error: 'Token inválido o expirado' });
    }

    // 5. Verificar propósito del token (¡Igual que antes!)
    if (decodedToken.purpose !== 'password-reset') {
      return res.status(401).json({ error: 'Token no válido para esta operación' });
    }

    // 6. Verificar que el usuario aún existe (¡con Prisma!)
    // ANTES: pool.query("SELECT * FROM usuarios WHERE idUsuario = ?")
    // AHORA:
    const usuarioExiste = await prisma.usuarios.findUnique({
      where: { idUsuario: decodedToken.idUsuario },
    });

    if (!usuarioExiste) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    // 7. Hashear la nueva contraseña (¡Igual que antes!)
    const hashedNuevaContraseña = await hashPassword(contraseñaUsuario);

    // 8. Actualizar la contraseña (¡con Prisma!)
    // ANTES: pool.query("UPDATE usuarios SET contraseñaUsuario = ? WHERE ...")
    // AHORA:
    await prisma.usuarios.update({
      where: {
        idUsuario: decodedToken.idUsuario,
      },
      data: {
        contraseñaUsuario: hashedNuevaContraseña,
      },
    });

    return res.status(200).json({
      message: 'Contraseña actualizada exitosamente',
    });
  } catch (error) {
    console.error(`Error en resetPass: ${error}`);
    if (error.code === 'P2025') {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};