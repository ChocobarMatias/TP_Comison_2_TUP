const prisma = require('../config/prisma');
const jwt = require('jsonwebtoken');
const { hashPassword, comparePassword } = require('../utils/hash.utils');

// REGISTER
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Buscar si ya existe el email en users
    const existe = await prisma.users.findUnique({
      where: { email }
    });

    if (existe) {
      return res.status(400).json({ error: 'El email ya está registrado' });
    }

    const hashed = await hashPassword(password);

    const user = await prisma.users.create({
      data: {
        name,
        email,
        password: hashed
      }
    });

    res.json({ message: 'Usuario creado correctamente', user });

  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Error en register' });
  }
};


// LOGIN
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.users.findUnique({
      where: { email }
    });

    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    const ok = await comparePassword(password, user.password);
    if (!ok) {
      return res.status(400).json({ error: "Contraseña incorrecta" });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({ message: "Login exitoso", token });

  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Error en login' });
  }
};

exports.me = async (req, res) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ error: "Token invÃ¡lido" });
    }

    const user = await prisma.users.findUnique({
      where: { id: userId },
      select: { id: true, name: true, email: true, createdAt: true }
    });

    if (!user) return res.status(404).json({ error: "Usuario no encontrado" });

    res.json({ user });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en /me" });
  }
};