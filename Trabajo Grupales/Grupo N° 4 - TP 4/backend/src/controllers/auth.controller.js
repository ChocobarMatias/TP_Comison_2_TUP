const prisma = require('../config/prisma');
const jwt = require('jsonwebtoken');
const { hashPassword, comparePassword } = require('../utils/hash.utils');

exports.register = async (req, res) => {
  try {
    const { nombre, email, password } = req.body;

    const existe = await prisma.usuarios.findUnique({
      where: { email }
    });

    if (existe) {
      return res.status(400).json({ error: 'El email ya está registrado' });
    }

    const hashed = await hashPassword(password);

    const user = await prisma.usuarios.create({
      data: {
        nombre,
        email,
        password: hashed
      }
    });

    res.json({ message: 'Usuario creado', user });

  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Error en register' });
  }
};
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.usuarios.findUnique({
      where: { email }
    });

    if (!user) return res.status(404).json({ error: "Usuario no encontrado" });

    const ok = await comparePassword(password, user.password);
    if (!ok) return res.status(400).json({ error: "Contraseña incorrecta" });

    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET);

    res.json({ message: "Login exitoso", token });

  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Error en login' });
  }
};