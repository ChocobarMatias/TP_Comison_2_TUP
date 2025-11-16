const { prisma } = require("../config/prisma");
const bcrypt = require("bcryptjs");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password || email.length === 0 || password.length === 0) {
      return res.status(400).json({ error: "Faltan datos" });
    }
    if (!email.includes("@")) {
      return res.status(400).json({ error: "Email inválido" });
    }
    if (password.length < 2) {
      return res.status(400).json({ error: "Contraseña inválida" });
    }
    const administrador = await prisma.administradores.findUnique({
      where: { email: email },
    })
    
    if (!administrador) {
      return res.status(404).json({ error: "Usuario o Contraseña incorrecta" });
    }
    if (!administrador.activo) {
      return res.status(400).json({ error: "Usuario dado de baja" });
    }
    // Uso bcrypt.compare para validad la contraseña
    const passwordValida = await bcrypt.compare(password, administrador.contra);
    if (!passwordValida) return res.status(401).json({ error: "Usuario o Contraseña incorrecta" });
    const token = jwt.sign(
      { id: administrador.id, email: administrador.email, nombre: administrador.nombre },
      process.env.JWT_SECRET_ADMIN || process.env.JWT_SECRET,
      { expiresIn: "3h"}
    );
    // login exitoso
    return res.json({ token });

  }
  catch (error) {
    console.error("Error al consultar la base de datos:", error);
    return res.status(500).json({ error: "Error en el servidor" });
  }
}



module.exports = {
  loginAdmin
};
