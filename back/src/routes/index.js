// Importacion de la función Router que se utiliza para crear enrutadores en una aplicación Express.
const { Router } = require("express");
const bienvenida = require("../controllers/index");
const users = require("../routes/userRoute");
const peliculas = require("../routes/peliculasRoute,js");
// Almacenamos a la función router dentro de una variable
const router = Router();

// Se establece la ruta para la URL raíz en la aplicación de express y se envia el mensaje de validación
router.get("/", bienvenida);
router.use("/users", users);
router.get("/peliculas", peliculas);

module.exports = router;
