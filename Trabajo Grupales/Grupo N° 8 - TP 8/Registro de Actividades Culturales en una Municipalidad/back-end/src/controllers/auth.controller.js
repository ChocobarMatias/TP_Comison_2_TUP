const connection = require("../config/bd");
const jwt = require("jsonwebtoken");
const { hashPass, comparePass } = require("../utils/hash.utils"); // tus funciones de hash

// 🔹 Registro de usuario
const registrar = async (req, res) => {
  const { nombre_usuario, mail_usuario, password_usuario, rol_usuario } =
    req.body;

  try {
    // Verificar si el usuario ya existe
    const [existe] = await connection.query(
      "SELECT * FROM usuarios WHERE mail_usuario = ?",
      [mail_usuario]
    );

    if (existe.length > 0) {
      return res.status(400).json({ message: "El correo ya está registrado." });
    }

    // Hashear contraseña
    const passwordHasheado = await hashPass(password_usuario);

    // Insertar usuario
    await connection.query(
      `INSERT INTO usuarios (nombre_usuario, mail_usuario, password_usuario, rol_usuario)
       VALUES (?, ?, ?, ?)`,
      [
        nombre_usuario,
        mail_usuario,
        passwordHasheado,
        rol_usuario || "asistente",
      ]
    );

    return res
      .status(201)
      .json({ message: "Usuario registrado correctamente." });
  } catch (err) {
    console.error("Error en el registro:", err);
    return res.status(500).json({ message: "Error en el servidor." });
  }
};

// 🔹 Login de usuario
const login = async (req, res) => {
  const { mail_usuario, password_usuario } = req.body;

  try {
    // Buscar usuario
    const [usuarios] = await connection.query(
      "SELECT * FROM usuarios WHERE mail_usuario = ? AND estado_usuario = 1",
      [mail_usuario]
    );

    if (usuarios.length === 0) {
      return res
        .status(400)
        .json({ message: "Usuario y/o contraseña incorrectos." });
    }

    const usuario = usuarios[0];

    // Comparar contraseñas
    const passOk = await comparePass(
      password_usuario,
      usuario.password_usuario
    );
    if (!passOk) {
      return res
        .status(400)
        .json({ message: "Usuario y/o contraseña incorrectos." });
    }

    // Generar token
    const token = jwt.sign(
      {
        id_usuario: usuario.id_usuario,
        rol_usuario: usuario.rol_usuario,
      },
      process.env.JWT_SECRET,
      { expiresIn: "4h" }
    );

    return res
      .status(200)
      .json({ message: "Inicio de sesión exitoso.", token });
  } catch (err) {
    console.error("Error en el login:", err);
    return res.status(500).json({ message: "Error en el servidor." });
  }
};

module.exports = { registrar, login };
