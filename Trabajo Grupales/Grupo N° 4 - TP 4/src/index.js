const express = require('express');
const app = require('./app');
require('dotenv').config();
//nuevo index
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
