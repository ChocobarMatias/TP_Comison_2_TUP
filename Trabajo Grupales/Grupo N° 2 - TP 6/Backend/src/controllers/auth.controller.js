const db = require("../config/DB");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { enviarEmailRecuperacion } = require("../services/email.service");
const { hashPassword, comparePassword } = require("../utils/hash.utils");

//traigo la clave secreta para el token y la expiracion
const SECRET_KEY = process.env.JWT_SECRET;

//Registrarse
const register = async (req, res) => {
  try {

    console.log("=== REGISTRO INICIADO ===");
    console.log("Body recibido:", req.body);


    const {
      usuario,
      contraseña,
      email,
      nombreAlumno,
      curso,
      dni,
      rol // ahora se puede recibir el rol

    } = req.body;

    // Validación mínima
    if (!usuario || !contraseña || !email || !nombreAlumno || !dni) {
      return res.status(400).json({ message: "Faltan datos obligatorios" });
    }

    const hash = await hashPassword(contraseña);

    // -----------------------------------------------------------
    // 1) INSERTAR USUARIO (ahora con rol)
    // -----------------------------------------------------------
    const sqlUsuario = `
      INSERT INTO usuarios (nombre_usuario, contraseña, email, rol)
      VALUES (?, ?, ?, ?)
    `;

    db.query(sqlUsuario, [usuario, hash, email, rol || 'alumno'], (err, resultUsuario) => {
      if (err) {


        return res.status(500).json({ 
          message: "Error al registrar usuario", 
          error: err.message 

        });
      }

      const usuarioId = resultUsuario.insertId;

      // -----------------------------------------------------------
      // 2) INSERTAR ALUMNO ASOCIADO
      // -----------------------------------------------------------
      const sqlAlumno = `
        INSERT INTO alumnos (nombre, curso, dni, usuario_id)
        VALUES (?, ?, ?, ?)
      `;

      db.query(
        sqlAlumno,
        [nombreAlumno, curso, dni, usuarioId],
        (errAlumno, resultAlumno) => {
          if (errAlumno) {
            return res.status(500).json({
              message: "El usuario se creó pero no se pudo registrar el alumno",
              error: errAlumno.message
            });
          }

          return res.status(201).json({
            message: "Registro exitoso (usuario + alumno)",
            usuario_id: usuarioId,
            alumno_id: resultAlumno.insertId
          });
        }
      );
    });

  } catch (error) {
    return res.status(500).json({ message: "Error interno", error: error.message });
  }
};


//Iniciar sesion
const login = (req, res) => {
  try {
    const { usuario, contraseña } = req.body;

    const consulta =
      "SELECT usuario_id, contraseña, nombre_usuario, email FROM usuarios WHERE nombre_usuario = ?";

    db.query(consulta, [usuario], async (err, results) => {
      if (err) {
        return res.status(500).json({ message: "Error al buscar el usuario" });
      }

      if (results.length === 0) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }

      const id_usuario = results[0].usuario_id;
      const hash = results[0].contraseña;
      const nombre_usuario = results[0].nombre_usuario;
      const email = results[0].email;

      const esValida = await comparePassword(String(contraseña), String(hash));

      if (!esValida) {
        return res.status(401).json({ message: "Contraseña incorrecta" });
      } else {
        //creacion del token para iniciar la sesion

        const token = jwt.sign(
          { id_usuario: id_usuario, nombre_usuario: usuario },
          SECRET_KEY,
          { expiresIn: "1h" }
        );

        return res
          .status(200)
          .json({ 
            message: "Usuario logueado con exito", 
            token: token,
            user: {
              id: id_usuario,
              nombre_usuario: nombre_usuario,
              email: email
            }
          });
      }
    });
  } catch (error) {
    return res.json(error);
  }
};

// Controlador para iniciar el proceso de recuperación de contraseña
const recuperarPassword = async (req, res) => {
  const { mail } = req.body; //recuperamos el mail del body

  const consulta = "SELECT * FROM usuarios WHERE email = ?"; // consulta para verificar si el usuario existe

  db.query(consulta, [mail], async (err, result) => {
    if (err)
      return res.status(500).json({ message: "Error en el servidor", err });
    if (result.length === 0) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    const usuario = result[0];

    const token = jwt.sign(
      { id: usuario.usuario_id, email: usuario.email },
      process.env.JWT_SECRET,
      { expiresIn: "15m" }
    );
    // generamos un token JWT con el id y email del usuario, con expiración de 15 minutos

    const link = `http://localhost:5173/auth/cambio_password/${token}`; // link de recuperación de contraseña
    await enviarEmailRecuperacion(mail, link); // enviamos el email de recuperación

    res.status(200).json({ message: "Email de recuperación enviado" }); // respondemos que el email fue enviado
  });
};

const cambioPasswordRecuperado = async (req, res) => {
  try {
    const { token } = req.params;
    const { contraseña } = req.body;

    if (!contraseña) {
      return res.status(400).json({ message: "La contraseña es requerida" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Hashear la nueva contraseña usando la función del utils
    const hashedPassword = await hashPassword(contraseña);

    const consulta = "UPDATE usuarios SET contraseña = ? WHERE usuario_id = ?";

    db.query(consulta, [hashedPassword, decoded.id], (err, result) => {
      if (err) {
        return res.status(500).json({ message: "Error en el servidor", err });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }

      res.status(200).json({ message: "Contraseña actualizada correctamente" });
    });
  } catch (error) {
    res.status(400).json({
      message: "Token inválido o expirado",
      name: error?.name,
      message: error?.message,
    });
  }
};

module.exports = {
  register,
  login,
  recuperarPassword,
  cambioPasswordRecuperado,
};
