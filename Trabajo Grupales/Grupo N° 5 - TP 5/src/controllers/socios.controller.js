const { conection } = require("../config/DB");
const { prisma } = require("../config/prisma");
const bcrypt = require("bcryptjs");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const PORT = process.env.PORT || 8080;
const { enviarCorreo } = require("../config/mailer");

const getSocios = async (req, res) => {
  try {
    const socios = await prisma.socios.findMany({
      where: { activo: true },
    });
    res.status(200).json({ message: "Socios traidos con exito", socios });
  } catch (error) {
    console.log("Error al traer los socios", error);
    res.status(500).json({ error: "Error al traer los socios" });
  }
};

const getSocio = async (req, res) => {
  const id = req.params.id;
  try {
    const socio = await prisma.socios.findUnique({
      where: { idSocio: parseInt(id) },
    });
    res.status(200).json({ message: "Socio traido con exito", socio });
  } catch (error) {
    console.log("Error al traer el socio", error);
    res.status(500).json({ error: "Error al traer el socio" });
  }
};

const createSocio = async (req, res) => {
  const { nombreSocio, apellidoSocio, emailSocio, contraSocio } = req.body;

  try {
    let salt = await bcrypt.genSalt(10);
    let contraEncrip = await bcrypt.hash(contraSocio, salt);

    await prisma.socios.create({
      data: {
        nombreSocio: nombreSocio,
        apellidoSocio: apellidoSocio,
        emailSocio: emailSocio,
        contraSocio: contraEncrip,
      },
    });
    res.status(201).json({ message: "Socio creado con exito" });
  } catch (error) {
    console.log("Error interno al crear socio", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

const updateSocio = async (req, res) => {
  const id = req.params.id;
  const { nombreSocio, apellidoSocio, emailSocio, contraSocio } = req.body;

  let salt = await bcrypt.genSalt(10);
  let contraEncrip = await bcrypt.hash(contraSocio, salt);

  try {
    await prisma.socios.update({
      where: { idSocio: parseInt(id) },
      data: {
        nombreSocio: nombreSocio,
        apellidoSocio: apellidoSocio,
        emailSocio: emailSocio,
        contraSocio: contraEncrip,
      },
    });
    res.status(201).json({ message: "Socio actualizado con exito" });
  } catch (error) {
    console.log("Error al actualizar el socio", error);
    res.status(500).json({ error: "Error al actulizar el socio" });
  }
};

const darBajaSocio = async (req, res) => {
  const id = req.params.id;

  try {
    await prisma.socios.update({
      where: { idSocio: parseInt(id) },
      data: {
        activo: false,
      },
    });
    res.status(200).json({ message: "Socio dado de baja con exito" });
  } catch (error) {
    console.log("Error al dar de baja al socio", error);
    res.status(500).json({ error: "Error al dar de baja al socio" });
  }
};

const reactivarSocio = async (req, res) => {
  const id = req.params.id;
  const consulta = "update socios set activo = true where idSocio=?";

  try {
    await prisma.socios.update({
      where: { idSocio: parseInt(id) },
      data: { activo: true },
    });
    res.status(200).json({ message: "Socio reactivado con exito" });
  } catch (error) {
    console.log("Error al reactivar al socio", error);
    res.status(500).json({ error: "Error al reactivar al socio" });
  }
  c;
};

const loginSocio = async (req, res) => {
  const { email, password } = req.body;
  console.log("Login request body:", req.body);

  try {
    if (!email || !password || email.length === 0 || password.length === 0) {
      return res.status(400).json({ error: "Faltan datos" });
    }
    if (!email.includes("@")) {
      return res.status(400).json({ error: "Email inválido" });
    }
    if (password.length < 6) {
      return res.status(400).json({ error: "Contraseña inválida" });
    }
    const socio = await prisma.socios.findUnique({
      where: { emailSocio: email },
    })
    
    if (!socio) {
      return res.status(404).json({ error: "Usuario o Contraseña incorrecta" });
    }
    if (!socio.activo) {
      return res.status(400).json({ error: "Usuario dado de baja" });
    }
    const passwordValida = await bcrypt.compare(password, socio.contraSocio);
    if (!passwordValida) {
      return res.status(401).json({ error: "Usuario o Contraseña incorrecta" });
    }
    const token = jwt.sign(
      { id: socio.idSocio, email: socio.emailSocio },
      process.env.JWT_SECRET,
      { expiresIn: "3h"}
    );
    console.log("Login exitoso, token generado para:", socio.emailSocio);
    return res.json({ token });

  }
  catch (error) {
    console.error("Error al consultar la base de datos:", error);
    return res.status(500).json({ error: "Error en el servidor" });
  }
}

const recuperarPassword = async (req, res) => {
  const { email } = req.body;
  //const consulta = "SELECT * FROM socios WHERE emailSocio = ?";
  try {
    const socio = await prisma.socios.findUnique({
      where: { emailSocio: email },
    })
    
    if (!socio) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    if (!socio.activo) {
      return res.status(400).json({ error: "Usuario dado de baja" });
    }
    const token = jwt.sign(
      { id: socio.idSocio, email: socio.emailSocio },
      process.env.JWT_SECRET,
      { expiresIn: "15m" }
    );
    const link = `http://localhost:${PORT}/api/auth/reset?id=${socio.idSocio}&token=${token}`;
    console.log(link);
    //TODO: Ver tema de envio de correo
    const envio = await enviarCorreo(socio.emailSocio, socio.nombreSocio, link)
    res.status(envio.status).json({ message: envio.message });

  } 
  catch (error) {
    console.error("Error al consultar la base de datos:", error);
    return res.status(500).json({ error: "Error en el servidor" });
  }
};

const resetPassword = async (req, res) => {
  const { id, token } = req.query;
  const { password } = req.body;
  
  try {
    jwt.verify(token, process.env.JWT_SECRET || "clave_secreta");

    const socio = await prisma.socios.findUnique({
      where: { idSocio: parseInt(id) },
    })

    if (!socio) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    const salt = await bcrypt.genSalt(10);
    const passwordEncriptada = await bcrypt.hash(password, salt);
    await prisma.socios.update({
      where: { idSocio: parseInt(id) },
      data: { contraSocio: passwordEncriptada },
    });
    res.status(200).json({ message: "Contraseña actualizada correctamente" });
  }
  catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ error: "El enlace de recuperación ha expirado" });
    } else if (error.name === "JsonWebTokenError") {
      return res.status(403).json({ error: "Token inválido" });
    } else {
      console.error("Error al procesar la solicitud:", error);
      return res.status(500).json({ error: "Error en el servidor" });
    }
  }
};

module.exports = {
  getSocios,
  getSocio,
  createSocio,
  updateSocio,
  darBajaSocio,
  reactivarSocio,
  loginSocio,
  recuperarPassword,
  resetPassword
};
