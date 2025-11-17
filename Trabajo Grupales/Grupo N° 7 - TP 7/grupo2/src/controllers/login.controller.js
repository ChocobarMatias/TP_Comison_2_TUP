const jwt = require('jsonwebtoken');
const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();
const { comparePassword } = require('../utils/hash.utils');
require('dotenv').config();

const loginUsuario = async (req, res) => {
    console.log("BODY LOGIN →", req.body);
  const { email, password } = req.body;

  try {
    const usuario = await prisma.usuarios.findUnique({
      where: { MailUsuario: email }
    });

    if (!usuario || usuario.IsActive !== 1) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }

    const isValid = await comparePassword(password, usuario.PasswordUsuario);

    if (!isValid) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }

   
    let paciente = null;

    if (usuario.RolUsuario === "Paciente") {
      paciente = await prisma.pacientes.findFirst({
        where: { idUsuario: usuario.idUsuario }
      });

    
      if (!paciente) {
        paciente = await prisma.pacientes.create({
          data: {
            NombrePaciente: "Sin nombre",
            ApellidoPaciente: "Sin apellido",
            FechaNacPaciente: new Date(),
            TelefonoPaciente: "000000",
            DireccionPaciente: "Sin dirección",
            SexoPaciente: "Otro",
            idUsuario: usuario.idUsuario
          }
        });
      }
    }

    const token = jwt.sign(
      {
        id: usuario.idUsuario,
        email: usuario.MailUsuario,
        rol: usuario.RolUsuario,
        idPaciente: paciente ? paciente.idPaciente : null
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      message: "Inicio de sesión exitoso",
      token,
      user: {
        id: usuario.idUsuario,
        email: usuario.MailUsuario,
        rol: usuario.RolUsuario,
        idPaciente: paciente ? paciente.idPaciente : null
      }
    });

  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    return res.status(500).json({ message: "Error en el servidor" });
  }
};


module.exports = { loginUsuario };
