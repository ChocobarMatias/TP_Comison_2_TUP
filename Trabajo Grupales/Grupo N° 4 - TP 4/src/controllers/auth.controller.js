const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const { hashPassword, comparePassword } = require('../utils/hash.utils');
const { sendPasswordResetEmail } = require('../services/email.service');
const prisma = require('../config/prisma');

function signToken(user) {
  return jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || '1d' }
  );
}

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Aquí luego irá: prisma.user.findUnique() y prisma.user.create()

    res.json({
      message: 'Controlador listo para Prisma (register)'
    });

  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Error en register' });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Aquí luego irá: prisma.user.findUnique() y comparePassword()

    res.json({
      message: 'Controlador listo para Prisma (login)'
    });

  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Error en login' });
  }
};

exports.me = async (req, res) => {
  try {

    // Aquí luego irá: prisma.user.findUnique()

    res.json({
      message: 'Controlador listo para Prisma (me)'
    });

  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Error en me' });
  }
};

exports.requestPasswordReset = async (req, res) => {
  try {

    // Aquí luego irá: prisma.user.update()

    res.json({
      message: 'Controlador listo para Prisma (request reset)'
    });

  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Error en reset request' });
  }
};

exports.resetPassword = async (req, res) => {
  try {

    // Aquí luego irá: prisma.user.update()

    res.json({
      message: 'Controlador listo para Prisma (reset password)'
    });

  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Error en resetPassword' });
  }
};
