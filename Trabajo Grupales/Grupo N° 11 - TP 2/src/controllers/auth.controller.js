// src/controllers/auth.controller.js
// Contiene la lógica de autenticación completa.

import { hashPassword, comparePassword } from '../utils/hash.utils.js';
import { generateAccessToken } from '../utils/jwt.utils.js';
import { prisma } from '../config/prismo.js';
import { sendEmail } from '../service/email.service.js';
import jwt from 'jsonwebtoken'; 


export const register = async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) return res.status(400).json({ message: 'Faltan campos.' });
    try {
        const existingUser = await prisma.users.findUnique({
            where: { email }
        });
        if (existingUser) return res.status(400).json({ message: 'El correo ya está registrado.' });
        
        // 1. HASHEAR (Bcrypt)
        const hashedPassword = await hashPassword(password);
        const result = await prisma.users.create({
            data: {
                name,
                email,
                password: hashedPassword
            }
        });
        const userId = result.id;

        // 2. Generar JWT
        const token = generateAccessToken({ id: userId });
        res.status(201).json({ message: 'Usuario registrado exitosamente.', token });
    } catch (error) {
        console.error("Error en register:", error);
        res.status(500).json({ message: 'Error interno al registrar.' });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: 'Debe ingresar email y contraseña.' });
    try {
        const user = await prisma.users.findUnique({
            where: { email },
            select: { id: true, password: true }
        });
        if (!user) return res.status(401).json({ message: 'Credenciales inválidas.' });

        // 1. COMPARAR (Bcrypt)
        const isMatch = await comparePassword(password, user.password);
        if (!isMatch) return res.status(401).json({ message: 'Credenciales inválidas.' });

        // 2. Generar JWT
        const token = generateAccessToken({ id: user.id });
        res.status(200).json({ message: 'Login exitoso.', token });
    } catch (error) {
        console.error("Error en login:", error);
        res.status(500).json({ message: 'Error en el servidor.' });
    }
}

// ... [Código de register y login de Franco] ...

// === PARTE DE GERMÁN: RECUPERACIÓN DE CONTRASEÑA (REQUISITO TP) ===

const RESET_TOKEN_SECRET = process.env.JWT_SECRET;
const EXPIRATION_TIME = '1h'; 

export const forgotPassword = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await prisma.users.findUnique({
            where: { email },
            select: { id: true, name: true }
        });
        if (!user) return res.status(200).json({ message: 'Si el correo existe, recibirá un enlace.' });

        // 1. Generar JWT de reseteo
        const resetToken = jwt.sign({ id: user.id }, RESET_TOKEN_SECRET, { expiresIn: EXPIRATION_TIME });
        const expires = new Date(Date.now() + 60 * 60 * 1000); 
        
        // 2. Guardar token y expiración en DB
        await prisma.users.update({
            where: { id: user.id },
            data: {
                resetPasswordToken: resetToken,
                resetPasswordExpires: expires
            }
        });

        // 3. Enviar correo
        const resetURL = `http://localhost:3000/api/auth/reset-password-form?token=${resetToken}`; 
        const htmlContent = `<p>Hola ${user.name}, haz clic en el siguiente enlace para restablecer tu contraseña:</p><a href="${resetURL}">Restablecer Contraseña</a>`;
        await sendEmail(email, 'Restablecimiento de Contraseña', htmlContent);

        res.status(200).json({ message: 'Correo de restablecimiento enviado.' });
    } catch (error) {
        console.error("Error en forgotPassword:", error);
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
};

export const resetPassword = async (req, res) => {
    
    const { token, newPassword } = req.body;
    if (!token || !newPassword) return res.status(400).json({ message: 'Faltan campos.' });
    try {
        // 1. Verificar el JWT
        const decoded = jwt.verify(token, RESET_TOKEN_SECRET);
        const userId = decoded.id;

        // 2. Validar que el token existe en la DB y NO ha expirado
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

        // 3. Hashear la NUEVA contraseña
        const hashedPassword = await hashPassword(newPassword);

        // 4. Actualizar contraseña y LIMPIAR campos de reseteo
        await prisma.users.update({
            where: { id: userId },
            data: {
                password: hashedPassword,
                resetPasswordToken: null,
                resetPasswordExpires: null
            }
        });
        res.status(200).json({ message: 'Contraseña restablecida con éxito.' });
    } catch (error) {
        if (error.name === 'TokenExpiredError' || error.name === 'JsonWebTokenError') {
            return res.status(400).json({ message: 'Token inválido o expirado.' });
        }
        console.error("Error en resetPassword:", error);
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
};