// Importacion de la función Router que se utiliza para crear enrutadores en una aplicación Express.
const { Router } = require("express");
const getPeliculas = require("../controllers/peliculasController");
// Almacenamos a la función router dentro de una variable
const peliculasRoute = Router();

peliculasRoute.use("/", getPeliculas);
// Se establece la ruta para la URL raíz en la aplicación de express y se envia el mensaje de validación

module.exports = peliculasRoute;
