const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});

async function enviarCorreo(email, nombre, link) {
  try {

    const mailOptions = {
      from: `"Gimnasio" <${process.env.MAIL_USER}>`,
      to: email,
      subject: 'Recuperación de contraseña',
      text: `Hola ${nombre}, haz click en este enlace para restablecer tu contraseña: ${link}`
    };
    await transporter.sendMail(mailOptions);
    return {status: 200, message: 'Correo enviado exitosamente' };
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return {status: 500, message: 'Error al enviar el correo' };
  }
}

module.exports = { enviarCorreo };
