const connection = require("../config/db");
const jwt = require("jsonwebtoken");
const { hashPass } = require("../utils/bcrypt");
const enviarReuperacionPassword = require("../services/emailService"); // tu email service
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET || "secret_key_tp";
const TOKEN_EXPIRATION = "1h";

// 📩 Generar link y enviar email
const recover = async (req, res) => {
  try {
    const { email } = req.body;

    const [rows] = await connection.query(
      "SELECT id_usuario FROM usuarios WHERE email_usuario = ? AND estado_usuario = 1 LIMIT 1",
      [email]
    );

    if (rows.length === 0) {
      return res.json({
        message:
          "Si el correo existe, se ha enviado un enlace de recuperación.",
      });
    }

    const id_usuario = rows[0].id_usuario;
    const token = jwt.sign({ id_usuario }, JWT_SECRET, {
      expiresIn: TOKEN_EXPIRATION,
    });

    const link = `http://localhost:3000/api/auth/reset/${token}`;

    await enviarReuperacionPassword(email, link);

    return res.json({
      message:
        "Correo de recuperación enviado correctamente. Revisa tu bandeja de entrada.",
    });
  } catch (err) {
    console.error("Error en recover:", err);
    return res.status(500).json({ error: "Error del servidor" });
  }
};

// 🔐 Cambiar contraseña usando el token del link
const reset = async (req, res) => {
  try {
    const { token } = req.params;
    const { password } = req.body;

    let payload;
    try {
      payload = jwt.verify(token, JWT_SECRET);
    } catch (err) {
      return res.status(400).json({ error: "Token inválido o expirado" });
    }

    const id_usuario = payload.id_usuario;
    const hashedPass = await hashPass(password);

    const [result] = await connection.query(
      "UPDATE usuarios SET password_usuario = ? WHERE id_usuario = ? AND estado_usuario = 1",
      [hashedPass, id_usuario]
    );

    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json({ error: "Usuario no encontrado o inactivo" });
    }

    return res.json({ message: "Contraseña actualizada correctamente" });
  } catch (err) {
    console.error("Error en reset:", err);
    return res.status(500).json({ error: "Error del servidor" });
  }
};

module.exports = { recover, reset };
