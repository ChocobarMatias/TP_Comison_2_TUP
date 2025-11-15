// src/services/email.service.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: "gmail", // Si usan Outlook cambiar por "hotmail"
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

exports.sendEmail = async ({ to, subject, html }) => {
  try {
    await transporter.sendMail({
      from: `"TP4 Pagos" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html
    });

    return { success: true };
  } catch (error) {
    console.error("Error enviando email:", error);
    return { success: false, error };
  }
};

// Enviar correo de recuperación de contraseña
exports.sendPasswordResetEmail = async (email, token) => {
  const resetUrl = `${process.env.FRONT_URL}/reset-password/${token}`;

  const html = `
    <h2>Recuperación de contraseña</h2>
    <p>Hacé click en el siguiente enlace para restablecer tu contraseña:</p>
    <a href="${resetUrl}" target="_blank">Restablecer contraseña</a>
    <p>Si no solicitaste este correo, podés ignorarlo.</p>
  `;

  return await this.sendEmail({
    to: email,
    subject: "Restablecer contraseña - TP4 Pagos",
    html
  });
};