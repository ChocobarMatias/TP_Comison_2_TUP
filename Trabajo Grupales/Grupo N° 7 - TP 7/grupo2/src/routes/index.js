const {Router} = require('express');
const router = Router(); // crea una instancia de Router de Express

const usuariosRoutes = require('./usuariosRoutes')
const observacionesRoutes = require('./observacionesRoutes');
const turnosRoutes = require('./turnosRoutes');
const catMedicosRoutes=require('./catMedicos.Routes')
const medicosRoutes=require('./medicos.Routes')
const pacientesRoutes = require('./pacientesRoutes')
const loginRoutes = require('./login.routes'); // importa el enrutador de login
const mailRoutes = require('./mail.routes'); // importa el enrutador de mail
const authRoutes = require('./auth.routes'); // importa el enrutador de autenticación



const PORT = process.env.PORT || 3000


router.use('/usuarios', usuariosRoutes) 
router.use('/observaciones', observacionesRoutes);
router.use('/turnos', turnosRoutes);
router.use('/catMedicos', catMedicosRoutes);
router.use('/medicos',medicosRoutes);
router.use('/pacientes', pacientesRoutes);

router.use("/auth", authRoutes); // monta el enrutador de autenticación en la ruta /auth
router.use("/login", loginRoutes); // monta el enrutador de login en la ruta /login
router.use("/mail", mailRoutes); // monta el enrutador de mail en la ruta /mail

module.exports = router; // exporta el enrutador principal