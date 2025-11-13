const express = require('express')
const dotenv = require('dotenv')
// const authRoutes = require('./routes/auth.routes')
// const medicosRoutes = require('./routes/medicos.routes')
// const categoriasMedicoRoutes = require('./routes/categoriaMedico.routes')
// const turnoRoutes = require('./routes/turnos.routes')
// const pacientesRoutes = require('./routes/pacientes.routes')
// const observacionesRoutes = require('./routes/observaciones.routes')
const usuariosRoutes = require('../src/routes/usuariosRoutes')
const observacionesRoutes = require('./routes/observacionesRoutes');
const turnosRoutes = require('./routes/turnosRoutes');


dotenv.config()

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3000

// app.use('/api/auth', authRoutes)
// app.use('/api/medicos', medicosRoutes)
// app.use('/api/categorias-medicos', categoriasMedicoRoutes)
// app.use('/api/turnos', turnoRoutes)
// app.use('/api/observaciones', observacionesRoutes)
// app.use('/api/pacientes', pacientesRoutes)
app.use('/api/usuarios', usuariosRoutes) 
app.use('/observaciones', observacionesRoutes);
app.use('/turnos', turnosRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})

app.use((req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada' })
})
