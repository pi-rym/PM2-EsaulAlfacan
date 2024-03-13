// Importación de express
const express = require("express");

// Importación del router del archivo server de services
const router = require("./routes/index");

// Asignacion de las funcinoalidades de express a una variable
const server = express();

// Implementacion de router (conexión)
server.use(router);

// Exportacion de la variable que contiene a express
module.exports = server;
