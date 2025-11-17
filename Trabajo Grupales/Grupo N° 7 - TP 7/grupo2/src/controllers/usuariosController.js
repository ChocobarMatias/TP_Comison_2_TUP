const { PrismaClient } = require('../generated/prisma'); 
const prisma = new PrismaClient();                       
const {hashPassword} = require('../utils/hash.utils');




const getAllUsers = async (req, res) => {
  try {
    const usuarios = await prisma.usuarios.findMany({
      where: {
        IsActive: 1
      }
    });
    res.status(200).json(usuarios);
  } catch (error) {
    console.error('Error al obtener usuarios', error);
    res.status(500).json({ message: 'Error al obtener los usuarios' });
  }
};



const mostrarUsuariosInactivos = async (req, res) => {
  try {
    const usuariosInactivos = await prisma.usuarios.findMany({
      where: {
        IsActive: 0
      }
    })
    if(usuariosInactivos.length === 0){
      return res.status(404).json({message: 'No hay usuarios inactivos'})
    }
    res.status(200).json(usuariosInactivos)
  } catch (error) {
    console.error('Error al obtener los usuarios inactivos', error)
    res.status(500).json({ message: 'Error al obtener los usuarios inactivos' })
  }

}


const getOneUser = async (req, res) => {
  const id = req.params.id
  try {
    const usuario = await prisma.usuarios.findUnique({
      where: {
        idUsuario: Number(id)
      }
    })
    if(!usuario){
      return res.status(404).json({message: 'Usuario no encontrado'})
    }
    res.status(200).json(usuario);
  } catch (error) {
    console.error('Error al obtener el usuario: ', error)
    res.status(500).json({ message: 'Error al obtener el usuario' })
  }
}



const crearUsuario = async (req, res) => {
  const { MailUsuario, PasswordUsuario, RolUsuario } = req.body;
  try {
    const hashedPass = await hashPassword(PasswordUsuario)
    const nuevoUsuario = await prisma.usuarios.create({
      data: {
    MailUsuario,
    PasswordUsuario: hashedPass,
    RolUsuario
  }
      
    })
    res.status(201).json({message: 'Usuario creado exitosamente', usuario: nuevoUsuario})
  } catch (error) {
    console.error('Error al crear el usuario: ', error)
    res.status(500).json({ message: 'Error al crear el usuario' })
  }
  
}


const updateUser = async (req, res) => {
  const id = req.params.id;
  const { MailUsuario, PasswordUsuario, RolUsuario, IsActive } = req.body;

  try {
    const dataToUpdate = {
      MailUsuario,
      RolUsuario,
      IsActive
    };

    
    if (PasswordUsuario) {
      dataToUpdate.PasswordUsuario = await hashPassword(PasswordUsuario);
    }

    const usuarioActualizado = await prisma.usuarios.update({
      where: { idUsuario: Number(id) },
      data: dataToUpdate
    });

    res.status(200).json({
      message: 'Usuario actualizado exitosamente',
      usuario: usuarioActualizado
    });

  } catch (error) {
    console.error('Error al actualizar usuario', error);
    res.status(500).json({ message: 'Error al actualizar el usuario' });
  }
};


const deleteUser = async (req, res) => {
  const id = req.params.id
  
  try {
   await prisma.usuarios.delete({
      where: { idUsuario: Number(id) }
    })
    res.status(200).json({message: 'Usuario eliminado exitosamente'})
  } catch (error) {
    console.error('Error al eliminar el usuario: ', error)
    res.status(500).json({ message: 'Error al eliminar el usuario' })
  }
}



const logicDeleteUser = async (req, res) => {
  const id = req.params.id
  
  try {
   const usuarioDesactivado = await prisma.usuarios.update({
      where: { idUsuario: Number(id) },
  data: { IsActive: 0 }
    })
    res.status(200).json({message: 'Usuario desactivado exitosamente', usuario: usuarioDesactivado})
  } catch (error) {
    console.error('Error al desactivar el usuario: ', error)
    res.status(500).json({ message: 'Error al desactivar el usuario' })
  }
}


const activarUser = async (req, res) => {
  const id = req.params.id
  
  try {
      const usuarioActivado = await prisma.usuarios.update({
  where: { idUsuario: Number(id) },
  data: { IsActive: 1 }
});
    res.status(200).json({message: 'Usuario activado exitosamente', usuario: usuarioActivado})
  } catch (error) {
    console.error('Error al activar el usuario: ', error)
    res.status(500).json({ message: 'Error al activar el usuario' })
  }
}


module.exports = { getAllUsers, mostrarUsuariosInactivos, getOneUser, crearUsuario, updateUser, deleteUser, logicDeleteUser, activarUser };