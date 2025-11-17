import { hashPassword, comparePassword } from '../utils/hash.utils.js';
import { generateAccessToken } from '../utils/jwt.utils.js';
import { prisma } from '../config/prismo.js';
import { sendEmail } from '../service/email.service.js';
import jwt from 'jsonwebtoken'; 


export const register = async (req, res) => {
    const { nombre, email, contrasena } = req.body;
    if (!nombre || !email || !contrasena) return res.status(400).json({ message: 'Faltan campos.' });
    try {
        const existingUser = await prisma.users.findUnique({
            where: { email }
        });
        if (existingUser) return res.status(400).json({ message: 'El correo ya está registrado.' });
        
        const hashedPassword = await hashPassword(contrasena);
        const result = await prisma.users.create({
            data: {
                nombre,
                email,
                contrasena: hashedPassword
            }
        });
        const userId = result.id;

        const token = generateAccessToken({ id: userId });
        res.status(201).json({ message: 'Usuario registrado exitosamente.', token });
    } catch (error) {
        res.status(500).json({ message: 'Error interno al registrar.' });
    }
};

export const login = async (req, res) => {
    const { email, contrasena } = req.body;
    if (!email || !contrasena) return res.status(400).json({ message: 'Debe ingresar email y contraseña.' });
    try {
        const user = await prisma.users.findUnique({
            where: { email },
            select: { id: true, contrasena: true }
        });
        if (!user) return res.status(401).json({ message: 'Credenciales inválidas.' });

        const isMatch = await comparePassword(contrasena, user.contrasena);
        if (!isMatch) return res.status(401).json({ message: 'Credenciales inválidas.' });

        const token = generateAccessToken({ id: user.id });
        res.status(200).json({ message: 'Login exitoso.', token });
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor.' });
    }
}

const RESET_TOKEN_SECRET = process.env.JWT_SECRET;
const EXPIRATION_TIME = '1h'; 

export const forgotPassword = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await prisma.users.findUnique({
            where: { email },
            select: { id: true, nombre: true }
        });
        if (!user) return res.status(200).json({ message: 'Si el correo existe, recibirá un enlace.' });

        const resetToken = jwt.sign({ id: user.id }, RESET_TOKEN_SECRET, { expiresIn: EXPIRATION_TIME });
        const expires = new Date(Date.now() + 60 * 60 * 1000); 
        
        await prisma.users.update({
            where: { id: user.id },
            data: {
                resetPasswordToken: resetToken,
                resetPasswordExpires: expires
            }
        });

        const resetURL = `http://localhost:3000/api/auth/reset-password-form?token=${resetToken}`; 
        const htmlContent = `<p>Hola ${user.nombre}, haz clic en el siguiente enlace para restablecer tu contraseña:</p><a href="${resetURL}">Restablecer Contraseña</a>`;
        await sendEmail(email, 'Restablecimiento de Contraseña', htmlContent);

        res.status(200).json({ message: 'Correo de restablecimiento enviado.' });
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
};

export const resetPassword = async (req, res) => {
    
    const { token, newPassword } = req.body;
    if (!token || !newPassword) return res.status(400).json({ message: 'Faltan campos.' });
    try {
        const decoded = jwt.verify(token, RESET_TOKEN_SECRET);
        const userId = decoded.id;

        const user = await prisma.users.findFirst({
            where: {
                id: userId,
                resetPasswordToken: token,
                resetPasswordExpires: {
                    gt: new Date()
                }
            }
        });
        
        if (!user) return res.status(400).json({ message: 'Token inválido o expirado.' });

        const hashedPassword = await hashPassword(newPassword);

        await prisma.users.update({
            where: { id: userId },
            data: {
                contrasena: hashedPassword,
                resetPasswordToken: null,
                resetPasswordExpires: null
            }
        });
        res.status(200).json({ message: 'Contraseña restablecida con éxito.' });
    } catch (error) {
        if (error.name === 'TokenExpiredError' || error.name === 'JsonWebTokenError') {
            return res.status(400).json({ message: 'Token inválido o expirado.' });
        }
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
};