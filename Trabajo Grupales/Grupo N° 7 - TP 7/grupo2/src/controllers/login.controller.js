const jwt = require('jsonwebtoken');
const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();
const { comparePassword } = require('../utils/hash.utils');
require('dotenv').config();

const loginUsuario = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Buscar usuario por el mail real en la BD
    const usuario = await prisma.usuarios.findUnique({
      where: { MailUsuario: email }
    });

    if (!usuario || usuario.IsActive !== 1) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }

    // Comparación de contraseña hasheada
    const isValid = await comparePassword(password, usuario.PasswordUsuario);

    if (!isValid) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }

    // Generar token
    const token = jwt.sign(
      {
        id: usuario.idUsuario,
        email: usuario.MailUsuario,
        rol: usuario.RolUsuario
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || '1h' }
    );

    res.status(200).json({
      message: "Inicio de sesión exitoso",
      token
    });

  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    return res.status(500).json({ message: "Error en el servidor" });
  }
};

module.exports = { loginUsuario };
