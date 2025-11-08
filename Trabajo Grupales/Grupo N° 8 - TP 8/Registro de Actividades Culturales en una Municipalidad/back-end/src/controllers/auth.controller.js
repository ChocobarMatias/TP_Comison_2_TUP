const prisma = require("../config/prisma"); //utilizo prisma
const jwt = require("jsonwebtoken");
const { hashPass, comparePass } = require("../utils/hash.utils");

// Registro de usuario
const registrar = async (req, res) => {
  const { nombre_usuario, mail_usuario, password_usuario, rol_usuario } = req.body;

  try {
    // Verificar si el usuario ya existe (por email)
    const existe = await prisma.usuarios.findUnique({
      where: { email_usuario: mail_usuario },
    });

    if (existe) {
      return res.status(400).json({ message: "El correo ya está registrado." });
    }

    // Hashear contraseña
    const passwordHasheado = await hashPass(password_usuario);

    // Crear nuevo usuario
    await prisma.usuarios.create({
      data: {
        nombre_usuario,
        email_usuario: mail_usuario,
        password_usuario: passwordHasheado,
        rol_usuario: rol_usuario || "asistente", // valor por defecto
      },
    });

    return res.status(201).json({ message: "Usuario registrado correctamente." });
  } catch (err) {
    console.error("Error en el registro:", err);
    return res.status(500).json({ message: "Error en el servidor." });
  }
};

// Login de usuario
const login = async (req, res) => {
  const { mail_usuario, password_usuario } = req.body;

  try {
    // Buscar usuario activo
    const usuario = await prisma.usuarios.findFirst({
      where: {
        email_usuario: mail_usuario,
        estado_usuario: 1,
      },
    });

    if (!usuario) {
      return res.status(400).json({ message: "Usuario y/o contraseña incorrectos." });
    }

    // Comparar contraseñas
    const passOk = await comparePass(password_usuario, usuario.password_usuario);
    if (!passOk) {
      return res.status(400).json({ message: "Usuario y/o contraseña incorrectos." });
    }

    // Generar token JWT
    const token = jwt.sign(
      {
        id_usuario: usuario.id_usuario,
        rol_usuario: usuario.rol_usuario,
      },
      process.env.JWT_SECRET,
      { expiresIn: "4h" }
    );

    return res.status(200).json({
      message: "Inicio de sesión exitoso.",
      token,
      usuario: {
        id_usuario: usuario.id_usuario,
        nombre_usuario: usuario.nombre_usuario,
        rol_usuario: usuario.rol_usuario,
      },
    });
  } catch (err) {
    console.error("Error en el login:", err);
    return res.status(500).json({ message: "Error en el servidor." });
  }
};

module.exports = { registrar, login };
