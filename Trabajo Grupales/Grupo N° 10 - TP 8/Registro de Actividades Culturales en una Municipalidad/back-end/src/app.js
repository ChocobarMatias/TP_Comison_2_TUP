const express = require('express');
const cors = require("cors")
const dontEnv = require("dotenv")
dontEnv()
const routes = require("./routes/index.js")


const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/api", routes)

app.get('/', (req, res) => {
  res.json({ 
    message: 'Bienvenido al Sistema de Gestión Cultural',
    endpoints: {
      eventos: '/api/eventos',
      artistas_eventos: '/api/artistas_eventos',
      ventas_boletos: '/api/ventas_boletos',
      artistas: '/api/artistas',
      lugares: '/api/lugares',

    }
  });
});

export default app