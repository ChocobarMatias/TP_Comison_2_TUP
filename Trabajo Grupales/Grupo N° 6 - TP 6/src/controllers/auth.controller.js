// const db = require("../config/DB");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");

// const { enviarEmailRecuperacion } = require("../services/email.service");
// const { hashPassword, comparePassword } = require("../utils/hash.utils");

// //traigo la clave secreta para el token y la expiracion
// const SECRET_KEY = process.env.JWT_SECRET;

// //Registrarse
// const register = async (req, res) => {
//   try {
//     const { usuario, contraseña, email } = req.body;

//     const hash = await hashPassword(contraseña);

//     const consulta =
//       "INSERT INTO usuarios (nombre_usuario,contraseña,email) VALUES (?,?,?)";

//     db.query(consulta, [usuario, hash, email], (err, results) => {
//       if (err) {
//         console.log(err);

//         return res.status(500).json({ message: "Error al registrarse" });
//       }

//       return res.status(201).json({ message: "Usuario registrado con exito" });
//     });
//   } catch (error) {
//     return res.json(error);
//   }
// };

// //Iniciar sesion
// const login = (req, res) => {
//   try {
//     const { usuario, contraseña } = req.body;

//     const consulta =
//       "SELECT usuario_id, contraseña FROM usuarios WHERE nombre_usuario = ?";

//     db.query(consulta, [usuario], async (err, results) => {
//       if (err) {
//         console.log(err);

//         return res.status(500).json({ message: "Error al buscar el usuario" });
//       }

//       if (results.length === 0) {
//         return res.status(404).json({ message: "Usuario no encontrado" });
//       }

//       const id_usuario = results[0].usuario_id;
//       const hash = results[0].contraseña;

//       const esValida = await comparePassword(String(contraseña), String(hash));

//       if (!esValida) {
//         return res.status(401).json({ message: "Contraseña incorrecta " });
//       } else {
//         //creacion del token para iniciar la sesion

//         const token = jwt.sign(
//           { id_usuario: id_usuario, nombre_usuario: usuario },
//           SECRET_KEY,
//           { expiresIn: "1h" }
//         );

//         return res
//           .status(200)
//           .json({ message: "Usuario logueado con exito", token: token });
//       }
//     });
//   } catch (error) {
//     return res.json(error);
//   }
// };

// // Controlador para iniciar el proceso de recuperación de contraseña
// const recuperarPassword = async (req, res) => {
//   const { mail } = req.body; //recuperamos el mail del body

//   const consulta = "SELECT * FROM usuarios WHERE email = ?"; // consulta para verificar si el usuario existe

//   db.query(consulta, [mail], async (err, result) => {
//     if (err)
//       return res.status(500).json({ message: "Error en el servidor", err });
//     if (result.length === 0) {
//       return res.status(404).json({ message: "Usuario no encontrado" });
//     }
//     const usuario = result[0];

//     const token = jwt.sign(
//       { id: usuario.usuario_id, email: usuario.email },
//       process.env.JWT_SECRET,
//       { expiresIn: "15m" }
//     );
//     // generamos un token JWT con el id y email del usuario, con expiración de 15 minutos

//     const link = `http://localhost:3000/auth/cambio_password/${token}`; // link de recuperación de contraseña
//     await enviarEmailRecuperacion(mail, link); // enviamos el email de recuperación

//     res.status(200).json({ message: "Email de recuperación enviado" }); // respondemos que el email fue enviado
//   });
// };

// const cambioPasswordRecuperado = async (req, res) => {
//   try {
//     const { token } = req.params;
//     const { newPassword } = req.body;

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     console.log(decoded);

//     // Hashear la nueva contraseña
//     const hashedPassword = await bcrypt.hash(String(newPassword), 10);

//     const consulta = "UPDATE usuarios SET contraseña = ? WHERE usuario_id = ?";

//     db.query(consulta, [hashedPassword, decoded.id], (err, result) => {
//       if (err)
//         return res.status(500).json({ message: "Error en el servidor", err });

