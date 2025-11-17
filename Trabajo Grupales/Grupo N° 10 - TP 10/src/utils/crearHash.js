import bcrypt from 'bcryptjs';

// --- 1. Escribe la contraseña que quieres usar ---
const contraseñaPlana = "admin123";

// --- 2. Esta función la encripta ---
const hashearContraseña = async () => {
  try {
    // El "salt" es un valor aleatorio que se agrega al hash
    const salt = await bcrypt.genSalt(10);
    // Encriptamos la contraseña
    const hash = await bcrypt.hash(contraseñaPlana, salt);

    console.log("¡Contraseña encriptada (hash) lista!");
    console.log("=======================================");
    console.log(hash);
    console.log("=======================================");
    console.log(`Copia este hash para la contraseña: ${contraseñaPlana}`);

  } catch (error) {
    console.error("Error al hashear la contraseña:", error);
  }
};

hashearContraseña();