const express = require("express");
const {getAll,
  getById,
  create,
  update,
  remove} = require("../controllers/libros.controller");
const verifyToken = require("../middlewares/verifyToken");
const router = express.Router();

//Traer todos los libros
router.get("/", verifyToken, getAll);

//Traer un libro
router.get("/:id", verifyToken, getById);

//Crear un libro
router.post("/", verifyToken, create);

//Editar un libro
router.put("/:id", verifyToken, update);

//Eliminar un libro
router.delete("/:id", verifyToken, remove);

module.exports = router;



// // src/routes/libros.js (ESM)
// import { Router } from "express";
// import {
//   getAll,
//   getById,
//   create,
//   update,
//   remove,
// } from "../controllers/libros.controller.js";
// import verifyToken from "../middlewares/verifyToken.js";

// const router = Router();

// // Traer todos los libros
// router.get("/", verifyToken, getAll);

// // Traer un libro
// router.get("/:id", verifyToken, getById);

// // Crear un libro
// router.post("/", verifyToken, create);

// // Editar un libro
// router.put("/:id", verifyToken, update);

// // Eliminar un libro
// router.delete("/:id", verifyToken, remove);

// export default router;