//       if (result.affectedRows === 0)
//         // para UPDATE se usa affectedRows
//         return res.status(404).json({ message: "Usuario no encontrado" });

//       res.status(200).json({ message: "Contraseña actualizada correctamente" });
//     });
//   } catch (error) {
//     res.status(400).json({
//       message: "Token inválido o expirado",
//       name: error?.name,
//       message: error?.message,
//     });
//   }
// };

// module.exports = {
//   register,
//   login,
//   recuperarPassword,
//   cambioPasswordRecuperado,
// };




// src/controllers/auth.controller.js
const prisma = require("../config/prisma");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { enviarEmailRecuperacion } = require("../services/email.service");
const { hashPassword, comparePassword } = require("../utils/hash.utils");

const SECRET_KEY = process.env.JWT_SECRET;
const FRONT_URL = process.env.FRONT_URL || "http://localhost:3000";

// 📌 REGISTRAR USUARIO
const register = async (req, res) => {
  try {
    const { usuario, contraseña, email } = req.body;

    if (!usuario || !contraseña || !email) {
      return res.status(400).json({ message: "usuario, contraseña y email son obligatorios" });
    }

    const userExists = await prisma.usuarios.findUnique({
      where: { nombre_usuario: usuario },
    });

    if (userExists) {
      return res.status(400).json({ message: "El usuario ya existe" });
    }

    const hash = await hashPassword(contraseña);

    await prisma.usuarios.create({
      data: { nombre_usuario: usuario, contraseña: hash, email },
    });

    return res.status(201).json({ message: "Usuario registrado con éxito" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error al registrarse", error });
  }
};

// 📌 INICIAR SESIÓN
const login = async (req, res) => {
  try {
    const { usuario, contraseña } = req.body;

    const user = await prisma.usuarios.findUnique({
      where: { nombre_usuario: usuario },
    });

    if (!user) return res.status(404).json({ message: "Usuario no encontrado" });

    const esValida = await comparePassword(String(contraseña), String(user.contraseña));
    if (!esValida) return res.status(401).json({ message: "Contraseña incorrecta" });

    const token = jwt.sign(
      { id_usuario: user.usuario_id, nombre_usuario: user.nombre_usuario },
      SECRET_KEY,
      { expiresIn: "1h" }
    );

    return res.status(200).json({ message: "Usuario logueado con éxito", token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error en el servidor", error });
  }
};

// 📌 RECUPERAR CONTRASEÑA
const recuperarPassword = async (req, res) => {
  try {
    const { mail } = req.body;

    if (!mail) return res.status(400).json({ message: "El email es obligatorio" });

    const user = await prisma.usuarios.findUnique({ where: { email: mail } });
    if (!user) return res.status(404).json({ message: "Usuario no encontrado" });

    const token = jwt.sign(
      { id: user.usuario_id, email: user.email },
      SECRET_KEY,
      { expiresIn: "15m" }
    );

    // 👇 AQUÍ estaba el error: faltaban backticks
    const link = `${FRONT_URL}/auth/cambio_password/${token}`;

    await enviarEmailRecuperacion(mail, link);

    res.status(200).json({ message: "Email de recuperación enviado" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error en el servidor", error });
  }
};

// 📌 CAMBIAR CONTRASEÑA (DESDE EMAIL)
const cambioPasswordRecuperado = async (req, res) => {
  try {
    const { token } = req.params;
    const { newPassword } = req.body;

    if (!newPassword) return res.status(400).json({ message: "La nueva contraseña es obligatoria" });

    const decoded = jwt.verify(token, SECRET_KEY);

    const hashedPassword = await bcrypt.hash(String(newPassword), 10);

    const updatedUser = await prisma.usuarios.update({
      where: { usuario_id: decoded.id },
      data: { contraseña: hashedPassword },
    });

    if (!updatedUser) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    res.status(200).json({ message: "Contraseña actualizada correctamente" });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      message: "Token inválido o expirado",
      name: error?.name,
      error: error?.message,
    });
  }
};

module.exports = {
  register,
  login,
  recuperarPassword,
  cambioPasswordRecuperado,
};
