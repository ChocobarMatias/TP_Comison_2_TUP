const express = require('express')
const router = express.Router()


const {
  getAllUsers,
  mostrarUsuariosInactivos,
  getOneUser,
  crearUsuario,
  updateUser,
  deleteUser,
  logicDeleteUser,
  activarUser
} = require('../controllers/usuariosController');



router.get('/todos', getAllUsers);


router.get('/inactivos', mostrarUsuariosInactivos);


router.get('/:id', getOneUser);


router.post('/crear', crearUsuario);


router.put('/actualizar/:id', updateUser);


router.delete('/eliminar/:id', deleteUser);


router.put('/desactivar/:id', logicDeleteUser);


router.put('/activar/:id', activarUser);

module.exports = router
