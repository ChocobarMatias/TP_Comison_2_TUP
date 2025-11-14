const jwt = require('jsonwebtoken');
const { enviarRecuperacionPassword } = require('../service/email.service');
const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();
const dotenv = require('dotenv');
dotenv.config();


// ===============================
// 📌 Solicitar reset de contraseña
// ===============================
const solicitarReset = async (req, res) => {
  const { email } = req.body;

  try {
    // Buscar usuario por correo
    const usuario = await prisma.usuarios.findUnique({
      where: { MailUsuario: email }
    });

    if (!usuario) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    // Crear token JWT válido por 15 minutos
    const token = jwt.sign(
      { 
        id: usuario.idUsuario, 
        mail: usuario.MailUsuario 
      },
      process.env.JWT_SECRET,
      { expiresIn: '15m' }
    );

    // Link para enviar en el correo
    const link = `http://localhost:3000/api/auth/reset-password?token=${token}`;

    // Enviar email
    await enviarRecuperacionPassword(usuario.MailUsuario, link);

    return res.status(200).json({ message: "Email de recuperación enviado" });

  } catch (error) {
    console.error("Error al solicitar reset:", error);
    return res.status(500).json({ message: "Error en el servidor" });
  }
};


// ===============================
// 📌 Resetear la contraseña
// ===============================
const resetPassword = async (req, res) => {
  const { token } = req.query;
  const { nuevaPassword, confirmarPassword } = req.body;

  try {
    if (!token) {
      return res.status(400).json({ message: "Token no proporcionado" });
    }

    if (nuevaPassword !== confirmarPassword) {
      return res.status(400).json({ message: "Las contraseñas no coinciden" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const hashedPassword = await hashPassword(nuevaPassword);

    await prisma.usuarios.update({
      where: { idUsuario: decoded.id },
      data: {
        PasswordUsuario: hashedPassword
      }
    });

    return res.status(200).json({ message: "Contraseña restablecida correctamente" });

  } catch (error) {
    console.error("Error al resetear contraseña:", error);
    return res.status(500).json({ message: "Error en el servidor" });
  }
};

module.exports = { solicitarReset, resetPassword };
