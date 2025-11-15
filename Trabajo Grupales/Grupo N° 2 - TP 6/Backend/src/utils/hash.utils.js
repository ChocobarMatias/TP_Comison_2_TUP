const bcrypt = require("bcrypt");

const saltRounds = 10; //Nivel de seguridad

//Funcion para hashear contraseñas
const hashPassword = async (password) => {
  return await bcrypt.hash(password, saltRounds);
};

//Funcion para comparar contraseñas
const comparePassword = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};

module.exports = {
  hashPassword,
  comparePassword,
};
