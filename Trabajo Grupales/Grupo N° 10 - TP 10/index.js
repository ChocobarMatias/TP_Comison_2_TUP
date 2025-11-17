import app  from './src/app.js'; // <-- ¡¡LA EXTENSIÓN .JS ERA LA CULPABLE!!
import 'dotenv/config';

// Usamos process.env.PORT (del .env) o caemos a 8080 si no está
const PORT = process.env.PORT || 8080;

// La única responsabilidad de este archivo: levantar el server
app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en el puerto ${PORT}`);
});