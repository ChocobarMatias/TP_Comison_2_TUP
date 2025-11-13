const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const enviarReuperacionPassword = async (email, link) => {
  const htmlTemplate = `
    <div>
      <h2>Recuperación de contraseña</h2>
      <p>Haz clic en el siguiente enlace para restablecer tu contraseña:</p>
      <a href="${link}">${link}</a>
    </div>
  `;

  return transporter.sendMail({
    from: `Soporte <${process.env.SMTP_USER}>`,
    to: email,
    subject: "Recuperación de contraseña",
    html: htmlTemplate,
  });
};

module.exports = enviarReuperacionPassword;
