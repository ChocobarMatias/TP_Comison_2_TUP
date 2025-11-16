// 1. ¡Hola 'prisma' y 'jsonwebtoken'!
import prisma from '../config/prisma.js';
import jsonwebtoken from 'jsonwebtoken';
import dotenv from 'dotenv';

// 2. ¡Importamos el comparador de contraseñas!
// (Asumo que está en el mismo 'utils/hashPassword.js' que 'hashPassword')
import { comparePassword } from '../utils/hashPassword.js';

dotenv.config();

export const loginUsuario = async (req, res) => {
  try {
    const { correoUsuario, contraseñaUsuario } = req.body;

    // 1. Validar que los campos no estén vacíos
    if (!correoUsuario || !contraseñaUsuario) {
      return res.status(400).json({ error: 'Correo y contraseña son requeridos' });
    }

    // 2. Buscar al usuario en la BD (¡con Prisma!)
    // ANTES: pool.query('SELECT * FROM usuarios WHERE correoUsuario = ?')
    // AHORA:
    const usuario = await prisma.usuarios.findUnique({
      where: { correoUsuario },
    });

    // 3. ¡¡¡CHECK DE SEGURIDAD 1!!!
    // Si el usuario no existe, NO le decimos "Usuario no encontrado".
    // ¿Por qué? ¡Para no darle pistas a los hackers!
    if (!usuario) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    // 4. Comparar la contraseña (¡con bcryptjs!)
    // Comparamos la contraseña que mandó el usuario (ej: "1234")
    // con el hash que SÍ está en la BD (ej: "$2a$10$...")
    const esPasswordCorrecto = await comparePassword(
      contraseñaUsuario,
      usuario.contraseñaUsuario
    );

    // 5. ¡¡¡CHECK DE SEGURIDAD 2!!!
    // Si la contraseña es incorrecta, le damos el MISMO error genérico.
    if (!esPasswordCorrecto) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    // 6. ¡¡ÉXITO!! El usuario existe Y la clave es correcta.
    // ¡Generamos el token! (Igual que en 'recuperoPass', pero para 'auth')
    const token = jsonwebtoken.sign(
      {
        idUsuario: usuario.idUsuario,
        correoUsuario: usuario.correoUsuario,
        purpose: 'auth', // ¡Un propósito diferente!
      },
      process.env.SECRET_JWT,
      { expiresIn: '8h' } // ¡Le damos 8 horas!
    );

    // 7. ¡Enviamos el token al frontend!
    res.status(200).json({
      status: 200,
      message: 'Login exitoso',
      token, // ¡El frontend guarda esto!
    });
  } catch (error) {
    console.error('Error en el login:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};