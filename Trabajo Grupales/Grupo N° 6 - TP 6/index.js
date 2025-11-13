//Aqui se encarga de iniciar el servido
const app = require("./src/app");

//Defino el puerto
const PORT = process.env.PORT || 3000;

//Levanto el servidor en el puerto del .env
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});



// // index.js
// import 'dotenv/config';              // carga .env
// import app from './src/app.js';      // ⬅️ IMPORT (no require), con .js

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server on http://localhost:${PORT}`);
// });
