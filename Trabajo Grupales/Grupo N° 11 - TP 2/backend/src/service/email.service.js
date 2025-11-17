import nodemailer from 'nodemailer';
import 'dotenv/config';

const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: true,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    },
});
export const sendEmail = async (to, subject, htmlContent) => {
    try {
        await transporter.sendMail({
            from: `"Peluquería App" <${process.env.MAIL_USER}>`,
            to: to,
            subject: subject,
            html: htmlContent,
        });
    } catch (error) {
        throw new Error("Fallo al enviar el correo electrónico.");
    }
};