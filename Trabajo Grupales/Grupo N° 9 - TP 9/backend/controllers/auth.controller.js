import prisma from '../config/DB.js';
import { hashPassword, comparePassword } from '../utils/hash.utils.js';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { sendEmail } from '../services/email.services.js'; 
import dotenv from 'dotenv';

dotenv.config();
const secretKey = process.env.JWT_SECRET;

export const register = async (req, res) => {
    const { nombre, apellido, dni, telefono, email, contrasena } = req.body;

    if (!nombre || !apellido || !dni || !email || !contrasena) {
        return res.status(400).json({ message: 'Faltan campos obligatorios (nombre, apellido, dni, email, contrasena)' });
    }

    try {
        const existing = await prisma.socios.findFirst({
            where: { OR: [{ dni }, { email }] }
        });
        
        if (existing) {
            return res.status(409).json({ message: 'El DNI o Email ya está registrado' });
        }

        const hashedPassword = await hashPassword(contrasena); 

        const newSocio = await prisma.socios.create({
            data: {
                nombre,
                apellido,
                dni,
                telefono: telefono || null,
                email,
                contrasena: hashedPassword, 
                rol: 'socio'
            }
        });

        const { contrasena: _, ...socioSinPass } = newSocio;
        res.status(201).json(socioSinPass);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear socio' });
    }
};

export const login = async (req, res) => {
    const { email, contrasena } = req.body;
    if (!email || !contrasena) {
        return res.status(400).json({ message: 'Email y contraseña son requeridos' });
    }

    try {
        const user = await prisma.socios.findFirst({ 
            where: { 
                email: email,
                activo: true 
            }
        });

        if (!user) { 
            return res.status(401).json({ message: 'Credenciales inválidas o usuario inactivo' });
        }
        
        if (!user.contrasena) {
             return res.status(401).json({ message: 'Este usuario no tiene configurada una contraseña.' });
        }

        const isValid = await comparePassword(contrasena, user.contrasena); 

        if (!isValid) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        const payload = {
            id: user.idSocio, 
            email: user.email,
            rol: user.rol 
        };

        if (!secretKey) {
            throw new Error('JWT_SECRET no está definida');
        }

        const token = jwt.sign(payload, secretKey, { expiresIn: '24h' });

        res.json({
            message: 'Login exitoso',
            token,
            user: { 
                id: user.idSocio, 
                nombre: user.nombre, 
                email: user.email, 
                rol: user.rol 
            }
        });
    } catch (error) {
        console.error('Error en login:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};

export const forgotPassword = async (req, res) => {
    const { email } = req.body;
    if (!email) return res.status(400).json({ message: 'Email es requerido' });

    try {
        const user = await prisma.socios.findFirst({
            where: { 
                email: email, 
                activo: true 
            }
        });

        if (!user) {
            console.log(`Solicitud de reseteo para email no encontrado: ${email}`);
            return res.json({ message: 'Si tu email está registrado, recibirás un enlace.' });
        }

        const resetToken = crypto.randomBytes(32).toString('hex');
        const hashedToken = crypto.createHash('sha256').update(resetToken).digest('hex');
        const expireDate = new Date(Date.now() + 3600000); 

        await prisma.socios.update({
            where: { idSocio: user.idSocio }, 
            data: {
                resetToken: hashedToken,
                resetTokenExpires: expireDate
            }
        });

        const resetUrl = `http://localhost:5173/reset-password/${resetToken}`; 

        const subject = 'Recuperación de Contraseña - Club Deportivo';
        const htmlContent = `<p>Para resetear tu contraseña, haz clic en este enlace: <a href="${resetUrl}">Resetear Contraseña</a>. Expira en 1 hora.</p>`;
        
        await sendEmail(user.email, subject, htmlContent);

        res.json({ message: 'Si tu email está registrado, recibirás un enlace.' });
    } catch (error) {
        console.error('Error en forgotPassword:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};

export const resetPassword = async (req, res) => {
    const { token } = req.params;
    const { nuevaContraseña } = req.body;

    if (!token || !nuevaContraseña) {
        return res.status(400).json({ message: 'Token y nueva contraseña son requeridos' });
    }

    const hashedToken = crypto.createHash('sha256').update(token).digest('hex');

    try {
        const user = await prisma.socios.findFirst({
            where: {
                resetToken: hashedToken,
                resetTokenExpires: { gt: new Date() } 
            }
        });

        if (!user) {
            return res.status(400).json({ message: 'Token inválido o expirado' });
        }

        const hashedPassword = await hashPassword(nuevaContraseña);

        await prisma.socios.update({
            where: { idSocio: user.idSocio },
            data: {
                contrasena: hashedPassword,
                resetToken: null,
                resetTokenExpires: null
            }
        });

        res.json({ message: 'Contraseña actualizada con éxito' });
    } catch (error) {
        console.error('Error en resetPassword:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};