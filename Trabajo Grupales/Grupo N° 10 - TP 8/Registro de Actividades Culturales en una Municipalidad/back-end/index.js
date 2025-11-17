const app = require("./src/app")
const dontEnv = require("dotenv")
dontEnv()


// INICIAR SERVIDOR
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`El servidor está iniciado en el puerto ${PORT}`);
});


